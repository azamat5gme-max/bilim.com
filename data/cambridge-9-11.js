/* Bilim · Cambridge questions for grades 9–11 (Cambridge IGCSE and AS Level).
   Grade 9 = IGCSE year 1, grade 10 = IGCSE year 2, grade 11 = AS Level.
   These are original questions written for the syllabus topics. They are not copied from any book.

   Each question: ["Question", ["A", "B", "C", "D"], right answer (0 = A, 1 = B, 2 = C, 3 = D), "Explanation"]
   Each subject has 3 terms: { topics: "...", q: [questions] } */
window.BILIM_CAMBRIDGE = window.BILIM_CAMBRIDGE || {};

window.BILIM_CAMBRIDGE["9"] = {
  stage: "IGCSE · Year 1", course: "Cambridge IGCSE",
  math: [
    { topics: "Number: types of number, standard form, bounds · Ratio and rates · Algebra: expanding and factorising", q: [
      ["Which of these numbers is irrational?", ["√16", "0.25", "√7", "3/8"], 2, "√7 cannot be written as a fraction of two integers, so it is irrational. √16 = 4 is rational."],
      ["A length is 8.4 cm, correct to 1 decimal place. What is its lower bound?", ["8.3 cm", "8.35 cm", "8.4 cm", "8.45 cm"], 1, "Half of 0.1 is 0.05, so the lower bound is 8.4 − 0.05 = 8.35 cm."],
      ["Write 0.000045 in standard form.", ["4.5 × 10⁻⁵", "4.5 × 10⁻⁴", "45 × 10⁻⁶", "4.5 × 10⁵"], 0, "Move the decimal point 5 places to the right to get 4.5, so the answer is 4.5 × 10⁻⁵."],
      ["Factorise fully: 12x²y − 18xy.", ["6xy(2x − 3)", "6x(2xy − 3y)", "3xy(4x − 6)", "6xy(2x − 18)"], 0, "The highest common factor is 6xy: 12x²y ÷ 6xy = 2x and 18xy ÷ 6xy = 3."],
      ["A car uses 6 litres of fuel to travel 80 km. How much fuel does it need for 200 km?", ["12 litres", "15 litres", "16 litres", "18 litres"], 1, "Fuel per km = 6 ÷ 80 = 0.075 litres. 0.075 × 200 = 15 litres."]
    ]},
    { topics: "Simultaneous equations · Linear inequalities · Indices · Straight-line graphs", q: [
      ["Solve the simultaneous equations x + y = 10 and x − y = 4.", ["x = 7, y = 3", "x = 6, y = 4", "x = 3, y = 7", "x = 5, y = 5"], 0, "Add the equations: 2x = 14, so x = 7. Then y = 10 − 7 = 3."],
      ["Simplify (2x³)².", ["2x⁶", "4x⁵", "4x⁶", "2x⁹"], 2, "Square both parts: 2² = 4 and (x³)² = x⁶."],
      ["What is the value of 8^(2/3)?", ["4", "16/3", "2", "5.33"], 0, "The cube root of 8 is 2, and 2² = 4."],
      ["What is the gradient of the line through (−1, 4) and (3, −4)?", ["2", "−2", "−1/2", "1/2"], 1, "Gradient = (−4 − 4) ÷ (3 − (−1)) = −8 ÷ 4 = −2."],
      ["Which integers satisfy −2 < x ≤ 1?", ["−2, −1, 0, 1", "−1, 0, 1", "−1, 0", "−2, −1, 0"], 1, "x must be greater than −2 (so −2 is not included) and at most 1 (so 1 is included)."]
    ]},
    { topics: "Angle properties and polygons · Circles · Area and volume · Statistics: averages", q: [
      ["What is the sum of the interior angles of a hexagon?", ["540°", "720°", "900°", "1080°"], 1, "(n − 2) × 180° = 4 × 180° = 720°."],
      ["Each exterior angle of a regular polygon is 30°. How many sides does it have?", ["10", "12", "6", "15"], 1, "Exterior angles add up to 360°, so 360 ÷ 30 = 12 sides."],
      ["Find the circumference of a circle with diameter 10 cm. (π ≈ 3.142)", ["15.7 cm", "31.4 cm", "78.6 cm", "62.8 cm"], 1, "C = πd = 3.142 × 10 ≈ 31.4 cm."],
      ["A cylinder has radius 3 cm and height 10 cm. What is its volume? (π ≈ 3.14)", ["94.2 cm³", "282.6 cm³", "188.4 cm³", "90 cm³"], 1, "V = πr²h = 3.14 × 9 × 10 = 282.6 cm³."],
      ["The mean of five numbers is 12. Four of them are 10, 15, 8 and 14. What is the fifth?", ["11", "13", "12", "9"], 1, "The total must be 5 × 12 = 60. 60 − (10 + 15 + 8 + 14) = 60 − 47 = 13."]
    ]}
  ],
  science: [
    { topics: "Biology: cells and movement into and out of cells · Chemistry: atoms, elements and isotopes · Physics: motion", q: [
      ["What is the movement of water molecules through a partially permeable membrane, from a dilute solution to a more concentrated solution, called?", ["Diffusion", "Osmosis", "Active transport", "Respiration"], 1, "Osmosis is the movement of water across a partially permeable membrane, from higher to lower water potential."],
      ["Which structure is the site of aerobic respiration in a cell?", ["Ribosome", "Mitochondrion", "Nucleus", "Chloroplast"], 1, "Mitochondria release energy from glucose in aerobic respiration."],
      ["An atom has 13 protons and 14 neutrons. What is its mass number?", ["13", "14", "27", "1"], 2, "Mass number = protons + neutrons = 13 + 14 = 27."],
      ["What are isotopes?", ["Atoms of the same element with different numbers of neutrons", "Atoms with different numbers of protons", "Molecules made of two elements", "Ions with a positive charge"], 0, "Isotopes have the same number of protons but different numbers of neutrons."],
      ["A cyclist speeds up from 2 m/s to 10 m/s in 4 s. What is the acceleration?", ["2 m/s²", "3 m/s²", "8 m/s²", "0.5 m/s²"], 0, "a = change in velocity ÷ time = (10 − 2) ÷ 4 = 2 m/s²."]
    ]},
    { topics: "Biology: biological molecules and enzymes · Chemistry: bonding and the mole · Physics: forces and Newton's laws", q: [
      ["Which reagent is used to test for starch?", ["Benedict's solution", "Iodine solution", "Biuret reagent", "Ethanol"], 1, "Iodine solution turns from orange-brown to blue-black when starch is present."],
      ["Why does an enzyme stop working at a very high temperature?", ["It runs out of energy", "Its active site changes shape (it is denatured)", "It turns into a different enzyme", "It dissolves in water"], 1, "High temperatures denature the enzyme: the active site changes shape and the substrate no longer fits."],
      ["What type of bonding is found in sodium chloride?", ["Covalent", "Ionic", "Metallic", "Hydrogen"], 1, "Sodium transfers an electron to chlorine, forming Na⁺ and Cl⁻ ions held together by ionic bonds."],
      ["How many moles are in 36 g of water (H₂O)? (Ar: H = 1, O = 16)", ["1 mol", "2 mol", "18 mol", "0.5 mol"], 1, "Mr of H₂O = 2 + 16 = 18. Moles = 36 ÷ 18 = 2 mol."],
      ["A resultant force of 12 N acts on a mass of 3 kg. What is the acceleration?", ["36 m/s²", "4 m/s²", "0.25 m/s²", "15 m/s²"], 1, "F = ma, so a = F ÷ m = 12 ÷ 3 = 4 m/s²."]
    ]},
    { topics: "Biology: plant and human nutrition · Chemistry: acids, bases and salts · Physics: energy, work and power", q: [
      ["Which mineral ion do plants need to make chlorophyll?", ["Nitrate", "Magnesium", "Calcium", "Iron"], 1, "Magnesium ions are needed to make chlorophyll. Without them, leaves turn yellow."],
      ["What is the role of bile?", ["It digests proteins", "It emulsifies fats and neutralises stomach acid", "It absorbs water", "It makes insulin"], 1, "Bile breaks fat into small droplets, giving lipase a bigger surface area, and it neutralises acid from the stomach."],
      ["What is the pH of a neutral solution?", ["0", "7", "14", "1"], 1, "Pure water and other neutral solutions have pH 7."],
      ["Which salt forms when sulfuric acid reacts with copper(II) oxide?", ["Copper chloride", "Copper sulfate", "Copper nitrate", "Copper carbonate"], 1, "Sulfuric acid makes sulfates: CuO + H₂SO₄ → CuSO₄ + H₂O."],
      ["A motor lifts a 50 N load through 4 m in 10 s. What is its useful power output?", ["20 W", "200 W", "2000 W", "12.5 W"], 0, "Work done = force × distance = 50 × 4 = 200 J. Power = 200 ÷ 10 = 20 W."]
    ]}
  ],
  english: [
    { topics: "Reading for detail · Skimming and scanning · Vocabulary in context · Informal email", q: [
      ["You need to find one date in a long article quickly. Which reading skill should you use?", ["Skimming", "Scanning", "Reading every word aloud", "Summarising"], 1, "Scanning means searching the text quickly for specific information, such as a date or a name."],
      ["Skimming a text means…", ["reading quickly to get the general idea", "looking up every word", "reading only the last line", "copying the text"], 0, "You skim to understand the main idea, or gist."],
      ["Which opening is best for an informal email to a friend?", ["Dear Sir or Madam,", "Hi Dana, how are things?", "To whom it may concern,", "Respected Director,"], 1, "Informal emails use a friendly greeting and a natural, chatty tone."],
      ["Read: “The new library is spacious, so students never struggle to find a seat.” What does “spacious” mean?", ["noisy", "having a lot of room", "old-fashioned", "expensive"], 1, "The context (never struggle to find a seat) shows that spacious means having plenty of space."],
      ["Which sentence is correct?", ["I look forward to hear from you.", "I look forward to hearing from you.", "I look forward hearing from you.", "I am look forward to hear you."], 1, "“Look forward to” is followed by the -ing form: hearing."]
    ]},
    { topics: "Note-making · Summary writing · Formal letter, report and article · Register", q: [
      ["What is the best way to make notes for a summary?", ["Copy whole paragraphs", "Write short key points in your own words", "Write only the title", "Include every example and quotation"], 1, "Notes should be brief key points, which you later turn into a summary."],
      ["Which phrase is suitable for a formal letter of complaint?", ["You guys messed up!", "I am writing to express my concern about…", "What's up with your service?", "Cheers for nothing."], 1, "Formal letters use polite, impersonal language."],
      ["A report usually includes…", ["headings and a recommendation", "rhyming lines", "dialogue between characters", "a cliffhanger ending"], 0, "Reports are organised with clear headings and often end with recommendations."],
      ["What is the main purpose of an article for a school magazine?", ["To interest and inform readers", "To complain to a company", "To give instructions for a machine", "To list prices"], 0, "Articles aim to engage and inform readers, often with a catchy title."],
      ["Which word means the same as “however” in formal writing?", ["Nevertheless", "Moreover", "Therefore", "Similarly"], 0, "“Nevertheless” introduces a contrast, just like “however”."]
    ]},
    { topics: "Writer's effects · Descriptive and narrative writing · Argument", q: [
      ["“The city was a beehive of activity.” Why does the writer use this metaphor?", ["To show the city was busy and full of movement", "To show the city had many bees", "To show the city was quiet", "To describe the weather"], 0, "Comparing the city to a beehive suggests constant, busy movement."],
      ["In descriptive writing, which detail is the most effective?", ["The room was nice.", "Dust drifted through a thin beam of afternoon light.", "It was a room.", "There were things in the room."], 1, "Precise, sensory details help the reader picture the scene."],
      ["Which structure works best for a story?", ["An opening, a build-up, a climax and a resolution", "A list of facts", "Only dialogue", "A table of results"], 0, "Most stories follow a clear arc: opening, build-up, climax and resolution."],
      ["Which is the strongest topic sentence for an argument essay about homework?", ["Homework is a thing.", "Homework should be limited because students also need time to rest and pursue hobbies.", "Some people do homework.", "I will now write about homework."], 1, "A strong topic sentence states a clear point and gives a reason."],
      ["What is the effect of using “you” in persuasive writing?", ["It speaks directly to the reader and involves them", "It makes the text more scientific", "It hides the writer's opinion", "It makes the text longer"], 0, "Addressing the reader as “you” makes the writing personal and engaging."]
    ]}
  ]
};

