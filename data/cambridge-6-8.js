/* Bilim · Cambridge questions for grades 6–8 (Cambridge Lower Secondary, Stages 7–9).
   These are original questions written for the topics of each unit of the Cambridge
   Lower Secondary books. They are not copied from the books.

   Each question: ["Question", ["A", "B", "C", "D"], right answer (0 = A, 1 = B, 2 = C, 3 = D), "Explanation"]
   Each subject has 3 terms: { topics: "...", q: [questions] } */
window.BILIM_CAMBRIDGE = window.BILIM_CAMBRIDGE || {};

window.BILIM_CAMBRIDGE["6"] = {
  stage: "Stage 7", course: "Cambridge Lower Secondary",
  math: [
    { topics: "Integers · Expressions, formulae and equations · Place value and rounding · Decimals · Angles and constructions", q: [
      ["Work out −7 + 12.", ["−19", "5", "−5", "19"], 1, "Start at −7 and move 12 to the right on a number line. You reach 5."],
      ["Which number is a multiple of both 4 and 6?", ["10", "16", "24", "30"], 2, "24 = 4 × 6, so 24 is in both the 4 and the 6 times tables."],
      ["Simplify 3a + 5a − 2a.", ["6a", "10a", "8a", "6"], 0, "Collect like terms: 3 + 5 − 2 = 6, so the answer is 6a."],
      ["Round 4.736 to one decimal place.", ["4.8", "4.7", "4.74", "5.0"], 1, "Look at the second decimal digit. It is 3, which is less than 5, so round down to 4.7."],
      ["Angles on a straight line add up to…", ["90°", "180°", "270°", "360°"], 1, "Angles on a straight line always add up to 180°."]
    ]},
    { topics: "Collecting data · Fractions · Shapes and symmetry · Sequences and functions · Percentages", q: [
      ["What is 2/3 + 1/6?", ["3/9", "5/6", "1/2", "3/6"], 1, "Change 2/3 into sixths: 4/6. Then 4/6 + 1/6 = 5/6."],
      ["How many lines of symmetry does a square have?", ["2", "4", "1", "8"], 1, "A square has 4 lines of symmetry: 2 diagonals and 2 lines through the middles of opposite sides."],
      ["The term-to-term rule is “add 4” and the first term is 3. What is the 5th term?", ["15", "19", "23", "20"], 1, "The terms are 3, 7, 11, 15, 19. The 5th term is 19."],
      ["What is 25% of 80?", ["20", "25", "40", "32"], 0, "25% is one quarter. 80 ÷ 4 = 20."],
      ["Which of these is discrete data?", ["The height of a student", "The number of pets in a house", "The time to run 100 m", "The mass of a bag"], 1, "Discrete data can only take certain values, like whole numbers of pets. The others are measured, so they are continuous."]
    ]},
    { topics: "Graphs · Ratio and proportion · Probability · Position and transformation · Shapes, area and volume", q: [
      ["Share 20 sweets in the ratio 3 : 2. How many sweets are in the larger share?", ["8", "10", "12", "15"], 2, "3 + 2 = 5 parts. One part is 20 ÷ 5 = 4. The larger share is 3 × 4 = 12."],
      ["A fair dice is rolled. What is the probability of getting an even number?", ["1/6", "1/3", "1/2", "2/3"], 2, "The even numbers are 2, 4 and 6: three out of six outcomes, so 3/6 = 1/2."],
      ["What are the coordinates of the point 3 right and 2 up from the origin?", ["(2, 3)", "(3, 2)", "(−3, 2)", "(3, −2)"], 1, "The x-coordinate (across) comes first, then the y-coordinate (up): (3, 2)."],
      ["A rectangle is 8 cm long and 5 cm wide. What is its area?", ["13 cm²", "26 cm²", "40 cm²", "45 cm²"], 2, "Area = length × width = 8 × 5 = 40 cm²."],
      ["Which point lies on the line y = 2x?", ["(1, 3)", "(2, 4)", "(3, 5)", "(4, 2)"], 1, "When x = 2, y = 2 × 2 = 4, so (2, 4) is on the line."]
    ]}
  ],
  science: [
    { topics: "Cells · Materials and their structure · Forces and energy", q: [
      ["Which part is found in plant cells but NOT in animal cells?", ["Nucleus", "Cell membrane", "Cell wall", "Cytoplasm"], 2, "Plant cells have a cell wall made of cellulose. Animal cells do not."],
      ["What is the correct order, from smallest to largest?", ["Organ, tissue, cell", "Cell, tissue, organ", "Tissue, cell, organ", "Cell, organ, tissue"], 1, "Similar cells form a tissue, and different tissues work together in an organ."],
      ["In which state of matter are the particles close together but able to move past each other?", ["Solid", "Liquid", "Gas", "None of these"], 1, "In a liquid the particles touch but can slide past each other, so liquids can flow."],
      ["What is the chemical formula of water?", ["HO", "H₂O", "H₂O₂", "OH₂"], 1, "Each water molecule has 2 hydrogen atoms and 1 oxygen atom: H₂O."],
      ["What is the difference between mass and weight?", ["They are the same", "Mass is a force and weight is the amount of matter", "Weight is the force of gravity on a mass", "Weight never changes"], 2, "Mass (kg) is the amount of matter. Weight (N) is the force of gravity on that mass, so it changes on the Moon."]
    ]},
    { topics: "Grouping and identifying organisms · Properties of materials · Earth physics", q: [
      ["Which is NOT a characteristic of all living organisms?", ["Respiration", "Growth", "Reproduction", "Photosynthesis"], 3, "Only plants and some microorganisms photosynthesise. All living things respire, grow and reproduce."],
      ["Viruses are different from other organisms because they…", ["are very big", "can only reproduce inside living cells", "make their own food", "have cell walls"], 1, "Viruses cannot reproduce on their own. They must get inside living cells."],
      ["A solution has pH 3. It is…", ["neutral", "a weak alkali", "acidic", "a strong alkali"], 2, "A pH below 7 is acidic, 7 is neutral and above 7 is alkaline."],
      ["Which property do most metals have?", ["Poor conductors of electricity", "Good conductors of heat", "Brittle", "Dull"], 1, "Metals are good conductors of heat and electricity, and they are usually shiny."],
      ["What causes a solar eclipse?", ["The Earth blocks sunlight from reaching the Moon", "The Moon blocks sunlight from reaching the Earth", "The Sun moves behind the Earth", "Clouds cover the Sun"], 1, "In a solar eclipse the Moon passes between the Sun and the Earth and blocks the sunlight."]
    ]},
    { topics: "Microorganisms in the environment · Changes to materials · Electricity", q: [
      ["In a food chain, what do the arrows show?", ["Which animal is bigger", "The flow of energy", "Where animals live", "Which animal is fastest"], 1, "The arrows show energy passing from the food to the organism that eats it."],
      ["Which microorganisms help dead leaves to decay?", ["Bacteria and fungi", "Viruses only", "Algae only", "None"], 0, "Decomposers such as bacteria and fungi break down dead material and return nutrients to the soil."],
      ["What forms when an acid reacts with an alkali?", ["A metal and oxygen", "A salt and water", "Only a gas", "A stronger acid"], 1, "This is neutralisation: acid + alkali → salt + water."],
      ["Which material is an electrical insulator?", ["Copper", "Steel", "Plastic", "Aluminium"], 2, "Plastic does not let electric current flow easily, so it is used to cover wires."],
      ["What does an ammeter measure?", ["Voltage", "Current", "Resistance", "Power"], 1, "An ammeter measures electric current, in amperes (A)."]
    ]}
  ],
  english: [
    { topics: "Reading fiction · Vocabulary · Sentence punctuation", q: [
      ["Choose the correctly punctuated sentence.", ["its raining today.", "It's raining today.", "Its' raining today.", "It,s raining today."], 1, "“It's” is short for “it is”, and a sentence starts with a capital letter."],
      ["What is a synonym for “enormous”?", ["tiny", "huge", "quick", "quiet"], 1, "“Enormous” and “huge” both mean very big."],
      ["In a story, the person who tells the story is called the…", ["author", "narrator", "editor", "reader"], 1, "The narrator tells the story. In a first-person story the narrator says “I”."],
      ["Which word is an adjective? “The brave girl climbed quickly.”", ["girl", "brave", "climbed", "quickly"], 1, "An adjective describes a noun. “Brave” describes the girl."],
      ["Which sentence uses a simile?", ["The wind howled.", "She ran like the wind.", "The sun is a golden coin.", "Time flies."], 1, "A simile compares two things using “like” or “as”: “ran like the wind”."]
    ]},
    { topics: "Non-fiction texts · Grammar: tenses · Paragraphs", q: [
      ["Which text is written mainly to persuade?", ["A recipe", "An advert", "A dictionary", "A weather report"], 1, "Adverts try to persuade people to buy or do something."],
      ["Choose the past tense: “Yesterday we ___ to the museum.”", ["go", "goes", "went", "going"], 2, "“Went” is the past tense of “go”."],
      ["What is the main job of a topic sentence?", ["To end a story", "To introduce the main idea of a paragraph", "To list sources", "To ask a question"], 1, "A topic sentence tells the reader what the paragraph is about."],
      ["Which word is a conjunction?", ["because", "beautiful", "slowly", "river"], 0, "Conjunctions join clauses, for example: because, and, but, so, although."],
      ["A fact is something that…", ["someone believes", "can be proved true", "is always funny", "is made up"], 1, "A fact can be checked and proved. An opinion is what someone thinks."]
    ]},
    { topics: "Poetry · Drama · Writing techniques", q: [
      ["Words that begin with the same sound, like “silver snakes slid”, are an example of…", ["rhyme", "alliteration", "simile", "onomatopoeia"], 1, "Alliteration repeats the same starting sound in words that are close together."],
      ["“Buzz”, “crash” and “sizzle” are examples of…", ["onomatopoeia", "metaphor", "personification", "alliteration"], 0, "Onomatopoeia means words that sound like the noise they describe."],
      ["In a play script, what are stage directions?", ["The actors' lines", "Instructions about actions and setting", "The title", "The audience's comments"], 1, "Stage directions tell actors how to move and describe the scene, usually in brackets or italics."],
      ["“The trees danced in the wind” is an example of…", ["personification", "simile", "alliteration", "rhyme"], 0, "Personification gives human actions to things that are not human. Trees cannot really dance."],
      ["Which word best replaces “said” to show that someone is angry?", ["whispered", "snapped", "giggled", "sighed"], 1, "“Snapped” suggests speaking sharply and angrily."]
    ]}
  ]
};

