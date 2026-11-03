/* Bilim · Math question generator (unlimited practice) in Kyrgyz, Russian and English.
   Every question is built from a seed, so the same key always gives the same question:
   "gen|ru|percent|k3j2a"  ->  topic practice (4 options, first option is the right one before shuffling)
   "gen|ru|percent~7|..."  ->  the same, only templates up to grade 7
   "gen|ky|ortc|..."       ->  ORT Part I: compare column A and column B (answers А–Г)
   "gen|ky|ortm|..."       ->  ORT Part II: a problem with 5 options (А–Д)
   "gen|ru|subj|..."       ->  subject test: any topic, 4 options
   The answers are computed, not typed by hand, so they are always right. */
(function (W) {
  "use strict";

  /* ---------- random numbers from a seed ---------- */
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const int = (r, lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  const pick = (r, a) => a[Math.floor(r() * a.length)];
  const nz = (r, lo, hi) => { let x = 0; while (x === 0) x = int(r, lo, hi); return x; };
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { const t = b; b = a % b; a = t; } return a || 1; };
  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
  const isInt = x => Math.abs(x - Math.round(x)) < 1e-9;
  const MINUS = "−";

  /* ---------- numbers in each language ---------- */
  function nf(x, L) {
    if (typeof x !== "number" || !isFinite(x)) return String(x);
    x = Math.round(x * 1e6) / 1e6;
    if (Math.abs(x) < 1e-9) x = 0;
    const neg = x < 0;
    let s = String(Math.abs(x));
    if (s.indexOf("e") >= 0) s = Math.abs(x).toFixed(6).replace(/0+$/, "").replace(/\.$/, "");
    let parts = s.split("."), i = parts[0], f = parts[1];
    if (i.length > 4) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, L === "en" ? "," : " ");
    s = i + (f ? (L === "en" ? "." : ",") + f : "");
    return (neg ? MINUS : "") + s;
  }
  const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  const SUB = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" };
  const sup = n => String(n).split("").map(c => SUP[c] || c).join("");
  const sub = n => String(n).split("").map(c => SUB[c] || c).join("");
  /* a fraction, always simplified, with the sign on top */
  function F(n, d) { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return { n: n / g, d: d / g, v: n / d }; }
  const fs = (f, L) => (f.d === 1 ? nf(f.n, L) : (f.n < 0 ? MINUS : "") + Math.abs(f.n) + "/" + f.d);
  /* signed term: " + 5" or " − 5" */
  const sg = x => (x < 0 ? " " + MINUS + " " + Math.abs(x) : " + " + x);
  const par = (x, L) => (x < 0 ? "(" + nf(x, L) + ")" : nf(x, L));
  const T = (o, L, v) => { let s = o[L] || o.ru; if (v) s = s.replace(/\{(\w+)\}/g, (m, k) => (v[k] != null ? v[k] : m)); return s; };
  /* a polynomial a·x² + b·x + c written nicely */
  function poly(a, b, c, x) {
    x = x || "x"; const out = [];
    const term = (k, p) => { if (!k) return; const abs = Math.abs(k), body = (abs === 1 && p ? "" : String(abs)) + p; out.push([k < 0, body]); };
    term(a, x + "²"); term(b, x); term(c, "");
    if (!out.length) return "0";
    return out.map((t, i) => (i === 0 ? (t[0] ? MINUS : "") + t[1] : (t[0] ? " " + MINUS + " " : " + ") + t[1])).join("");
  }
  /* a·x² + b·x + c with a number put in place of x, e.g. 2·(−3)² − 4·(−3) + 1 */
  function subst(a, b, c, x, L) {
    const out = [], dot = L === "en" ? "×" : "·";
    const term = (k, body) => { if (!k) return; const abs = Math.abs(k); out.push([k < 0, (abs === 1 && body ? "" : abs + (body ? dot : "")) + body]); };
    term(a, par(x, L) + "²"); term(b, par(x, L)); term(c, "");
    return out.map((t, i) => (i === 0 ? (t[0] ? MINUS : "") + t[1] : (t[0] ? " " + MINUS + " " : " + ") + t[1])).join("") || "0";
  }
  const list = (a, L) => a.map(x => nf(x, L)).join(L === "en" ? ", " : "; ");

  /* option helpers: {s: text, v: number or null} */
  const on = (x, L, unit) => ({ s: nf(x, L) + (unit || ""), v: x });
  const of_ = (f, L, unit) => ({ s: fs(f, L) + (unit || ""), v: f.v });
  const ot = (s, v) => ({ s: s, v: v == null ? null : v });

  /* ---------- topics ---------- */
  const TOPICS = {
    fractions: { ru: "Дроби и десятичные числа", ky: "Бөлчөктөр жана ондук сандар", en: "Fractions and decimals" },
    percent: { ru: "Проценты", ky: "Пайыздар", en: "Percentages" },
    powers: { ru: "Степени и корни", ky: "Даражалар жана тамырлар", en: "Powers and roots" },
    algebra: { ru: "Выражения и уравнения", ky: "Туюнтмалар жана теңдемелер", en: "Expressions and equations" },
    stats: { ru: "Среднее и вероятность", ky: "Орточо маани жана ыктымалдык", en: "Averages and probability" },
    geometry: { ru: "Геометрия", ky: "Геометрия", en: "Geometry" },
    units: { ru: "Единицы измерения", ky: "Өлчөм бирдиктери", en: "Units of measurement" },
    ratio: { ru: "Пропорции и скорость", ky: "Пропорциялар жана ылдамдык", en: "Ratio, proportion and speed" },
    quadratic: { ru: "Квадратные уравнения", ky: "Квадраттык теңдемелер", en: "Quadratic equations" },
    progression: { ru: "Прогрессии", ky: "Прогрессиялар", en: "Sequences" },
    functions: { ru: "Функции", ky: "Функциялар", en: "Functions" },
    logs: { ru: "Логарифмы", ky: "Логарифмдер", en: "Logarithms" },
    trig: { ru: "Тригонометрия", ky: "Тригонометрия", en: "Trigonometry" }
  };
  /* Which topics fit which grade (for "Extra math practice" on the grade page) */
  const GRADE_TOPICS = {
    "6": ["fractions", "percent", "units", "ratio", "geometry", "stats"],
    "7": ["fractions", "percent", "powers", "algebra", "functions", "geometry", "stats", "ratio"],
    "8": ["powers", "algebra", "quadratic", "functions", "percent", "geometry", "stats", "ratio"],
    "9": ["algebra", "quadratic", "functions", "progression", "trig", "geometry", "stats", "percent"],
    "10": ["quadratic", "progression", "functions", "trig", "logs", "geometry", "stats", "percent"],
    "11": ["logs", "trig", "progression", "functions", "quadratic", "geometry", "stats", "percent"]
  };
  const ORT_TOPICS = ["fractions", "percent", "powers", "algebra", "stats", "geometry", "units", "ratio"];

  /* Each template: topic, grade = from which grade, make(r, L) -> { q, ans, alts, why } */
  const TPL = [];
  const add = (id, topic, grade, make) => TPL.push({ id: id, topic: topic, grade: grade, make: make });

  /* ===== Fractions ===== */
  add("f_add", "fractions", 6, (r, L) => {
    let b = int(r, 2, 12), d = int(r, 2, 12); while (d === b) d = int(r, 2, 12);
    let a = int(r, 1, b - 1), c = int(r, 1, d - 1);
    while (gcd(a, b) !== 1) a = int(r, 1, b - 1);
    while (gcd(c, d) !== 1) c = int(r, 1, d - 1);
    let plus = r() < 0.6;
    if (!plus && a / b <= c / d) { const ta = a, tb = b; a = c; b = d; c = ta; d = tb; }
    const m = lcm(b, d), A2 = a * m / b, B2 = c * m / d, top = plus ? A2 + B2 : A2 - B2;
    const res = F(top, m), op = plus ? "+" : MINUS;
    const X = fs(F(a, b), L), Y = fs(F(c, d), L);
    const raw = top + "/" + m, simp = (res.n !== top || res.d !== m) ? " = " + fs(res, L) : "";
    const alts = [F(plus ? a + c : Math.abs(a - c) || 1, b + d), F(a * c, b * d), F(plus ? a * d + c * b : Math.abs(a * d - c * b) || 1, b + d), F(res.n + 1, res.d), F(plus ? a + c : Math.abs(a - c) || 1, m), F(res.n + res.d, res.d)]
      .filter(f => f.v > 0).map(f => of_(f, L));
    return {
      q: T({ ru: "Вычисли: {X} {op} {Y}", ky: "Эсепте: {X} {op} {Y}", en: "Work out {X} {op} {Y}" }, L, { X: X, Y: Y, op: op }),
      ans: of_(res, L), alts: alts,
      why: T({ ru: "Общий знаменатель {m}: {X} = {A}/{m}, {Y} = {B}/{m}. {A}/{m} {op} {B}/{m} = {raw}{simp}.",
               ky: "Жалпы бөлүмү {m}: {X} = {A}/{m}, {Y} = {B}/{m}. {A}/{m} {op} {B}/{m} = {raw}{simp}.",
               en: "Use the common denominator {m}: {X} = {A}/{m} and {Y} = {B}/{m}, so {A}/{m} {op} {B}/{m} = {raw}{simp}." }, L,
               { m: m, X: X, Y: Y, A: A2, B: B2, op: op, raw: raw, simp: simp })
    };
  });
  add("f_of", "fractions", 6, (r, L) => {
    const d = pick(r, [3, 4, 5, 6, 7, 8, 9, 10, 12]); let a = int(r, 1, d - 1); while (gcd(a, d) !== 1) a = int(r, 1, d - 1);
    const k = int(r, 2, 15), n = d * k, ans = k * a;
    const alts = [k, n * a, n - ans, ans + k, ans * 2, isInt(n / a) ? n / a : ans + 2 * k].map(x => on(x, L));
    return {
      q: T({ ru: "Найди {a}/{d} от числа {n}.", ky: "{n} санынын {a}/{d} бөлүгүн тап.", en: "Find {a}/{d} of {n}." }, L, { a: a, d: d, n: n }),
      ans: on(ans, L), alts: alts,
      why: T({ ru: "{n} : {d} = {k}, затем {k} · {a} = {ans}.", ky: "{n} : {d} = {k}, андан кийин {k} · {a} = {ans}.", en: "{n} ÷ {d} = {k}, then {k} × {a} = {ans}." }, L, { n: n, d: d, k: k, a: a, ans: ans })
    };
  });
  add("f_dec", "fractions", 6, (r, L) => {
    const d = pick(r, [2, 4, 5, 8, 20, 25, 50]); let n = int(r, 1, d * 2 - 1); while (gcd(n, d) !== 1 || n === d) n = int(r, 1, d * 2 - 1);
    const v = n / d, places = d === 2 || d === 5 ? 1 : d === 8 ? 3 : 2, pow = Math.pow(10, places), digits = Math.round(v * pow), g = gcd(digits, pow);
    const res = F(n, d);
    const alts = [F(digits, pow / 10 || 1), F(d, n), F(n + 1, d), F(digits, pow * 10), F(n, d + 1), F(digits + 1, pow)].filter(f => f.v > 0 && Math.abs(f.v - v) > 1e-9).map(f => ({ s: f.d === 1 ? String(f.n) : fs(f, L), v: f.v }));
    return {
      q: T({ ru: "Запиши десятичную дробь {x} в виде несократимой обыкновенной дроби.", ky: "{x} ондук бөлчөгүн кыскартылгыс жай бөлчөк түрүндө жаз.", en: "Write {x} as a fraction in its simplest form." }, L, { x: nf(v, L) }),
      ans: of_(res, L), alts: alts,
      why: T({ ru: "{x} = {dg}/{p}. Сокращаем на {g}: {res}.", ky: "{x} = {dg}/{p}. {g} санына кыскартабыз: {res}.", en: "{x} = {dg}/{p}. Divide the top and bottom by {g}: {res}." }, L, { x: nf(v, L), dg: digits, p: pow, g: g, res: fs(res, L) })
    };
  });
  add("f_mul", "fractions", 6, (r, L) => {
    const div = r() < 0.4;
    let a = int(r, 1, 9), b = int(r, 2, 10), c = int(r, 1, 9), d = int(r, 2, 10);
    let fa = F(a, b), fc = F(c, d);
    if (fa.d === 1) fa = F(fa.n, fa.n + 1); if (fc.d === 1) fc = F(fc.n, fc.n + 1);
    a = fa.n; b = fa.d; c = fc.n; d = fc.d;
    const res = div ? F(a * d, b * c) : F(a * c, b * d);
    const X = a + "/" + b, Y = c + "/" + d, op = div ? (L === "en" ? "÷" : ":") : (L === "en" ? "×" : "·");
    const cands = div ? [F(a * c, b * d), F(b * c, a * d), F(a + d, b + c), F(res.n + 1, res.d), F(a * d, b * c * 2), F(res.n * 2, res.d)]
                      : [F(a * d, b * c), F(a + c, b + d), F(a * c, b + d), F(res.n + 1, res.d), F(b * d, a * c), F(res.n * 2, res.d)];
    const alts = cands.filter(f => f.v > 0 && Math.abs(f.v - res.v) > 1e-9).map(f => of_(f, L));
    const why = div
      ? T({ ru: "Делить на дробь — значит умножать на обратную: {X} · {d}/{c} = {raw} = {res}.", ky: "Бөлчөккө бөлүү — тескери бөлчөккө көбөйтүү: {X} · {d}/{c} = {raw} = {res}.", en: "Dividing by a fraction means multiplying by its reciprocal: {X} × {d}/{c} = {raw} = {res}." }, L, { X: X, d: d, c: c, raw: (a * d) + "/" + (b * c), res: fs(res, L) })
      : T({ ru: "Числитель умножаем на числитель, знаменатель на знаменатель: {raw} = {res}.", ky: "Алымын алымына, бөлүмүн бөлүмүнө көбөйтөбүз: {raw} = {res}.", en: "Multiply the tops and multiply the bottoms: {raw} = {res}." }, L, { raw: (a * c) + "/" + (b * d), res: fs(res, L) });
    return { q: T({ ru: "Вычисли: {X} {op} {Y}", ky: "Эсепте: {X} {op} {Y}", en: "Work out {X} {op} {Y}" }, L, { X: X, Y: Y, op: op }), ans: of_(res, L), alts: alts, why: why };
  });

  /* ===== Percentages ===== */
  add("p_of", "percent", 6, (r, L) => {
    const p = pick(r, [5, 10, 12, 15, 20, 25, 30, 35, 40, 45, 60, 75]); let n = int(r, 2, 30) * 20; while (!isInt(n * p / 100)) n += 20;
    const ans = n * p / 100, one = n / 100;
    const alts = [n * p / 10, n - ans, ans + n / 10, ans * 2, isInt(n / p) ? n / p : ans + 5, ans / 2].map(x => on(x, L));
    return {
      q: T({ ru: "Найди {p}% от числа {n}.", ky: "{n} санынын {p} пайызын тап.", en: "Find {p}% of {n}." }, L, { p: p, n: nf(n, L) }),
      ans: on(ans, L), alts: alts,
      why: T({ ru: "1% от {n} — это {one}. {p}% = {one} · {p} = {ans}.", ky: "{n} санынын 1 пайызы — {one}. {p}% = {one} · {p} = {ans}.", en: "1% of {n} is {one}, so {p}% is {one} × {p} = {ans}." }, L, { n: nf(n, L), one: nf(one, L), p: p, ans: nf(ans, L) })
    };
  });
  add("p_what", "percent", 6, (r, L) => {
    const b = pick(r, [20, 25, 40, 50, 60, 80, 120, 200, 250, 400, 500]); let p = pick(r, [5, 10, 15, 20, 25, 30, 40, 60, 75, 80]); while (!isInt(b * p / 100)) p = pick(r, [10, 20, 25, 50, 75]);
    const a = b * p / 100;
    const cands = [100 - p, a, p * 2, p / 2, p + 10, isInt(b / a) ? b / a : p + 5].filter(x => x > 0 && x !== p && isInt(x * 10));
    return {
      q: T({ ru: "Сколько процентов составляет число {a} от числа {b}?", ky: "{a} саны {b} санынын канча пайызын түзөт?", en: "What percentage of {b} is {a}?" }, L, { a: nf(a, L), b: nf(b, L) }),
      ans: ot(p + "%", p), alts: cands.map(x => ot(nf(x, L) + "%", x)),
      why: T({ ru: "{a} : {b} = {dec}, а это {p}%.", ky: "{a} : {b} = {dec}, бул {p}% болот.", en: "{a} ÷ {b} = {dec}, which is {p}%." }, L, { a: nf(a, L), b: nf(b, L), dec: nf(p / 100, L), p: p })
    };
  });
  add("p_change", "percent", 6, (r, L) => {
    const up = r() < 0.5, p = pick(r, [5, 10, 15, 20, 25, 30, 40, 50]), n = int(r, 2, 50) * 100, ch = n * p / 100, ans = up ? n + ch : n - ch;
    const alts = [up ? n + p : n - p, ch, up ? n - ch : n + ch, up ? n + 2 * ch : n - 2 * ch, n * p / 10, ans + 100].filter(x => x > 0).map(x => on(x, L, L === "en" ? " som" : " сом"));
    const q = up
      ? T({ ru: "Товар стоил {n} сом. Цену повысили на {p}%. Сколько он стоит теперь?", ky: "Буюм {n} сом турчу. Анын баасы {p} пайызга кымбаттады. Азыр ал канча турат?", en: "An item cost {n} som. The price went up by {p}%. What does it cost now?" }, L, { n: nf(n, L), p: p })
      : T({ ru: "Куртка стоила {n} сом. На неё сделали скидку {p}%. Сколько она стоит теперь?", ky: "Куртка {n} сом турчу. Ага {p} пайыз арзандатуу жасалды. Азыр ал канча турат?", en: "A jacket cost {n} som. It is now {p}% off. What does it cost now?" }, L, { n: nf(n, L), p: p });
    return {
      q: q, ans: on(ans, L, L === "en" ? " som" : " сом"), alts: alts,
      why: T({ ru: "{p}% от {n} = {ch}. {n} {s} {ch} = {ans} сом.", ky: "{n} санынын {p}% = {ch}. {n} {s} {ch} = {ans} сом.", en: "{p}% of {n} is {ch}, and {n} {s} {ch} = {ans} som." }, L, { p: p, n: nf(n, L), ch: nf(ch, L), s: up ? "+" : MINUS, ans: nf(ans, L) })
    };
  });
  add("p_whole", "percent", 7, (r, L) => {
    const p = pick(r, [5, 10, 20, 25, 40, 50, 75]); let x = int(r, 2, 40) * 20; while (!isInt(x * p / 100)) x += 20;
    const k = x * p / 100, one = k / p;
    const alts = [k * p / 100, k + p, k * p, x / 2, x * 2, x + k].filter(v => v > 0 && isInt(v * 100)).map(v => on(v, L));
    return {
      q: T({ ru: "{p}% числа равны {k}. Найди это число.", ky: "Белгисиз сандын {p} пайызы {k} санына барабар. Ал санды тап.", en: "{p}% of a number is {k}. Find the number." }, L, { p: p, k: nf(k, L) }),
      ans: on(x, L), alts: alts,
      why: T({ ru: "1% числа = {k} : {p} = {one}. Всё число (100%) = {one} · 100 = {x}.", ky: "Сандын 1 пайызы = {k} : {p} = {one}. Бүт сан (100%) = {one} · 100 = {x}.", en: "1% of the number is {k} ÷ {p} = {one}, so 100% is {one} × 100 = {x}." }, L, { k: nf(k, L), p: p, one: nf(one, L), x: nf(x, L) })
    };
  });

  /* ===== Powers and roots ===== */
  add("w_eval", "powers", 7, (r, L) => {
    const b = pick(r, [2, 2, 3, 5]), div = r() < 0.4;
    let m, n; do { m = int(r, 1, 6); n = int(r, 1, 5); } while ((div ? m <= n : Math.pow(b, m + n) > 2000) || (div && Math.pow(b, m) > 5000));
    const e = div ? m - n : m + n, ans = Math.pow(b, e), dot = L === "en" ? " × " : " · ", sl = L === "en" ? " ÷ " : " : ";
    const expr = b + sup(m) + (div ? sl : dot) + b + sup(n);
    const alts = [Math.pow(b, div ? Math.round(m / n) || 1 : m * n), Math.pow(b, e + 1), Math.pow(b, Math.max(0, e - 1)), b * e, div ? Math.pow(b, m) - Math.pow(b, n) : Math.pow(b, m) + Math.pow(b, n), Math.pow(b, e) * 2].filter(x => x !== ans && x > 0 && x < 1e7).map(x => on(x, L));
    return {
      q: T({ ru: "Вычисли: {e}", ky: "Эсепте: {e}", en: "Work out {e}" }, L, { e: expr }),
      ans: on(ans, L), alts: alts,
      why: div
        ? T({ ru: "При делении степеней с одинаковым основанием показатели вычитаются: {b}{m}{sl}{b}{n} = {b}{e} = {ans}.", ky: "Негиздери бирдей даражаларды бөлгөндө көрсөткүчтөр кемитилет: {b}{m}{sl}{b}{n} = {b}{e} = {ans}.", en: "When you divide powers with the same base, subtract the indices: {b}{m}{sl}{b}{n} = {b}{e} = {ans}." }, L, { b: b, m: sup(m), n: sup(n), e: sup(e), sl: sl, ans: nf(ans, L) })
        : T({ ru: "При умножении степеней с одинаковым основанием показатели складываются: {b}{m}{dot}{b}{n} = {b}{e} = {ans}.", ky: "Негиздери бирдей даражаларды көбөйткөндө көрсөткүчтөр кошулат: {b}{m}{dot}{b}{n} = {b}{e} = {ans}.", en: "When you multiply powers with the same base, add the indices: {b}{m}{dot}{b}{n} = {b}{e} = {ans}." }, L, { b: b, m: sup(m), n: sup(n), e: sup(e), dot: dot, ans: nf(ans, L) })
    };
  });
  add("w_rules", "powers", 7, (r, L) => {
    const kind = pick(r, ["mul", "div", "pow"]), v = pick(r, ["a", "x", "b", "y"]);
    let m = int(r, 2, 9), n = int(r, 2, 6); if (kind === "div") while (m <= n + 1) { m = int(r, 4, 12); n = int(r, 2, 6); }
    const res = kind === "mul" ? m + n : kind === "div" ? m - n : m * n;
    const dot = L === "en" ? " × " : " · ", sl = L === "en" ? " ÷ " : " : ";
    const expr = kind === "mul" ? v + sup(m) + dot + v + sup(n) : kind === "div" ? v + sup(m) + sl + v + sup(n) : "(" + v + sup(m) + ")" + sup(n);
    const P = e => (e === 1 ? v : v + sup(e));
    const cand = kind === "mul" ? [m * n, Math.abs(m - n) || m + n + 2, m + n + 1, m + n - 1] : kind === "div" ? [m + n, isInt(m / n) ? m / n : m * n, m - n + 1, m - n - 1] : [m + n, m * n + 1, m * n - 1, Math.pow(m, n) <= 99 ? Math.pow(m, n) : m * n + 2];
    const alts = cand.filter(e => e > 0 && e !== res).map(e => ot(P(e), e)).concat([ot("2" + P(res), -res)]);
    const rule = { mul: { ru: "показатели складываются", ky: "көрсөткүчтөр кошулат", en: "add the indices" }, div: { ru: "показатели вычитаются", ky: "көрсөткүчтөр кемитилет", en: "subtract the indices" }, pow: { ru: "показатели перемножаются", ky: "көрсөткүчтөр көбөйтүлөт", en: "multiply the indices" } }[kind];
    const calc = kind === "mul" ? m + " + " + n : kind === "div" ? m + " " + MINUS + " " + n : m + (L === "en" ? " × " : " · ") + n;
    return {
      q: T({ ru: "Упрости выражение: {e}", ky: "Туюнтманы жөнөкөйлөт: {e}", en: "Simplify {e}" }, L, { e: expr }),
      ans: ot(P(res), res), alts: alts,
      why: T({ ru: "Здесь {rule}: {calc} = {res}, поэтому {e} = {ans}.", ky: "Бул жерде {rule}: {calc} = {res}, ошондуктан {e} = {ans}.", en: "Here you {rule}: {calc} = {res}, so {e} = {ans}." }, L, { rule: rule[L], calc: calc, res: res, e: expr, ans: P(res) })
    };
  });
  add("w_root", "powers", 8, (r, L) => {
    const a = int(r, 2, 15); let b = int(r, 2, 15); while (b === a) b = int(r, 2, 15);
    const minus = r() < 0.35 && a !== b, ans = minus ? Math.abs(a - b) : a + b, A = a * a, B = b * b;
    const hi = Math.max(a, b), lo = Math.min(a, b), X = minus ? hi * hi : A, Y = minus ? lo * lo : B;
    const expr = "√" + X + (minus ? " " + MINUS + " " : " + ") + "√" + Y;
    const alts = [minus ? X - Y : X + Y, a * b, ans + 1, ans - 1, ans * 2, minus ? hi + lo : hi - lo].filter(x => x > 0 && x !== ans).map(x => on(x, L));
    return {
      q: T({ ru: "Вычисли: {e}", ky: "Эсепте: {e}", en: "Work out {e}" }, L, { e: expr }),
      ans: on(ans, L), alts: alts,
      why: T({ ru: "√{X} = {x}, √{Y} = {y}, поэтому ответ {x} {op} {y} = {ans}.", ky: "√{X} = {x}, √{Y} = {y}, ошондуктан жооп {x} {op} {y} = {ans}.", en: "√{X} = {x} and √{Y} = {y}, so the answer is {x} {op} {y} = {ans}." }, L, { X: X, Y: Y, x: Math.sqrt(X), y: Math.sqrt(Y), op: minus ? MINUS : "+", ans: ans })
    };
  });
  add("w_neg", "powers", 8, (r, L) => {
    if (r() < 0.5) {
      const k = int(r, 2, 9), m = pick(r, [2, 4, 5, 10]), ans = 1 + 1 / m;
      const alts = [1 / m, k + 1 / m, 1 + m, 1 - 1 / m, 2 + 1 / m, 1 + 2 / m].filter(x => Math.abs(x - ans) > 1e-9).map(x => on(x, L));
      return {
        q: T({ ru: "Вычисли: {k}⁰ + {m}⁻¹", ky: "Эсепте: {k}⁰ + {m}⁻¹", en: "Work out {k}⁰ + {m}⁻¹" }, L, { k: k, m: m }),
        ans: on(ans, L), alts: alts,
        why: T({ ru: "Любое число (кроме нуля) в степени 0 равно 1, а {m}⁻¹ = 1/{m} = {f}. 1 + {f} = {ans}.", ky: "Нөлдөн башка ар кандай сандын нөлүнчү даражасы 1ге барабар, ал эми {m}⁻¹ = 1/{m} = {f}. 1 + {f} = {ans}.", en: "Any number (except 0) to the power 0 is 1, and {m}⁻¹ = 1/{m} = {f}. 1 + {f} = {ans}." }, L, { m: m, f: nf(1 / m, L), ans: nf(ans, L) })
      };
    }
    const b = pick(r, [2, 3, 4, 5, 10]), e = b === 10 ? 2 : int(r, 2, 3), p = Math.pow(b, e), res = F(1, p);
    const alts = [ot(MINUS + p, -p), ot(MINUS + (b * e), -(b * e)), of_(F(1, b * e), L), ot(String(p), p), of_(F(e, b), L)].filter(o => Math.abs(o.v - res.v) > 1e-9);
    return {
      q: T({ ru: "Вычисли: {b}{e}", ky: "Эсепте: {b}{e}", en: "Work out {b}{e}" }, L, { b: b, e: sup(-e) }),
      ans: of_(res, L), alts: alts,
      why: T({ ru: "Отрицательная степень — это дробь: {b}{e} = 1/{b}{pe} = 1/{p}.", ky: "Терс даража — бул бөлчөк: {b}{e} = 1/{b}{pe} = 1/{p}.", en: "A negative power means one over the power: {b}{e} = 1/{b}{pe} = 1/{p}." }, L, { b: b, e: sup(-e), pe: sup(e), p: p })
    };
  });

  /* ===== Expressions and equations ===== */
  add("a_lin", "algebra", 7, (r, L) => {
    const x = nz(r, -9, 12), a = int(r, 2, 9), b = nz(r, -15, 20), c = a * x + b;
    const eq = a + "x" + sg(b) + " = " + nf(c, L);
    const cands = [c - b, isInt((c + b) / a) ? (c + b) / a : x + 2, -x, x + 1, x - 1, isInt(c / a) ? c / a : x - 2].filter(v => v !== x);
    return {
      q: T({ ru: "Реши уравнение: {eq}", ky: "Теңдемени чыгар: {eq}", en: "Solve {eq}" }, L, { eq: eq }),
      ans: ot("x = " + nf(x, L), x), alts: cands.map(v => ot("x = " + nf(v, L), v)),
      why: T({ ru: "{a}x = {c}{mb} = {cb}, x = {cb} : {a} = {x}.", ky: "{a}x = {c}{mb} = {cb}, x = {cb} : {a} = {x}.", en: "{a}x = {c}{mb} = {cb}, so x = {cb} ÷ {a} = {x}." }, L, { a: a, c: nf(c, L), mb: sg(-b), cb: nf(c - b, L), x: nf(x, L) })
    };
  });
  add("a_both", "algebra", 7, (r, L) => {
    const x = nz(r, -8, 10); let a = int(r, 3, 9), c = int(r, 1, a - 1); const b = nz(r, -12, 12), d = (a - c) * x + b;
    const eq = a + "x" + sg(b) + " = " + (c === 1 ? "" : c) + "x" + sg(d);
    const cands = [isInt((d - b) / (a + c)) ? (d - b) / (a + c) : x + 3, isInt((d + b) / (a - c)) ? (d + b) / (a - c) : x - 3, -x, x + 1, d - b].filter(v => v !== x);
    return {
      q: T({ ru: "Реши уравнение: {eq}", ky: "Теңдемени чыгар: {eq}", en: "Solve {eq}" }, L, { eq: eq }),
      ans: ot("x = " + nf(x, L), x), alts: cands.map(v => ot("x = " + nf(v, L), v)),
      why: T({ ru: "Переносим x влево, числа вправо: {ac}x = {db}, x = {x}.", ky: "x ти сол жакка, сандарды оң жакка өткөрөбүз: {ac}x = {db}, x = {x}.", en: "Move the x terms to the left and the numbers to the right: {ac}x = {db}, so x = {x}." }, L, { ac: a - c, db: nf(d - b, L), x: nf(x, L) })
    };
  });
  add("a_val", "algebra", 7, (r, L) => {
    const a = nz(r, -5, 5), b = nz(r, -6, 6), p = int(r, 1, 3), q = nz(r, -5, 5);
    const val = p * a * a + q * b;
    const expr = (p === 1 ? "" : p) + "a²" + (q < 0 ? " " + MINUS + " " + (q === -1 ? "" : -q) + "b" : " + " + (q === 1 ? "" : q) + "b");
    const cands = [p * p * a * a + q * b, -p * a * a + q * b, p * a * a - q * b, val + 2, val - 2, p * 2 * a + q * b].filter(v => v !== val);
    return {
      q: T({ ru: "Найди значение выражения {e} при a = {a}, b = {b}.", ky: "a = {a}, b = {b} болгондо {e} туюнтмасынын маанисин тап.", en: "Find the value of {e} when a = {a} and b = {b}." }, L, { e: expr, a: nf(a, L), b: nf(b, L) }),
      ans: on(val, L), alts: cands.map(v => on(v, L)),
      why: T({ ru: "{p}·{pa}² = {x1}, {q}·{pb} = {x2}. {x1}{s} = {val}.", ky: "{p}·{pa}² = {x1}, {q}·{pb} = {x2}. {x1}{s} = {val}.", en: "{p} × {pa}² = {x1} and {q} × {pb} = {x2}, so {x1}{s} = {val}." }, L, { p: p, pa: par(a, L), x1: nf(p * a * a, L), q: par(q, L), pb: par(b, L), x2: nf(q * b, L), s: sg(q * b).replace(/(\d+)/, m => nf(+m, L)), val: nf(val, L) })
    };
  });
  add("a_expand", "algebra", 8, (r, L) => {
    const p = nz(r, -9, 9); let q = nz(r, -9, 9); while (q === -p) q = nz(r, -9, 9);
    const e = "(x" + sg(p) + ")(x" + sg(q) + ")", ans = poly(1, p + q, p * q);
    const cands = [[1, 0, p * q], [1, -(p + q), p * q], [1, p + q, -p * q], [1, p * q, p + q], [2, p + q, p * q], [1, p + q + 1, p * q]];
    const seen = {}; const alts = [];
    cands.forEach(c => { const s = poly(c[0], c[1], c[2]); if (s !== ans && !seen[s]) { seen[s] = 1; alts.push(ot(s, null)); } });
    return {
      q: T({ ru: "Раскрой скобки: {e}", ky: "Кашааларды ач: {e}", en: "Expand {e}" }, L, { e: e }),
      ans: ot(ans, null), alts: alts,
      why: T({ ru: "Каждое слагаемое первой скобки умножаем на каждое из второй: x² + ({p})x + ({q})x + ({p})·({q}) = {ans}.", ky: "Биринчи кашаадагы ар бир кошулуучуну экинчидеги ар бирине көбөйтөбүз: x² + ({p})x + ({q})x + ({p})·({q}) = {ans}.", en: "Multiply each term in the first bracket by each term in the second: x² + ({p})x + ({q})x + ({p})({q}) = {ans}." }, L, { p: nf(p, L), q: nf(q, L), ans: ans })
    };
  });
  add("a_sys", "algebra", 8, (r, L) => {
    const x = int(r, 2, 15); let y = int(r, 1, 12); while (y >= x) y = int(r, 1, 12);
    const s = x + y, d = x - y, askX = r() < 0.5, ans = askX ? x : y;
    const cands = [askX ? y : x, s, d, s - d, isInt(s / 2) ? s / 2 : ans + 1, ans + 2].filter(v => v !== ans && v > 0);
    return {
      q: T({ ru: "Реши систему: x + y = {s}, x − y = {d}. Найди {v}.", ky: "Системаны чыгар: x + y = {s}, x − y = {d}. {v} маанисин тап.", en: "Solve x + y = {s} and x − y = {d}. Find {v}." }, L, { s: s, d: d, v: askX ? "x" : "y" }),
      ans: on(ans, L), alts: cands.map(v => on(v, L)),
      why: T({ ru: "Сложим уравнения: 2x = {sd}, x = {x}. Тогда y = {s} − {x} = {y}.", ky: "Теңдемелерди кошобуз: 2x = {sd}, x = {x}. Анда y = {s} − {x} = {y}.", en: "Add the equations: 2x = {sd}, so x = {x}. Then y = {s} − {x} = {y}." }, L, { sd: s + d, x: x, s: s, y: y })
    };
  });
  add("in_lin", "algebra", 8, (r, L) => {
    const a = int(r, 2, 6), x0 = nz(r, -6, 9), b = nz(r, -10, 10), c = a * x0 + b, gt = r() < 0.5;
    const sign = gt ? ">" : "<", inv = gt ? "<" : ">";
    const ineq = a + "x" + sg(b) + " " + sign + " " + nf(c, L);
    const ans = "x " + sign + " " + nf(x0, L);
    const wrong = isInt((c + b) / a) && (c + b) / a !== x0 ? (c + b) / a : x0 + 1;
    const alts = [ot("x " + inv + " " + nf(x0, L), null), ot("x " + sign + " " + nf(wrong, L), null), ot("x " + sign + " " + nf(c - b, L), null), ot("x " + inv + " " + nf(wrong, L), null), ot("x " + sign + " " + nf(-x0, L), null)].filter(o => o.s !== ans);
    const seen = {}; const uniq = alts.filter(o => (seen[o.s] ? false : (seen[o.s] = 1)));
    return {
      q: T({ ru: "Реши неравенство: {e}", ky: "Барабарсыздыкты чыгар: {e}", en: "Solve the inequality {e}" }, L, { e: ineq }),
      ans: ot(ans, null), alts: uniq,
      why: T({ ru: "{a}x {s} {c}{mb}, то есть {a}x {s} {cb}. Делим на {a} (число положительное, знак не меняется): {ans}.", ky: "{a}x {s} {c}{mb}, башкача айтканда {a}x {s} {cb}. {a} санына бөлөбүз (оң сан, белги өзгөрбөйт): {ans}.", en: "{a}x {s} {c}{mb}, so {a}x {s} {cb}. Divide by {a} (a positive number, so the sign stays): {ans}." }, L, { a: a, s: sign, c: nf(c, L), mb: sg(-b), cb: nf(c - b, L), ans: ans })
    };
  });

  /* ===== Averages and probability ===== */
  add("s_mean", "stats", 6, (r, L) => {
    const m = int(r, 8, 60); let xs; do { xs = [0, 0, 0, 0].map(() => m + int(r, -7, 7)); xs.push(5 * m - xs.reduce((a, b) => a + b, 0)); } while (xs.some(x => x <= 0) || Math.abs(xs[4] - m) > 14 || new Set(xs).size < 4);
    const sum = 5 * m, srt = xs.slice().sort((a, b) => a - b);
    const cands = [srt[2], isInt(sum / 4) ? sum / 4 : m + 3, m + 1, m - 1, m + 2, isInt((srt[0] + srt[4]) / 2) ? (srt[0] + srt[4]) / 2 : m - 2].filter(v => v !== m);
    return {
      q: T({ ru: "Найди среднее арифметическое чисел: {l}.", ky: "Сандардын орточо арифметикалык маанисин тап: {l}.", en: "Find the mean of {l}." }, L, { l: list(xs, L) }),
      ans: on(m, L), alts: cands.map(v => on(v, L)),
      why: T({ ru: "Сумма чисел: {s}. Их 5, поэтому {s} : 5 = {m}.", ky: "Сандардын суммасы: {s}. Алар 5, ошондуктан {s} : 5 = {m}.", en: "The numbers add up to {s}. There are 5 of them, so {s} ÷ 5 = {m}." }, L, { s: sum, m: m })
    };
  });
  add("s_median", "stats", 7, (r, L) => {
    let xs; do { xs = []; while (xs.length < 7) { const v = int(r, 1, 60); if (xs.indexOf(v) < 0) xs.push(v); } } while (xs[3] === xs.slice().sort((a, b) => a - b)[3]);
    const srt = xs.slice().sort((a, b) => a - b), med = srt[3], mean = Math.round(xs.reduce((a, b) => a + b, 0) / 7);
    const cands = [xs[3], mean, srt[2], srt[4], srt[6] - srt[0]].filter(v => v !== med);
    return {
      q: T({ ru: "Найди медиану ряда чисел: {l}.", ky: "Сандар катарынын медианасын тап: {l}.", en: "Find the median of {l}." }, L, { l: list(xs, L) }),
      ans: on(med, L), alts: cands.map(v => on(v, L)),
      why: T({ ru: "Расставим числа по возрастанию: {s}. Посередине (на 4-м месте) стоит {m}.", ky: "Сандарды өсүү тартибинде жазабыз: {s}. Ортодо (4-орунда) {m} турат.", en: "Put the numbers in order: {s}. The middle (4th) value is {m}." }, L, { s: list(srt, L), m: med })
    };
  });
  add("s_prob", "stats", 7, (r, L) => {
    const cnt = [int(r, 2, 9), int(r, 2, 9), int(r, 2, 9)], total = cnt[0] + cnt[1] + cnt[2], ci = int(r, 0, 2), k = cnt[ci], res = F(k, total);
    const col = [{ ru: "красный", ky: "кызыл", en: "red" }, { ru: "синий", ky: "көк", en: "blue" }, { ru: "зелёный", ky: "жашыл", en: "green" }][ci];
    const alts = [F(k, total - k), F(1, 3), F(total - k, total), F(k, total + 1), F(1, k), F(k + 1, total)].filter(f => Math.abs(f.v - res.v) > 1e-9 && f.v > 0 && f.v <= 1).map(f => of_(f, L));
    const simp = (res.n !== k || res.d !== total) ? " = " + fs(res, L) : "";
    return {
      q: T({ ru: "В коробке {a} красных, {b} синих и {c} зелёных шаров. Наугад достают один шар. Какова вероятность, что он {col}?", ky: "Кутуда {a} кызыл, {b} көк жана {c} жашыл шар бар. Кокусунан бир шар алынат. Анын {col} болуу ыктымалдыгы канча?", en: "A box has {a} red, {b} blue and {c} green balls. One ball is taken at random. What is the probability that it is {col}?" }, L, { a: cnt[0], b: cnt[1], c: cnt[2], col: col[L] }),
      ans: of_(res, L), alts: alts,
      why: T({ ru: "Всего шаров {t}, из них {k} подходят. Вероятность = {k}/{t}{simp}.", ky: "Баардыгы {t} шар, алардын {k} даанасы ылайыктуу. Ыктымалдык = {k}/{t}{simp}.", en: "There are {t} balls and {k} of them are {col}, so the probability is {k}/{t}{simp}." }, L, { t: total, k: k, simp: simp, col: col.en })
    };
  });
  add("s_dice", "stats", 6, (r, L) => {
    const kind = pick(r, ["gt", "even", "mul3", "lt"]); let good, txt;
    if (kind === "gt") { const k = int(r, 1, 4); good = [1, 2, 3, 4, 5, 6].filter(x => x > k); txt = { ru: "число больше " + k, ky: k + " санынан чоң сан", en: "a number greater than " + k }; }
    else if (kind === "lt") { const k = int(r, 3, 6); good = [1, 2, 3, 4, 5, 6].filter(x => x < k); txt = { ru: "число меньше " + k, ky: k + " санынан кичине сан", en: "a number less than " + k }; }
    else if (kind === "even") { good = [2, 4, 6]; txt = { ru: "чётное число", ky: "жуп сан", en: "an even number" }; }
    else { good = [3, 6]; txt = { ru: "число, кратное 3", ky: "3кө эселүү сан", en: "a multiple of 3" }; }
    const res = F(good.length, 6);
    const alts = [F(good.length, 5), F(1, 6), F(6 - good.length || 1, 6), F(good.length + 1, 6), F(1, good.length), F(good.length, 12)].filter(f => Math.abs(f.v - res.v) > 1e-9 && f.v > 0 && f.v <= 1).map(f => of_(f, L));
    const simp = res.d !== 6 ? " = " + fs(res, L) : "";
    return {
      q: T({ ru: "Бросают игральный кубик. Какова вероятность, что выпадет {t}?", ky: "Оюн кубиги ыргытылат. {t} түшүү ыктымалдыгы канча?", en: "A fair dice is rolled. What is the probability of getting {t}?" }, L, { t: txt[L] }),
      ans: of_(res, L), alts: alts,
      why: T({ ru: "Подходят числа {g} — это {n} из 6. Вероятность = {n}/6{simp}.", ky: "{g} сандары ылайыктуу — 6 сандын {n} даанасы. Ыктымалдык = {n}/6{simp}.", en: "The numbers {g} work: that is {n} out of 6, so the probability is {n}/6{simp}." }, L, { g: list(good, L), n: good.length, simp: simp })
    };
  });

  /* ===== Geometry ===== */
  const CM = L => (L === "en" ? " cm" : " см");
  add("g_rect", "geometry", 6, (r, L) => {
    const l = int(r, 3, 20); let w = int(r, 2, 15); while (w === l) w = int(r, 2, 15);
    const area = r() < 0.55, A = l * w, P = 2 * (l + w);
    const u = area ? CM(L) + "²" : CM(L);
    const cands = area ? [P, l + w, 2 * A, A / 2, A + l] : [l + w, A, 2 * l + w, 4 * (l + w), P + 2];
    const alts = cands.filter(v => v !== (area ? A : P) && v > 0 && isInt(v * 2)).map(v => on(v, L, u));
    return {
      q: area ? T({ ru: "Длина прямоугольника {l} см, ширина {w} см. Найди его площадь.", ky: "Тик бурчтуктун узундугу {l} см, туурасы {w} см. Анын аянтын тап.", en: "A rectangle is {l} cm long and {w} cm wide. Find its area." }, L, { l: l, w: w })
              : T({ ru: "Длина прямоугольника {l} см, ширина {w} см. Найди его периметр.", ky: "Тик бурчтуктун узундугу {l} см, туурасы {w} см. Анын периметрин тап.", en: "A rectangle is {l} cm long and {w} cm wide. Find its perimeter." }, L, { l: l, w: w }),
      ans: on(area ? A : P, L, u), alts: alts,
      why: area ? T({ ru: "S = {l} · {w} = {A} см².", ky: "S = {l} · {w} = {A} см².", en: "Area = {l} × {w} = {A} cm²." }, L, { l: l, w: w, A: A })
                : T({ ru: "P = 2 · ({l} + {w}) = {P} см.", ky: "P = 2 · ({l} + {w}) = {P} см.", en: "Perimeter = 2 × ({l} + {w}) = {P} cm." }, L, { l: l, w: w, P: P })
    };
  });
  add("g_tri", "geometry", 6, (r, L) => {
    let b = int(r, 3, 20), h = int(r, 2, 16); if ((b * h) % 2) b += 1;
    const A = b * h / 2, u = CM(L) + "²";
    const alts = [b * h, b + h, A / 2, A + b, 2 * b * h].filter(v => v !== A && isInt(v * 2)).map(v => on(v, L, u));
    return {
      q: T({ ru: "Основание треугольника {b} см, высота, проведённая к нему, {h} см. Найди площадь треугольника.", ky: "Үч бурчтуктун негизи {b} см, ага түшүрүлгөн бийиктиги {h} см. Үч бурчтуктун аянтын тап.", en: "A triangle has a base of {b} cm and a height of {h} cm. Find its area." }, L, { b: b, h: h }),
      ans: on(A, L, u), alts: alts,
      why: T({ ru: "S = {b} · {h} : 2 = {A} см².", ky: "S = {b} · {h} : 2 = {A} см².", en: "Area = ½ × base × height = ½ × {b} × {h} = {A} cm²." }, L, { b: b, h: h, A: A })
    };
  });
  add("g_circle", "geometry", 6, (r, L) => {
    const rad = int(r, 2, 12), area = r() < 0.5, ans = area ? rad * rad : 2 * rad;
    const u = area ? CM(L) + "²" : CM(L);
    const cands = area ? [2 * rad, rad, 4 * rad * rad, 2 * rad * rad, rad * rad + 1] : [rad, rad * rad, 4 * rad, 2 * rad + 2, rad * 3];
    const alts = cands.filter(v => v !== ans && v > 0).map(v => ot(v + "π" + u, v));
    return {
      q: area ? T({ ru: "Радиус круга {r} см. Найди площадь круга.", ky: "Тегеректин радиусу {r} см. Тегеректин аянтын тап.", en: "A circle has a radius of {r} cm. Find its area." }, L, { r: rad })
              : T({ ru: "Радиус окружности {r} см. Найди длину окружности.", ky: "Айлананын радиусу {r} см. Айлананын узундугун тап.", en: "A circle has a radius of {r} cm. Find its circumference." }, L, { r: rad }),
      ans: ot(ans + "π" + u, ans), alts: alts,
      why: area ? T({ ru: "S = πr² = π · {r}² = {a}π см².", ky: "S = πr² = π · {r}² = {a}π см².", en: "Area = πr² = π × {r}² = {a}π cm²." }, L, { r: rad, a: ans })
                : T({ ru: "C = 2πr = 2 · π · {r} = {a}π см.", ky: "C = 2πr = 2 · π · {r} = {a}π см.", en: "Circumference = 2πr = 2 × π × {r} = {a}π cm." }, L, { r: rad, a: ans })
    };
  });
  add("g_angle", "geometry", 6, (r, L) => {
    let a, b; do { a = int(r, 20, 100); b = int(r, 20, 100); } while (a + b > 165);
    const c = 180 - a - b;
    const alts = [a + b, 360 - a - b, Math.abs(a - b) || c + 20, c + 10, c - 10 > 0 ? c - 10 : c + 30, 90 - c > 0 ? 90 - c : c + 40].filter(v => v !== c && v > 0).map(v => ot(v + "°", v));
    return {
      q: T({ ru: "Два угла треугольника равны {a}° и {b}°. Найди третий угол.", ky: "Үч бурчтуктун эки бурчу {a}° жана {b}°. Үчүнчү бурчун тап.", en: "Two angles of a triangle are {a}° and {b}°. Find the third angle." }, L, { a: a, b: b }),
      ans: ot(c + "°", c), alts: alts,
      why: T({ ru: "Сумма углов треугольника 180°: 180° − {a}° − {b}° = {c}°.", ky: "Үч бурчтуктун бурчтарынын суммасы 180°: 180° − {a}° − {b}° = {c}°.", en: "The angles in a triangle add up to 180°: 180° − {a}° − {b}° = {c}°." }, L, { a: a, b: b, c: c })
    };
  });
  add("g_pyth", "geometry", 8, (r, L) => {
    const t = pick(r, [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29]]), k = t[2] > 20 ? 1 : int(r, 1, 3);
    const a = t[0] * k, b = t[1] * k, c = t[2] * k, hyp = r() < 0.6, u = CM(L);
    if (hyp) {
      const alts = [a + b, a * a + b * b, c + 1, c - 1, b - a + c].filter(v => v !== c && v > 0).map(v => on(v, L, u));
      return {
        q: T({ ru: "Катеты прямоугольного треугольника равны {a} см и {b} см. Найди гипотенузу.", ky: "Тик бурчтуу үч бурчтуктун катеттери {a} см жана {b} см. Гипотенузасын тап.", en: "A right-angled triangle has shorter sides of {a} cm and {b} cm. Find the hypotenuse." }, L, { a: a, b: b }),
        ans: on(c, L, u), alts: alts,
        why: T({ ru: "По теореме Пифагора c² = {a}² + {b}² = {a2} + {b2} = {c2}, c = {c} см.", ky: "Пифагордун теоремасы боюнча c² = {a}² + {b}² = {a2} + {b2} = {c2}, c = {c} см.", en: "By Pythagoras, c² = {a}² + {b}² = {a2} + {b2} = {c2}, so c = {c} cm." }, L, { a: a, b: b, a2: a * a, b2: b * b, c2: c * c, c: c })
      };
    }
    const alts = [c - a, c + a, c * c - a * a, b + 1, b - 1].filter(v => v !== b && v > 0).map(v => on(v, L, u));
    return {
      q: T({ ru: "Гипотенуза прямоугольного треугольника {c} см, один катет {a} см. Найди другой катет.", ky: "Тик бурчтуу үч бурчтуктун гипотенузасы {c} см, бир катети {a} см. Экинчи катетин тап.", en: "A right-angled triangle has a hypotenuse of {c} cm and one shorter side of {a} cm. Find the other shorter side." }, L, { a: a, c: c }),
      ans: on(b, L, u), alts: alts,
      why: T({ ru: "b² = {c}² − {a}² = {c2} − {a2} = {b2}, b = {b} см.", ky: "b² = {c}² − {a}² = {c2} − {a2} = {b2}, b = {b} см.", en: "b² = {c}² − {a}² = {c2} − {a2} = {b2}, so b = {b} cm." }, L, { a: a, c: c, a2: a * a, c2: c * c, b2: b * b, b: b })
    };
  });
  add("g_box", "geometry", 6, (r, L) => {
    const a = int(r, 2, 12), b = int(r, 2, 10), c = int(r, 2, 9), V = a * b * c, u = CM(L) + "³";
    const S = 2 * (a * b + b * c + a * c);
    const alts = [a + b + c, a * b + b * c + a * c, S, a * b, V / 2, V + a * b].filter(v => v !== V && isInt(v)).map(v => on(v, L, u));
    return {
      q: T({ ru: "Найди объём прямоугольного параллелепипеда с рёбрами {a} см, {b} см и {c} см.", ky: "Кырлары {a} см, {b} см жана {c} см болгон тик бурчтуу параллелепипеддин көлөмүн тап.", en: "Find the volume of a cuboid measuring {a} cm by {b} cm by {c} cm." }, L, { a: a, b: b, c: c }),
      ans: on(V, L, u), alts: alts,
      why: T({ ru: "V = {a} · {b} · {c} = {V} см³.", ky: "V = {a} · {b} · {c} = {V} см³.", en: "Volume = {a} × {b} × {c} = {V} cm³." }, L, { a: a, b: b, c: c, V: V })
    };
  });

  /* ===== Units ===== */
  add("u_len", "units", 6, (r, L) => {
    const kind = pick(r, ["km_m", "m_cm", "cm_m", "m_km"]); let x, ans, k, from, to;
    const U = { km: { ru: "км", ky: "км", en: "km" }, m: { ru: "м", ky: "м", en: "m" }, cm: { ru: "см", ky: "см", en: "cm" } };
    const W2 = { m: { ru: "метров", ky: "метр", en: "metres" }, cm: { ru: "сантиметров", ky: "сантиметр", en: "centimetres" }, km: { ru: "километров", ky: "километр", en: "kilometres" } };
    if (kind === "km_m") { x = int(r, 1, 95) / 10; k = 1000; from = "km"; to = "m"; ans = x * 1000; }
    else if (kind === "m_cm") { x = int(r, 1, 95) / 10; k = 100; from = "m"; to = "cm"; ans = x * 100; }
    else if (kind === "cm_m") { x = int(r, 5, 950); k = 1 / 100; from = "cm"; to = "m"; ans = x / 100; }
    else { x = int(r, 50, 9500); k = 1 / 1000; from = "m"; to = "km"; ans = x / 1000; }
    const cands = k > 1 ? [x * k / 10, x * k * 10, x * 10, x * k + k] : [x / 10, x * 10, x / (1 / k * 10), ans + 1];
    const alts = cands.filter(v => Math.abs(v - ans) > 1e-9 && v > 0).map(v => on(v, L, " " + U[to][L]));
    const rel = from === "km" || to === "km" ? "1 " + U.km[L] + " = 1000 " + U.m[L] : "1 " + U.m[L] + " = 100 " + U.cm[L];
    return {
      q: T({ ru: "Сколько {w} в {x} {u}?", ky: "{x} {u} канча {w}?", en: "How many {w} are in {x} {u}?" }, L, { w: W2[to][L], x: nf(x, L), u: U[from][L] }),
      ans: on(ans, L, " " + U[to][L]), alts: alts,
      why: T({ ru: "{rel}, поэтому {x} {u} = {ans} {t}.", ky: "{rel}, ошондуктан {x} {u} = {ans} {t}.", en: "{rel}, so {x} {u} = {ans} {t}." }, L, { rel: rel, x: nf(x, L), u: U[from][L], ans: nf(ans, L), t: U[to][L] })
    };
  });
  add("u_time", "units", 6, (r, L) => {
    const x = pick(r, [0.2, 0.25, 0.5, 0.75, 1.2, 1.25, 1.5, 1.75, 2.25, 2.5, 3.5, 4.5]), ans = x * 60;
    const whole = Math.floor(x), frac = Math.round((x - whole) * 100);
    const alts = [x * 100, whole * 60 + frac, ans + 30, ans - 15 > 0 ? ans - 15 : ans + 45, x * 10].filter(v => Math.abs(v - ans) > 1e-9 && v > 0).map(v => on(v, L, L === "en" ? " min" : L === "ky" ? " мүн." : " мин"));
    return {
      q: T({ ru: "Сколько минут в {x} ч?", ky: "{x} саат канча мүнөт?", en: "How many minutes are in {x} hours?" }, L, { x: nf(x, L) }),
      ans: on(ans, L, L === "en" ? " min" : L === "ky" ? " мүн." : " мин"), alts: alts,
      why: T({ ru: "1 ч = 60 мин, поэтому {x} · 60 = {ans} мин.", ky: "1 саат = 60 мүнөт, ошондуктан {x} · 60 = {ans} мүнөт.", en: "1 hour = 60 minutes, so {x} × 60 = {ans} minutes." }, L, { x: nf(x, L), ans: nf(ans, L) })
    };
  });
  add("u_mass", "units", 6, (r, L) => {
    const a = int(r, 1, 9), b = pick(r, [5, 40, 50, 75, 125, 250, 300, 450, 600, 805, 950]), ans = a * 1000 + b, g = L === "en" ? " g" : " г";
    const alts = [a * 100 + b, a * 1000 + b * 10, a + b, a * 10000 + b, (a + 1) * 1000 + b].filter(v => v !== ans).map(v => on(v, L, g));
    return {
      q: T({ ru: "Сколько граммов в {a} кг {b} г?", ky: "{a} кг {b} г канча грамм?", en: "How many grams are in {a} kg {b} g?" }, L, { a: a, b: b }),
      ans: on(ans, L, g), alts: alts,
      why: T({ ru: "{a} кг = {k} г, {k} + {b} = {ans} г.", ky: "{a} кг = {k} г, {k} + {b} = {ans} г.", en: "{a} kg = {k} g, and {k} + {b} = {ans} g." }, L, { a: a, k: nf(a * 1000, L), b: b, ans: nf(ans, L) })
    };
  });
  add("u_speed", "units", 7, (r, L) => {
    const v = pick(r, [18, 36, 54, 72, 90, 108, 126, 144]), ans = v / 3.6, U = L === "en" ? " m/s" : L === "ky" ? " м/сек" : " м/с";
    const alts = [v * 3.6, v / 60, v / 10, v / 2, ans + 5].filter(x => Math.abs(x - ans) > 1e-9).map(x => on(Math.round(x * 100) / 100, L, U));
    return {
      q: T({ ru: "Вырази скорость {v} км/ч в метрах в секунду.", ky: "{v} км/саат ылдамдыгын метр/секунд менен туюнт.", en: "Write {v} km/h in metres per second." }, L, { v: v }),
      ans: on(ans, L, U), alts: alts,
      why: T({ ru: "1 км/ч = 1000 м : 3600 с, то есть нужно разделить на 3,6: {v} : 3,6 = {a} м/с.", ky: "1 км/саат = 1000 м : 3600 сек, башкача айтканда 3,6га бөлүү керек: {v} : 3,6 = {a} м/сек.", en: "1 km/h = 1000 m ÷ 3600 s, so divide by 3.6: {v} ÷ 3.6 = {a} m/s." }, L, { v: v, a: nf(ans, L) })
    };
  });

  /* ===== Ratio, proportion and speed ===== */
  add("r_dist", "ratio", 6, (r, L) => {
    const kind = pick(r, ["d", "t", "v"]), v = pick(r, [12, 15, 20, 40, 45, 50, 60, 70, 75, 80, 90]), t = int(r, 2, 6), d = v * t;
    const KM = L === "en" ? " km" : " км", KMH = L === "en" ? " km/h" : L === "ky" ? " км/саат" : " км/ч", H = L === "en" ? (t === 1 ? " hour" : " hours") : L === "ky" ? " саат" : " ч";
    if (kind === "d") return {
      q: T({ ru: "Автобус ехал {t} ч со скоростью {v} км/ч. Какое расстояние он проехал?", ky: "Автобус {v} км/саат ылдамдык менен {t} саат жүрдү. Ал канча аралыкты басып өттү?", en: "A bus travels at {v} km/h for {t} hours. How far does it go?" }, L, { t: t, v: v }),
      ans: on(d, L, KM), alts: [v + t, v * (t + 1), isInt(v / t) ? v / t : d + 10, d * 2, d - v].filter(x => x !== d && x > 0).map(x => on(x, L, KM)),
      why: T({ ru: "s = v · t = {v} · {t} = {d} км.", ky: "s = v · t = {v} · {t} = {d} км.", en: "distance = speed × time = {v} × {t} = {d} km." }, L, { v: v, t: t, d: d })
    };
    if (kind === "t") return {
      q: T({ ru: "Велосипедист проехал {d} км со скоростью {v} км/ч. Сколько часов он был в пути?", ky: "Велосипедчи {v} км/саат ылдамдык менен {d} км жол жүрдү. Ал жолдо канча саат болду?", en: "A cyclist rides {d} km at {v} km/h. How many hours does the ride take?" }, L, { d: d, v: v }),
      ans: on(t, L, H), alts: [t + 1, t + 2, t > 1 ? t - 1 : t + 3, t * 2, t + 4].filter(x => x !== t && x > 0).map(x => on(x, L, L === "en" ? " hours" : H)),
      why: T({ ru: "t = s : v = {d} : {v} = {t} ч.", ky: "t = s : v = {d} : {v} = {t} саат.", en: "time = distance ÷ speed = {d} ÷ {v} = {t} hours." }, L, { d: d, v: v, t: t })
    };
    return {
      q: T({ ru: "Поезд прошёл {d} км за {t} ч. Найди его скорость.", ky: "Поезд {d} км аралыкты {t} саатта басып өттү. Анын ылдамдыгын тап.", en: "A train travels {d} km in {t} hours. Find its speed." }, L, { d: d, t: t }),
      ans: on(v, L, KMH), alts: [d * t, d - t, v + 10, v - 5, d / 2].filter(x => x !== v && x > 0 && isInt(x)).map(x => on(x, L, KMH)),
      why: T({ ru: "v = s : t = {d} : {t} = {v} км/ч.", ky: "v = s : t = {d} : {t} = {v} км/саат.", en: "speed = distance ÷ time = {d} ÷ {t} = {v} km/h." }, L, { d: d, t: t, v: v })
    };
  });
  add("r_prop", "ratio", 6, (r, L) => {
    const item = pick(r, [{ ru: "тетрадей", ky: "дептер", en: "notebooks", one: { ru: "тетрадь", ky: "дептер", en: "notebook" } }, { ru: "ручек", ky: "калем", en: "pens", one: { ru: "ручка", ky: "калем", en: "pen" } }]);
    const u = pick(r, [12, 15, 18, 20, 25, 30, 35, 40, 45]), n1 = int(r, 5, 12); let n2 = int(r, 5, 20); while (n2 === n1) n2 = int(r, 5, 20);
    const c1 = u * n1, ans = u * n2, S = L === "en" ? " som" : " сом";
    const alts = [c1 + (n2 - n1), c1 * n2, u, ans + u, ans - u, c1 + n2].filter(x => x !== ans && x > 0).map(x => on(x, L, S));
    return {
      q: T({ ru: "{a} {it} стоят {c} сом. Сколько стоят {b} таких {it}?", ky: "{a} {it} {c} сом турат. Ушундай {b} {it} канча турат?", en: "{a} {it} cost {c} som. How much do {b} {it} cost?" }, L, { a: n1, b: n2, c: nf(c1, L), it: item[L] }),
      ans: on(ans, L, S), alts: alts,
      why: T({ ru: "Одна {o} стоит {c} : {a} = {u} сом, а {b} штук стоят {b} · {u} = {ans} сом.", ky: "Бир {o} {c} : {a} = {u} сом турат, ал эми {b} даана {b} · {u} = {ans} сом турат.", en: "One {o} costs {c} ÷ {a} = {u} som, so {b} cost {b} × {u} = {ans} som." }, L, { o: item.one[L], c: nf(c1, L), a: n1, u: u, b: n2, ans: nf(ans, L) })
    };
  });
  add("r_split", "ratio", 6, (r, L) => {
    let p = int(r, 1, 7), q = int(r, 2, 9); while (p === q || gcd(p, q) !== 1) { p = int(r, 1, 7); q = int(r, 2, 9); }
    const s = p + q, u = int(r, 2, 20), n = s * u, big = Math.max(p, q) * u, small = Math.min(p, q) * u;
    const alts = [small, u, n / 2, big + u, n - u].filter(x => x !== big && x > 0 && isInt(x)).map(x => on(x, L));
    return {
      q: T({ ru: "Раздели число {n} в отношении {p} : {q}. Найди большую часть.", ky: "{n} санын {p} : {q} катышында бөл. Чоң бөлүгүн тап.", en: "Share {n} in the ratio {p} : {q}. Find the larger part." }, L, { n: n, p: p, q: q }),
      ans: on(big, L), alts: alts,
      why: T({ ru: "Всего частей {p} + {q} = {s}. Одна часть: {n} : {s} = {u}. Большая часть: {u} · {m} = {big}.", ky: "Бардык бөлүктөр: {p} + {q} = {s}. Бир бөлүк: {n} : {s} = {u}. Чоң бөлүгү: {u} · {m} = {big}.", en: "There are {p} + {q} = {s} parts. One part is {n} ÷ {s} = {u}, so the larger part is {u} × {m} = {big}." }, L, { p: p, q: q, s: s, n: n, u: u, m: Math.max(p, q), big: big })
    };
  });
  add("r_scale", "ratio", 6, (r, L) => {
    const S = pick(r, [10000, 20000, 25000, 50000, 100000, 200000]), m = int(r, 2, 12), km = m * S / 100000, K = L === "en" ? " km" : " км";
    const alts = [km * 10, km / 10, m * S / 1000, km + 1, km * 2].filter(x => Math.abs(x - km) > 1e-9 && x > 0).map(x => on(x, L, K));
    return {
      q: T({ ru: "Масштаб карты 1 : {S}. Расстояние на карте {m} см. Каково расстояние на местности в километрах?", ky: "Картанын масштабы 1 : {S}. Картадагы аралык {m} см. Чыныгы аралык канча километр?", en: "A map has a scale of 1 : {S}. Two towns are {m} cm apart on the map. How far apart are they in km?" }, L, { S: nf(S, L), m: m }),
      ans: on(km, L, K), alts: alts,
      why: T({ ru: "1 см на карте = {S} см = {k} км на местности. {m} · {k} = {a} км.", ky: "Картадагы 1 см = {S} см = чыныгы {k} км. {m} · {k} = {a} км.", en: "1 cm on the map is {S} cm = {k} km in real life, so {m} × {k} = {a} km." }, L, { S: nf(S, L), k: nf(S / 100000, L), m: m, a: nf(km, L) })
    };
  });

  /* ===== Quadratic equations ===== */
  add("q_roots", "quadratic", 8, (r, L) => {
    let x1 = nz(r, -9, 9), x2 = nz(r, -9, 9); while (x1 === x2 || x1 + x2 === 0) { x1 = nz(r, -9, 9); x2 = nz(r, -9, 9); }
    const b = -(x1 + x2), c = x1 * x2, eq = poly(1, b, c) + " = 0", lo = Math.min(x1, x2), hi = Math.max(x1, x2);
    const and = { ru: " и ", ky: " жана ", en: " and " }[L];
    const pair = (a, z) => { const s = [a, z].sort((u, v) => u - v); return ot(nf(s[0], L) + and + nf(s[1], L), null); };
    const ans = pair(lo, hi);
    const cands = [pair(-lo, -hi), pair(lo, -hi), pair(-lo, hi), pair(1, c), pair(-1, -c), pair(lo + 1, hi + 1)];
    const seen = {}; seen[ans.s] = 1; const alts = cands.filter(o => (seen[o.s] ? false : (seen[o.s] = 1)));
    return {
      q: T({ ru: "Реши уравнение: {e}", ky: "Теңдемени чыгар: {e}", en: "Solve {e}" }, L, { e: eq }),
      ans: ans, alts: alts,
      why: T({ ru: "По теореме Виета x₁ + x₂ = {s}, x₁ · x₂ = {p}. Подходят числа {a} и {b}.", ky: "Виеттин теоремасы боюнча x₁ + x₂ = {s}, x₁ · x₂ = {p}. Буга {a} жана {b} сандары туура келет.", en: "The roots add up to {s} and multiply to {p}, so they are {a} and {b}." }, L, { s: nf(-b, L), p: nf(c, L), a: nf(lo, L), b: nf(hi, L) })
    };
  });

  /* ===== Sequences ===== */
  add("pr_arith", "progression", 9, (r, L) => {
    const a1 = int(r, -10, 20), d = nz(r, -6, 9), n = int(r, 6, 20), an = a1 + (n - 1) * d;
    const alts = [a1 + n * d, n * d, a1 + (n - 2) * d, a1 - (n - 1) * d, an + 1].filter(v => v !== an).map(v => on(v, L));
    return {
      q: T({ ru: "Арифметическая прогрессия: a₁ = {a}, d = {d}. Найди a{n}.", ky: "Арифметикалык прогрессия: a₁ = {a}, d = {d}. a{n} мүчөсүн тап.", en: "An arithmetic sequence has a₁ = {a} and d = {d}. Find a{n}." }, L, { a: nf(a1, L), d: nf(d, L), n: sub(n) }),
      ans: on(an, L), alts: alts,
      why: T({ ru: "aₙ = a₁ + (n − 1)d = {a} + {m} · {pd} = {an}.", ky: "aₙ = a₁ + (n − 1)d = {a} + {m} · {pd} = {an}.", en: "aₙ = a₁ + (n − 1)d = {a} + {m} × {pd} = {an}." }, L, { a: nf(a1, L), m: n - 1, pd: par(d, L), an: nf(an, L) })
    };
  });
  add("pr_geom", "progression", 9, (r, L) => {
    const b1 = int(r, 1, 5), q = pick(r, [2, 2, 3, -2, 3]), n = int(r, 3, q === 3 ? 5 : 6), bn = b1 * Math.pow(q, n - 1);
    const alts = [b1 * Math.pow(q, n), b1 + (n - 1) * q, b1 * q * (n - 1), Math.pow(b1 * q, n - 1), -bn].filter(v => v !== bn).map(v => on(v, L));
    return {
      q: T({ ru: "Геометрическая прогрессия: b₁ = {b}, q = {q}. Найди b{n}.", ky: "Геометриялык прогрессия: b₁ = {b}, q = {q}. b{n} мүчөсүн тап.", en: "A geometric sequence has b₁ = {b} and common ratio q = {q}. Find b{n}." }, L, { b: b1, q: nf(q, L), n: sub(n) }),
      ans: on(bn, L), alts: alts,
      why: T({ ru: "bₙ = b₁ · qⁿ⁻¹ = {b} · {pq}{e} = {bn}.", ky: "bₙ = b₁ · qⁿ⁻¹ = {b} · {pq}{e} = {bn}.", en: "bₙ = b₁ × qⁿ⁻¹ = {b} × {pq}{e} = {bn}." }, L, { b: b1, pq: par(q, L), e: sup(n - 1), bn: nf(bn, L) })
    };
  });

  /* ===== Functions ===== */
  add("fn_val", "functions", 7, (r, L) => {
    const a = nz(r, -3, 3), b = int(r, -5, 5), c = int(r, -9, 9), x = nz(r, -4, 4), y = a * x * x + b * x + c;
    const f = poly(a, b, c);
    const cands = [a * x * x - b * x + c, a * a * x * x + b * x + c, -a * x * x + b * x + c, y + 2, y - 2, a * 2 * x + b * x + c].filter(v => v !== y);
    return {
      q: T({ ru: "Найди значение функции y = {f} при x = {x}.", ky: "y = {f} функциясынын x = {x} болгондогу маанисин тап.", en: "Find the value of y = {f} when x = {x}." }, L, { f: f, x: nf(x, L) }),
      ans: on(y, L), alts: cands.map(v => on(v, L)),
      why: T({ ru: "Подставим x = {x}: y = {s} = {y}.", ky: "x = {x} маанисин коёбуз: y = {s} = {y}.", en: "Substitute x = {x}: y = {s} = {y}." }, L, { x: nf(x, L), s: subst(a, b, c, x, L), y: nf(y, L) })
    };
  });
  add("fn_zero", "functions", 7, (r, L) => {
    const k = nz(r, -6, 6), x0 = nz(r, -8, 8), b = -k * x0, f = poly(0, k, b);
    const cands = [b, -b, isInt(b / k) ? b / k : x0 + 1, k, x0 + 2].filter(v => v !== x0);
    return {
      q: T({ ru: "При каком значении x функция y = {f} равна нулю?", ky: "x тин кандай маанисинде y = {f} функциясы нөлгө барабар болот?", en: "For what value of x is y = {f} equal to zero?" }, L, { f: f }),
      ans: on(x0, L), alts: cands.map(v => on(v, L)),
      why: T({ ru: "{f} = 0, значит {k}x = {mb}, x = {x}.", ky: "{f} = 0, демек {k}x = {mb}, x = {x}.", en: "{f} = 0, so {k}x = {mb} and x = {x}." }, L, { f: f, k: nf(k, L), mb: nf(-b, L), x: nf(x0, L) })
    };
  });

  /* ===== Logarithms ===== */
  add("lg_eval", "logs", 10, (r, L) => {
    const b = pick(r, [2, 2, 3, 5, 10]), k = b === 2 ? int(r, 2, 8) : b === 3 ? int(r, 2, 5) : int(r, 2, 4), N = Math.pow(b, k);
    const alts = [k + 1, k - 1 > 0 ? k - 1 : k + 2, isInt(N / b) ? N / b : k * 2, N - b, b * k].filter(v => v !== k && v > 0).map(v => on(v, L));
    return {
      q: T({ ru: "Вычисли: log{b} {N}", ky: "Эсепте: log{b} {N}", en: "Work out log{b} {N}" }, L, { b: sub(b), N: nf(N, L) }),
      ans: on(k, L), alts: alts,
      why: T({ ru: "{b}{k} = {N}, поэтому log{sb} {N} = {kk}.", ky: "{b}{k} = {N}, ошондуктан log{sb} {N} = {kk}.", en: "{b}{k} = {N}, so log{sb} {N} = {kk}." }, L, { b: b, k: sup(k), N: nf(N, L), sb: sub(b), kk: k })
    };
  });

  /* ===== Trigonometry ===== */
  const TRIG = [
    ["sin 30° + cos 60°", "1", "sin 30° = 1/2, cos 60° = 1/2"],
    ["2 sin 30°", "1", "sin 30° = 1/2"],
    ["sin 90° − cos 60°", "1/2", "sin 90° = 1, cos 60° = 1/2"],
    ["tg 45° + cos 0°", "2", "tg 45° = 1, cos 0° = 1"],
    ["2 sin 30° · cos 60°", "1/2", "sin 30° = 1/2, cos 60° = 1/2"],
    ["sin 60° · cos 30°", "3/4", "sin 60° = √3/2, cos 30° = √3/2"],
    ["sin 45° · cos 45°", "1/2", "sin 45° = √2/2, cos 45° = √2/2"],
    ["cos 90° + sin 30°", "1/2", "cos 90° = 0, sin 30° = 1/2"],
    ["2 cos 60° + tg 45°", "2", "cos 60° = 1/2, tg 45° = 1"],
    ["sin² 45°", "1/2", "sin 45° = √2/2"],
    ["tg² 45° + sin 90°", "2", "tg 45° = 1, sin 90° = 1"],
    ["2 sin 60°", "√3", "sin 60° = √3/2"],
    ["cos 0° − sin 30°", "1/2", "cos 0° = 1, sin 30° = 1/2"],
    ["sin² 30° + cos² 30°", "1", "sin² α + cos² α = 1"],
    ["4 sin 30° · cos 60°", "1", "sin 30° = 1/2, cos 60° = 1/2"],
    ["sin 0° + cos 90°", "0", "sin 0° = 0, cos 90° = 0"]
  ];
  const TRIG_OPTS = ["0", "1/2", "1", "3/2", "2", "√3", "√3/2", "√2/2", "3/4", "1/4"];
  add("tr_eval", "trig", 9, (r, L) => {
    const it = pick(r, TRIG), en = s => (L === "en" ? s.replace(/tg/g, "tan") : s);
    const opts = TRIG_OPTS.filter(o => o !== it[1]);
    const alts = []; while (alts.length < 5) { const o = pick(r, opts); if (alts.indexOf(o) < 0) alts.push(o); }
    const dec = s => (s === "√3" ? 1.732 : s === "√3/2" ? 0.866 : s === "√2/2" ? 0.707 : s.indexOf("/") > 0 ? +s.split("/")[0] / +s.split("/")[1] : +s);
    return {
      q: T({ ru: "Вычисли: {e}", ky: "Эсепте: {e}", en: "Work out {e}" }, L, { e: en(it[0]) }),
      ans: ot(it[1], dec(it[1])), alts: alts.map(o => ot(o, dec(o))),
      why: T({ ru: "Значения: {v}. Поэтому {e} = {a}.", ky: "Маанилери: {v}. Ошондуктан {e} = {a}.", en: "The values are {v}, so {e} = {a}." }, L, { v: en(it[2]), e: en(it[0]), a: it[1] })
    };
  });

  /* ---------- ORT Part I: compare column A and column B ----------
     a: 0 = A is bigger, 1 = B is bigger, 2 = equal, 3 = cannot be decided */
  const CMP = [];
  const cmp = (topic, make) => CMP.push({ topic: topic, make: make });
  const sgn = (x, y) => (Math.abs(x - y) < 1e-9 ? 2 : x > y ? 0 : 1);
  const rel = a => [">", "<", "="][a];
  cmp("fractions", (r, L) => {
    const d = pick(r, [4, 5, 8, 20, 25]); let n = int(r, 1, d - 1); while (gcd(n, d) !== 1) n = int(r, 1, d - 1);
    const v = n / d, mode = int(r, 0, 2), B = mode === 2 ? v : Math.round((v + (mode === 0 ? -1 : 1) * pick(r, [0.01, 0.02, 0.05, 0.1])) * 100) / 100;
    if (B <= 0) return null;
    const a = sgn(v, B);
    return { A: n + "/" + d, B: nf(B, L), a: a, why: T({ ru: "{f} = {dec}, а {dec} {r} {B}.", ky: "{f} = {dec}, ал эми {dec} {r} {B}.", en: "{f} = {dec}, and {dec} {r} {B}." }, L, { f: n + "/" + d, dec: nf(v, L), r: rel(a), B: nf(B, L) }) };
  });
  cmp("powers", (r, L) => {
    const p = pick(r, [[2, 3, 3, 2], [2, 4, 4, 2], [2, 5, 5, 2], [2, 6, 6, 2], [3, 4, 4, 3], [2, 10, 10, 2], [3, 5, 5, 3], [10, 2, 2, 10], [5, 3, 3, 5], [4, 3, 3, 4]]);
    const va = Math.pow(p[0], p[1]), vb = Math.pow(p[2], p[3]), a = sgn(va, vb);
    return { A: p[0] + sup(p[1]), B: p[2] + sup(p[3]), a: a, why: T({ ru: "{A} = {va}, {B} = {vb}, поэтому {va} {r} {vb}.", ky: "{A} = {va}, {B} = {vb}, ошондуктан {va} {r} {vb}.", en: "{A} = {va} and {B} = {vb}, so {va} {r} {vb}." }, L, { A: p[0] + sup(p[1]), B: p[2] + sup(p[3]), va: nf(va, L), vb: nf(vb, L), r: rel(a) }) };
  });
  cmp("powers", (r, L) => {
    const p = pick(r, [["√50", "7", 0], ["√48", "7", 1], ["√49", "7", 2], ["2√3", "√12", 2], ["3√2", "2√3", 0], ["√80", "9", 1], ["√99", "10", 1], ["5√2", "7", 0], ["√0,25", "0,5", 2], ["√0,09", "0,3", 2]]);
    const sq = { "√50": 50, "√48": 48, "√49": 49, "2√3": 12, "√12": 12, "3√2": 18, "√80": 80, "√99": 99, "5√2": 50, "√0,25": 0.25, "√0,09": 0.09 };
    const conv = s => (L === "en" ? s.replace(",", ".") : s);
    const A = conv(p[0]), B = conv(p[1]), va = sq[p[0]], vbRaw = p[1].indexOf("√") >= 0 ? sq[p[1]] : Math.pow(+p[1].replace(",", "."), 2);
    return { A: A, B: B, a: p[2], why: T({ ru: "Сравним квадраты: ({A})² = {va}, ({B})² = {vb}. Значит, {A} {r} {B}.", ky: "Квадраттарын салыштырабыз: ({A})² = {va}, ({B})² = {vb}. Демек, {A} {r} {B}.", en: "Compare the squares: ({A})² = {va} and ({B})² = {vb}, so {A} {r} {B}." }, L, { A: A, B: B, va: nf(va, L), vb: nf(vbRaw, L), r: rel(p[2]) }) };
  });
  cmp("percent", (r, L) => {
    const eq = r() < 0.35, p = pick(r, [10, 15, 20, 25, 30, 40, 50, 60, 75, 80]); let n = pick(r, [20, 40, 60, 80, 120, 200]);
    let q = eq ? n : pick(r, [10, 15, 20, 25, 30, 40, 50, 60, 75, 80]), m = eq ? p : pick(r, [20, 40, 60, 80, 120, 200]);
    const va = p * n / 100, vb = q * m / 100, a = sgn(va, vb);
    const fA = { ru: p + "% от " + n, ky: n + " санынын " + p + "%", en: p + "% of " + n }, fB = { ru: q + "% от " + m, ky: m + " санынын " + q + "%", en: q + "% of " + m };
    return { A: fA[L], B: fB[L], a: a, why: T({ ru: "{A} = {va}, {B} = {vb}. {va} {r} {vb}.", ky: "{A} = {va}, {B} = {vb}. {va} {r} {vb}.", en: "{A} = {va} and {B} = {vb}, so {va} {r} {vb}." }, L, { A: fA[L], B: fB[L], va: nf(va, L), vb: nf(vb, L), r: rel(a) }) };
  });
  cmp("algebra", (r, L) => {
    const c = pick(r, [
      { n: "x > 1", A: "x²", B: "x", a: 0, w: { ru: "При x > 1 квадрат больше самого числа: x² − x = x(x − 1) > 0.", ky: "x > 1 болгондо сандын квадраты өзүнөн чоң: x² − x = x(x − 1) > 0.", en: "For x > 1 the square is bigger: x² − x = x(x − 1) > 0." } },
      { n: "0 < x < 1", A: "x²", B: "x", a: 1, w: { ru: "Если 0 < x < 1, то x² < x (например, 0,5² = 0,25).", ky: "Эгер 0 < x < 1 болсо, x² < x (мисалы, 0,5² = 0,25).", en: "If 0 < x < 1, then x² < x (for example 0.5² = 0.25)." } },
      { n: "x > 0", A: "x²", B: "x", a: 3, w: { ru: "При x = 2: 4 > 2, а при x = 0,5: 0,25 < 0,5. Ответ зависит от x.", ky: "x = 2 болгондо 4 > 2, ал эми x = 0,5 болгондо 0,25 < 0,5. Жооп x тен көз каранды.", en: "For x = 2: 4 > 2, but for x = 0.5: 0.25 < 0.5. It depends on x." } },
      { n: "a < 0", A: "a²", B: "a³", a: 0, w: { ru: "При a < 0 квадрат положителен, а куб отрицателен.", ky: "a < 0 болгондо квадраты оң, ал эми кубу терс сан.", en: "If a < 0, a² is positive and a³ is negative." } },
      { n: "a < 0", A: "a", B: "2a", a: 0, w: { ru: "Для отрицательного a: 2a меньше, чем a (например, −6 < −3).", ky: "Терс a үчүн 2a саны a дан кичине (мисалы, −6 < −3).", en: "For negative a, 2a is smaller than a (for example −6 < −3)." } },
      { n: "3x + 2 = 14", A: "x", B: "4", a: 2, w: { ru: "3x = 12, x = 4.", ky: "3x = 12, x = 4.", en: "3x = 12, so x = 4." } },
      { n: "2x − 5 = 9", A: "x", B: "8", a: 1, w: { ru: "2x = 14, x = 7, а 7 < 8.", ky: "2x = 14, x = 7, ал эми 7 < 8.", en: "2x = 14, so x = 7, and 7 < 8." } },
      { n: "x + y = 10, x > 0, y > 0", A: "x", B: "y", a: 3, w: { ru: "Может быть x = 7, y = 3 или x = 2, y = 8. Определить нельзя.", ky: "x = 7, y = 3 же x = 2, y = 8 болушу мүмкүн. Аныктоого болбойт.", en: "x could be 7 and y 3, or x 2 and y 8. It cannot be decided." } },
      { n: { ru: "n — целое число", ky: "n — бүтүн сан", en: "n is a whole number" }, A: "n²", B: "n", a: 3, w: { ru: "При n = 0 или 1 величины равны, при n = 2 A больше. Определить нельзя.", ky: "n = 0 же 1 болгондо барабар, n = 2 болгондо А чоң. Аныктоого болбойт.", en: "For n = 0 or 1 they are equal, for n = 2 column A is bigger. It cannot be decided." } },
      { n: "x = −3", A: "x²", B: "−x²", a: 0, w: { ru: "x² = 9, −x² = −9.", ky: "x² = 9, −x² = −9.", en: "x² = 9 and −x² = −9." } },
      { n: "a = 2b, b > 0", A: "a", B: "b", a: 0, w: { ru: "a в 2 раза больше положительного b.", ky: "a саны оң b санынан 2 эсе чоң.", en: "a is twice the positive number b." } }
    ]);
    const note = typeof c.n === "string" ? c.n.replace(/−/g, MINUS) : c.n[L];
    return { note: note, A: c.A.replace(/−/g, MINUS), B: c.B.replace(/−/g, MINUS), a: c.a, why: c.w[L] };
  });
  cmp("stats", (r, L) => {
    const m1 = int(r, 5, 30), m2 = r() < 0.3 ? m1 : m1 + nz(r, -4, 4), s1 = [m1 - 2, m1, m1 + 2], d = int(r, 1, 4), s2 = [m2 - d, m2, m2 + d];
    const a = sgn(m1, m2), lab = { ru: "Среднее чисел ", ky: "Сандардын орточосу: ", en: "Mean of " };
    return { A: lab[L] + list(s1, L), B: lab[L] + list(s2, L), a: a, why: T({ ru: "Среднее первого ряда {x}, второго {y}. {x} {r} {y}.", ky: "Биринчи катардын орточосу {x}, экинчисиники {y}. {x} {r} {y}.", en: "The first mean is {x} and the second is {y}, so {x} {r} {y}." }, L, { x: m1, y: m2, r: rel(a) }) };
  });
  cmp("geometry", (r, L) => {
    if (r() < 0.5) {
      const s = int(r, 3, 12), p = int(r, 2, 15), q = r() < 0.3 && (s * s) % p === 0 ? s * s / p : int(r, 2, 18), va = s * s, vb = p * q, a = sgn(va, vb);
      const fa = { ru: "Площадь квадрата со стороной " + s + " см", ky: "Жагы " + s + " см болгон квадраттын аянты", en: "Area of a square with side " + s + " cm" };
      const fb = { ru: "Площадь прямоугольника " + p + " см × " + q + " см", ky: p + " см × " + q + " см тик бурчтуктун аянты", en: "Area of a " + p + " cm × " + q + " cm rectangle" };
      return { A: fa[L], B: fb[L], a: a, why: T({ ru: "{va} см² и {vb} см²: {va} {r} {vb}.", ky: "{va} см² жана {vb} см²: {va} {r} {vb}.", en: "{va} cm² and {vb} cm²: {va} {r} {vb}." }, L, { va: va, vb: vb, r: rel(a) }) };
    }
    const k = pick(r, [0, 1, 2]);
    if (k === 0) { const rad = int(r, 2, 9); return { A: { ru: "Длина окружности радиуса " + rad, ky: "Радиусу " + rad + " болгон айлананын узундугу", en: "Circumference of a circle with radius " + rad }[L], B: String(6 * rad), a: 0, why: T({ ru: "C = 2π · {r} ≈ {c}, а это больше {b}, потому что π > 3.", ky: "C = 2π · {r} ≈ {c}, бул {b} санынан чоң, анткени π > 3.", en: "C = 2π × {r} ≈ {c}, which is more than {b} because π > 3." }, L, { r: rad, c: nf(Math.round(2 * Math.PI * rad * 10) / 10, L), b: 6 * rad }) }; }
    if (k === 1) return { A: { ru: "Сумма углов четырёхугольника", ky: "Төрт бурчтуктун бурчтарынын суммасы", en: "Sum of the angles in a quadrilateral" }[L], B: "360°", a: 2, why: T({ ru: "Сумма углов любого выпуклого четырёхугольника 360°.", ky: "Ар кандай томпок төрт бурчтуктун бурчтарынын суммасы 360°.", en: "The angles in any quadrilateral add up to 360°." }, L) };
    return { A: { ru: "Угол равностороннего треугольника", ky: "Тең жактуу үч бурчтуктун бурчу", en: "An angle of an equilateral triangle" }[L], B: "45°", a: 0, why: T({ ru: "Каждый угол равностороннего треугольника 60°, а 60° > 45°.", ky: "Тең жактуу үч бурчтуктун ар бир бурчу 60°, ал эми 60° > 45°.", en: "Each angle of an equilateral triangle is 60°, and 60° > 45°." }, L) };
  });
  cmp("units", (r, L) => {
    const p = pick(r, [["1,2 км", "1150 м", 0, "1,2 км = 1200 м"], ["2 ч 15 мин", "130 мин", 0, "2 ч 15 мин = 135 мин"], ["0,5 м²", "5000 см²", 2, "1 м² = 10 000 см², 0,5 м² = 5000 см²"], ["3500 г", "3,5 кг", 2, "3,5 кг = 3500 г"], ["250 см", "2,6 м", 1, "2,6 м = 260 см"], ["1,5 ч", "100 мин", 1, "1,5 ч = 90 мин"], ["0,7 т", "750 кг", 1, "0,7 т = 700 кг"], ["36 км/ч", "10 м/с", 2, "36 км/ч = 36 : 3,6 = 10 м/с"]]);
    const tr = s => (L === "ru" ? s : L === "ky" ? s.replace(/ ч(?= |$)/g, " саат").replace(/мин/g, "мүн.").replace(/км\/ч/g, "км/саат").replace(/м\/с/g, "м/сек") : s.replace(/,/g, ".").replace(/км\/ч/g, "km/h").replace(/м\/с/g, "m/s").replace(/ ч(?= |$)/g, " h").replace(/мин/g, "min").replace(/см²/g, "cm²").replace(/м²/g, "m²").replace(/км/g, "km").replace(/кг/g, "kg").replace(/(\d) г/g, "$1 g").replace(/ т/g, " t").replace(/см/g, "cm").replace(/(\d) м/g, "$1 m").replace(/10 000/g, "10,000"));
    return { A: tr(p[0]), B: tr(p[1]), a: p[2], why: tr(p[3]) + "." };
  });
  cmp("ratio", (r, L) => {
    const v1 = pick(r, [40, 50, 60, 75, 80]), t1 = int(r, 2, 5), v2 = pick(r, [40, 50, 60, 75, 80]), t2 = r() < 0.3 ? t1 : int(r, 2, 5);
    const d1 = v1 * t1, d2 = v2 * t2, a = sgn(t1, t2);
    const K = L === "en" ? " km at " : " км, ", S = L === "en" ? " km/h" : L === "ky" ? " км/саат" : " км/ч";
    return { note: { ru: "Время в пути (в часах)", ky: "Жолдо өткөн убакыт (саат менен)", en: "Travel time (in hours)" }[L], A: d1 + K + v1 + S, B: d2 + K + v2 + S, a: a,
      why: T({ ru: "{d1} : {v1} = {t1} ч, {d2} : {v2} = {t2} ч.", ky: "{d1} : {v1} = {t1} саат, {d2} : {v2} = {t2} саат.", en: "{d1} ÷ {v1} = {t1} h and {d2} ÷ {v2} = {t2} h." }, L, { d1: d1, v1: v1, t1: t1, d2: d2, v2: v2, t2: t2 }) };
  });

  /* the number written inside an answer (to make more wrong answers of the same look) */
  function nfIn(o) {
    for (const L of ["ru", "en", "ky"]) { const t = nf(o.v, L); if (o.s.indexOf(t) >= 0) return { text: t, fmt: v => nf(v, L) }; }
    return null;
  }
  function stepOf(v) {
    const a = Math.abs(v); if (!isInt(v)) return a < 1 ? 0.1 : a < 10 ? 0.5 : 5;
    return a < 10 ? 1 : a < 50 ? 2 : a < 200 ? 10 : a < 1000 ? 20 : a < 5000 ? 100 : 500;
  }
  /* Comparisons where the answer is Г (cannot be decided): picked on purpose about 1 time in 6 */
  const CANNOT = [
    { topic: "fractions", n: "x ≠ 0", A: "x/5", B: "x/6", w: { ru: "Если x > 0, больше A; если x < 0, больше Б. Определить нельзя.", ky: "Эгер x > 0 болсо А чоң, x < 0 болсо Б чоң. Аныктоого болбойт.", en: "If x > 0, column A is bigger; if x < 0, column B is bigger. It cannot be decided." } },
    { topic: "geometry", n: { ru: "Периметр прямоугольника 20 см", ky: "Тик бурчтуктун периметри 20 см", en: "A rectangle has a perimeter of 20 cm" }, A: { ru: "Длина", ky: "Узундугу", en: "Its length" }, B: { ru: "Ширина", ky: "Туурасы", en: "Its width" }, w: { ru: "Подходят и 7 × 3, и 2 × 8, и 5 × 5. Определить нельзя.", ky: "7 × 3 да, 2 × 8 да, 5 × 5 да туура келет. Аныктоого болбойт.", en: "7 × 3, 2 × 8 and 5 × 5 all work. It cannot be decided." } },
    { topic: "algebra", n: "a > b", A: "a²", B: "b²", w: { ru: "При a = 3, b = 1 больше A, а при a = 1, b = −2 больше Б.", ky: "a = 3, b = 1 болгондо А чоң, ал эми a = 1, b = −2 болгондо Б чоң.", en: "For a = 3, b = 1 column A is bigger, but for a = 1, b = −2 column B is bigger." } },
    { topic: "algebra", n: { ru: "x > 0", ky: "x > 0", en: "x > 0" }, A: "x + 1/x", B: "2", w: { ru: "При x = 1 величины равны, при x = 2 больше A (2,5 > 2). Определить нельзя.", ky: "x = 1 болгондо барабар, x = 2 болгондо А чоң (2,5 > 2). Аныктоого болбойт.", en: "For x = 1 they are equal, for x = 2 column A is bigger (2.5 > 2). It cannot be decided." } },
    { topic: "ratio", n: { ru: "Автомобиль едет быстрее велосипедиста", ky: "Автомобиль велосипедчиден ылдамыраак жүрөт", en: "A car is faster than a cyclist" }, A: { ru: "Время в пути автомобиля", ky: "Автомобилдин жолдо өткөн убактысы", en: "The car's travel time" }, B: { ru: "Время в пути велосипедиста", ky: "Велосипедчинин жолдо өткөн убактысы", en: "The cyclist's travel time" }, w: { ru: "Расстояния не даны, поэтому время сравнить нельзя.", ky: "Аралыктар берилген эмес, ошондуктан убакытты салыштырууга болбойт.", en: "The distances are not given, so the times cannot be compared." } },
    { topic: "algebra", n: "a + b = 10", A: "a · b", B: "25", w: { ru: "При a = b = 5 величины равны, при a = 2, b = 8 больше Б. Определить нельзя.", ky: "a = b = 5 болгондо барабар, a = 2, b = 8 болгондо Б чоң. Аныктоого болбойт.", en: "For a = b = 5 they are equal, for a = 2 and b = 8 column B is bigger. It cannot be decided." } },
    { topic: "algebra", n: "xy > 0", A: "x", B: "y", w: { ru: "x и y одного знака, но любое из них может быть больше.", ky: "x жана y белгилери бирдей, бирок каалаганы чоң болушу мүмкүн.", en: "x and y have the same sign, but either one could be bigger." } },
    { topic: "geometry", n: { ru: "Две стороны треугольника 3 см и 4 см", ky: "Үч бурчтуктун эки жагы 3 см жана 4 см", en: "Two sides of a triangle are 3 cm and 4 cm" }, A: { ru: "Площадь треугольника", ky: "Үч бурчтуктун аянты", en: "The area of the triangle" }, B: { ru: "6 см²", ky: "6 см²", en: "6 cm²" }, w: { ru: "S = ½ · 3 · 4 · sin C ≤ 6. Равенство только при прямом угле, поэтому определить нельзя.", ky: "S = ½ · 3 · 4 · sin C ≤ 6. Барабар болушу үчүн бурч тик болушу керек, ошондуктан аныктоого болбойт.", en: "Area = ½ × 3 × 4 × sin C ≤ 6, with equality only for a right angle, so it cannot be decided." } },
    { topic: "stats", n: { ru: "Среднее пяти чисел равно 10", ky: "Беш сандын орточосу 10го барабар", en: "The mean of five numbers is 10" }, A: { ru: "Наибольшее из чисел", ky: "Сандардын эң чоңу", en: "The biggest of the numbers" }, B: "10", w: { ru: "Если все числа равны 10, величины равны; иначе наибольшее больше 10.", ky: "Бардык сандар 10 болсо барабар; болбосо эң чоңу 10дон чоң.", en: "If all the numbers are 10 they are equal; otherwise the biggest is more than 10." } }
  ];
  /* ---------- build one question ---------- */
  function finalize(raw, need, r, sortNum) {
    const ans = raw.ans, used = {}, vals = [];
    used[ans.s] = 1; if (ans.v != null) vals.push(ans.v);
    const out = [];
    const ok = o => o && o.s && !used[o.s] && !(o.v != null && vals.some(v => Math.abs(v - o.v) < 1e-9)) && o.s.indexOf("NaN") < 0 && o.s.indexOf("undefined") < 0 && o.s.indexOf("Infinity") < 0;
    raw.alts.forEach(o => { if (out.length < need - 1 && ok(o)) { out.push(o); used[o.s] = 1; if (o.v != null) vals.push(o.v); } });
    if (out.length < need - 1) return null;
    let opts = [ans].concat(out), a = 0;
    if (sortNum && opts.every(o => o.v != null)) {
      /* Choose where the right answer will stand (А–Д equally often), then take smaller and bigger wrong answers to match. */
      const lower = [], higher = [];
      raw.alts.forEach(o => { if (o && o.v != null && o.s && !(o.s === ans.s) && Math.abs(o.v - ans.v) > 1e-9 && !/NaN|undefined|Infinity/.test(o.s)) (o.v < ans.v ? lower : higher).push(o); });
      const want = Math.floor(r() * need), num = nfIn(ans);
      const fm = /^(\u2212?)(\d+)\/(\d+)$/.exec(ans.s);
      const synth = (k) => {
        if (fm) { const d = +fm[3], n0 = (fm[1] ? -1 : 1) * +fm[2], f = F(n0 + k, d); if ((ans.v > 0 && f.v <= 0) || f.d === 1 && Math.abs(f.n) > 50) return null; return { s: fs(f, "ru"), v: f.v }; }
        if (!num) return null; const step = stepOf(ans.v), v = Math.round((ans.v + k * step) * 1e6) / 1e6; if (ans.v > 0 && v <= 0) return null; return { s: ans.s.replace(num.text, num.fmt(v)), v: v };
      };
      const take = (arr, n, dir) => { const outA = [], seenV = []; arr.sort((x, y) => dir * (x.v - y.v)); arr.forEach(o => { if (outA.length < n && !seenV.some(v => Math.abs(v - o.v) < 1e-9)) { outA.push(o); seenV.push(o.v); } });
        for (let k = 1; outA.length < n && k < 40; k++) { const o = synth(dir * k); if (o && (dir < 0 ? o.v < ans.v : o.v > ans.v) && !seenV.some(v => Math.abs(v - o.v) < 1e-9)) { outA.push(o); seenV.push(o.v); } } return outA; };
      let lo = take(lower.slice(), want, -1), hi = take(higher.slice(), need - 1 - want, 1);
      if (lo.length === want && hi.length === need - 1 - want) {
        const all = lo.concat([ans], hi).sort((x, y) => x.v - y.v), strs = {};
        if (all.every(o => (strs[o.s] ? false : (strs[o.s] = 1)))) return { o: all.map(o => o.s), a: all.indexOf(ans) };
      }
      opts = opts.slice().sort((x, y) => x.v - y.v); a = opts.indexOf(ans);
    }
    else if (sortNum) { for (let i = opts.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const t = opts[i]; opts[i] = opts[j]; opts[j] = t; } a = opts.indexOf(ans); }
    return { o: opts.map(o => o.s), a: a };
  }
  function parseSeed(s) { const n = parseInt(String(s), 36); return isNaN(n) ? 1 : n; }
  function tplFor(topic, maxGrade) { return TPL.filter(t => (!topic || t.topic === topic) && (!maxGrade || t.grade <= maxGrade)); }

  function make(kind, L, seed) {
    if (["ky", "ru", "en"].indexOf(L) < 0) L = "ru";
    const r = rng(parseSeed(seed));
    if (kind === "ortc") {
      if (r() < 0.16) {
        const c = pick(r, CANNOT), loc = x => (typeof x === "string" ? x.replace(/−/g, MINUS) : x[L]);
        return { kind: kind, topic: c.topic, cmp: { A: loc(c.A), B: loc(c.B) }, note: loc(c.n), a: 3, why: c.w[L] };
      }
      for (let tries = 0; tries < 20; tries++) {
        const c = pick(r, CMP), x = c.make(r, L);
        if (x) return { kind: kind, topic: c.topic, cmp: { A: x.A, B: x.B }, note: x.note || "", a: x.a, why: x.why };
      }
      return null;
    }
    let pool, need = 4, sortNum = false;
    const parts = String(kind).split("~"), topic = parts[0], maxG = parts[1] ? +parts[1] : 0;
    if (kind === "ortm") { pool = TPL.filter(t => ORT_TOPICS.indexOf(t.topic) >= 0 && t.grade <= 9); need = 5; sortNum = true; }
    else if (kind === "subj") pool = TPL;
    else pool = tplFor(TOPICS[topic] ? topic : null, maxG);
    if (!pool.length) pool = TPL;
    for (let tries = 0; tries < 30; tries++) {
      const t = pick(r, pool), raw = t.make(r, L);
      const fin = raw && finalize(raw, need, r, sortNum);
      if (fin) return { kind: kind, topic: t.topic, tpl: t.id, q: raw.q, o: fin.o, a: fin.a, why: raw.why };
    }
    return null;
  }
  const newSeed = () => Math.floor(Math.random() * 2147483646 + 1).toString(36);

  W.BILIM_GEN = { topics: TOPICS, gradeTopics: GRADE_TOPICS, ortTopics: ORT_TOPICS, templates: TPL.map(t => ({ id: t.id, topic: t.topic, grade: t.grade })), make: make, newSeed: newSeed, cmpCount: CMP.length };
})(typeof window !== "undefined" ? window : globalThis);