window.BILIM_CAMBRIDGE["10"] = {
  stage: "IGCSE · Year 2", course: "Cambridge IGCSE",
  math: [
    { topics: "Quadratics: factorising, completing the square · Functions: composite and inverse · Graphs of functions", q: [
      ["Solve x² − 5x + 6 = 0.", ["x = 2 or x = 3", "x = −2 or x = −3", "x = 1 or x = 6", "x = −1 or x = 6"], 0, "Factorise: (x − 2)(x − 3) = 0, so x = 2 or x = 3."],
      ["Write x² + 6x + 2 in the form (x + a)² + b.", ["(x + 3)² − 7", "(x + 3)² + 2", "(x + 6)² − 34", "(x + 3)² − 11"], 0, "(x + 3)² = x² + 6x + 9, so x² + 6x + 2 = (x + 3)² − 7."],
      ["f(x) = 2x + 1 and g(x) = x². Find fg(3).", ["19", "49", "10", "13"], 0, "First g(3) = 9, then f(9) = 2 × 9 + 1 = 19."],
      ["f(x) = 3x − 4. What is f⁻¹(x)?", ["(x + 4)/3", "(x − 4)/3", "3x + 4", "1/(3x − 4)"], 0, "Write y = 3x − 4 and solve for x: x = (y + 4)/3. So f⁻¹(x) = (x + 4)/3."],
      ["How many times does the graph of y = x² − 4x + 4 meet the x-axis?", ["0", "1", "2", "3"], 1, "x² − 4x + 4 = (x − 2)², so the graph only touches the x-axis at x = 2."]
    ]},
    { topics: "Pythagoras' theorem and trigonometry · Sine and cosine rules · Area of a triangle · Circle theorems", q: [
      ["In a right-angled triangle, the side opposite angle θ is 5 cm and the hypotenuse is 10 cm. What is θ?", ["30°", "45°", "60°", "90°"], 0, "sin θ = 5/10 = 0.5, so θ = 30°."],
      ["You know two sides of a triangle and the angle between them. Which rule finds the third side?", ["The sine rule", "The cosine rule", "Pythagoras' theorem only", "SOHCAHTOA only"], 1, "With two sides and the included angle, use a² = b² + c² − 2bc cos A."],
      ["Find the area of a triangle with sides 8 cm and 6 cm and an angle of 30° between them.", ["12 cm²", "24 cm²", "48 cm²", "14 cm²"], 0, "Area = ½ab sin C = ½ × 8 × 6 × 0.5 = 12 cm²."],
      ["What is the angle in a semicircle?", ["45°", "60°", "90°", "180°"], 2, "An angle at the circumference standing on a diameter is always 90°."],
      ["The angle at the centre of a circle is 110°. What is the angle at the circumference standing on the same arc?", ["55°", "110°", "220°", "70°"], 0, "The angle at the centre is twice the angle at the circumference: 110 ÷ 2 = 55°."]
    ]},
    { topics: "Vectors and transformations · Probability: tree diagrams · Statistics: histograms and cumulative frequency", q: [
      ["a = (3, −2) and b = (1, 5). What is a + b?", ["(4, 3)", "(2, −7)", "(4, −7)", "(3, −10)"], 0, "Add the components: 3 + 1 = 4 and −2 + 5 = 3."],
      ["The point (2, 1) is rotated 90° clockwise about the origin. Where does it go?", ["(1, −2)", "(−1, 2)", "(−2, 1)", "(2, −1)"], 0, "A 90° clockwise rotation about the origin maps (x, y) to (y, −x), so (2, 1) goes to (1, −2)."],
      ["A bag has 3 red and 2 blue balls. Two balls are taken without replacement. What is the probability that both are red?", ["9/25", "3/10", "6/25", "1/2"], 1, "P = 3/5 × 2/4 = 6/20 = 3/10."],
      ["In a histogram, the height of each bar shows…", ["the frequency", "the frequency density", "the class width", "the cumulative frequency"], 1, "Frequency density = frequency ÷ class width. The area of each bar shows the frequency."],
      ["A cumulative frequency graph shows the marks of 80 students. At which cumulative frequency do you read the median?", ["20", "40", "60", "80"], 1, "The median is halfway through the data: 80 ÷ 2 = 40."]
    ]}
  ],
  science: [
    { topics: "Biology: transport, gas exchange and respiration · Chemistry: energetics and rates of reaction · Physics: thermal physics", q: [
      ["Which blood vessels carry blood away from the heart?", ["Veins", "Arteries", "Capillaries", "Valves"], 1, "Arteries carry blood away from the heart at high pressure."],
      ["Which product of anaerobic respiration in human muscles causes fatigue?", ["Ethanol", "Lactic acid", "Carbon dioxide", "Glucose"], 1, "In humans, anaerobic respiration makes lactic acid, which builds up during hard exercise."],
      ["In an energy level diagram for an exothermic reaction, the products are…", ["higher than the reactants", "lower than the reactants", "at the same level", "not shown"], 1, "Exothermic reactions release energy, so the products have less energy than the reactants."],
      ["What does a catalyst do?", ["Speeds up a reaction without being used up", "Gets used up in the reaction", "Slows the reaction down", "Changes the products"], 0, "A catalyst gives a route with a lower activation energy and is unchanged at the end."],
      ["Why does a metal spoon feel colder than a wooden spoon at the same temperature?", ["Metal conducts heat away from your hand faster", "Metal is always colder", "Wood produces heat", "Metal has a lower density"], 0, "Both spoons are at the same temperature, but metal conducts thermal energy away from your hand faster."]
    ]},
    { topics: "Biology: coordination, response and homeostasis · Chemistry: the Periodic Table, metals and reactivity · Physics: waves, light and sound", q: [
      ["Which hormone lowers the blood glucose concentration?", ["Adrenaline", "Insulin", "Glucagon", "Testosterone"], 1, "Insulin, made by the pancreas, makes the liver and muscles take up glucose."],
      ["What is a reflex action?", ["A slow, learned response", "A fast, automatic response to a stimulus", "A response caused only by hormones", "A conscious decision"], 1, "Reflexes are rapid and automatic, like pulling your hand away from something hot."],
      ["Why are the noble gases unreactive?", ["They have a full outer shell of electrons", "They are metals", "They are liquids", "They have no electrons"], 0, "With a full outer shell, noble gases do not need to gain, lose or share electrons."],
      ["Which metal is extracted from its ore by electrolysis rather than by reduction with carbon?", ["Iron", "Aluminium", "Zinc", "Copper"], 1, "Aluminium is more reactive than carbon, so it is extracted by electrolysis."],
      ["Which electromagnetic waves have the shortest wavelength?", ["Radio waves", "Visible light", "X-rays", "Gamma rays"], 3, "Gamma rays have the shortest wavelength and the highest frequency in the electromagnetic spectrum."]
    ]},
    { topics: "Biology: inheritance and ecology · Chemistry: organic chemistry · Physics: electricity and nuclear physics", q: [
      ["A heterozygous tall pea plant (Tt) is crossed with a short plant (tt). What fraction of the offspring is expected to be short?", ["1/4", "1/2", "3/4", "0"], 1, "Tt × tt gives Tt, Tt, tt and tt, so half of the offspring are short."],
      ["What is the general formula of the alkanes?", ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁OH"], 1, "Alkanes are saturated hydrocarbons with the general formula CₙH₂ₙ₊₂."],
      ["Which test shows that a compound is unsaturated?", ["It turns limewater milky", "It decolourises bromine water", "It relights a glowing splint", "It turns blue litmus red"], 1, "Alkenes have a C=C double bond, which turns orange bromine water colourless."],
      ["Two 6 Ω resistors are connected in series. What is the total resistance?", ["3 Ω", "6 Ω", "12 Ω", "36 Ω"], 2, "In series, resistances add up: 6 + 6 = 12 Ω."],
      ["Which type of radiation is stopped by a sheet of paper?", ["Alpha", "Beta", "Gamma", "X-rays"], 0, "Alpha particles are the least penetrating. Paper or a few centimetres of air stop them."]
    ]}
  ],
  english: [
    { topics: "Reading: explicit and implicit meaning · Inference · Writer's language and effects", q: [
      ["Read: “Marat glanced at the clock for the tenth time and tapped his foot.” What can you infer?", ["Marat is impatient or nervous", "Marat is asleep", "Marat is calm and relaxed", "Marat cannot see the clock"], 0, "Checking the clock again and again and tapping his foot suggest impatience or nerves."],
      ["An implicit meaning is one that is…", ["stated directly", "suggested but not stated", "always false", "written in the title"], 1, "Implicit meanings are hinted at, so the reader must infer them."],
      ["“The wind screamed through the valley.” What effect does “screamed” create?", ["A sense of violence and danger", "A calm, peaceful mood", "A happy mood", "A sense of silence"], 0, "This personification makes the wind sound violent and frightening."],
      ["Which word has the most negative connotation?", ["slim", "slender", "skinny", "thin"], 2, "“Skinny” often suggests being too thin, while “slim” and “slender” sound positive."],
      ["Why might a writer use a list of three, such as “It was cold, dark and silent”?", ["To create rhythm and emphasis", "To confuse the reader", "To add numbers", "To end the text"], 0, "A list of three builds rhythm and emphasises the atmosphere."]
    ]},
    { topics: "Directed writing · Argumentative and discursive writing · Summary", q: [
      ["In a directed writing task, you must…", ["ignore the reading passages", "use and develop ideas from the passages for a given audience and purpose", "write a poem", "copy the passages"], 1, "Directed writing asks you to use the ideas in the texts, written for a specific audience and purpose."],
      ["What is the difference between argumentative and discursive writing?", ["Argumentative takes one side; discursive explores both sides", "They are the same", "Discursive takes one side; argumentative explores both sides", "Argumentative writing is always a story"], 0, "An argument persuades the reader towards one view. A discussion presents different views fairly."],
      ["Which connective best introduces a conclusion?", ["Furthermore", "In conclusion", "For example", "Meanwhile"], 1, "“In conclusion” signals that you are summing up."],
      ["A good summary should…", ["include your own opinion", "use your own words and avoid repetition", "add new examples", "be longer than the original"], 1, "A summary selects the key points and expresses them concisely in your own words."],
      ["Which sentence uses evidence to support a point?", ["Phones are bad.", "According to the school nurse, students who use phones late at night often feel tired in lessons.", "I hate phones.", "Phones are everywhere."], 1, "It supports the point with evidence from an expert source, not just an opinion."]
    ]},
    { topics: "Composition: descriptive and narrative writing · Tone and register · Exam technique", q: [
      ["Which sentence shows rather than tells?", ["She was scared.", "Her hands shook as she reached for the door handle.", "She felt fear.", "It was scary."], 1, "Showing uses actions and details, so the reader can work out the feeling."],
      ["What should you do with tenses in a narrative?", ["Mix all tenses randomly", "Choose one main tense, usually the past, and keep to it", "Always use the future", "Use only the present perfect"], 1, "A consistent tense makes the narrative clear and controlled."],
      ["What is the tone of “Congratulations on your fantastic achievement!”?", ["Celebratory", "Angry", "Sarcastic", "Neutral"], 0, "The exclamation and the positive words create a celebratory tone."],
      ["In an exam, what should you do first with a writing task?", ["Start writing immediately", "Read the task carefully and plan your ideas", "Count the words in the question", "Write the conclusion first"], 1, "Planning helps you organise your ideas and stay relevant to the task."],
      ["Which of these is a cliché that you should avoid in creative writing?", ["As cold as ice", "Frost crept along the window like a slow white tide", "Her breath hung in the air", "The pond wore a thin skin of ice"], 0, "“As cold as ice” is overused. Fresh images are more effective."]
    ]}
  ]
};

window.BILIM_CAMBRIDGE["11"] = {
  stage: "AS Level", course: "Cambridge International AS Level",
  math: [
    { topics: "Pure Mathematics: quadratics · Functions · Coordinate geometry", q: [
      ["For which values of k does x² + kx + 9 = 0 have equal roots?", ["k = ±3", "k = ±6", "k = 9", "k = ±9"], 1, "Equal roots when b² − 4ac = 0: k² − 36 = 0, so k = ±6."],
      ["What is the vertex of y = (x − 2)² + 5?", ["(2, 5)", "(−2, 5)", "(2, −5)", "(5, 2)"], 0, "In the form y = (x − a)² + b, the vertex is (a, b) = (2, 5)."],
      ["f(x) = x² + 1 for x ≥ 0. What is the range of f?", ["f(x) ≥ 0", "f(x) ≥ 1", "f(x) > 1", "all real numbers"], 1, "x² ≥ 0, so x² + 1 ≥ 1."],
      ["What is the gradient of a line perpendicular to y = 4x − 3?", ["4", "−4", "1/4", "−1/4"], 3, "Perpendicular gradients multiply to −1, so m = −1/4."],
      ["What are the centre and radius of the circle (x − 3)² + (y + 1)² = 16?", ["Centre (3, −1), radius 4", "Centre (−3, 1), radius 4", "Centre (3, −1), radius 16", "Centre (3, 1), radius 4"], 0, "(x − a)² + (y − b)² = r² has centre (a, b) and radius r."]
    ]},
    { topics: "Circular measure · Trigonometry · Series: binomial expansion, arithmetic and geometric progressions", q: [
      ["Convert 60° to radians.", ["π/6", "π/3", "π/2", "2π/3"], 1, "180° = π radians, so 60° = π/3."],
      ["What is the arc length of a sector with radius 5 cm and angle 1.2 radians?", ["6 cm", "15 cm", "4.2 cm", "30 cm"], 0, "s = rθ = 5 × 1.2 = 6 cm."],
      ["Solve sin x = 0.5 for 0° ≤ x ≤ 360°.", ["30° and 150°", "30° and 210°", "60° and 120°", "30° and 330°"], 0, "sin is positive in the first and second quadrants: 30° and 180° − 30° = 150°."],
      ["Find the sum to infinity of the geometric series 8 + 4 + 2 + 1 + …", ["15", "16", "12", "It has no sum"], 1, "a = 8 and r = ½, so S∞ = a ÷ (1 − r) = 8 ÷ ½ = 16."],
      ["What is the coefficient of x² in the expansion of (1 + 2x)⁵?", ["10", "20", "40", "80"], 2, "⁵C₂ × (2x)² = 10 × 4x² = 40x²."]
    ]},
    { topics: "Differentiation · Integration · Probability & Statistics: permutations, probability, the normal distribution", q: [
      ["Differentiate y = 3x⁴ − 2x.", ["12x³ − 2", "12x³", "3x³ − 2", "12x⁴ − 2"], 0, "d/dx(xⁿ) = nxⁿ⁻¹, so the derivative is 3 × 4x³ − 2 = 12x³ − 2."],
      ["Find ∫ 6x² dx.", ["2x³ + c", "12x + c", "6x³ + c", "3x² + c"], 0, "Add 1 to the power and divide by the new power: 6x³ ÷ 3 = 2x³. Remember + c."],
      ["At a stationary point of a curve, dy/dx is…", ["1", "0", "undefined", "always negative"], 1, "At a stationary point the gradient is zero."],
      ["In how many ways can the letters of the word LEVEL be arranged?", ["120", "60", "30", "20"], 2, "There are 5 letters, with L twice and E twice: 5! ÷ (2! × 2!) = 120 ÷ 4 = 30."],
      ["For a normal distribution, about what percentage of values lie within one standard deviation of the mean?", ["50%", "68%", "95%", "99.7%"], 1, "About 68% of values lie within one standard deviation of the mean."]
    ]}
  ],
  science: [
    { topics: "Biology: cell structure and biological molecules · Chemistry: atomic structure and the mole · Physics: kinematics", q: [
      ["Which structure is missing from prokaryotic cells?", ["Ribosomes", "Cell membrane", "Nucleus", "Cytoplasm"], 2, "Prokaryotes have no nucleus. Their DNA lies free in the cytoplasm."],
      ["Which type of bond links amino acids in a protein?", ["Glycosidic bond", "Peptide bond", "Ester bond", "Phosphodiester bond"], 1, "Amino acids join in condensation reactions to form peptide bonds."],
      ["What is the electron configuration of a sodium atom (Z = 11)?", ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁷", "1s² 2s² 2p⁶ 3p¹", "1s² 2s⁸ 3s¹"], 0, "Electrons fill 1s, 2s, 2p and then 3s: 2 + 2 + 6 + 1 = 11."],
      ["What volume does 0.5 mol of a gas occupy at room temperature and pressure? (molar volume = 24 dm³)", ["12 dm³", "24 dm³", "48 dm³", "6 dm³"], 0, "V = n × 24 = 0.5 × 24 = 12 dm³."],
      ["A ball is dropped from rest. Ignoring air resistance, how far does it fall in 2 s? (g = 9.81 m/s²)", ["9.81 m", "19.6 m", "39.2 m", "4.9 m"], 1, "s = ½gt² = ½ × 9.81 × 4 ≈ 19.6 m."]
    ]},
    { topics: "Biology: enzymes, membranes and transport · Chemistry: chemical bonding and energetics · Physics: work, energy and power", q: [
      ["What does a competitive inhibitor do?", ["It binds to the active site and blocks the substrate", "It binds elsewhere and changes the active site", "It increases the rate of reaction", "It denatures the enzyme with heat"], 0, "Competitive inhibitors have a similar shape to the substrate and compete for the active site."],
      ["Which molecules form the basic structure of cell membranes?", ["Phospholipids", "Starch", "Cellulose", "Glycogen"], 0, "Membranes are built from a phospholipid bilayer with proteins in it (the fluid mosaic model)."],
      ["What is the shape of a methane (CH₄) molecule?", ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"], 2, "Four bonding pairs repel equally, giving a tetrahedral shape with bond angles of 109.5°."],
      ["What is the standard enthalpy change of combustion?", ["The enthalpy change when 1 mol of a substance burns completely in oxygen under standard conditions", "The energy needed to melt 1 mol of a substance", "The energy released when 1 mol of water forms from its ions", "The energy needed to break all the bonds in a molecule"], 0, "ΔHc is defined for the complete combustion of one mole under standard conditions."],
      ["A 2 kg object moves at 3 m/s. What is its kinetic energy?", ["6 J", "9 J", "18 J", "3 J"], 1, "Eₖ = ½mv² = ½ × 2 × 3² = 9 J."]
    ]},
    { topics: "Biology: nucleic acids, the cell cycle and immunity · Chemistry: equilibria and reaction kinetics · Physics: waves and electricity", q: [
      ["Which base pairs with adenine in DNA?", ["Guanine", "Cytosine", "Thymine", "Uracil"], 2, "In DNA, adenine pairs with thymine, and cytosine pairs with guanine."],
      ["What does mitosis produce?", ["Two genetically identical daughter cells", "Four different gametes", "One large cell", "Two cells with half the chromosomes"], 0, "Mitosis produces two genetically identical cells for growth and repair."],
      ["According to Le Chatelier's principle, increasing the pressure on a gas equilibrium shifts it…", ["towards the side with fewer gas molecules", "towards the side with more gas molecules", "nowhere", "always to the right"], 0, "The system opposes the change by reducing the number of gas molecules."],
      ["A wave has a frequency of 50 Hz and a wavelength of 4 m. What is its speed?", ["12.5 m/s", "200 m/s", "54 m/s", "0.08 m/s"], 1, "v = fλ = 50 × 4 = 200 m/s."],
      ["A current of 2 A flows for 30 s. How much charge passes?", ["15 C", "60 C", "32 C", "0.067 C"], 1, "Q = It = 2 × 30 = 60 C."]
    ]}
  ],
  english: [
    { topics: "Reading: form, structure and language · Audience, purpose and context · Voice", q: [
      ["What does “audience” mean when you analyse a text?", ["The people the text is written for", "The writer's name", "The length of the text", "The publisher"], 0, "Audience means the intended readers or listeners."],
      ["A text uses short paragraphs, bold headings and bullet points. What is the most likely reason for this structure?", ["To make the information easy to scan", "To create suspense", "To make the text poetic", "To hide information"], 0, "This structure helps readers find information quickly."],
      ["Which features are typical of a speech?", ["Direct address and repetition", "Footnotes", "Stage directions", "An index"], 0, "Speeches often address the audience directly and repeat key ideas for impact."],
      ["What is a writer's “voice”?", ["The distinctive personality and style that comes through in the writing", "The volume of a recording", "The grammar rules", "The title of the text"], 0, "Voice is the sense of a particular personality behind the writing."],
      ["Which sentence uses the passive voice to avoid saying who is responsible?", ["We made a mistake.", "Mistakes were made.", "The manager made a mistake.", "I made mistakes."], 1, "“Mistakes were made” hides the agent, a common technique in formal or political language."]
    ]},
    { topics: "Directed writing · Writing for a specific audience · Comparing texts", q: [
      ["You rewrite a formal report as a blog post for teenagers. What should change the most?", ["Register and tone", "The topic", "The language: into French", "Nothing"], 0, "Adapting a text for a new audience mainly changes its register, tone and style."],
      ["When you compare two texts, a strong answer…", ["discusses each text separately with no links", "links similarities and differences throughout", "summarises only one text", "lists the writers' names"], 1, "Good comparison integrates the texts and links points about both."],
      ["Which opening suits a formal speech to a school board?", ["Hey guys, listen up!", "Respected members of the board, thank you for this opportunity.", "Yo, what's up?", "Let's get this over with."], 1, "Formal speeches open with polite, respectful address."],
      ["What does “register” mean?", ["The level of formality of the language", "A list of students", "The number of paragraphs", "The rhyme scheme"], 0, "Register is the variety of language chosen for a context, from formal to informal."],
      ["Which change makes writing more concise?", ["“due to the fact that” → “because”", "“because” → “due to the fact that”", "“now” → “at this point in time”", "“use” → “make use of”"], 0, "“Because” means the same as “due to the fact that”, in fewer words."]
    ]},
    { topics: "Imaginative writing · Discursive and argumentative writing · Grammar and style", q: [
      ["What is free indirect speech?", ["Narration that blends a character's thoughts with the narrator's voice", "Speech in quotation marks", "A list of quotations", "A dialogue in a play"], 0, "Free indirect speech presents a character's thoughts in the third person without “she thought”."],
      ["Which modal verb expresses the strongest obligation?", ["might", "could", "must", "may"], 2, "“Must” expresses strong obligation or certainty."],
      ["What is a subordinate clause?", ["A clause that cannot stand alone as a sentence", "The main clause", "A single word", "A question"], 0, "A subordinate clause depends on a main clause, for example “because it rained”."],
      ["Which technique does “What kind of future are we leaving our children?” use?", ["Rhetorical question", "Simile", "Onomatopoeia", "Alliteration"], 0, "It asks a question for effect, to make the audience think."],
      ["In a discursive essay, the conclusion should…", ["introduce a completely new topic", "weigh up the arguments and give a balanced judgement", "repeat the introduction word for word", "only list sources"], 1, "A good conclusion evaluates both sides and reaches a reasoned judgement."]
    ]}
  ]
};
