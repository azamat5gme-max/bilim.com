/* Bilim · Cambridge questions for grades 9–11 (Cambridge IGCSE and AS Level).
   Grade 9 = IGCSE year 1 (first half of each book), grade 10 = IGCSE year 2 (second half), grade 11 = AS Level.
   IGCSE books: Mathematics Core and Extended, Essential Biology, Essential Chemistry, Essential Physics,
   Economics and Computer Science. IGCSE English and AS Level keep their earlier questions.
   These are original questions written for the syllabus topics. They are not copied from any book.

   Each question: ["Question", ["A", "B", "C", "D"], right answer (0 = A, 1 = B, 2 = C, 3 = D), "Explanation"]
   Each grade lists its subjects (subjects) and the school's book for each subject (books).
   Each subject has 3 terms: { topics: "...", q: [questions] } */
window.BILIM_CAMBRIDGE = window.BILIM_CAMBRIDGE || {};

window.BILIM_CAMBRIDGE["9"] = {
  stage: "IGCSE · Year 1", course: "Cambridge IGCSE",
  subjects: ["math", "biology", "chemistry", "physics", "economics", "cs", "english"],
  books: {
    math: "Cambridge IGCSE Mathematics Core and Extended · Coursebook + Workbook",
    biology: "Cambridge IGCSE & O Level Essential Biology (3rd edition)",
    chemistry: "Cambridge IGCSE & O Level Essential Chemistry (3rd edition)",
    physics: "Cambridge IGCSE & O Level Essential Physics (3rd edition)",
    economics: "Cambridge IGCSE and O Level Economics (2nd edition)",
    cs: "Cambridge IGCSE and O Level Computer Science (2nd edition)"
  },
  math: [
    { topics: "Number: number and language · accuracy and bounds · calculations and order · fractions, decimals and percentages · further percentages · ratio and proportion · indices, standard form and surds", q: [
      ["Which of these is a prime number?", ["21", "27", "29", "33"], 2, "29 has exactly two factors, 1 and 29. 21 = 3 × 7, 27 = 3 × 9 and 33 = 3 × 11."],
      ["Round 0.006 482 to 3 significant figures.", ["0.00648", "0.006", "0.0065", "0.00649"], 0, "The first significant figure is 6. Keep 6, 4, 8; the next digit is 2, so round down: 0.00648."],
      ["A length is 12 cm, correct to the nearest centimetre. What is its upper bound?", ["12.4 cm", "12.5 cm", "12.9 cm", "13 cm"], 1, "The bounds are half a unit either side: 11.5 cm ≤ length < 12.5 cm."],
      ["Work out 2 + 3 × 4².", ["50", "196", "146", "80"], 0, "Indices first: 4² = 16. Then multiply: 3 × 16 = 48. Then add: 2 + 48 = 50."],
      ["After a 20% increase, a price is 960 som. What was the original price?", ["768 som", "800 som", "1152 som", "940 som"], 1, "960 som is 120% of the original, so divide by 1.2: 960 ÷ 1.2 = 800 som."],
      ["Divide 84 in the ratio 3 : 4.", ["36 and 48", "21 and 63", "28 and 56", "12 and 72"], 0, "3 + 4 = 7 parts. One part is 84 ÷ 7 = 12, so the shares are 36 and 48."],
      ["Simplify √50.", ["25√2", "5√2", "2√5", "10√5"], 1, "√50 = √(25 × 2) = √25 × √2 = 5√2."],
      ["Write 0.000 307 in standard form.", ["3.07 × 10⁻⁴", "3.07 × 10⁴", "30.7 × 10⁻⁵", "3.07 × 10⁻³"], 0, "Move the decimal point 4 places right to get 3.07, so the answer is 3.07 × 10⁻⁴."]
    ]},
    { topics: "Money and finance · time · set notation and Venn diagrams · algebraic manipulation · algebraic indices · equations and inequalities · sequences", q: [
      ["5000 som is invested at 4% compound interest per year. What is it worth after 2 years?", ["5400 som", "5408 som", "5416 som", "5200 som"], 1, "5000 × 1.04² = 5000 × 1.0816 = 5408 som."],
      ["A train leaves at 22:45 and arrives at 01:20 the next day. How long is the journey?", ["2 h 35 min", "3 h 25 min", "2 h 25 min", "21 h 25 min"], 0, "22:45 to 00:45 is 2 hours, and 00:45 to 01:20 is 35 minutes."],
      ["A = {2, 4, 6, 8} and B = {4, 8, 12}. What is A ∩ B?", ["{4, 8}", "{2, 4, 6, 8, 12}", "{2, 6}", "{12}"], 0, "∩ means intersection: the elements that are in both sets."],
      ["Factorise x² + 5x + 6.", ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x − 2)(x − 3)", "(x + 5)(x + 1)"], 0, "Find two numbers that multiply to 6 and add to 5: 2 and 3."],
      ["Simplify (2x³)².", ["2x⁶", "4x⁵", "4x⁶", "2x⁹"], 2, "Square each part: 2² = 4 and (x³)² = x⁶."],
      ["Solve x² − 9 = 0.", ["x = 3 only", "x = 3 or x = −3", "x = 9", "x = 4.5"], 1, "x² = 9, so x = 3 or x = −3, because (−3)² = 9 too."],
      ["Solve 7 − 2x ≤ 1.", ["x ≤ 3", "x ≥ 3", "x ≥ −3", "x ≤ −3"], 1, "−2x ≤ −6. Dividing by a negative number reverses the inequality: x ≥ 3."],
      ["What is the nth term of 3, 7, 11, 15, …?", ["4n − 1", "4n + 3", "3n + 4", "n + 4"], 0, "The difference is 4, so start with 4n. When n = 1, 4 − 1 = 3, so the nth term is 4n − 1."]
    ]},
    { topics: "Proportion · graphs in practical situations · graphs of functions · differentiation and the gradient function · functions · straight-line graphs", q: [
      ["y is inversely proportional to x. When x = 4, y = 6. Find y when x = 3.", ["4.5", "8", "18", "2"], 1, "y = k/x, so k = 4 × 6 = 24. When x = 3, y = 24 ÷ 3 = 8."],
      ["On a speed–time graph, what does the area under the graph represent?", ["Acceleration", "Distance travelled", "Speed", "Time"], 1, "Area under a speed–time graph = distance. The gradient gives the acceleration."],
      ["What shape is the graph of y = x² − 4?", ["A straight line", "A U-shaped parabola", "A circle", "A hyperbola"], 1, "Quadratic graphs are parabolas. This one has its lowest point at (0, −4)."],
      ["Differentiate y = 3x².", ["3x", "6x", "6x²", "x³"], 1, "Multiply by the power and reduce the power by 1: 2 × 3x¹ = 6x."],
      ["f(x) = 2x + 1. What is f⁻¹(x)?", ["(x − 1)/2", "2x − 1", "1/(2x + 1)", "(x + 1)/2"], 0, "Write y = 2x + 1 and rearrange for x: x = (y − 1)/2. So f⁻¹(x) = (x − 1)/2."],
      ["f(x) = x² and g(x) = x + 3. Find fg(2).", ["7", "25", "10", "13"], 1, "Do g first: g(2) = 5. Then f(5) = 25."],
      ["What is the gradient of the line through (1, 3) and (4, 12)?", ["3", "9", "1/3", "4"], 0, "Gradient = change in y ÷ change in x = (12 − 3) ÷ (4 − 1) = 9 ÷ 3 = 3."],
      ["Which line is parallel to y = 2x + 5?", ["y = 5x + 2", "y = 2x − 3", "y = −2x + 5", "y = ½x + 5"], 1, "Parallel lines have the same gradient. y = 2x − 3 also has gradient 2."]
    ]}
  ],
  biology: [
    { topics: "Units 1–4: characteristics and classification of living organisms · organisation of the organism · movement into and out of cells · biological molecules", q: [
      ["What is the binomial system of naming organisms?", ["Using the genus and the species name, for example Homo sapiens", "Naming organisms by colour and size", "Giving each species a number", "Using the common English name"], 0, "Every species has a two-part Latin name: the genus first (with a capital letter), then the species."],
      ["Which of these animals is an arthropod?", ["An earthworm", "A spider", "A snail", "A frog"], 1, "Arthropods have jointed legs and an exoskeleton. Spiders are arachnids, a group of arthropods."],
      ["Which organelle is the site of aerobic respiration?", ["Ribosome", "Mitochondrion", "Chloroplast", "Nucleus"], 1, "Mitochondria release energy from glucose by aerobic respiration."],
      ["Osmosis is the net movement of…", ["any particles from a high to a low concentration", "water molecules through a partially permeable membrane from a dilute to a more concentrated solution", "glucose using energy", "oxygen into the lungs"], 1, "In osmosis, water moves from where there is more water (dilute solution) to where there is less (concentrated solution)."],
      ["How is active transport different from diffusion?", ["It uses energy from respiration and can move substances against a concentration gradient", "It only happens in plants", "It is always faster", "It does not need a membrane"], 0, "Root hair cells use active transport to take in mineral ions from soil where they are less concentrated."],
      ["Which reagent tests for reducing sugars, giving an orange-red colour when heated?", ["Iodine solution", "Benedict's solution", "Biuret reagent", "Ethanol"], 1, "Benedict's solution starts blue. Heated with a reducing sugar, it turns green, yellow or orange-red."],
      ["What are proteins made from?", ["Glucose", "Amino acids", "Fatty acids and glycerol", "Starch"], 1, "Proteins are long chains of amino acids. Fats are made from fatty acids and glycerol."]
    ]},
    { topics: "Units 5–7: enzymes · plant nutrition: photosynthesis, limiting factors, leaves, mineral requirements · human nutrition: diet, digestion and absorption", q: [
      ["What are enzymes made of?", ["Carbohydrate", "Protein", "Fat", "Minerals"], 1, "Enzymes are proteins that act as biological catalysts."],
      ["Why does an enzyme stop working at a high temperature?", ["It is denatured: the shape of its active site changes", "It runs out of energy", "It turns into fat", "It dissolves"], 0, "If the active site changes shape, the substrate no longer fits, so the reaction cannot be catalysed."],
      ["Which is the balanced equation for photosynthesis?", ["6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "CO₂ + H₂O → CH₄ + O₂", "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂"], 0, "Carbon dioxide and water make glucose and oxygen, using light energy absorbed by chlorophyll."],
      ["Which of these is NOT a limiting factor for photosynthesis?", ["Light intensity", "Carbon dioxide concentration", "Temperature", "Oxygen concentration"], 3, "Light intensity, carbon dioxide concentration and temperature can limit the rate. Oxygen is a product."],
      ["Plants need magnesium ions to make…", ["chlorophyll", "starch", "cellulose", "oxygen"], 0, "Without magnesium, leaves turn yellow between the veins because they cannot make chlorophyll."],
      ["Where is bile made, and what does it do?", ["In the liver; it emulsifies fats", "In the stomach; it digests protein", "In the pancreas; it digests starch", "In the large intestine; it absorbs water"], 0, "Bile is made in the liver and stored in the gall bladder. It breaks fat into small droplets and neutralises stomach acid."],
      ["What is the role of the villi in the small intestine?", ["To increase the surface area for absorption", "To make stomach acid", "To push food along", "To kill bacteria"], 0, "Millions of villi, with thin walls and many capillaries, make absorption fast."]
    ]},
    { topics: "Units 8–10: transport in plants: xylem, transpiration, translocation · transport in animals: the heart, blood vessels, blood · diseases and immunity", q: [
      ["Which tissue transports water and mineral ions in plants?", ["Phloem", "Xylem", "Arteries", "Stomata"], 1, "Xylem vessels carry water and minerals up from the roots. Phloem carries sugars."],
      ["Which change makes transpiration faster?", ["Higher humidity", "Higher temperature and more wind", "Darkness", "Closed stomata"], 1, "Warm, windy, dry conditions make water evaporate from leaves faster."],
      ["What is translocation?", ["The movement of water in xylem", "The movement of sucrose and amino acids in phloem", "The movement of oxygen in blood", "The uptake of minerals by roots"], 1, "Phloem carries sucrose and amino acids from the leaves to where they are used or stored."],
      ["Which chamber of the heart pumps blood to the body?", ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"], 3, "The left ventricle pumps oxygenated blood into the aorta and around the body."],
      ["Why does the left ventricle have a thicker wall than the right ventricle?", ["It pumps blood all around the body at higher pressure", "It holds more blood", "It receives blood from the lungs", "It pumps blood only to the lungs"], 0, "The right ventricle only pumps blood to the nearby lungs, so it needs less muscle."],
      ["What is a pathogen?", ["A disease-causing organism", "A white blood cell", "An antibody", "A vaccine"], 0, "Pathogens include some bacteria, viruses, fungi and protoctists."],
      ["Why don't antibiotics work against viruses?", ["Viruses are too big", "Viruses do not have the cell structures that antibiotics attack", "Viruses are always harmless", "Antibiotics only kill plant cells"], 1, "Antibiotics damage bacterial cells. Viruses are not cells, so antibiotics do not affect them."]
    ]}
  ],
  chemistry: [
    { topics: "States of matter · atoms, elements and compounds: atomic structure, isotopes, ions, ionic, covalent and metallic bonding, giant structures", q: [
      ["In which state are particles closest together and only vibrate in fixed positions?", ["Solid", "Liquid", "Gas", "All three equally"], 0, "In a solid the particles are packed in a regular arrangement and vibrate about fixed positions."],
      ["Which gas diffuses fastest?", ["Chlorine (Mᵣ = 71)", "Carbon dioxide (Mᵣ = 44)", "Ammonia (Mᵣ = 17)", "Oxygen (Mᵣ = 32)"], 2, "Gases with a lower relative molecular mass diffuse faster."],
      ["An atom has 17 protons and 18 neutrons. What is its mass number?", ["17", "18", "35", "1"], 2, "Mass number = protons + neutrons = 17 + 18 = 35."],
      ["Isotopes of an element have the same number of protons but a different number of…", ["electrons", "neutrons", "shells", "ions"], 1, "For example, chlorine-35 and chlorine-37 have 18 and 20 neutrons."],
      ["How does a magnesium atom form an ion?", ["It gains 2 electrons to form Mg²⁻", "It loses 2 electrons to form Mg²⁺", "It loses 2 protons", "It shares 2 electrons"], 1, "Metal atoms lose their outer electrons to form positive ions. Magnesium is in Group II, so it forms Mg²⁺."],
      ["What type of bonding holds sodium chloride together?", ["Covalent", "Ionic", "Metallic", "None"], 1, "Na⁺ and Cl⁻ ions are held together by strong electrostatic attraction in a giant ionic lattice."],
      ["Why does diamond have a very high melting point?", ["It is a giant covalent structure with many strong covalent bonds", "It has weak forces between small molecules", "It is a metal", "It is made of ions"], 0, "Each carbon atom is bonded to four others, and all those bonds must be broken to melt it."]
    ]},
    { topics: "Stoichiometry: formulae, balancing equations, relative masses, the mole, gas volumes, concentration", q: [
      ["What is the relative formula mass (Mᵣ) of CO₂? (C = 12, O = 16)", ["28", "44", "32", "60"], 1, "12 + 16 + 16 = 44."],
      ["Balance the equation: _H₂ + O₂ → _H₂O. Which number goes in front of H₂ and H₂O?", ["1", "2", "3", "4"], 1, "2H₂ + O₂ → 2H₂O: there are 4 H atoms and 2 O atoms on each side."],
      ["What is the formula of aluminium oxide? (Ions: Al³⁺ and O²⁻)", ["AlO", "Al₂O₃", "Al₃O₂", "AlO₃"], 1, "The charges must cancel: 2 × (+3) = +6 and 3 × (−2) = −6."],
      ["How many moles are in 36 g of water? (Mᵣ of H₂O = 18)", ["0.5", "2", "18", "648"], 1, "Moles = mass ÷ Mᵣ = 36 ÷ 18 = 2 mol."],
      ["What volume does 1 mole of any gas occupy at room temperature and pressure?", ["22.4 dm³", "24 dm³", "1 dm³", "12 dm³"], 1, "At r.t.p., one mole of any gas occupies 24 dm³ (24 000 cm³)."],
      ["0.5 mol of a solute is dissolved to make 250 cm³ of solution. What is the concentration?", ["0.125 mol/dm³", "2 mol/dm³", "0.5 mol/dm³", "125 mol/dm³"], 1, "250 cm³ = 0.25 dm³. Concentration = 0.5 ÷ 0.25 = 2 mol/dm³."]
    ]},
    { topics: "Electrochemistry: electrolysis, electroplating, hydrogen fuel cells · chemical energetics: exothermic and endothermic reactions, bond energies", q: [
      ["Molten lead(II) bromide is electrolysed. What forms at the cathode?", ["Bromine", "Lead", "Oxygen", "Hydrogen"], 1, "Positive Pb²⁺ ions move to the negative cathode and gain electrons to form lead metal."],
      ["During electrolysis, which ions move to the anode?", ["Positive ions (cations)", "Negative ions (anions)", "Neutrons", "Protons"], 1, "The anode is positive, so it attracts negative ions, which lose electrons there."],
      ["Concentrated aqueous sodium chloride is electrolysed. Which gas forms at the cathode?", ["Chlorine", "Hydrogen", "Oxygen", "Sodium"], 1, "Hydrogen is less reactive than sodium, so hydrogen gas forms at the cathode. Chlorine forms at the anode."],
      ["A hydrogen–oxygen fuel cell produces electricity and…", ["carbon dioxide", "water", "sulfur dioxide", "methane"], 1, "Hydrogen and oxygen react to make water only, so there is no carbon dioxide at the point of use."],
      ["In an exothermic reaction, the temperature of the surroundings…", ["decreases", "increases", "stays the same", "falls to zero"], 1, "Exothermic reactions transfer energy to the surroundings, so they get warmer. Burning fuel is an example."],
      ["Which statement about bonds is correct?", ["Breaking bonds is exothermic and making bonds is endothermic", "Breaking bonds is endothermic and making bonds is exothermic", "Both are exothermic", "Both are endothermic"], 1, "Energy is needed to break bonds and released when new bonds form. The balance decides if a reaction is exo- or endothermic."]
    ]}
  ],
  physics: [
    { topics: "Motion, forces and energy (1): physical quantities and measurement, scalars and vectors, speed, velocity and acceleration, motion graphs, mass and weight, density", q: [
      ["Which of these is a vector quantity?", ["Speed", "Mass", "Velocity", "Distance"], 2, "A vector has size and direction. Velocity is speed in a given direction."],
      ["A car accelerates from rest to 20 m/s in 5 s. What is its acceleration?", ["4 m/s²", "100 m/s²", "0.25 m/s²", "25 m/s²"], 0, "Acceleration = change in velocity ÷ time = 20 ÷ 5 = 4 m/s²."],
      ["On a distance–time graph, what does the gradient show?", ["Acceleration", "Speed", "Distance", "Force"], 1, "A steeper line means a greater speed."],
      ["What is weight?", ["The amount of matter in an object", "The gravitational force on an object", "Another word for mass", "Measured in kilograms"], 1, "Weight is a force, measured in newtons: W = mg. Mass is measured in kilograms."],
      ["How can you find the volume of an irregular stone?", ["Weigh it", "Measure the volume of water it displaces in a measuring cylinder", "Measure only its length", "Heat it"], 1, "The rise in the water level equals the stone's volume. Then density = mass ÷ volume."],
      ["An object falls near the Earth's surface with no air resistance. What is its acceleration?", ["About 1 m/s²", "About 9.8 m/s²", "About 98 m/s²", "Zero"], 1, "All objects in free fall near the Earth accelerate at g ≈ 9.8 m/s²."]
    ]},
    { topics: "Motion, forces and energy (2): resultant force and F = ma, springs, momentum, energy stores, work and power, pressure in liquids", q: [
      ["A resultant force of 12 N acts on a 3 kg mass. What is its acceleration?", ["36 m/s²", "4 m/s²", "0.25 m/s²", "15 m/s²"], 1, "a = F ÷ m = 12 ÷ 3 = 4 m/s²."],
      ["A spring obeys Hooke's law. A force of 2 N stretches it by 4 cm. How far will a 5 N force stretch it?", ["8 cm", "10 cm", "20 cm", "2.5 cm"], 1, "Extension is proportional to force: 4 cm ÷ 2 N = 2 cm per newton, so 5 N gives 10 cm."],
      ["What is the momentum of a 1500 kg car moving at 20 m/s?", ["75 kg m/s", "30 000 kg m/s", "1520 kg m/s", "300 kg m/s"], 1, "Momentum = mass × velocity = 1500 × 20 = 30 000 kg m/s."],
      ["A 2 kg ball is lifted 5 m. How much gravitational potential energy does it gain? (g = 10 N/kg)", ["10 J", "100 J", "50 J", "20 J"], 1, "ΔEp = mgh = 2 × 10 × 5 = 100 J."],
      ["A motor does 600 J of work in 4 s. What is its power?", ["150 W", "2400 W", "604 W", "0.0067 W"], 0, "Power = work done ÷ time = 600 ÷ 4 = 150 W."],
      ["What is the pressure caused by water 10 m below the surface? (density = 1000 kg/m³, g = 10 N/kg)", ["10 000 Pa", "100 000 Pa", "1000 Pa", "1 000 000 Pa"], 1, "Pressure = ρgh = 1000 × 10 × 10 = 100 000 Pa."]
    ]},
    { topics: "Thermal physics: the kinetic particle model, gas pressure, thermal expansion, specific heat capacity, melting and boiling, conduction, convection and radiation", q: [
      ["Why does a gas exert pressure on the walls of its container?", ["Its particles collide with the walls", "Its particles are heavy", "Its particles stick to the walls", "Because the gas is hot"], 0, "Each collision pushes on the wall. Many collisions per second give a steady pressure."],
      ["A gas in a sealed container is heated. What happens to its particles and its pressure?", ["They move faster, so the pressure increases", "They get bigger, so the pressure falls", "They stop moving", "They move slower, so the pressure increases"], 0, "Faster particles hit the walls more often and harder, so the pressure rises."],
      ["While a pure solid is melting, its temperature stays the same. Why?", ["The energy is used to break the forces between the particles", "No energy is being supplied", "The particles stop moving", "The thermometer stops working"], 0, "The energy supplied separates the particles instead of making them move faster."],
      ["How much energy is needed to heat 2 kg of water by 5 °C? (specific heat capacity of water = 4200 J/(kg °C))", ["8400 J", "42 000 J", "21 000 J", "420 J"], 1, "ΔE = mcΔθ = 2 × 4200 × 5 = 42 000 J."],
      ["Why are small gaps left between sections of some railway track and bridges?", ["To let rain drain away", "To allow for thermal expansion in hot weather", "To make trains quieter", "To save metal"], 1, "Metal expands when it gets hot. Without gaps, the track could buckle."],
      ["Which kind of thermal energy transfer can happen through a vacuum?", ["Conduction", "Convection", "Radiation", "Evaporation"], 2, "Infrared radiation is an electromagnetic wave and needs no particles. That is how the Sun heats the Earth."]
    ]}
  ],
  economics: [
    { topics: "1 The basic economic problem: scarcity, factors of production, opportunity cost, PPC · 2 Allocation of resources: markets, demand, supply, price determination", q: [
      ["What is the basic economic problem?", ["Resources are scarce but wants are unlimited", "Prices are always too high", "Governments spend too much", "There is too much money"], 0, "Because resources are limited, people, firms and governments must make choices."],
      ["Which of these is a factor of production?", ["Money in a bank", "Land", "A share certificate", "A bus ticket"], 1, "The four factors of production are land, labour, capital and enterprise."],
      ["Aibek studies on Saturday instead of working a 1000 som shift. What is his opportunity cost?", ["Nothing", "The 1000 som he could have earned", "The cost of his books", "His school fees"], 1, "Opportunity cost is the next best alternative given up when a choice is made."],
      ["What does a point inside a production possibility curve (PPC) show?", ["An output the economy cannot reach", "Unemployed or inefficiently used resources", "Maximum efficiency", "Economic growth"], 1, "The economy could produce more of both goods by using all its resources fully."],
      ["According to the law of demand, if the price of a good rises, the quantity demanded…", ["rises", "falls", "stays the same", "doubles"], 1, "Higher prices usually mean consumers buy less, so the demand curve slopes downwards."],
      ["Which of these would shift the supply curve of wheat to the right?", ["A drought", "Better technology on farms", "A new tax on wheat", "Higher wages for farm workers"], 1, "Better technology lowers costs, so farmers supply more wheat at every price."],
      ["What is the equilibrium price?", ["The price at which demand equals supply", "The highest possible price", "A price set by the government", "The cost of making the good"], 0, "At the equilibrium price the market clears: there is no surplus and no shortage."]
    ]},
    { topics: "2 Allocation of resources: price changes, price elasticity of demand and supply, market and mixed economic systems, market failure", q: [
      ["The PED of a good is −2. If its price rises by 10%, what happens to quantity demanded?", ["It falls by 20%", "It falls by 5%", "It rises by 20%", "It falls by 2%"], 0, "PED = % change in quantity demanded ÷ % change in price, so the change is −2 × 10% = −20%."],
      ["When is demand for a product price inelastic?", ["When a change in price causes a smaller percentage change in quantity demanded", "When quantity demanded changes a lot after a small price change", "When there are many close substitutes", "When PED is greater than 1"], 0, "For price inelastic demand, PED is between 0 and 1. Necessities such as salt and fuel are examples."],
      ["A product with many close substitutes usually has demand that is…", ["price elastic", "price inelastic", "perfectly inelastic", "unrelated to price"], 0, "If the price rises, consumers can easily switch to a substitute."],
      ["Which of these is a merit good?", ["Cigarettes", "Education", "Fizzy drinks", "Fast food"], 1, "Merit goods, such as education and healthcare, have benefits that people tend to undervalue, so markets under-provide them."],
      ["Street lighting is non-excludable. What does this mean?", ["People who do not pay cannot be stopped from using it", "It is very expensive", "Only rich people can use it", "It runs out quickly"], 0, "Non-excludable public goods suffer from the free-rider problem, so governments usually provide them."],
      ["What is a mixed economy?", ["An economy where resources are allocated by both the private sector and the government", "An economy where only the government owns firms", "An economy with no government", "An economy with only farms"], 0, "Most countries, including Kyrgyzstan, are mixed economies."]
    ]},
    { topics: "3 Microeconomic decision makers: money and banking, households, workers, trade unions, firms and production, costs and revenue, market structure", q: [
      ["Which of these is a function of money?", ["A medium of exchange", "A factor of production", "A type of tax", "A public good"], 0, "Money is a medium of exchange, a measure of value, a store of value and a standard for deferred payment."],
      ["What is one role of a central bank?", ["Selling goods to households", "Issuing the currency and running monetary policy", "Running all the shops", "Employing all teachers"], 1, "In Kyrgyzstan, the National Bank issues the som and sets interest rates."],
      ["As a household's income rises, it usually…", ["saves a larger proportion of its income", "saves nothing", "spends all its income on necessities", "stops paying taxes"], 0, "Richer households can afford their needs and still save more of their income."],
      ["Why does a surgeon usually earn more than a cleaner?", ["Surgeons need long training and have scarce, high-value skills", "Cleaners work fewer hours", "There are too many surgeons", "Cleaning is a primary sector job"], 0, "Wages are higher when the supply of workers with the right skills is low and demand is high."],
      ["A firm has fixed costs of 2000 som and variable costs of 3000 som. What is its total cost?", ["1000 som", "5000 som", "6000 som", "3000 som"], 1, "Total cost = fixed cost + variable cost = 2000 + 3000 = 5000 som."],
      ["What are economies of scale?", ["Falls in average cost as a firm grows", "Total costs falling to zero", "Prices that always rise", "Needing fewer workers"], 0, "Large firms can buy in bulk, use specialised machines and borrow more cheaply."],
      ["What is a market with only one supplier called?", ["A monopoly", "A competitive market", "A partnership", "A cooperative"], 0, "A monopoly can charge higher prices because consumers have no other supplier."]
    ]}
  ],
  cs: [
    { topics: "1 Data representation: binary, denary and hexadecimal, binary addition and shifts, text, sound and images, data storage and file compression", q: [
      ["What is the binary number 1011 in denary?", ["9", "11", "13", "1011"], 1, "1011 = 8 + 0 + 2 + 1 = 11."],
      ["What is the denary number 200 in hexadecimal?", ["C8", "8C", "B8", "128"], 0, "200 = 12 × 16 + 8. 12 is C in hexadecimal, so 200 = C8."],
      ["Add the binary numbers 0110 + 0011.", ["1001", "0111", "1010", "1100"], 0, "0110 is 6 and 0011 is 3. 6 + 3 = 9, which is 1001 in binary."],
      ["What does a logical shift one place to the left do to an unsigned binary number?", ["Halves it", "Doubles it (if no 1s are lost)", "Adds 1 to it", "Makes it negative"], 1, "Each place to the left is worth twice as much, so shifting left by one multiplies by 2."],
      ["How many bytes are there in a kibibyte (KiB)?", ["1000", "1024", "8", "512"], 1, "1 KiB = 2¹⁰ = 1024 bytes. (1 kB = 1000 bytes.)"],
      ["Which type of compression permanently removes some data, as in MP3 and JPEG files?", ["Lossless", "Lossy", "Run-length encoding", "Parity"], 1, "Lossy compression removes data that people are unlikely to notice. Lossless (like RLE) keeps all the data."],
      ["What happens if you increase the sample rate of a sound recording?", ["The file gets smaller", "The recording becomes more accurate and the file gets bigger", "All noise is removed", "Nothing changes"], 1, "More samples per second capture the sound more accurately, but there is more data to store."]
    ]},
    { topics: "2 Data transmission: packets, serial and parallel, USB, error detection, encryption · 3 Hardware: CPU architecture, input and output devices, data storage, network hardware", q: [
      ["What is in the header of a data packet?", ["The sender's and receiver's IP addresses and the packet number", "Only the data", "The user's password", "Only the file name"], 0, "The header lets routers send the packet to the right place and lets the receiver put the packets back in order."],
      ["Which error-detection method adds one extra bit so that the number of 1s is even (or odd)?", ["Checksum", "Parity check", "Echo check", "Automatic repeat request"], 1, "If one bit is flipped during transmission, the parity is wrong and the error is detected."],
      ["In asymmetric encryption, a message to Aida is encrypted with…", ["Aida's private key", "Aida's public key", "the sender's password", "a MAC address"], 1, "Anyone can use Aida's public key to encrypt, but only her private key can decrypt the message."],
      ["Which register holds the address of the next instruction to be fetched?", ["Accumulator (ACC)", "Program Counter (PC)", "Memory Data Register (MDR)", "Current Instruction Register (CIR)"], 1, "In the fetch–decode–execute cycle, the PC's address is copied to the MAR and the PC is then incremented."],
      ["Which type of memory is volatile (loses its data when the power is off)?", ["ROM", "RAM", "SSD", "Flash memory"], 1, "RAM holds programs and data that are in use, but its contents are lost when the computer is switched off."],
      ["What does a router do?", ["Prints documents", "Sends data packets between different networks", "Stores data permanently", "Converts sound to digital data"], 1, "A router connects networks, for example a home network to the internet, and forwards packets using IP addresses."],
      ["What does a MAC address identify?", ["A device's network interface card", "A website", "A user's password", "A program"], 0, "A MAC address is a unique hardware address set by the manufacturer."]
    ]},
    { topics: "4 Software: operating systems, interrupts, languages, translators and IDEs · 5 The internet and its uses: the WWW, digital currency, cyber security · 6 Automated and emerging technologies: robotics, AI", q: [
      ["Which of these is system software?", ["A word processor", "An operating system", "A game", "A spreadsheet"], 1, "System software runs the computer and supports other programs. Applications do jobs for the user."],
      ["What does a compiler do?", ["Translates the whole high-level program into machine code before it is run", "Runs the program one line at a time", "Finds viruses", "Connects to the internet"], 0, "An interpreter translates and runs one line at a time; a compiler makes an executable file."],
      ["How is the World Wide Web different from the internet?", ["They are the same thing", "The internet is the global network; the WWW is the collection of web pages reached over it", "The WWW is hardware; the internet is software", "The internet only carries email"], 1, "The internet is the infrastructure. The WWW is one service that runs on it, using HTTP/HTTPS."],
      ["What is phishing?", ["Sending fake emails or messages to trick people into giving personal details", "A type of firewall", "Backing up data", "Making a network faster"], 0, "Never click unknown links or give passwords in reply to a message, even if it looks official."],
      ["Which technology do most digital currencies (cryptocurrencies) use to record transactions?", ["Blockchain", "Bluetooth", "HTML", "Phishing"], 0, "A blockchain is a shared digital ledger where each block of transactions is linked to the one before."],
      ["What is a key feature of artificial intelligence (AI) systems?", ["They can learn and adapt from data", "They never change", "They only work offline", "They follow no rules"], 0, "Machine learning lets an AI system improve its decisions using data."],
      ["In an automated greenhouse, what does a sensor do?", ["Opens the window", "Measures a quantity such as temperature and sends data to the microprocessor", "Waters the plants", "Switches on the heater"], 1, "The microprocessor compares sensor data with set values and switches actuators (windows, heaters, sprinklers) on or off."]
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
  subjects: ["math", "biology", "chemistry", "physics", "economics", "cs", "english"],
  books: {
    math: "Cambridge IGCSE Mathematics Core and Extended · Coursebook + Workbook",
    biology: "Cambridge IGCSE & O Level Essential Biology (3rd edition)",
    chemistry: "Cambridge IGCSE & O Level Essential Chemistry (3rd edition)",
    physics: "Cambridge IGCSE & O Level Essential Physics (3rd edition)",
    economics: "Cambridge IGCSE and O Level Economics (2nd edition)",
    cs: "Cambridge IGCSE and O Level Computer Science (2nd edition)"
  },
  math: [
    { topics: "Geometrical vocabulary and construction · similarity and congruence · symmetry · angle properties and circle theorems · measures · perimeter, area and volume", q: [
      ["Two similar triangles have corresponding sides of 4 cm and 12 cm. The small triangle has an area of 10 cm². What is the area of the large one?", ["30 cm²", "90 cm²", "40 cm²", "120 cm²"], 1, "The length scale factor is 3, so the area scale factor is 3² = 9. 10 × 9 = 90 cm²."],
      ["How many planes of symmetry does a cuboid with three different edge lengths have?", ["1", "3", "6", "9"], 1, "Each plane cuts the cuboid in half parallel to one pair of faces, so there are 3."],
      ["What is the angle in a semicircle?", ["45°", "90°", "180°", "60°"], 1, "An angle drawn from the ends of a diameter to the circumference is always 90°."],
      ["The opposite angles of a cyclic quadrilateral add up to…", ["90°", "180°", "270°", "360°"], 1, "If all four corners lie on a circle, opposite angles are supplementary."],
      ["Each exterior angle of a regular polygon is 30°. How many sides does it have?", ["6", "10", "12", "30"], 2, "Exterior angles add up to 360°, so 360 ÷ 30 = 12 sides."],
      ["Convert 3.5 m² to cm².", ["350 cm²", "3500 cm²", "35 000 cm²", "350 000 cm²"], 2, "1 m² = 10 000 cm², so 3.5 m² = 35 000 cm²."],
      ["What is the volume of a cylinder with radius 3 cm and height 10 cm? (Use π ≈ 3.14)", ["94.2 cm³", "282.6 cm³", "188.4 cm³", "942 cm³"], 1, "V = πr²h = 3.14 × 9 × 10 = 282.6 cm³."]
    ]},
    { topics: "Bearings · trigonometry · further trigonometry: sine and cosine rules, area of a triangle · vectors · transformations", q: [
      ["The bearing of B from A is 070°. What is the bearing of A from B?", ["110°", "250°", "290°", "070°"], 1, "The back bearing differs by 180°: 070° + 180° = 250°."],
      ["In a right-angled triangle, tan x equals…", ["opposite ÷ hypotenuse", "adjacent ÷ hypotenuse", "opposite ÷ adjacent", "hypotenuse ÷ opposite"], 2, "SOH CAH TOA: tan = opposite ÷ adjacent."],
      ["A 5 m ladder leans against a wall and makes an angle of 60° with the ground. How far is its foot from the wall? (cos 60° = 0.5)", ["2.5 m", "4.33 m", "5 m", "10 m"], 0, "Adjacent = hypotenuse × cos 60° = 5 × 0.5 = 2.5 m."],
      ["You know two sides of a triangle and the angle between them (not a right angle). Which rule finds the third side?", ["Pythagoras' theorem", "The sine rule", "The cosine rule", "SOH CAH TOA"], 2, "Cosine rule: a² = b² + c² − 2bc cos A."],
      ["A triangle has sides of 6 cm and 8 cm with an angle of 30° between them. What is its area? (sin 30° = 0.5)", ["12 cm²", "24 cm²", "48 cm²", "14 cm²"], 0, "Area = ½ab sin C = ½ × 6 × 8 × 0.5 = 12 cm²."],
      ["Vector a moves 3 units right and 4 units up. What is its magnitude |a|?", ["5", "7", "12", "25"], 0, "|a| = √(3² + 4²) = √25 = 5."],
      ["The point (2, 5) is reflected in the line y = x. Where does it go?", ["(5, 2)", "(−2, 5)", "(2, −5)", "(−5, −2)"], 0, "Reflecting in y = x swaps the coordinates."]
    ]},
    { topics: "Probability · further probability: tree diagrams, Venn diagrams, conditional probability · averages and range · collecting, displaying and interpreting data · cumulative frequency", q: [
      ["P(it rains) = 0.4. What is P(it does not rain)?", ["0.4", "0.6", "1.4", "0.16"], 1, "The probabilities of an event and its opposite add up to 1: 1 − 0.4 = 0.6."],
      ["A and B are independent events. P(A) = 0.5 and P(B) = 0.3. What is P(A and B)?", ["0.8", "0.15", "0.2", "0.35"], 1, "For independent events, multiply: 0.5 × 0.3 = 0.15."],
      ["A bag has 3 red and 5 blue counters. Two are taken out without replacement. What is P(both red)?", ["9/64", "3/28", "6/64", "1/4"], 1, "3/8 × 2/7 = 6/56 = 3/28. After the first red is taken, there are 2 red out of 7."],
      ["Find the median of 7, 3, 9, 4, 12, 5.", ["5", "6", "7", "6.7"], 1, "In order: 3, 4, 5, 7, 9, 12. The median is halfway between 5 and 7, which is 6."],
      ["In a histogram with unequal class widths, what does the height of each bar show?", ["Frequency", "Frequency density", "Class width", "Cumulative frequency"], 1, "Frequency density = frequency ÷ class width. The area of each bar shows the frequency."],
      ["A cumulative frequency graph shows the marks of 80 students. At which cumulative frequency do you read off the median?", ["20", "40", "60", "80"], 1, "The median is the middle value: half of 80 is 40."],
      ["What is the interquartile range?", ["Upper quartile − lower quartile", "Highest value − lowest value", "Median − mode", "Mean ÷ 2"], 0, "The IQR measures the spread of the middle 50% of the data, so it is not affected by extreme values."]
    ]}
  ],
  biology: [
    { topics: "Units 11–14: gas exchange in humans · respiration · excretion in humans · coordination and response: nerves, reflexes, the eye, hormones, homeostasis, tropisms", q: [
      ["Which features make the alveoli good at gas exchange?", ["Thick walls and few capillaries", "A large surface area and thin walls with many capillaries", "Being dry", "Containing muscle"], 1, "A big surface area, a short diffusion distance and a good blood supply make gas exchange fast."],
      ["What does the diaphragm do when you breathe in?", ["It contracts and flattens", "It relaxes and domes upwards", "It does not move", "It relaxes and moves down"], 0, "The diaphragm contracts and flattens and the ribs move up and out, so the volume of the chest increases."],
      ["Anaerobic respiration in yeast produces…", ["lactic acid", "ethanol and carbon dioxide", "oxygen and water", "glucose"], 1, "Yeast makes ethanol and carbon dioxide. Human muscles make lactic acid."],
      ["Which organ removes urea from the blood?", ["The liver", "The kidneys", "The lungs", "The pancreas"], 1, "The liver makes urea from excess amino acids. The kidneys filter it out of the blood into urine."],
      ["What is a reflex action?", ["A slow, conscious decision", "A fast, automatic response to a stimulus", "A learned skill", "A response controlled only by hormones"], 1, "Reflexes such as pulling your hand from a hot object protect the body. The impulse goes through a reflex arc."],
      ["Which hormone lowers the concentration of glucose in the blood?", ["Adrenaline", "Glucagon", "Insulin", "Testosterone"], 2, "Insulin from the pancreas makes the liver and muscles take in glucose and store it as glycogen."],
      ["Shoots grow towards light. What is this response called?", ["Positive gravitropism", "Positive phototropism", "Negative phototropism", "Osmosis"], 1, "Auxin collects on the shaded side of the shoot, so that side grows faster and the shoot bends towards the light."]
    ]},
    { topics: "Units 15–17: reproduction in plants and humans · inheritance: DNA, protein synthesis, mitosis and meiosis, monohybrid crosses · variation and selection: mutation, natural and artificial selection", q: [
      ["What is an advantage of asexual reproduction?", ["It produces genetic variation", "Only one parent is needed and it can be fast", "The offspring are all different", "It needs gametes"], 1, "Asexual reproduction can quickly make many identical offspring, but they have no variation."],
      ["In pollination, pollen is transferred from the anther to the…", ["anther", "stigma", "ovary wall", "petal"], 1, "Pollen lands on the stigma. Insects or the wind can carry it there."],
      ["Where are proteins made in a cell?", ["In the nucleus", "On ribosomes", "In the vacuole", "In the cell wall"], 1, "mRNA carries the code from DNA in the nucleus to the ribosomes, where amino acids are joined into a protein."],
      ["Which type of cell division produces gametes?", ["Mitosis", "Meiosis", "Binary fission", "Budding"], 1, "Meiosis halves the chromosome number and produces genetically different cells."],
      ["A heterozygous tall plant (Tt) is crossed with a short plant (tt). What fraction of the offspring are expected to be short?", ["0", "1/4", "1/2", "3/4"], 2, "The offspring are Tt, Tt, tt, tt, so half are tall and half are short."],
      ["What is a mutation?", ["A random change in a gene or chromosome", "A type of cell division", "A hormone", "A learned adaptation"], 0, "Mutations happen by chance. Ionising radiation and some chemicals make them more likely."],
      ["How do bacteria become resistant to an antibiotic?", ["The bacteria decide to change", "A random mutation makes some resistant; when the antibiotic is used, they survive and reproduce", "The antibiotic makes every bacterium stronger", "Resistance is caused by the patient's diet"], 1, "This is natural selection. Finishing a course of antibiotics and not overusing them slows it down."]
    ]},
    { topics: "Units 18–20: organisms and their environment: energy flow, pyramids, nutrient cycles, populations · human influences on ecosystems · biotechnology and genetic modification", q: [
      ["Why are pyramids of energy always pyramid-shaped?", ["Energy is lost at each trophic level, so less is passed on to the level above", "Top predators are always the biggest", "Producers are rare", "Energy increases up a food chain"], 0, "Much energy is lost as heat from respiration, in movement and in waste."],
      ["What do nitrogen-fixing bacteria do?", ["Turn nitrogen gas into nitrogen compounds that plants can use", "Turn nitrates back into nitrogen gas", "Make carbon dioxide", "Turn dead leaves into glucose"], 0, "Some live in the root nodules of legumes such as beans and peas."],
      ["Which greenhouse gas is released by cattle and rice fields?", ["Oxygen", "Methane", "Nitrogen", "Hydrogen"], 1, "Methane is a powerful greenhouse gas made by microorganisms in cows' guts and in flooded rice fields."],
      ["What can deforestation lead to?", ["More biodiversity", "Soil erosion and loss of habitats", "Less carbon dioxide in the air", "More rainfall everywhere"], 1, "Without trees, soil washes away, habitats are lost and more carbon dioxide stays in the atmosphere."],
      ["Why is the enzyme pectinase used to make fruit juice?", ["It breaks down cell walls, so more juice is released", "It adds sugar", "It kills bacteria", "It changes the colour"], 0, "Pectinase breaks down pectin in plant cell walls, giving more juice and making it clearer."],
      ["In genetic modification, which enzymes cut DNA at specific places?", ["Restriction enzymes", "Amylase", "Lipase", "Catalase"], 0, "Restriction enzymes cut out the gene and open the plasmid; ligase joins the DNA together."],
      ["Genetically modified bacteria are used to make which human hormone, used to treat diabetes?", ["Adrenaline", "Insulin", "Oestrogen", "Thyroxine"], 1, "The human insulin gene is put into bacteria, which then make large amounts of insulin."]
    ]}
  ],
  chemistry: [
    { topics: "Chemical reactions: rates of reaction, catalysts, reversible reactions and equilibrium, redox · acids, bases and salts: pH, reactions of acids, preparing salts", q: [
      ["Why does raising the temperature increase the rate of a reaction?", ["Particles move faster and collide more often and with more energy", "It makes the particles bigger", "It adds more particles", "It removes the products"], 0, "More collisions have energy above the activation energy, so more of them are successful."],
      ["What does a catalyst do?", ["It speeds up a reaction without being used up", "It slows down a reaction", "It is used up in the reaction", "It changes the products"], 0, "A catalyst gives a different route with a lower activation energy."],
      ["In the Haber process, N₂ + 3H₂ ⇌ 2NH₃. What does the ⇌ sign mean?", ["The reaction is reversible", "The reaction is very fast", "Heat is given out", "The reaction stops"], 0, "Ammonia can break down back into nitrogen and hydrogen, so the reaction reaches an equilibrium."],
      ["What is oxidation, in terms of electrons?", ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], 1, "OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)."],
      ["What is the pH of a neutral solution?", ["0", "7", "10", "14"], 1, "pH 7 is neutral. Acids have pH below 7 and alkalis above 7."],
      ["Which salt is made when sulfuric acid reacts with copper(II) oxide?", ["Copper(II) chloride", "Copper(II) sulfate", "Copper(II) nitrate", "Copper(II) carbonate"], 1, "Sulfuric acid makes sulfates. The blue solution can be crystallised to make copper(II) sulfate crystals."],
      ["Acid + metal carbonate → salt + water + …", ["hydrogen", "carbon dioxide", "oxygen", "chlorine"], 1, "The fizzing is carbon dioxide gas, which turns limewater milky."]
    ]},
    { topics: "The Periodic Table: groups, trends, Group I, Group VII, noble gases, transition elements · metals: properties, alloys, the reactivity series, extraction, corrosion", q: [
      ["Which group of the Periodic Table contains the noble gases?", ["Group I", "Group VII", "Group VIII (also called Group 0)", "Group II"], 2, "Noble gases have full outer shells, so they are very unreactive."],
      ["How does reactivity change as you go down Group VII (the halogens)?", ["It increases", "It decreases", "It stays the same", "Halogens do not react"], 1, "Fluorine is the most reactive halogen. Reactivity decreases down the group."],
      ["Chlorine water is added to potassium bromide solution. What happens?", ["No reaction", "Chlorine displaces bromine, so the solution turns orange-brown", "Bromine displaces chlorine", "A white precipitate forms"], 1, "A more reactive halogen displaces a less reactive one from its compounds."],
      ["Why is aluminium used to build aircraft?", ["It has a low density and resists corrosion", "It is the most reactive metal", "It is magnetic", "It is very dense"], 0, "A thin oxide layer protects aluminium from corrosion, and it is light but strong."],
      ["In the blast furnace, which substance reduces iron(III) oxide to iron?", ["Carbon monoxide", "Oxygen", "Limestone", "Slag"], 0, "Fe₂O₃ + 3CO → 2Fe + 3CO₂. Limestone removes impurities as slag."],
      ["How does sacrificial protection stop iron from rusting?", ["By painting it", "By attaching a more reactive metal such as zinc, which corrodes instead", "By oiling it", "By keeping it in water"], 1, "Zinc or magnesium is oxidised before the iron, so the iron is protected."],
      ["Why are alloys such as brass often harder than pure metals?", ["Atoms of different sizes stop the layers sliding over each other easily", "They have more electrons", "They are compounds", "They have no metallic bonding"], 0, "In a pure metal the layers of identical atoms slide easily; different-sized atoms disrupt the layers."]
    ]},
    { topics: "Chemistry of the environment: water, fertilisers, air quality and climate · organic chemistry: fuels, alkanes, alkenes, alcohols, carboxylic acids, polymers · experimental techniques and chemical analysis", q: [
      ["Which is a test for water?", ["It turns limewater milky", "It turns anhydrous copper(II) sulfate from white to blue", "It relights a glowing splint", "It pops with a lighted splint"], 1, "Anhydrous cobalt(II) chloride turning from blue to pink also shows that water is present."],
      ["Which toxic gas is produced by the incomplete combustion of fuels?", ["Carbon monoxide", "Nitrogen", "Oxygen", "Argon"], 0, "Carbon monoxide forms when there is not enough oxygen. It stops blood carrying oxygen."],
      ["What is the general formula of the alkanes?", ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₊₁OH", "CₙH₂ₙ₋₂"], 1, "For example, methane is CH₄ and ethane is C₂H₆. CₙH₂ₙ is the formula of the alkenes."],
      ["How can you tell an alkene from an alkane?", ["Alkenes decolourise bromine water", "Alkanes decolourise bromine water", "Alkenes turn limewater milky", "You cannot tell them apart"], 0, "Alkenes have a C=C double bond, which reacts with bromine. Orange bromine water turns colourless."],
      ["How is crude oil separated into fractions?", ["Filtration", "Fractional distillation", "Crystallisation", "Electrolysis"], 1, "The fractions have different boiling points and condense at different heights in the fractionating column."],
      ["In paper chromatography, how is the Rf value calculated?", ["Distance moved by the substance ÷ distance moved by the solvent", "Distance moved by the solvent ÷ distance moved by the substance", "The length of the paper", "The number of spots"], 0, "Rf values are always between 0 and 1 and can be used to identify substances."],
      ["Which test shows that a gas is carbon dioxide?", ["It relights a glowing splint", "It turns limewater milky", "It bleaches damp litmus paper", "It pops with a lighted splint"], 1, "A glowing splint relights in oxygen, hydrogen pops, and chlorine bleaches damp litmus paper."]
    ]}
  ],
  physics: [
    { topics: "Waves: general wave properties, reflection and refraction of light, total internal reflection, lenses, the electromagnetic spectrum, sound", q: [
      ["A wave has a frequency of 50 Hz and a wavelength of 4 m. What is its speed?", ["12.5 m/s", "200 m/s", "54 m/s", "0.08 m/s"], 1, "Wave speed = frequency × wavelength = 50 × 4 = 200 m/s."],
      ["In a transverse wave, the vibrations are…", ["parallel to the direction the wave travels", "at right angles to the direction the wave travels", "always circular", "not present"], 1, "Light and water waves are transverse. Sound waves are longitudinal."],
      ["Light in glass hits the boundary with air at an angle bigger than the critical angle. What happens?", ["It refracts towards the normal", "It is totally internally reflected", "It stops", "It passes straight through"], 1, "Total internal reflection is used in optical fibres."],
      ["Which part of the electromagnetic spectrum has the longest wavelength?", ["Gamma rays", "Visible light", "Radio waves", "X-rays"], 2, "Radio waves have the longest wavelength and the lowest frequency. Gamma rays have the shortest."],
      ["What is the range of human hearing?", ["2 Hz – 2000 Hz", "20 Hz – 20 000 Hz", "200 Hz – 200 000 Hz", "20 kHz – 200 kHz"], 1, "Sound above 20 000 Hz is ultrasound."],
      ["A converging lens forms a real image. Where can it be seen?", ["Only by looking into the lens", "On a screen", "Nowhere", "Only in a mirror"], 1, "Real images are formed where light rays actually meet, so they can be projected onto a screen."]
    ]},
    { topics: "Electricity and magnetism: current, voltage, resistance, series and parallel circuits, electrical energy and power, safety, electromagnetic effects, motors, transformers", q: [
      ["A 12 V supply drives a current of 3 A through a resistor. What is its resistance?", ["36 Ω", "4 Ω", "0.25 Ω", "15 Ω"], 1, "R = V ÷ I = 12 ÷ 3 = 4 Ω."],
      ["Two 6 Ω resistors are connected in series. What is the total resistance?", ["3 Ω", "6 Ω", "12 Ω", "36 Ω"], 2, "In series, add the resistances: 6 + 6 = 12 Ω. In parallel, the total would be 3 Ω."],
      ["A 2000 W kettle is switched on for 3 minutes. How much energy does it transfer?", ["6000 J", "360 000 J", "600 J", "36 000 J"], 1, "E = P × t = 2000 × 180 s = 360 000 J."],
      ["What does a fuse do?", ["It melts and breaks the circuit if the current is too high", "It increases the current", "It stores charge", "It connects the appliance to earth"], 0, "A fuse protects the wiring from overheating and catching fire."],
      ["A transformer has 100 turns on the primary coil and 500 on the secondary. The input is 12 V a.c. What is the output voltage?", ["2.4 V", "60 V", "600 V", "12 V"], 1, "Vs/Vp = Ns/Np, so Vs = 12 × 500 ÷ 100 = 60 V. This is a step-up transformer."],
      ["How can you increase the turning force on the coil of a d.c. motor?", ["Reduce the current", "Increase the current or use a stronger magnet", "Use a plastic coil", "Remove the magnet"], 1, "More current, a stronger magnetic field or more turns on the coil all increase the force."]
    ]},
    { topics: "Nuclear physics: the nuclear atom, radioactive emissions, half-life, safety · space physics: the Solar System, the Sun as a star, stars, galaxies and the Universe", q: [
      ["Which type of radiation is stopped by a sheet of paper?", ["Alpha", "Beta", "Gamma", "X-rays"], 0, "Alpha particles are stopped by paper, beta by a few mm of aluminium, and gamma is reduced by thick lead."],
      ["A radioactive sample has a half-life of 6 hours. What fraction is left after 18 hours?", ["1/3", "1/6", "1/8", "1/18"], 2, "18 hours is 3 half-lives: ½ × ½ × ½ = 1/8."],
      ["What is the nucleon number (mass number) of an atom?", ["The number of protons", "The number of protons plus neutrons", "The number of electrons", "The number of neutrons only"], 1, "Protons and neutrons are both nucleons. The proton number is the atomic number."],
      ["About how long does light from the Sun take to reach the Earth?", ["About 8 seconds", "About 8 minutes", "About 8 hours", "About 8 days"], 1, "The Sun is about 150 million km away, and light travels at 300 000 km/s, so it takes about 500 s."],
      ["What is the source of the Sun's energy?", ["Nuclear fusion of hydrogen into helium", "Burning coal", "Nuclear fission of uranium", "Chemical reactions with oxygen"], 0, "In the Sun's core, hydrogen nuclei fuse to form helium and release huge amounts of energy."],
      ["Light from distant galaxies is redshifted. What is this evidence for?", ["The Universe is expanding", "Galaxies are getting hotter", "The Sun is shrinking", "Light slows down in space"], 0, "More distant galaxies have bigger redshifts, so they are moving away faster. This supports the Big Bang theory."]
    ]}
  ],
  economics: [
    { topics: "4 Government and the macroeconomy: the role of government, macroeconomic aims, fiscal policy, monetary policy, supply-side policy, economic growth", q: [
      ["Which of these is a macroeconomic aim of government?", ["Low and stable inflation", "Higher prices for all goods", "Higher unemployment", "Fewer exports"], 0, "The main aims are economic growth, low unemployment, stable prices, a stable balance of payments and fair income distribution."],
      ["What does fiscal policy use?", ["Government spending and taxation", "Interest rates", "Only exchange rates", "Trade unions"], 0, "Monetary policy uses interest rates and the money supply."],
      ["What is a progressive tax?", ["A tax where people with higher incomes pay a larger percentage of their income", "A tax where everyone pays the same amount", "A tax where poorer people pay a higher percentage", "A tax paid only by firms"], 0, "Progressive taxes help to reduce income inequality."],
      ["To reduce inflation, what is a central bank most likely to do?", ["Raise interest rates", "Cut interest rates", "Print more money", "Cut taxes"], 0, "Higher interest rates make borrowing more expensive and saving more attractive, so spending falls."],
      ["Which of these is a supply-side policy?", ["Spending more on education and training", "Raising interest rates", "Increasing import tariffs", "Printing money"], 0, "Supply-side policies aim to increase the economy's productive capacity."],
      ["How is economic growth usually measured?", ["By an increase in real GDP", "By a rise in the population", "By a rise in the price level", "By a rise in unemployment"], 0, "Real GDP is adjusted for inflation, so it shows the real change in output."]
    ]},
    { topics: "4 Employment and unemployment · inflation and deflation · 5 Economic development: living standards, poverty, population, differences between countries", q: [
      ["When does frictional unemployment happen?", ["When people are between jobs", "When a whole industry closes for ever", "When the economy is in recession", "When jobs only exist at certain times of year"], 0, "Frictional unemployment is short-term, while people search for a new job."],
      ["What does the Consumer Prices Index (CPI) measure?", ["Changes in the average prices of a basket of goods and services", "The number of unemployed people", "The size of the population", "Exports minus imports"], 0, "The CPI is the usual way to measure inflation."],
      ["What does deflation mean?", ["A fall in the general price level", "Prices rising more slowly", "A rise in unemployment", "An increase in GDP"], 0, "Prices rising more slowly is called disinflation, not deflation."],
      ["What does the Human Development Index (HDI) combine?", ["Income, education and life expectancy", "Only GDP", "Population and exports", "Inflation and unemployment"], 0, "The HDI gives a wider picture of living standards than income alone."],
      ["What is absolute poverty?", ["Not having enough income for basic needs such as food, water and shelter", "Having less than the average income", "Being unemployed", "Having no savings"], 0, "Relative poverty means being poor compared with others in the same country."],
      ["Many developing countries have a population pyramid with a wide base. What does this show?", ["High birth rates and many young people", "Many old people", "Equal numbers in every age group", "No children"], 0, "A wide base means many children. A narrow top shows lower life expectancy."],
      ["What are remittances?", ["Money sent home by people working abroad", "Taxes on imports", "Loans from the IMF", "Government spending on schools"], 0, "Remittances from Kyrgyz citizens working abroad are a very important source of income for Kyrgyzstan."]
    ]},
    { topics: "6 International trade and globalisation: specialisation, free trade and protection, foreign exchange rates, the current account of the balance of payments", q: [
      ["What is an advantage of a country specialising in what it produces best?", ["Higher output and efficiency", "It has to produce everything itself", "Less trade", "Higher costs"], 0, "Countries can then trade to get other goods, so more is produced in total."],
      ["What is a tariff?", ["A tax on imports", "A limit on the number of imports", "A subsidy for exporters", "A type of currency"], 0, "Tariffs make imports more expensive, which protects domestic producers."],
      ["What is a quota?", ["A physical limit on the quantity of imports", "A tax on exports", "A bank loan", "A type of tariff"], 0, "A quota sets the maximum amount of a good that can be imported."],
      ["If the som appreciates against the US dollar, what happens to Kyrgyz exports?", ["They become cheaper for Americans", "They become more expensive for Americans", "They become free", "Nothing changes"], 1, "Each dollar buys fewer som, so Kyrgyz goods cost more in dollars."],
      ["What is a current account deficit?", ["When spending on imports (plus income paid abroad) is greater than earnings from exports (plus income received)", "When the government spends more than it collects in tax", "When unemployment is high", "When the currency appreciates"], 0, "A government budget deficit is a different thing: it is about public spending and taxes."],
      ["Which of these is a reason for protectionism?", ["To protect infant industries", "To increase competition", "To lower prices for consumers", "To increase imports"], 0, "New industries may need protection until they can compete with large foreign firms."]
    ]}
  ],
  cs: [
    { topics: "7 Algorithm design and problem solving: the development life cycle, decomposition, standard methods, validation and verification, test data, trace tables", q: [
      ["What are the four stages of the program development life cycle?", ["Analysis, design, coding, testing", "Input, process, output, storage", "Plan, write, sell, update", "Draw, code, run, delete"], 0, "Analysis finds what is needed, design plans the solution, coding writes it and testing checks it works."],
      ["Breaking a problem into smaller sub-problems is called…", ["abstraction", "decomposition", "iteration", "validation"], 1, "Abstraction removes unnecessary detail; decomposition splits a problem into parts."],
      ["Which validation check makes sure a number is between 1 and 100?", ["Length check", "Range check", "Presence check", "Type check"], 1, "A range check tests that data is within set limits."],
      ["Data is typed in twice and the two entries are compared. What is this?", ["Double entry verification", "A range check", "A trace table", "A linear search"], 0, "Verification checks that data has been copied or entered accurately."],
      ["A program accepts ages from 12 to 18. Which of these is boundary test data?", ["15", "18", "50", "abc"], 1, "Boundary data is at the limits: 12 and 18 should be accepted; 11 and 19 rejected. 15 is normal data and 50 is abnormal (erroneous)."],
      ["How does a linear search work?", ["It checks each item in turn until the item is found or the list ends", "It needs a sorted list and halves it each time", "It swaps neighbouring items", "It counts the items"], 0, "Linear search works on unsorted lists but can be slow for long lists."],
      ["What happens in each pass of a bubble sort?", ["Neighbouring items are compared and swapped if they are in the wrong order", "The list is split in half", "The largest item is deleted", "New items are added to the end"], 0, "After each pass, the largest remaining item has moved to its correct place."]
    ]},
    { topics: "8 Programming: variables, constants and data types, selection, iteration, string handling, procedures and functions, arrays, file handling", q: [
      ["Which data type should be used to store 3.75?", ["Integer", "Real", "Boolean", "Char"], 1, "Real numbers have a fractional part. Integers are whole numbers."],
      ["Which loop always runs its code at least once?", ["A FOR loop (count-controlled)", "A REPEAT … UNTIL loop (post-condition)", "A WHILE loop (pre-condition)", "None of them"], 1, "REPEAT … UNTIL checks its condition at the end, so the body always runs at least once."],
      ["Total ← 0, then FOR i ← 1 TO 4: Total ← Total + i. What is Total after the loop?", ["4", "10", "5", "0"], 1, "1 + 2 + 3 + 4 = 10."],
      ["Word ← “Bilim”. What does LENGTH(Word) return?", ["4", "5", "6", "B"], 1, "LENGTH returns the number of characters: B, i, l, i, m = 5."],
      ["What is the difference between a function and a procedure?", ["A function returns a value; a procedure does not have to", "A procedure returns a value; a function does not", "There is no difference", "Functions cannot have parameters"], 0, "Both are subroutines that can take parameters, but only a function returns a value."],
      ["What can the array Scores[1:30] hold?", ["30 values of the same data type", "One value", "30 values of different data types", "An unlimited number of values"], 0, "An array stores a fixed number of items of the same data type under one name."],
      ["What is 17 MOD 5?", ["3", "2", "3.4", "12"], 1, "MOD gives the remainder: 17 = 3 × 5 + 2, so 17 MOD 5 = 2. (17 DIV 5 = 3.)"]
    ]},
    { topics: "9 Databases: tables, records, fields, data types, primary keys, SQL · 10 Boolean logic: logic gates, truth tables, logic circuits and expressions", q: [
      ["In a database table, which field uniquely identifies each record?", ["The primary key", "Any text field", "The table name", "The query"], 0, "No two records can have the same primary key, for example a student ID."],
      ["In a database table, one row is called a…", ["field", "record", "table", "key"], 1, "A record is one row (one item, such as one student). A field is one column."],
      ["Which SQL statement selects the names of students older than 15?", ["SELECT Name FROM Students WHERE Age > 15;", "SELECT Students WHERE Age > 15;", "FIND Name IN Students > 15;", "SELECT Name WHERE Students > 15;"], 0, "SQL: SELECT fields FROM table WHERE condition;"],
      ["What is the output of an AND gate when its inputs are 1 and 0?", ["0", "1", "2", "It changes over time"], 0, "AND gives 1 only when both inputs are 1."],
      ["Which gate gives an output of 1 only when its two inputs are different?", ["AND", "OR", "XOR", "NAND"], 2, "XOR (exclusive OR) is 1 for inputs 0,1 and 1,0, and 0 when the inputs are the same."],
      ["What is the output of a NOT gate when its input is 1?", ["1", "0", "2", "Nothing"], 1, "NOT reverses the input: 1 becomes 0 and 0 becomes 1."],
      ["When does a NOR gate give an output of 1?", ["When both inputs are 0", "When both inputs are 1", "When exactly one input is 1", "When at least one input is 1"], 0, "NOR is NOT OR: the output is 1 only when neither input is 1."]
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