window.BILIM_CAMBRIDGE["7"] = {
  stage: "Stage 8", course: "Cambridge Lower Secondary",
  math: [
    { topics: "Integers · Expressions, formulae and equations · Place value and rounding · Decimals · Angles and constructions", q: [
      ["Work out (−3) × (−4).", ["−12", "12", "−7", "7"], 1, "A negative number times a negative number is positive: 3 × 4 = 12."],
      ["Solve 4x + 3 = 23.", ["x = 4", "x = 5", "x = 6", "x = 20"], 1, "Subtract 3 from both sides: 4x = 20. Divide by 4: x = 5."],
      ["Expand 3(2x − 5).", ["6x − 5", "6x − 15", "5x − 15", "6x + 15"], 1, "Multiply each term by 3: 3 × 2x = 6x and 3 × (−5) = −15."],
      ["Round 0.04782 to 2 significant figures.", ["0.04", "0.048", "0.0478", "0.05"], 1, "The first two significant figures are 4 and 7. The next digit is 8, so round up: 0.048."],
      ["The angles of a triangle are 50°, 60° and x. What is x?", ["60°", "70°", "80°", "90°"], 1, "Angles in a triangle add up to 180°: 180 − 50 − 60 = 70°."]
    ]},
    { topics: "Planning and collecting data · Fractions · Shapes and symmetry · Sequences and functions · Percentages", q: [
      ["Work out 3/4 × 2/9.", ["6/36", "1/6", "5/13", "3/18"], 1, "Multiply the numerators and the denominators: 6/36, which simplifies to 1/6."],
      ["What is the nth term of 5, 8, 11, 14, …?", ["3n + 2", "5n", "n + 3", "3n + 5"], 0, "The sequence goes up by 3, so it starts with 3n. When n = 1, 3 + 2 = 5, so the nth term is 3n + 2."],
      ["Increase 60 by 15%.", ["69", "75", "61.5", "66"], 0, "15% of 60 is 9. 60 + 9 = 69."],
      ["How many lines of symmetry does a regular hexagon have?", ["3", "4", "6", "8"], 2, "A regular polygon has as many lines of symmetry as it has sides: 6."],
      ["Which is the best way to choose a fair sample of students for a survey?", ["Ask only your friends", "Choose students at random", "Ask only the football team", "Ask only one class"], 1, "A random sample gives every student the same chance of being chosen, so it is less biased."]
    ]},
    { topics: "Graphs · Ratio and proportion · Probability · Position and transformation · Shapes, area and volume", q: [
      ["What is the gradient of the line y = 3x − 2?", ["−2", "3", "2", "−3"], 1, "In y = mx + c, m is the gradient, so the gradient is 3."],
      ["4 notebooks cost 120 som. How much do 7 notebooks cost?", ["180 som", "210 som", "240 som", "280 som"], 1, "One notebook costs 120 ÷ 4 = 30 som, so 7 notebooks cost 7 × 30 = 210 som."],
      ["The probability that it rains tomorrow is 0.3. What is the probability that it does NOT rain?", ["0.3", "0.7", "0.6", "1.3"], 1, "The probabilities of all outcomes add up to 1: 1 − 0.3 = 0.7."],
      ["What is the area of a circle with radius 5 cm? (Use π ≈ 3.14)", ["15.7 cm²", "31.4 cm²", "78.5 cm²", "157 cm²"], 2, "Area = πr² = 3.14 × 25 = 78.5 cm²."],
      ["The point (2, 5) is reflected in the x-axis. Where does it go?", ["(−2, 5)", "(2, −5)", "(5, 2)", "(−2, −5)"], 1, "Reflecting in the x-axis changes the sign of the y-coordinate: (2, −5)."]
    ]}
  ],
  science: [
    { topics: "Respiration · Properties of materials · Forces and energy", q: [
      ["Where does gas exchange happen in the lungs?", ["In the trachea", "In the alveoli", "In the bronchi", "In the diaphragm"], 1, "The alveoli are tiny air sacs with thin walls, where oxygen enters the blood and carbon dioxide leaves it."],
      ["What is the word equation for aerobic respiration?", ["Glucose + oxygen → carbon dioxide + water", "Carbon dioxide + water → glucose + oxygen", "Glucose → alcohol + carbon dioxide", "Oxygen + water → glucose"], 0, "Cells release energy from glucose using oxygen, and they make carbon dioxide and water."],
      ["Salt dissolves in water. What is the salt called?", ["The solvent", "The solute", "The solution", "The residue"], 1, "The solute dissolves. The solvent (water) does the dissolving. Together they make a solution."],
      ["A car travels 120 km in 2 hours. What is its average speed?", ["240 km/h", "60 km/h", "30 km/h", "122 km/h"], 1, "Speed = distance ÷ time = 120 ÷ 2 = 60 km/h."],
      ["Why does a sharp knife cut better than a blunt one?", ["It is heavier", "Its force acts on a smaller area, so the pressure is bigger", "It is colder", "It has less friction"], 1, "Pressure = force ÷ area. A thin edge has a small area, so the same force gives a large pressure."]
    ]},
    { topics: "Ecosystems · Materials and cycles on Earth · Light", q: [
      ["What is bioaccumulation?", ["Animals growing bigger", "Toxic substances building up in organisms along a food chain", "Plants making food", "Water evaporating"], 1, "Toxins that are not broken down build up in organisms and become more concentrated higher up a food chain."],
      ["Which particles are found in the nucleus of an atom?", ["Electrons only", "Protons and neutrons", "Electrons and protons", "Neutrons and electrons"], 1, "The nucleus contains protons and neutrons. Electrons move around the nucleus."],
      ["What happens when light passes from air into glass at an angle?", ["It stops", "It refracts (bends)", "It only reflects", "It speeds up"], 1, "Light slows down in glass and changes direction. This is refraction."],
      ["A prism splits white light into a spectrum. Which colour bends the most?", ["Red", "Yellow", "Green", "Violet"], 3, "Violet light is refracted the most and red light the least."],
      ["The angle of incidence on a mirror is 35°. What is the angle of reflection?", ["35°", "55°", "70°", "145°"], 0, "The law of reflection: the angle of incidence equals the angle of reflection."]
    ]},
    { topics: "Diet and growth · Chemical reactions · Magnetism", q: [
      ["Which nutrient is mainly needed for growth and repair?", ["Carbohydrates", "Fats", "Proteins", "Fibre"], 2, "Proteins are used to build and repair cells, for example in muscles."],
      ["An exothermic reaction…", ["takes in heat from the surroundings", "gives out heat to the surroundings", "has no energy change", "only happens in water"], 1, "Exothermic reactions release energy, so the surroundings get warmer. Burning is an example."],
      ["Which gas forms when a metal like magnesium reacts with a dilute acid?", ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"], 2, "Metal + acid → salt + hydrogen. Hydrogen makes a squeaky pop with a lit splint."],
      ["How can you make an electromagnet stronger?", ["Use fewer coils", "Use more coils of wire", "Use a plastic core", "Reduce the current"], 1, "More turns of wire, a bigger current or an iron core make an electromagnet stronger."],
      ["Two north poles of magnets are brought together. They…", ["attract", "repel", "have no effect", "become electric"], 1, "Like poles repel each other, and opposite poles attract."]
    ]}
  ],
  english: [
    { topics: "Reading fiction · Vocabulary · Sentence types", q: [
      ["Which is a complex sentence?", ["I like tea.", "I like tea and she likes coffee.", "Although it was late, we kept working.", "Stop!"], 2, "A complex sentence has a main clause and a subordinate clause, often starting with a word like “although”."],
      ["What does “reluctant” mean?", ["eager", "unwilling", "angry", "excited"], 1, "A reluctant person does not want to do something."],
      ["“Her heart was a stone” is an example of…", ["simile", "metaphor", "alliteration", "onomatopoeia"], 1, "A metaphor says one thing is another thing, without “like” or “as”."],
      ["What is the effect of a very short sentence, like “Then silence.”, in a story?", ["It slows the story down", "It creates tension or drama", "It explains a fact", "It lists events"], 1, "Short sentences can build tension and make a moment stand out."],
      ["Choose the correct word: “There are too ___ cars in the city.”", ["much", "many", "more", "most"], 1, "Use “many” with countable nouns like cars, and “much” with uncountable nouns."]
    ]},
    { topics: "Non-fiction · Formal and informal language · Punctuation", q: [
      ["Which sentence is the most formal?", ["Hey, what's up?", "Could you please send me the information?", "Gimme the info!", "Thanks a lot, mate."], 1, "Formal language is polite and complete, with no slang."],
      ["Where should the apostrophe go? “the dogs bone” (one dog)", ["the dogs' bone", "the dog's bone", "the dogs bone'", "the do'gs bone"], 1, "For one owner, add 's: the dog's bone."],
      ["What is the purpose of a report?", ["To entertain with a story", "To give factual information in an organised way", "To describe feelings in a poem", "To advertise a product"], 1, "Reports present facts clearly, often with headings."],
      ["Which connective shows contrast?", ["Furthermore", "However", "Therefore", "Firstly"], 1, "“However” introduces a different or opposite point."],
      ["Which punctuation mark can introduce a list?", ["A comma", "A colon", "A question mark", "A hyphen"], 1, "A colon (:) can introduce a list, for example: apples, pears and plums."]
    ]},
    { topics: "Poetry · Drama · Persuasive writing", q: [
      ["A group of lines in a poem is called a…", ["paragraph", "stanza", "chapter", "scene"], 1, "In poetry, lines are grouped into stanzas (verses)."],
      ["What is a rhetorical question?", ["A question with a long answer", "A question asked for effect, not for an answer", "A question in a test", "A question about grammar"], 1, "For example: “Do we really want a dirty city?” It makes readers think."],
      ["In a play, a speech where a character speaks their thoughts alone on stage is a…", ["dialogue", "soliloquy", "chorus", "narration"], 1, "A soliloquy shows a character's private thoughts."],
      ["Which technique does “Act now – before it's too late!” use?", ["A command and a sense of urgency", "A simile", "Rhyme", "A flashback"], 0, "Persuasive writing often uses commands (imperatives) and urgency."],
      ["Choose the correct spelling.", ["definately", "definitely", "definitly", "defanitely"], 1, "“Definitely” comes from the word “definite”."]
    ]}
  ]
};

window.BILIM_CAMBRIDGE["8"] = {
  stage: "Stage 9", course: "Cambridge Lower Secondary · Checkpoint year",
  math: [
    { topics: "Number and calculation · Expressions and formulae · Decimals, percentages and rounding · Equations and inequalities · Angles", q: [
      ["Write 3.6 × 10⁴ as an ordinary number.", ["360", "3600", "36 000", "360 000"], 2, "Multiplying by 10⁴ moves the digits 4 places: 3.6 × 10 000 = 36 000."],
      ["Simplify x⁵ × x³.", ["x¹⁵", "x⁸", "x²", "2x⁸"], 1, "When you multiply powers of the same base, add the indices: 5 + 3 = 8."],
      ["Solve 5x − 4 > 21.", ["x > 5", "x < 5", "x > 17/5", "x > 25"], 0, "Add 4 to both sides: 5x > 25. Divide by 5: x > 5."],
      ["A price of 250 som is reduced by 12%. What is the new price?", ["220 som", "238 som", "212 som", "230 som"], 0, "12% of 250 is 30. 250 − 30 = 220 som."],
      ["What is each interior angle of a regular pentagon?", ["72°", "108°", "120°", "135°"], 1, "The interior angles of a pentagon add up to (5 − 2) × 180° = 540°. 540 ÷ 5 = 108°."],
      ["Make r the subject of A = πr².", ["r = A/π", "r = √(A/π)", "r = √A − π", "r = A − π"], 1, "Divide by π: r² = A/π. Then take the square root: r = √(A/π)."]
    ]},
    { topics: "Statistical investigations · Shapes and measurements · Fractions · Sequences and functions · Graphs", q: [
      ["Find the mean of 4, 7, 9 and 12.", ["7", "8", "9", "32"], 1, "Add them: 4 + 7 + 9 + 12 = 32. Divide by 4: 8."],
      ["A trapezium has parallel sides of 6 cm and 10 cm and a height of 4 cm. What is its area?", ["32 cm²", "64 cm²", "40 cm²", "24 cm²"], 0, "Area = ½(a + b)h = ½ × 16 × 4 = 32 cm²."],
      ["Work out 2½ ÷ ¼.", ["5/8", "10", "5", "2⅛"], 1, "2½ = 5/2. Dividing by ¼ is the same as multiplying by 4: 5/2 × 4 = 10."],
      ["What is the nth term of 7, 12, 17, 22, …?", ["5n + 2", "5n + 7", "7n", "n + 5"], 0, "The difference is 5, so start with 5n. When n = 1, 5 + 2 = 7, so the nth term is 5n + 2."],
      ["Where does the line y = 2x + 3 cross the y-axis?", ["(0, 2)", "(0, 3)", "(3, 0)", "(2, 0)"], 1, "In y = mx + c, the line crosses the y-axis at (0, c), which is (0, 3)."],
      ["Which graph shows that y is directly proportional to x?", ["A straight line through the origin", "A horizontal line", "A curve that goes down", "A straight line that does not pass through the origin"], 0, "Direct proportion (y = kx) gives a straight line through (0, 0)."]
    ]},
    { topics: "Ratio and proportion · Probability · Position and transformation · Volume, surface area and symmetry · Interpreting results", q: [
      ["A map has a scale of 1 : 50 000. How far in real life is 4 cm on the map?", ["2 km", "20 km", "200 m", "0.2 km"], 0, "4 × 50 000 = 200 000 cm = 2000 m = 2 km."],
      ["Two fair coins are thrown. What is the probability of getting two heads?", ["1/2", "1/3", "1/4", "2/3"], 2, "The outcomes are HH, HT, TH and TT. Only one of the four is HH, so 1/4."],
      ["What is the volume of a cuboid 5 cm × 4 cm × 3 cm?", ["12 cm³", "47 cm³", "60 cm³", "94 cm³"], 2, "Volume = length × width × height = 5 × 4 × 3 = 60 cm³."],
      ["A shape is enlarged by scale factor 3. A side of 4 cm becomes…", ["7 cm", "12 cm", "1.3 cm", "43 cm"], 1, "Multiply lengths by the scale factor: 4 × 3 = 12 cm."],
      ["What is the surface area of a cube with edges of 3 cm?", ["27 cm²", "36 cm²", "54 cm²", "18 cm²"], 2, "A cube has 6 faces, each 3 × 3 = 9 cm². 6 × 9 = 54 cm²."],
      ["A journey takes 2 hours at 60 km/h. How long does the same journey take at 40 km/h?", ["1 hour 20 minutes", "3 hours", "2 hours 40 minutes", "4 hours"], 1, "The distance is 60 × 2 = 120 km. The time is 120 ÷ 40 = 3 hours."]
    ]}
  ],
  science: [
    { topics: "Photosynthesis and the carbon cycle · Properties of materials · Forces and energy", q: [
      ["What is the word equation for photosynthesis?", ["Carbon dioxide + water → glucose + oxygen", "Glucose + oxygen → carbon dioxide + water", "Oxygen + water → carbon dioxide", "Glucose → starch + water"], 0, "Using light energy and chlorophyll, plants make glucose and oxygen from carbon dioxide and water."],
      ["Which process removes carbon dioxide from the atmosphere?", ["Combustion", "Respiration", "Photosynthesis", "Decay"], 2, "Photosynthesis takes in carbon dioxide. Combustion, respiration and decay release it."],
      ["Elements in the same group of the Periodic Table have the same number of…", ["neutrons", "electrons in the outer shell", "protons", "shells"], 1, "Elements in a group have the same number of outer electrons, so they react in similar ways."],
      ["How do Group 1 metals change as you go down the group?", ["They become less reactive", "They become more reactive", "They stop reacting", "They become non-metals"], 1, "Lithium, sodium, potassium: reactivity increases down Group 1."],
      ["A block has a mass of 600 g and a volume of 200 cm³. What is its density?", ["3 g/cm³", "0.33 g/cm³", "400 g/cm³", "800 g/cm³"], 0, "Density = mass ÷ volume = 600 ÷ 200 = 3 g/cm³."],
      ["How does thermal energy travel from the Sun to the Earth?", ["Conduction", "Convection", "Radiation", "Evaporation"], 2, "Space is almost empty, so only radiation (infrared) can carry the energy."]
    ]},
    { topics: "Maintaining life · Reactivity · Sound and space", q: [
      ["What is transpiration?", ["Water moving into roots", "The loss of water vapour from leaves", "Making glucose", "Moving sugar around a plant"], 1, "Transpiration is the evaporation of water from leaves, mostly through the stomata."],
      ["Which organ removes urea from the blood?", ["The lungs", "The kidneys", "The heart", "The stomach"], 1, "The kidneys filter the blood and remove urea in urine. This is excretion."],
      ["Magnesium is more reactive than copper. What happens when magnesium is put into copper sulfate solution?", ["Nothing happens", "Magnesium displaces the copper", "Copper displaces the magnesium", "Oxygen is made"], 1, "A more reactive metal displaces a less reactive metal from its compound."],
      ["Which salt forms when hydrochloric acid reacts with sodium hydroxide?", ["Sodium sulfate", "Sodium chloride", "Sodium nitrate", "Calcium chloride"], 1, "Hydrochloric acid makes chlorides: HCl + NaOH → NaCl + H₂O."],
      ["A louder sound has a bigger…", ["frequency", "amplitude", "wavelength", "speed"], 1, "Loudness depends on amplitude. Pitch depends on frequency."],
      ["What is a nebula?", ["A type of planet", "A cloud of dust and gas where stars can form", "A comet's tail", "A black hole"], 1, "Nebulae are huge clouds of gas and dust. Gravity pulls the material together to form stars."]
    ]},
    { topics: "Genes and inheritance · Rates of reaction · Electricity", q: [
      ["Where are genes found?", ["In the cytoplasm only", "On chromosomes in the nucleus", "In the cell wall", "In the blood plasma"], 1, "Genes are sections of DNA on the chromosomes in the nucleus."],
      ["How many chromosomes does a human gamete (sex cell) contain?", ["46", "23", "92", "12"], 1, "Body cells have 46 chromosomes. Gametes have half as many: 23."],
      ["Which change makes a reaction faster?", ["Using bigger lumps", "Lowering the temperature", "Increasing the concentration", "Adding water to dilute it"], 2, "In a more concentrated solution more particles collide each second, so the rate increases."],
      ["Why does a powder react faster than a lump of the same substance?", ["It has a smaller surface area", "It has a larger surface area", "It is heavier", "It is colder"], 1, "A powder has a larger surface area, so more particles can collide at the same time."],
      ["In a parallel circuit, the current from the cell is 3 A. One branch carries 1 A. What is the current in the other branch?", ["1 A", "2 A", "3 A", "4 A"], 1, "In a parallel circuit, the branch currents add up to the total: 3 − 1 = 2 A."],
      ["A lamp has a voltage of 6 V across it and a current of 2 A through it. What is its resistance?", ["3 Ω", "12 Ω", "8 Ω", "4 Ω"], 0, "Resistance = voltage ÷ current = 6 ÷ 2 = 3 Ω."]
    ]}
  ],
  english: [
    { topics: "Reading fiction · Narrative voice · Vocabulary in context", q: [
      ["A story that calls the characters “he” and “she” is written in the…", ["first person", "second person", "third person", "future tense"], 2, "Third-person narrators refer to characters as he, she or they."],
      ["What does “meticulous” mean?", ["careless", "very careful and precise", "very fast", "noisy"], 1, "A meticulous person pays close attention to every detail."],
      ["What is foreshadowing?", ["A flashback", "A hint about what will happen later", "The story's ending", "A description of shadows"], 1, "Writers use foreshadowing to build suspense by hinting at later events."],
      ["Which sentence uses the passive voice?", ["The cat chased the mouse.", "The mouse was chased by the cat.", "The cat is chasing the mouse.", "Chase the mouse!"], 1, "In the passive voice the subject receives the action: was chased."],
      ["“The old house groaned in the storm.” What effect does “groaned” create?", ["It makes the house seem alive and in pain", "It shows the house is new", "It describes calm weather", "It shows the house is empty"], 0, "This personification makes the house seem alive and creates a creepy mood."],
      ["What is the setting of a story?", ["The main character", "Where and when it happens", "The problem", "The ending"], 1, "The setting is the time and place of the story."]
    ]},
    { topics: "Non-fiction: argument and discussion · Summary · Grammar", q: [
      ["A balanced argument should…", ["give only one side", "present both sides before reaching a conclusion", "use only opinions", "avoid facts"], 1, "A discussion text presents views for and against, then reaches a conclusion."],
      ["When you write a summary, you should…", ["copy whole sentences", "include every example", "give the main points in your own words", "add your opinion"], 2, "A summary is shorter than the original and uses your own words for the key ideas."],
      ["Choose the correct form: “If I ___ more time, I would learn Chinese.”", ["have", "had", "will have", "would have"], 1, "The second conditional uses if + past simple, then would + verb."],
      ["Which sentence is a counter-argument?", ["Some people say uniforms limit freedom; however, they create equality.", "Uniforms are good.", "I like blue uniforms.", "Uniforms are made of cloth."], 0, "A counter-argument mentions the other side and then answers it."],
      ["Which word is spelled correctly?", ["accomodation", "accommodation", "acommodation", "accommadation"], 1, "“Accommodation” has a double c and a double m."],
      ["“Statistics show that 80% of students…” is an example of using…", ["emotive language", "evidence", "a rhetorical question", "alliteration"], 1, "Facts and figures are evidence that make an argument more convincing."]
    ]},
    { topics: "Poetry analysis · Drama · Writing to describe and narrate", q: [
      ["What is the mood of a text?", ["The feeling or atmosphere it creates", "The number of lines", "The writer's name", "The rhyme scheme"], 0, "Mood is the atmosphere of a text, for example tense, joyful or gloomy."],
      ["A rhyme scheme of ABAB means…", ["lines 1 and 2 rhyme", "lines 1 and 3 rhyme, and lines 2 and 4 rhyme", "no lines rhyme", "all lines rhyme"], 1, "Lines with the same letter rhyme: line 1 with line 3, and line 2 with line 4."],
      ["What is dramatic irony?", ["When the audience knows something a character does not", "When actors forget their lines", "A sad ending", "A long speech"], 0, "Dramatic irony creates tension because the audience knows more than the character."],
      ["Which opening hooks the reader best?", ["This is a story about a boy.", "The door creaked open, and the candle went out.", "Once there was a day.", "I will tell you about my holiday."], 1, "It starts in the middle of the action and creates mystery."],
      ["Which of these is sensory detail?", ["He was happy.", "The bitter smell of smoke filled the room.", "It was Tuesday.", "She went home."], 1, "Sensory details appeal to the senses: sight, sound, smell, taste and touch."],
      ["What is an oxymoron?", ["Two opposite words together, like “deafening silence”", "A very long word", "A question", "A type of poem"], 0, "An oxymoron puts contradictory words side by side for effect."]
    ]}
  ],
  /* Mock Checkpoint: one timed test with Mathematics, Science and English. */
  checkpoint: {
    minutes: 45,
    math: [
      ["Calculate 3² + 4 × 5.", ["65", "29", "45", "49"], 1, "Use the order of operations: 3² = 9 and 4 × 5 = 20, then 9 + 20 = 29."],
      ["Write 0.00072 in standard form.", ["7.2 × 10⁻⁴", "7.2 × 10⁴", "72 × 10⁻⁵", "0.72 × 10⁻³"], 0, "Move the decimal point 4 places to the right to get 7.2, so the answer is 7.2 × 10⁻⁴."],
      ["Factorise 6x + 9.", ["3(2x + 3)", "6(x + 9)", "3(2x + 9)", "9(x + 6)"], 0, "The highest common factor of 6x and 9 is 3: 3(2x + 3)."],
      ["Solve 3(x − 2) = 2x + 5.", ["x = 3", "x = 7", "x = 11", "x = −1"], 2, "Expand: 3x − 6 = 2x + 5. Then x = 11."],
      ["A shirt costs 1200 som after a 20% discount. What was the original price?", ["1440 som", "1500 som", "960 som", "1000 som"], 1, "1200 som is 80% of the original price. 1200 ÷ 0.8 = 1500 som."],
      ["The ratio of boys to girls in a class is 2 : 3. There are 30 students. How many are girls?", ["12", "15", "18", "20"], 2, "2 + 3 = 5 parts. One part is 30 ÷ 5 = 6. Girls: 3 × 6 = 18."],
      ["A right-angled triangle has shorter sides of 5 cm and 12 cm. How long is the hypotenuse?", ["13 cm", "17 cm", "15 cm", "11 cm"], 0, "Pythagoras' theorem: 5² + 12² = 25 + 144 = 169, and √169 = 13 cm."],
      ["The probability of picking a red ball from a bag is 0.35. There are 40 balls. How many are red?", ["14", "12", "35", "20"], 0, "Expected number = 0.35 × 40 = 14."],
      ["What is the median of 3, 8, 2, 9, 5?", ["5", "8", "3", "5.4"], 0, "In order: 2, 3, 5, 8, 9. The middle value is 5."],
      ["What is the gradient of the line through (1, 2) and (3, 8)?", ["2", "3", "4", "6"], 1, "Gradient = change in y ÷ change in x = (8 − 2) ÷ (3 − 1) = 6 ÷ 2 = 3."]
    ],
    science: [
      ["Which cell structure controls what enters and leaves the cell?", ["Cell wall", "Cell membrane", "Nucleus", "Vacuole"], 1, "The cell membrane controls the movement of substances into and out of the cell."],
      ["Which gas do muscles need for aerobic respiration?", ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], 2, "Aerobic respiration uses oxygen to release energy from glucose."],
      ["An atom has 11 protons. What is its atomic number?", ["11", "12", "22", "23"], 0, "The atomic number is the number of protons."],
      ["Which of these is a physical change?", ["Burning paper", "Melting ice", "Rusting iron", "Cooking an egg"], 1, "Melting ice makes no new substance and can be reversed, so it is a physical change."],
      ["A force of 20 N acts on an area of 4 m². What is the pressure?", ["5 Pa", "80 Pa", "24 Pa", "16 Pa"], 0, "Pressure = force ÷ area = 20 ÷ 4 = 5 N/m², which is 5 Pa."],
      ["What colour does universal indicator turn in a strong alkali?", ["Red", "Green", "Purple", "Yellow"], 2, "Universal indicator turns purple in strong alkalis (pH 13–14)."],
      ["What is the main energy change in a battery-powered torch?", ["Light → chemical", "Chemical → electrical → light", "Thermal → chemical", "Sound → light"], 1, "The battery stores chemical energy, which becomes electrical energy and then light (and some heat)."],
      ["Which organism is a producer?", ["Rabbit", "Fox", "Grass", "Mushroom"], 2, "Producers make their own food by photosynthesis. Grass is a plant."],
      ["What does the reactivity series show?", ["How heavy metals are", "Which metals react more strongly", "The colour of metals", "How metals are mined"], 1, "It lists metals from the most reactive to the least reactive."],
      ["Sound cannot travel through…", ["water", "steel", "air", "a vacuum"], 3, "Sound needs particles to vibrate, so it cannot travel through a vacuum like space."]
    ],
    english: [
      ["Read: “The market woke before the sun.” Which technique is this?", ["Simile", "Personification", "Alliteration", "Onomatopoeia"], 1, "A market cannot really wake up. Giving it a human action is personification."],
      ["Read: “Aziz hurried through the crowd, clutching the coin his grandmother had given him.” What does “clutching” suggest?", ["He held the coin tightly because it mattered to him", "He dropped the coin", "He did not care about the coin", "He was throwing the coin"], 0, "“Clutching” means holding tightly, which shows that the coin is important to him."],
      ["Read: “The smell of fresh bread drifted between the stalls.” Which word appeals to the senses?", ["smell", "between", "the", "stalls"], 0, "“Smell” is sensory language that helps the reader imagine the scene."],
      ["Choose the correctly punctuated sentence.", ["“Wait for me” she shouted.", "“Wait for me!” she shouted.", "“Wait for me”! she shouted.", "Wait for me! “she shouted.”"], 1, "The punctuation that belongs to the spoken words goes inside the speech marks."],
      ["Which word completes the sentence? “The results were ___ than we expected.”", ["good", "better", "best", "more good"], 1, "Use the comparative form “better” with “than”."],
      ["What is the purpose of a persuasive leaflet?", ["To entertain", "To persuade the reader to think or do something", "To give instructions only", "To tell a story"], 1, "Persuasive texts try to change what the reader thinks or does."],
      ["Which part of “When the bell rang, the students left” is the subordinate clause?", ["the students left", "When the bell rang", "the bell", "left"], 1, "“When the bell rang” cannot stand alone as a sentence. It depends on the main clause."],
      ["Choose the word closest in meaning to “abundant”.", ["scarce", "plentiful", "tiny", "empty"], 1, "Abundant means existing in large amounts, so it means plentiful."],
      ["Which sentence is written in a formal register?", ["The concert was awesome!", "We would be grateful if you could reply by Friday.", "Text me later, OK?", "That's so cool."], 1, "Formal writing avoids slang and uses polite, complete sentences."],
      ["What is the effect of the repetition in “We will not give up. We will not give in.”?", ["It confuses the reader", "It emphasises determination", "It shows the writer is bored", "It makes the text shorter"], 1, "Repeating a structure creates rhythm and emphasis, which makes the message powerful."]
    ]
  }
};
