/* Bilim · Cambridge questions for grades 6–8 (Cambridge Lower Secondary, Stages 7–9).
   Topics follow the school's books: Cambridge Lower Secondary Mathematics 8 and 9, Complete Biology and
   Complete Physics for Cambridge Secondary 1, Cambridge Global English 8 and 9, English File Beginner
   and geog.1–3. Grade 6 maths keeps the Stage 7 units (that book was not uploaded).
   These are original questions written for each unit's topics. They are not copied from the books.

   Each question: ["Question", ["A", "B", "C", "D"], right answer (0 = A, 1 = B, 2 = C, 3 = D), "Explanation"]
   Each grade lists its subjects (subjects) and the school's book for each subject (books).
   Each subject has 3 terms: { topics: "...", q: [questions] } */
window.BILIM_CAMBRIDGE = window.BILIM_CAMBRIDGE || {};

window.BILIM_CAMBRIDGE["6"] = {
  stage: "Stage 7", course: "Cambridge Lower Secondary",
  subjects: ["math", "biology", "physics", "english", "geography"],
  books: {
    biology: "Complete Biology for Cambridge Secondary 1 · Stage 7",
    physics: "Complete Physics for Cambridge Secondary 1 · Stage 7",
    english: "English File Beginner (4th edition)",
    geography: "geog.1 (4th edition)"
  },
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
  biology: [
    { topics: "1 Plants: leaves, stems and roots · 2 Humans: the skeleton, muscles and movement, organ systems, the circulatory system", q: [
      ["What is the main job of a plant's roots?", ["To make food by photosynthesis", "To take in water and minerals and hold the plant in the soil", "To make seeds", "To take in carbon dioxide"], 1, "Roots anchor the plant in the soil and take in water and mineral salts."],
      ["Where does most photosynthesis happen in a plant?", ["In the roots", "In the leaves", "In the flowers", "In the seeds"], 1, "Leaves are wide and thin and contain green chlorophyll, so they can trap lots of light to make food."],
      ["Which part of a plant carries water up from the roots to the leaves?", ["The stem", "The petals", "The fruit", "The seed"], 0, "The stem holds the plant up and contains tubes that carry water up to the leaves."],
      ["Which of these is a job of the human skeleton?", ["Digesting food", "Protecting organs such as the brain and heart", "Pumping blood", "Making urine"], 1, "The skeleton supports the body, lets us move and protects organs: the skull protects the brain and the ribs protect the heart and lungs."],
      ["Muscles can only pull. The biceps bends your arm and the triceps straightens it. Muscles that work like this are called…", ["an antagonistic pair", "tendons", "ligaments", "a joint"], 0, "When one muscle contracts the other relaxes. Muscles that work against each other are an antagonistic pair."],
      ["Which organ system carries oxygen and food to every cell in the body?", ["The digestive system", "The circulatory system", "The nervous system", "The skeletal system"], 1, "The heart pumps blood through blood vessels. Blood carries oxygen and nutrients to the cells and takes waste away."]
    ]},
    { topics: "3 Cells and organisms: characteristics of living things, micro-organisms and Louis Pasteur, plant and animal cells, specialised cells, tissues and organs", q: [
      ["Which of these is one of the seven characteristics of living things (MRS GREN)?", ["Movement", "Colour", "Size", "Shape"], 0, "MRS GREN: movement, respiration, sensitivity, growth, reproduction, excretion and nutrition."],
      ["Which structure is found in plant cells but NOT in animal cells?", ["Nucleus", "Cell membrane", "Cell wall", "Cytoplasm"], 2, "Plant cells have a cell wall, chloroplasts and a large vacuole. Animal cells do not have a cell wall."],
      ["Why does a root hair cell have a long, thin part sticking out into the soil?", ["To make food", "To give a large surface area for taking in water", "To carry oxygen", "To send messages"], 1, "Specialised cells have a shape that suits their job. The root hair gives a big surface area for absorbing water and minerals."],
      ["Louis Pasteur's experiments showed that broth goes bad because of…", ["air alone", "micro-organisms carried in the air", "light", "heat"], 1, "In his swan-neck flask experiment, broth stayed fresh until microbes from the air could reach it."],
      ["Which micro-organism is used to make bread rise?", ["Yeast", "Salmonella", "The flu virus", "Mould on fruit"], 0, "Yeast is a fungus. When it respires it makes carbon dioxide gas, which makes the dough rise."],
      ["A group of similar cells working together to do one job is called…", ["a tissue", "an organ system", "an organism", "a nucleus"], 0, "Cells → tissues → organs → organ systems → organism. For example, muscle cells make muscle tissue."]
    ]},
    { topics: "4 Living things in their environment: habitats, food chains, preventing extinction · 5 Variation and classification: species, keys, vertebrates, plant groups", q: [
      ["In the food chain grass → rabbit → fox, what is the rabbit?", ["A producer", "A primary consumer", "A secondary consumer", "A decomposer"], 1, "The rabbit eats the producer (grass), so it is a primary consumer. The fox is a secondary consumer."],
      ["What do the arrows in a food chain show?", ["Which animal is biggest", "The direction in which energy flows", "Where the animals live", "Which animal is fastest"], 1, "Each arrow points from the food to the organism that eats it, showing how energy is passed along the chain."],
      ["Which of these helps to stop a species becoming extinct?", ["Cutting down its habitat", "Protecting its habitat and breeding it in zoos", "Hunting it", "Polluting its rivers"], 1, "Nature reserves, laws against hunting and captive breeding programmes help endangered species survive."],
      ["Which group of vertebrates has dry, scaly skin and lays eggs with leathery shells on land?", ["Amphibians", "Reptiles", "Fish", "Mammals"], 1, "Reptiles such as lizards, snakes and tortoises have dry scales and lay leathery eggs on land."],
      ["Which of these differences between people is caused only by the environment?", ["Eye colour", "Blood group", "A scar from an accident", "Natural hair colour"], 2, "A scar comes from something that happened to a person, not from their genes."],
      ["What is a species?", ["Any group of animals living in the same place", "A group of organisms that can breed together to produce fertile offspring", "All animals with backbones", "All plants that have flowers"], 1, "Members of one species can breed with each other, and their young can breed too."]
    ]}
  ],
  physics: [
    { topics: "1 Forces and motion: balanced forces, friction, gravity, air resistance, tension and upthrust", q: [
      ["What is the unit of force?", ["Kilogram (kg)", "Newton (N)", "Metre (m)", "Joule (J)"], 1, "Forces are measured in newtons with a forcemeter (newton meter)."],
      ["A book rests on a table and does not move. The forces on it are…", ["balanced", "unbalanced", "only gravity", "zero because nothing touches it"], 0, "Its weight pulls it down and the table pushes it up with an equal force, so the forces are balanced."],
      ["Which force slows down a box sliding across the floor?", ["Upthrust", "Friction", "Magnetism", "Tension"], 1, "Friction acts between two surfaces that rub together and works against the motion."],
      ["Your mass is 50 kg. On Earth gravity pulls with 10 N on every kilogram. What is your weight?", ["5 N", "50 N", "500 N", "60 N"], 2, "Weight = mass × gravitational field strength = 50 × 10 = 500 N."],
      ["Why does a parachute slow a skydiver down?", ["It reduces gravity", "It increases air resistance", "It makes the skydiver lighter", "It creates upthrust from the ground"], 1, "The large canopy pushes against a lot of air, so the air resistance becomes much bigger."],
      ["What is the upward force that water puts on a floating boat called?", ["Upthrust", "Friction", "Weight", "Tension"], 0, "Liquids and gases push up on objects with upthrust. A boat floats when the upthrust equals its weight."]
    ]},
    { topics: "2 Energy: energy types and transfers, conservation of energy, gravitational and elastic potential energy, fuels, Sankey diagrams", q: [
      ["Which kind of energy does a moving car have?", ["Kinetic energy", "Elastic potential energy", "Sound energy only", "No energy"], 0, "Anything that is moving has kinetic energy."],
      ["A stretched elastic band stores…", ["kinetic energy", "elastic potential energy", "thermal energy", "light energy"], 1, "Objects that are stretched or squashed store elastic potential energy."],
      ["What does the law of conservation of energy say?", ["Energy can be created when we need it", "Energy cannot be created or destroyed, only transferred", "Energy is always destroyed when it is used", "Energy only exists in fuels"], 1, "The total amount of energy stays the same. It is only transferred from one store to another."],
      ["A lamp uses 100 J of electrical energy and gives out 20 J as light. How much energy heats the surroundings?", ["20 J", "80 J", "100 J", "120 J"], 1, "Energy is conserved: 100 − 20 = 80 J is wasted as heat. A Sankey diagram shows this with arrows of different widths."],
      ["Where did the energy stored in coal, oil and gas first come from?", ["The Moon", "The Sun", "The centre of the Earth", "The wind"], 1, "Fossil fuels formed from plants and animals that lived long ago. Their energy came from sunlight."],
      ["A ball is lifted onto a high shelf. Which energy store increases?", ["Kinetic", "Gravitational potential", "Elastic potential", "Sound"], 1, "Lifting an object higher increases its gravitational potential energy."]
    ]},
    { topics: "3 The Earth and beyond: day and night, the seasons, stars, the Solar System, the Moon, geocentric and heliocentric models", q: [
      ["What causes day and night on Earth?", ["The Earth orbiting the Sun", "The Earth spinning on its axis", "The Moon blocking the Sun", "The Sun going around the Earth"], 1, "The Earth spins once every 24 hours. The side facing the Sun has day and the other side has night."],
      ["Why do we have seasons?", ["The Earth's axis is tilted", "The Earth is much closer to the Sun in summer", "The Sun gets hotter in summer", "The Moon changes shape"], 0, "Because of the tilt, each half of the Earth gets more direct sunlight and longer days for part of the year."],
      ["How long does it take the Earth to orbit the Sun once?", ["24 hours", "About 28 days", "About 365¼ days", "10 years"], 2, "One orbit of the Sun takes about 365¼ days, which is one year."],
      ["Which is the largest planet in our Solar System?", ["Earth", "Saturn", "Jupiter", "Mars"], 2, "Jupiter is the largest planet. It is a gas giant."],
      ["Why can we see the Moon?", ["It makes its own light", "It reflects light from the Sun", "It is on fire", "It reflects light from cities on Earth"], 1, "The Moon is not a light source. We see the part of it that is lit by the Sun."],
      ["Who suggested the heliocentric model, with the Sun at the centre?", ["Ptolemy", "Copernicus", "Aristotle", "Newton"], 1, "Ptolemy's geocentric model put the Earth at the centre. Copernicus put the Sun at the centre."]
    ]}
  ],
  english: [
    { topics: "Files 1–4: verb be, Wh- questions, plurals, a/an, this/that/these/those, adjectives, possessive adjectives and 's · numbers, days, countries, family", q: [
      ["Choose the correct word: “They ___ from Kyrgyzstan.”", ["is", "am", "are", "be"], 2, "Use are with we, you and they."],
      ["Choose the correct question word: “___ are you from?” “I'm from Osh.”", ["What", "Where", "Who", "How old"], 1, "Use where to ask about places."],
      ["What is the plural of “watch”?", ["watchs", "watches", "watchies", "watch"], 1, "Add -es to nouns that end in ch, sh, s or x: watch → watches."],
      ["Choose the correct sentence.", ["This are my keys.", "These is my keys.", "These are my keys.", "That are my keys."], 2, "Use these for plural things that are near you, with are."],
      ["Choose the correct word: “This is Carmen and this is ___ brother, Diego.”", ["his", "her", "their", "its"], 1, "Use her for something that belongs to a woman or girl."],
      ["Choose the correct sentence.", ["Diego sister is Carmen.", "Carmen is Diego's sister.", "Carmen is sister of Diego's.", "Carmen is Diegos sister."], 1, "Use 's to show possession: Diego's sister."],
      ["Choose the correct order: “It's a ___.”", ["car red", "red car", "reds car", "car reds"], 1, "Adjectives go before the noun and never add -s."]
    ]},
    { topics: "Files 5–8: present simple, word order in questions, adverbs of frequency, imperatives, object pronouns, can/can't, like + -ing · food, jobs, daily routine, time, films", q: [
      ["Choose the correct sentence.", ["She work in a hospital.", "She works in a hospital.", "She working in a hospital.", "She is work in a hospital."], 1, "In the present simple, add -s to the verb after he, she and it."],
      ["Choose the correct question.", ["Where you live?", "Where do you live?", "Where does you live?", "Where you do live?"], 1, "Question word + do/does + subject + verb: Where do you live?"],
      ["Choose the correct sentence.", ["I never am late for school.", "I am never late for school.", "Never I am late for school.", "I am late never for school."], 1, "Adverbs of frequency go after the verb be, but before other verbs: I never walk to school."],
      ["Choose the correct word: “I love my grandparents and I visit ___ every weekend.”", ["they", "them", "their", "theirs"], 1, "After a verb, use an object pronoun: me, you, him, her, it, us, them."],
      ["Which sentence is correct?", ["I can to swim.", "I can swim.", "I cans swim.", "I can swimming."], 1, "After can, use the verb without to."],
      ["Choose the correct form: “I love ___ films at the weekend.”", ["watch", "watching", "to watching", "watches"], 1, "Like, love and hate are often followed by verb + -ing."],
      ["It's 7:45. How can you say the time?", ["It's quarter to eight.", "It's quarter past seven.", "It's half past seven.", "It's quarter to seven."], 0, "7:45 is fifteen minutes before eight o'clock, so it's quarter to eight."]
    ]},
    { topics: "Files 9–12: present continuous, present simple or continuous, there is/there are, was/were, past simple (regular and irregular) · clothes, travel, hotels, places", q: [
      ["Choose the correct sentence: “Look! It ___.”", ["rains", "is raining", "rain", "raining"], 1, "Use the present continuous (am/is/are + -ing) for things happening now."],
      ["Choose the correct form: “He usually ___ jeans, but today he's wearing a suit.”", ["wears", "is wearing", "wear", "wearing"], 0, "Use the present simple for habits (usually) and the present continuous for now (today)."],
      ["Choose the correct word: “There ___ two beds in the room.”", ["is", "are", "be", "am"], 1, "Use there are with plural nouns and there is with singular nouns."],
      ["Choose the correct word: “Where ___ you at six o'clock yesterday?”", ["was", "were", "are", "did"], 1, "The past of be: I/he/she/it was; you/we/they were."],
      ["What is the past simple of “go”?", ["goed", "went", "gone", "goes"], 1, "Go is an irregular verb: go → went."],
      ["Choose the correct question.", ["What time you got up?", "What time did you get up?", "What time did you got up?", "What time you did get up?"], 1, "Past simple questions use did + subject + verb (not the past form)."]
    ]}
  ],
  geography: [
    { topics: "1 It's your planet!: Earth's story, our place on Earth · 2 Maps and mapping: plans, scale, grid references, directions, OS maps, height", q: [
      ["Roughly how old is the Earth?", ["4.6 thousand years", "4.6 million years", "4.6 billion years", "46 billion years"], 2, "Scientists think the Earth formed about 4.6 billion years ago."],
      ["Which is the largest continent?", ["Africa", "Asia", "Europe", "South America"], 1, "Asia is the largest continent by area and by population. Kyrgyzstan is in Asia."],
      ["On a map with a scale of 1 : 50 000, 2 cm on the map is how far in real life?", ["1 km", "2 km", "500 m", "10 km"], 0, "2 × 50 000 = 100 000 cm = 1000 m = 1 km."],
      ["When you give a four-figure grid reference, which number comes first?", ["The northing (up the side)", "The easting (along the bottom)", "The height", "The direction"], 1, "Go along the corridor, then up the stairs: eastings first, then northings."],
      ["Which compass direction is halfway between north and east?", ["North-west", "North-east", "South-east", "South-west"], 1, "Halfway between north and east is north-east (NE)."],
      ["On an Ordnance Survey map, lines that join places of the same height are called…", ["contour lines", "grid lines", "spot heights", "rivers"], 0, "Contour lines show height. When they are close together, the land is steep."]
    ]},
    { topics: "3 About the UK: weather, people, where we live · 4 Glaciers: erosion and deposition · 5 Rivers: the water cycle, river landforms, floods", q: [
      ["Which four countries make up the United Kingdom?", ["England, Scotland, Wales and Northern Ireland", "England, Scotland, Wales and Ireland", "England, France, Wales and Scotland", "Great Britain, Ireland, Wales and England"], 0, "The UK is England, Scotland and Wales (Great Britain) plus Northern Ireland."],
      ["Which part of the UK is usually the wettest?", ["The west, especially the mountains", "The east coast", "London", "The flat south-east"], 0, "Moist winds blow in from the Atlantic. When they meet mountains in the west, the air rises, cools and gives rain."],
      ["A glacier wears away rock by plucking and by…", ["abrasion", "evaporation", "condensation", "deposition"], 0, "In abrasion, rocks frozen into the ice scrape the valley floor and sides like sandpaper."],
      ["What shape is a valley that has been carved by a glacier?", ["V-shaped", "U-shaped", "Flat with no sides", "S-shaped"], 1, "Glaciers make wide U-shaped valleys with steep sides. Rivers make narrower V-shaped valleys."],
      ["In the water cycle, water vapour cooling to form clouds is called…", ["evaporation", "condensation", "precipitation", "transpiration"], 1, "Condensation turns water vapour back into tiny drops of liquid water, which make clouds."],
      ["Which landform forms where a river flows over a band of hard rock on top of softer rock?", ["A waterfall", "A delta", "A levee", "An ox-bow lake"], 0, "The soft rock wears away faster. The hard rock overhangs and collapses, and the waterfall moves back, leaving a gorge."]
    ]},
    { topics: "6 Africa: countries, population, physical features, biomes · 7 In the Horn of Africa: climate, coffee farming, nomads, Addis Ababa, Djibouti", q: [
      ["Which is the longest river in Africa?", ["The Congo", "The Niger", "The Nile", "The Zambezi"], 2, "The Nile flows north through East and North Africa into the Mediterranean Sea."],
      ["Which is the largest hot desert in Africa?", ["The Kalahari", "The Sahara", "The Namib", "The Gobi"], 1, "The Sahara covers much of North Africa. The Gobi is in Asia."],
      ["About how many countries are there in Africa?", ["About 14", "About 34", "About 54", "About 94"], 2, "Africa has 54 countries, more than any other continent."],
      ["Which countries make up the Horn of Africa?", ["Egypt, Libya, Sudan and Chad", "Ethiopia, Eritrea, Djibouti and Somalia", "Kenya, Uganda, Tanzania and Rwanda", "Nigeria, Ghana, Mali and Niger"], 1, "The Horn of Africa is the peninsula in East Africa that sticks out into the Arabian Sea."],
      ["Which crop is Ethiopia famous for growing and selling to other countries?", ["Coffee", "Rice", "Cocoa", "Wheat"], 0, "Coffee is thought to have come from Ethiopia, and it is one of the country's most important exports."],
      ["What is a nomad?", ["Someone who lives in a city flat", "Someone who moves from place to place with their animals to find water and grazing", "A type of desert plant", "A coffee farmer"], 1, "Nomadic herders move with their camels, goats or cattle. Kyrgyz herders who move to summer pastures (jailoo) live in a similar way."],
      ["Why is Djibouti's location important?", ["It is on a busy shipping route at the southern entrance to the Red Sea", "It is the highest country in Africa", "It is in the middle of the Sahara", "It has the largest rainforest"], 0, "Ships between Europe and Asia pass Djibouti, so its port is very busy and important."]
    ]}
  ]
};

window.BILIM_CAMBRIDGE["7"] = {
  stage: "Stage 8", course: "Cambridge Lower Secondary",
  subjects: ["math", "biology", "physics", "english", "geography"],
  books: {
    math: "Cambridge Lower Secondary Mathematics 8 · Learner's Book + Workbook",
    biology: "Complete Biology for Cambridge Secondary 1 · Stage 8",
    physics: "Complete Physics for Cambridge Secondary 1 · Stage 8",
    english: "Cambridge Global English 8 · Workbook",
    geography: "geog.2 (4th edition)"
  },
  math: [
    { topics: "1 Integers · 2 Expressions, formulae and equations · 3 Place value and rounding · 4 Decimals · 5 Angles and constructions", q: [
      ["Write 72 as a product of its prime factors.", ["2³ × 3²", "2² × 3³", "8 × 9", "2 × 36"], 0, "72 = 8 × 9 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²."],
      ["Work out (−24) ÷ (−6).", ["−4", "4", "−18", "18"], 1, "A negative divided by a negative is positive: 24 ÷ 6 = 4."],
      ["What is ∛64 (the cube root of 64)?", ["8", "4", "16", "21⅓"], 1, "4 × 4 × 4 = 64, so the cube root of 64 is 4."],
      ["Factorise 12x − 18.", ["6(2x − 3)", "3(4x − 18)", "6(2x − 18)", "12(x − 6)"], 0, "The highest common factor of 12x and 18 is 6: 12x − 18 = 6(2x − 3)."],
      ["Solve 3(x + 4) = 27.", ["x = 5", "x = 7", "x = 9", "x = 11"], 0, "Divide both sides by 3: x + 4 = 9, so x = 5."],
      ["Work out 4.6 × 0.01.", ["460", "0.46", "0.046", "0.0046"], 2, "Multiplying by 0.01 is the same as dividing by 100: 4.6 ÷ 100 = 0.046."],
      ["Work out 3.6 ÷ 0.4.", ["0.9", "9", "90", "1.44"], 1, "Multiply both numbers by 10: 36 ÷ 4 = 9."],
      ["Two angles of a triangle are 40° and 75°. What is the exterior angle at the third corner?", ["65°", "115°", "105°", "140°"], 1, "An exterior angle of a triangle equals the sum of the two opposite interior angles: 40° + 75° = 115°."]
    ]},
    { topics: "6 Collecting data · 7 Fractions · 8 Shapes and symmetry · 9 Sequences and functions · 10 Percentages", q: [
      ["Which way of choosing a sample gives every student the same chance of being picked?", ["Asking your friends", "Choosing students at random", "Asking the first 10 students who arrive", "Asking only one class"], 1, "A random sample is fair because everyone has an equal chance of being chosen, so it is less likely to be biased."],
      ["Write 4/9 as a decimal.", ["0.444…", "0.49", "0.4", "0.454545…"], 0, "4 ÷ 9 = 0.4444…, a recurring decimal."],
      ["Work out 3⅓ − 1¾.", ["1 7/12", "2 5/12", "1 5/12", "2 7/12"], 0, "3⅓ = 40/12 and 1¾ = 21/12. 40/12 − 21/12 = 19/12 = 1 7/12."],
      ["Work out 6 ÷ 2/3.", ["4", "9", "12", "18"], 1, "Dividing by 2/3 is the same as multiplying by 3/2: 6 × 3/2 = 9."],
      ["A circle has a diameter of 10 cm. What is its circumference? (Use π ≈ 3.14)", ["15.7 cm", "31.4 cm", "78.5 cm", "314 cm"], 1, "Circumference = π × diameter = 3.14 × 10 = 31.4 cm."],
      ["How many lines of symmetry does a regular hexagon have?", ["3", "4", "6", "12"], 2, "A regular polygon has as many lines of symmetry as it has sides, so a regular hexagon has 6."],
      ["What is the nth term of 5, 8, 11, 14, …?", ["n + 3", "3n + 2", "5n + 3", "3n + 5"], 1, "The difference is 3, so start with 3n. When n = 1, 3 + 2 = 5, so the nth term is 3n + 2."],
      ["A coat costs 2000 som. In a sale the price is reduced by 15%. Which calculation gives the sale price?", ["2000 × 0.15", "2000 × 0.85", "2000 × 1.15", "2000 ÷ 0.85"], 1, "A 15% decrease leaves 85% of the price, so multiply by 0.85. The sale price is 1700 som."]
    ]},
    { topics: "11 Graphs · 12 Ratio and proportion · 13 Probability · 14 Position and transformation · 15 Distance, area and volume · 16 Interpreting and discussing results", q: [
      ["What is the gradient of the line y = 3x − 2?", ["−2", "3", "2", "1/3"], 1, "In y = mx + c the gradient is m, so the gradient is 3. The line crosses the y-axis at −2."],
      ["Share 600 som between Aida and Bek in the ratio 2 : 3. How much does Bek get?", ["240 som", "360 som", "300 som", "400 som"], 1, "2 + 3 = 5 parts. One part is 600 ÷ 5 = 120 som, so Bek gets 3 × 120 = 360 som."],
      ["A spinner is spun 50 times and lands on red 18 times. What is the experimental probability of red?", ["0.18", "0.36", "0.5", "0.32"], 1, "Experimental probability = 18 ÷ 50 = 0.36."],
      ["A plane flies on a bearing of 090°. In which direction is it flying?", ["North", "East", "South", "West"], 1, "Bearings are measured clockwise from north: 000° is north, 090° is east, 180° is south and 270° is west."],
      ["What is the midpoint of the line segment from (2, 3) to (8, 7)?", ["(5, 5)", "(10, 10)", "(6, 4)", "(3, 2)"], 0, "Find the mean of the coordinates: ((2 + 8) ÷ 2, (3 + 7) ÷ 2) = (5, 5)."],
      ["About how many kilometres are equal to 5 miles?", ["3 km", "8 km", "10 km", "50 km"], 1, "5 miles is about 8 km."],
      ["A trapezium has parallel sides of 5 cm and 9 cm and a height of 4 cm. What is its area?", ["28 cm²", "56 cm²", "36 cm²", "180 cm²"], 0, "Area = ½(a + b)h = ½ × (5 + 9) × 4 = 28 cm²."],
      ["A pie chart shows the favourite sports of 60 students. How many degrees represent one student?", ["6°", "60°", "3.6°", "10°"], 0, "A full circle is 360°, so each student gets 360 ÷ 60 = 6°."]
    ]}
  ],
  biology: [
    { topics: "6 Plants: why we need plants, water and minerals · 7 Diet: nutrients, a balanced diet, deficiencies · 8 Digestion: the digestive system and enzymes", q: [
      ["Which gas do plants give out in photosynthesis that animals need?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"], 1, "Plants take in carbon dioxide and give out oxygen, which animals use to respire."],
      ["Plants take in nitrates from the soil. What do they use them for?", ["To make proteins for growth", "To make oxygen", "To absorb light", "To make the soil wet"], 0, "Nitrates are needed to make proteins. Without them a plant grows poorly and has yellow leaves."],
      ["Which nutrient is the main source of energy in bread and rice?", ["Protein", "Carbohydrate", "Vitamin C", "Fibre"], 1, "Starchy foods like bread, rice and potatoes are rich in carbohydrates, which give energy."],
      ["A lack of vitamin C in the diet causes…", ["scurvy", "rickets", "anaemia", "night blindness"], 0, "Scurvy causes bleeding gums. Rickets is caused by a lack of vitamin D, and anaemia by a lack of iron."],
      ["Why is fibre an important part of a balanced diet?", ["It gives a lot of energy", "It helps food move through the intestines and prevents constipation", "It builds muscles", "It makes bones strong"], 1, "Fibre is not digested, but it keeps food moving through the gut."],
      ["Where are most digested food molecules absorbed into the blood?", ["The stomach", "The small intestine", "The large intestine", "The oesophagus"], 1, "The small intestine is long and has a large surface area for absorbing nutrients into the blood."],
      ["Which enzyme breaks down starch into sugar?", ["Protease", "Lipase", "Amylase", "Catalase"], 2, "Amylase (for example in saliva) digests starch. Protease digests protein and lipase digests fat."]
    ]},
    { topics: "9 Circulation: blood, anaemia, the circulatory system, diet and fitness · 10 Respiration and breathing: lungs, gas exchange, anaerobic respiration, smoking", q: [
      ["Which part of the blood carries oxygen?", ["Plasma", "Red blood cells", "White blood cells", "Platelets"], 1, "Red blood cells contain haemoglobin, which carries oxygen from the lungs to the body."],
      ["Anaemia can be caused by a lack of which mineral in the diet?", ["Calcium", "Iron", "Iodine", "Sodium"], 1, "Iron is needed to make haemoglobin. Without enough, the blood carries less oxygen and you feel tired."],
      ["Which blood vessels carry blood away from the heart?", ["Veins", "Arteries", "Capillaries", "Valves"], 1, "Arteries carry blood away from the heart; veins carry it back. Capillaries link them."],
      ["What is the word equation for aerobic respiration?", ["glucose + oxygen → carbon dioxide + water", "carbon dioxide + water → glucose + oxygen", "glucose → lactic acid", "oxygen + water → glucose"], 0, "Aerobic respiration uses oxygen to release energy from glucose in every living cell."],
      ["Where in the lungs does gas exchange happen?", ["In the trachea", "In the alveoli (air sacs)", "In the ribs", "In the diaphragm"], 1, "The alveoli have thin walls and many capillaries, so oxygen passes into the blood and carbon dioxide passes out."],
      ["During very hard exercise, muscles may respire without oxygen. What do they make?", ["Lactic acid", "Oxygen", "Starch", "Alcohol and carbon dioxide"], 0, "Anaerobic respiration in muscles makes lactic acid, which can cause cramp."],
      ["Which substance in cigarette smoke stops red blood cells from carrying as much oxygen?", ["Nicotine", "Tar", "Carbon monoxide", "Water vapour"], 2, "Carbon monoxide joins onto haemoglobin instead of oxygen. Tar damages the lungs and nicotine is addictive."]
    ]},
    { topics: "11 Reproduction and fetal development: gametes, fertilisation, the placenta, twins, adolescence · 12 Drugs and disease: drugs, pathogens, defence against disease, immunity", q: [
      ["What are the human gametes (sex cells)?", ["Sperm and egg", "Testis and ovary", "Pollen and ovule", "Placenta and fetus"], 0, "The male gamete is the sperm cell and the female gamete is the egg cell."],
      ["Where does fertilisation usually happen in humans?", ["In the lining of the uterus", "In the oviduct (egg tube)", "In the ovary", "In the placenta"], 1, "A sperm cell meets the egg in the oviduct. The fertilised egg then moves to the uterus."],
      ["What does the placenta do?", ["Blocks all sound from reaching the baby", "Passes oxygen and nutrients from the mother's blood to the fetus and removes its waste", "Makes eggs", "Produces milk"], 1, "Substances pass between the mother's blood and the fetus's blood in the placenta, but the two bloods do not mix."],
      ["Identical twins form when…", ["two eggs are fertilised by two sperm", "one fertilised egg splits to form two embryos", "the mother eats more", "two embryos join together"], 1, "Identical twins come from one fertilised egg, so they have the same genes. Non-identical twins come from two eggs."],
      ["Antibiotics are medicines that kill…", ["viruses", "bacteria", "all pathogens", "white blood cells"], 1, "Antibiotics kill bacteria. They do not work against viruses such as the cold or flu virus."],
      ["How do white blood cells help defend the body?", ["They carry oxygen", "They engulf pathogens and make antibodies", "They clot the blood", "They digest food"], 1, "Some white blood cells swallow pathogens; others make antibodies that stick to pathogens."],
      ["How does a vaccine protect you?", ["It kills all bacteria in the body", "It contains a harmless form of a pathogen, so your body learns to make antibodies against it", "It is a type of antibiotic", "It removes the disease through sweat"], 1, "After a vaccine, memory cells can make antibodies quickly if the real pathogen ever gets in."]
    ]}
  ],
  physics: [
    { topics: "4 Forces and motion: speed, distance–time graphs, acceleration and speed–time graphs · 5 Sound: vibrations, loudness and amplitude, pitch and frequency, echoes", q: [
      ["A cyclist travels 300 m in 60 s. What is her average speed?", ["5 m/s", "18 000 m/s", "0.2 m/s", "240 m/s"], 0, "Speed = distance ÷ time = 300 ÷ 60 = 5 m/s."],
      ["On a distance–time graph, what does a horizontal (flat) line show?", ["Constant speed", "The object is not moving", "Acceleration", "Moving backwards quickly"], 1, "The distance is not changing, so the object is stationary."],
      ["On a speed–time graph, a straight line sloping upwards shows…", ["constant speed", "steady acceleration", "that the object has stopped", "deceleration"], 1, "The speed is increasing by the same amount each second, so the object is accelerating steadily."],
      ["Sound is made when objects…", ["vibrate", "get hot", "reflect light", "become magnetic"], 0, "All sounds come from vibrations, which pass through the air to our ears."],
      ["Why can sound not travel through space?", ["Space is too cold", "There are no particles to vibrate in a vacuum", "Light blocks it", "It travels too fast"], 1, "Sound needs a medium (solid, liquid or gas). Space is almost a vacuum."],
      ["A sound has a higher pitch. Which property of its wave is bigger?", ["Amplitude", "Frequency", "Loudness", "Speed"], 1, "Pitch depends on frequency, measured in hertz (Hz). Loudness depends on amplitude."],
      ["Loudness is measured on which scale?", ["Hertz (Hz)", "Decibels (dB)", "Newtons (N)", "Metres (m)"], 1, "The decibel scale measures how loud a sound is. Very loud sounds can damage hearing."],
      ["A ship sends a sound pulse to the seabed and hears the echo 2 s later. Sound travels at 1500 m/s in water. How deep is the sea?", ["750 m", "1500 m", "3000 m", "6000 m"], 1, "In 2 s the sound travels 1500 × 2 = 3000 m — there and back — so the depth is 3000 ÷ 2 = 1500 m."]
    ]},
    { topics: "6 Light: what light is, how we see things, the speed of light, reflection and the law of reflection, refraction in water and glass", q: [
      ["How do we see a book that does not give out its own light?", ["Light from our eyes hits the book", "Light from a source reflects off the book into our eyes", "The book glows", "Sound bounces off the book"], 1, "Light travels from a source such as the Sun or a lamp, reflects off the object and enters our eyes."],
      ["Why do we see lightning before we hear thunder?", ["Light travels much faster than sound", "Sound travels faster than light", "Our eyes work faster than our ears", "Thunder happens later"], 0, "Light travels at about 300 000 km/s, while sound in air travels at only about 340 m/s."],
      ["What does the law of reflection say?", ["The angle of incidence equals the angle of reflection", "Light always bends towards the normal", "The angle of reflection is always 90°", "Light slows down when it reflects"], 0, "Both angles are measured from the normal, a line at 90° to the mirror."],
      ["A ray hits a plane mirror with an angle of incidence of 35°. What is the angle of reflection?", ["35°", "55°", "70°", "145°"], 0, "The angle of reflection equals the angle of incidence: 35°."],
      ["When light passes from air into glass, it…", ["speeds up and bends away from the normal", "slows down and bends towards the normal", "stops", "never changes direction"], 1, "Light slows down in glass, so it bends (refracts) towards the normal."],
      ["Why does a straw in a glass of water look bent?", ["The water bends the straw", "Light refracts as it passes from the water into the air", "Light reflects off the glass", "The straw absorbs the light"], 1, "Light from the straw changes direction when it leaves the water, so the straw appears to be in a different place."]
    ]},
    { topics: "6 Light: dispersion, colour, lasers · 7 Magnetism: properties of magnets, magnetic fields, electromagnets and their uses", q: [
      ["A prism splits white light into a spectrum of colours. What is this called?", ["Reflection", "Dispersion", "Absorption", "Magnification"], 1, "Different colours refract by different amounts, so white light spreads out into a spectrum."],
      ["Why does a red apple look red in white light?", ["It absorbs red light", "It reflects red light and absorbs the other colours", "It makes its own red light", "It reflects all colours"], 1, "We see the colour of the light an object reflects."],
      ["What colour does a blue shirt look in red light?", ["Blue", "Red", "Black", "Purple"], 2, "A blue shirt reflects only blue light. There is no blue in red light, so the shirt absorbs it all and looks black."],
      ["Which of these metals is magnetic?", ["Copper", "Aluminium", "Iron", "Gold"], 2, "Iron, nickel and cobalt (and steel) are magnetic materials."],
      ["Two north poles of magnets are brought close together. What happens?", ["They attract", "They repel", "Nothing happens", "They turn into south poles"], 1, "Like poles repel; unlike poles attract."],
      ["How can you make an electromagnet stronger?", ["Use fewer turns of wire", "Increase the current or add more turns of wire", "Use a plastic core", "Reverse the current"], 1, "More current, more turns of wire and an iron core all make an electromagnet stronger."],
      ["What do magnetic field lines show?", ["The direction of the force on a north pole", "Where the magnet is hottest", "The mass of the magnet", "Where electricity flows"], 0, "Field lines go from the north pole to the south pole. Where they are close together, the field is strongest."]
    ]}
  ],
  english: [
    { topics: "Unit 1 Languages of the world · Unit 2 Design and architecture · Unit 3 Our society: -ing forms, abstract nouns, partitives, second conditional, relative clauses with prepositions, I wish / If only, present continuous passive", q: [
      ["Choose the correct word: “___ a new language takes time and practice.”", ["Learn", "Learning", "To learning", "Learned"], 1, "An -ing form can be the subject of a sentence: Learning a language takes time."],
      ["Which word is an abstract noun?", ["table", "happiness", "teacher", "river"], 1, "Abstract nouns name ideas and feelings that you cannot touch, like happiness, freedom and knowledge."],
      ["Choose the correct partitive: “a ___ of bread”", ["slice", "bar", "carton", "tube"], 0, "We say a slice of bread, a bar of chocolate, a carton of milk and a tube of toothpaste."],
      ["Complete the second conditional: “If I ___ an architect, I would design a green school.”", ["am", "were", "will be", "would be"], 1, "Second conditional: If + past simple, would + verb. We often use were for all persons."],
      ["Choose the correct words: “This is the house ___ my grandparents lived.”", ["in which", "on which", "which in", "who"], 0, "A preposition can go before which in a relative clause: the house in which they lived (= the house where they lived)."],
      ["Choose the correct form: “I wish I ___ closer to my school.”", ["live", "lived", "will live", "living"], 1, "Use I wish / If only + past simple to talk about a present situation we want to be different."],
      ["Complete with the present continuous passive: “A new park ___ in our town at the moment.”", ["is building", "is being built", "was built", "builds"], 1, "Present continuous passive: am/is/are + being + past participle."]
    ]},
    { topics: "Unit 4 Advertising · Unit 5 Natural resources · Unit 6 Natural wonders: passives, reflexive pronouns, compound adjectives, connectives, past modals, comparatives and superlatives, multi-word verbs", q: [
      ["Choose the past simple passive: “The advert ___ by a famous designer.”", ["created", "was created", "is creating", "has create"], 1, "Past simple passive: was/were + past participle."],
      ["Choose the correct reflexive pronoun: “They taught ___ how to make a website.”", ["them", "themselves", "theirselves", "theirs"], 1, "Use a reflexive pronoun when the subject and object are the same people: they → themselves."],
      ["Which phrase contains a compound adjective?", ["a well-known brand", "a brand well", "a knowing brand", "a brand known"], 0, "A compound adjective is made of two words joined with a hyphen, like well-known or eco-friendly."],
      ["Choose the future passive: “The new wind farm ___ next year.”", ["will open", "will be opened", "is opening", "opened"], 1, "Future passive: will be + past participle."],
      ["Choose the best connective: “Solar power is clean; ___, it can be expensive to install.”", ["however", "because", "so", "for example"], 0, "However introduces a contrast with the idea before it."],
      ["Choose the correct past modal: “The ground is wet. It ___ rained last night.”", ["must have", "can't have", "should", "must"], 0, "Must have + past participle shows we are almost sure something happened in the past."],
      ["Choose the correct superlative: “Mount Everest is ___ mountain in the world.”", ["the higher", "the highest", "highest", "the most high"], 1, "Short adjectives take -est in the superlative: high → the highest."],
      ["What does “find out” mean in “I want to find out more about volcanoes”?", ["lose", "discover information", "forget", "destroy"], 1, "Find out is a multi-word verb that means to discover or learn information."]
    ]},
    { topics: "Unit 7 Historical figures · Unit 8 Storytelling · Unit 9 Music: past continuous, verbs with prepositions, past perfect, present perfect continuous, reported speech, what-clauses, participle clauses", q: [
      ["Choose the correct tense: “While the explorers ___ across the desert, a storm started.”", ["travelled", "were travelling", "had travelled", "travel"], 1, "Use the past continuous for a longer action that was in progress when another event happened."],
      ["Choose the correct preposition: “She succeeded ___ becoming the first female pilot in her country.”", ["on", "in", "at", "for"], 1, "We say succeed in doing something."],
      ["Choose the past perfect: “By the time the museum opened, the scientists ___ the mummy.”", ["already studied", "had already studied", "have already studied", "were already study"], 1, "Use the past perfect (had + past participle) for an action that happened before another past action."],
      ["Which sentence is correct?", ["I have been reading this book for two hours.", "I am reading this book since two hours.", "I have read this book for two hours ago.", "I was been reading this book."], 0, "Use the present perfect continuous with for or since for an activity that started in the past and is still going on."],
      ["Report the question. “Where do you live?” she asked me.", ["She asked me where did I live.", "She asked me where I lived.", "She asked me where do I live.", "She asked me where I live?"], 1, "In reported questions, use statement word order and move the tense back: where I lived."],
      ["Choose the correct word: “___ is important in music is practice.”", ["What", "That", "Which", "It"], 0, "What can mean the thing which: The thing which is important is practice."],
      ["Choose the participle clause: “___ the guitar for years, he played the concert easily.”", ["Played", "Having played", "Being play", "To have play"], 1, "Having + past participle shows that one action happened before another."]
    ]}
  ],
  geography: [
    { topics: "1 Using GIS · 2 Population: growth, density, the UK and the world · 3 Urbanisation: how cities grow, push and pull factors, slums, cities of the future", q: [
      ["What does GIS stand for?", ["Global Information Service", "Geographical Information System", "Geography in Schools", "Global Internet Search"], 1, "A GIS stores data in layers on a digital map so you can look for patterns."],
      ["In 1854 Dr John Snow mapped deaths from cholera in London. His map helped to show that the disease came from…", ["dirty air", "a water pump", "rats", "food from a market"], 1, "The deaths were clustered around one water pump. When its handle was removed, the cases fell."],
      ["About how many people live in the world today?", ["About 800 million", "About 2 billion", "About 8 billion", "About 80 billion"], 2, "The world's population passed 8 billion in 2022, and it is still growing."],
      ["What is population density?", ["The number of people per square kilometre", "The total number of people in a country", "How fast a population grows", "The number of babies born each year"], 0, "Population density = number of people ÷ area. Cities are densely populated; mountains and deserts are sparsely populated."],
      ["What is urbanisation?", ["People moving from towns to the countryside", "A growing share of people living in towns and cities", "Building new farms", "Cities getting smaller"], 1, "Urbanisation happens when more and more of a country's people live in urban areas."],
      ["Which of these is a push factor that makes people leave a village?", ["Better jobs in the city", "A lack of jobs and services in the village", "The bright lights of the city", "Good hospitals in the city"], 1, "Push factors drive people away from a place; pull factors attract them to a new place."],
      ["What is a slum (informal settlement)?", ["A planned area of large houses", "An area of poor-quality housing, often built by the people who live there, with few services", "A city park", "A business district"], 1, "Many fast-growing cities have slums where homes lack clean water, toilets and electricity."]
    ]},
    { topics: "4 Coasts: waves, erosion, landforms, protecting the coast · 5 Weather and climate: measuring the weather, rain, air pressure, factors that influence climate", q: [
      ["Which type of wave has a strong backwash and erodes beaches?", ["A constructive wave", "A destructive wave", "A gentle wave", "A swash wave"], 1, "Destructive waves are tall and frequent, with a backwash stronger than the swash, so they drag material away."],
      ["Which coastal landform is made by deposition?", ["A cave", "A stack", "A spit", "An arch"], 2, "Longshore drift carries sand along the coast and deposits it to form a spit. Caves, arches and stacks are made by erosion."],
      ["As a headland is eroded, which order do the landforms form in?", ["Arch → cave → stack → stump", "Crack → cave → arch → stack → stump", "Stack → arch → cave → stump", "Stump → stack → arch → cave"], 1, "Waves widen a crack into a cave, the cave breaks through to make an arch, the arch collapses to leave a stack, and the stack wears down to a stump."],
      ["What is the difference between weather and climate?", ["There is no difference", "Weather is the state of the atmosphere day to day; climate is the average weather over many years", "Climate changes every day; weather stays the same", "Weather is only about rain"], 1, "Weather can change hour by hour. Climate is the usual pattern, worked out over at least 30 years."],
      ["Which instrument measures air pressure?", ["Thermometer", "Rain gauge", "Barometer", "Anemometer"], 2, "A barometer measures air pressure. An anemometer measures wind speed."],
      ["Places far from the sea, like Bishkek, often have hot summers and cold winters. Why?", ["The sea heats up and cools down slowly, so it keeps coastal places milder", "They are higher up", "They get more rain", "They are closer to the Equator"], 0, "This is called continentality: land heats and cools quickly, but the sea changes temperature slowly."]
    ]},
    { topics: "6 Our warming planet: global warming and climate change · 7 Asia: countries, physical features, population, biomes · 8 Southwest China: Chongqing, biodiversity, rivers and dams", q: [
      ["Which gas, released by burning fossil fuels, is the main cause of the enhanced greenhouse effect?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], 1, "Burning coal, oil and gas adds carbon dioxide to the atmosphere, which traps more heat."],
      ["Which of these is a likely effect of global warming?", ["Glaciers growing bigger", "Rising sea levels", "Colder summers everywhere", "Fewer heatwaves"], 1, "Ice on land melts and sea water expands as it warms, so sea levels rise. Tian Shan glaciers are also shrinking."],
      ["What is the highest mountain in Asia and in the world?", ["K2", "Mount Everest", "Jengish Chokusu (Pik Pobeda)", "Mount Fuji"], 1, "Mount Everest in the Himalayas is 8849 m high. Jengish Chokusu (7439 m) is the highest peak of the Tian Shan."],
      ["Which two Asian countries each have about 1.4 billion people?", ["China and India", "Japan and Russia", "Indonesia and Pakistan", "Kazakhstan and Mongolia"], 0, "China and India have by far the largest populations in the world."],
      ["The huge city of Chongqing in Southwest China lies on which river?", ["The Yangtze", "The Nile", "The Mekong", "The Ganges"], 0, "Chongqing grew where the Jialing River joins the Yangtze, China's longest river."],
      ["Southwest China is a biodiversity hotspot. What does this mean?", ["It has very few species", "It has a huge number of different species, many found nowhere else", "It is the hottest region", "It has no forests"], 1, "Mountains, forests and many different habitats mean there is a huge variety of plants and animals, such as giant pandas."],
      ["What is one benefit of building a big dam like the Three Gorges Dam?", ["It makes hydroelectric power and helps to control floods", "It forces people to move away", "It floods farmland", "It stops fish swimming upstream"], 0, "Big dams make lots of electricity and can control floods, but they also force people to move and damage habitats."]
    ]}
  ]
};

window.BILIM_CAMBRIDGE["8"] = {
  stage: "Stage 9", course: "Cambridge Lower Secondary · Checkpoint year",
  subjects: ["math", "biology", "physics", "english", "geography"],
  books: {
    math: "Cambridge Lower Secondary Mathematics 9 · Learner's Book + Workbook",
    biology: "Complete Biology for Cambridge Secondary 1 · Stage 9",
    physics: "Complete Physics for Cambridge Secondary 1 · Stage 9",
    english: "Cambridge Global English 9 · Learner's Book",
    geography: "geog.3 (4th edition)"
  },
  math: [
    { topics: "1 Number and calculation · 2 Expressions and formulae · 3 Decimals, percentages and rounding · 4 Equations and inequalities · 5 Angles", q: [
      ["Which of these numbers is irrational?", ["√16", "0.25", "√7", "3/4"], 2, "√7 cannot be written as a fraction and its decimal never ends or repeats. √16 = 4, 0.25 = 1/4."],
      ["Write 3.6 × 10⁴ as an ordinary number.", ["360", "3600", "36 000", "360 000"], 2, "Multiplying by 10⁴ moves the digits 4 places: 3.6 × 10 000 = 36 000."],
      ["Simplify x⁵ × x³.", ["x¹⁵", "x⁸", "x²", "2x⁸"], 1, "When you multiply powers of the same base, add the indices: 5 + 3 = 8."],
      ["Make r the subject of A = πr².", ["r = A/π", "r = √(A/π)", "r = √A − π", "r = A − π"], 1, "Divide by π: r² = A/π. Then take the square root: r = √(A/π)."],
      ["1000 som is saved at 10% compound interest per year. How much is there after 2 years?", ["1200 som", "1210 som", "1020 som", "1100 som"], 1, "Each year multiply by 1.1: 1000 × 1.1 × 1.1 = 1210 som."],
      ["Solve the simultaneous equations x + y = 10 and x − y = 4.", ["x = 7, y = 3", "x = 6, y = 4", "x = 3, y = 7", "x = 8, y = 2"], 0, "Add the equations: 2x = 14, so x = 7. Then y = 10 − 7 = 3."],
      ["Solve 5x − 4 > 21.", ["x > 5", "x < 5", "x > 17/5", "x > 25"], 0, "Add 4 to both sides: 5x > 25. Divide by 5: x > 5."],
      ["What is each interior angle of a regular pentagon?", ["72°", "108°", "120°", "135°"], 1, "The interior angles of a pentagon add up to (5 − 2) × 180° = 540°. 540 ÷ 5 = 108°."]
    ]},
    { topics: "6 Statistical investigations · 7 Shapes and measurements · 8 Fractions · 9 Sequences and functions · 10 Graphs", q: [
      ["A survey asks only people at a gym how often they exercise. Why might the results be biased?", ["The sample is too big", "Gym users probably exercise more than most people", "The questions are too short", "Everyone at a gym is the same age"], 1, "The sample does not represent the whole population, so the results are biased."],
      ["What is the area of a circle with radius 5 cm? (Use π ≈ 3.14)", ["15.7 cm²", "31.4 cm²", "78.5 cm²", "157 cm²"], 2, "Area = πr² = 3.14 × 5 × 5 = 78.5 cm²."],
      ["How many cm² are in 1 m²?", ["100", "1000", "10 000", "1 000 000"], 2, "1 m² = 100 cm × 100 cm = 10 000 cm²."],
      ["Which fraction is equal to 0.333…?", ["3/10", "1/3", "33/100", "1/30"], 1, "1 ÷ 3 = 0.333…, so 0.333… = 1/3."],
      ["Work out 2½ ÷ ¼.", ["5/8", "10", "5", "2⅛"], 1, "2½ = 5/2. Dividing by ¼ is the same as multiplying by 4: 5/2 × 4 = 10."],
      ["What is the nth term of 7, 12, 17, 22, …?", ["5n + 2", "5n + 7", "7n", "n + 5"], 0, "The difference is 5, so start with 5n. When n = 1, 5 + 2 = 7, so the nth term is 5n + 2."],
      ["Where does the line y = 2x + 3 cross the y-axis?", ["(0, 2)", "(0, 3)", "(3, 0)", "(2, 0)"], 1, "In y = mx + c, the line crosses the y-axis at (0, c), which is (0, 3)."],
      ["Which graph shows that y is directly proportional to x?", ["A straight line through the origin", "A horizontal line", "A curve that goes down", "A straight line that does not pass through the origin"], 0, "Direct proportion (y = kx) gives a straight line through (0, 0)."]
    ]},
    { topics: "11 Ratio and proportion · 12 Probability · 13 Position and transformation · 14 Volume, surface area and symmetry · 15 Interpreting and discussing results", q: [
      ["A journey takes 2 hours at 60 km/h. How long does the same journey take at 40 km/h?", ["1 hour 20 minutes", "3 hours", "2 hours 40 minutes", "4 hours"], 1, "This is inverse proportion. The distance is 60 × 2 = 120 km, and 120 ÷ 40 = 3 hours."],
      ["Events A and B are mutually exclusive. P(A) = 0.3 and P(B) = 0.45. What is P(A or B)?", ["0.135", "0.75", "0.15", "0.25"], 1, "For mutually exclusive events, add the probabilities: 0.3 + 0.45 = 0.75."],
      ["Two fair coins are thrown. What is the probability of getting two heads?", ["1/2", "1/3", "1/4", "2/3"], 2, "The outcomes are HH, HT, TH and TT. Only one of the four is HH, so the probability is 1/4."],
      ["A map has a scale of 1 : 50 000. How far in real life is 4 cm on the map?", ["2 km", "20 km", "200 m", "0.2 km"], 0, "4 × 50 000 = 200 000 cm = 2000 m = 2 km."],
      ["A shape is enlarged by scale factor 3. A side of 4 cm becomes…", ["7 cm", "12 cm", "1.3 cm", "43 cm"], 1, "Multiply lengths by the scale factor: 4 × 3 = 12 cm."],
      ["A triangular prism has a cross-section of area 12 cm² and a length of 10 cm. What is its volume?", ["22 cm³", "60 cm³", "120 cm³", "240 cm³"], 2, "Volume of a prism = area of cross-section × length = 12 × 10 = 120 cm³."],
      ["What is the surface area of a cube with edges of 3 cm?", ["27 cm²", "36 cm²", "54 cm²", "18 cm²"], 2, "A cube has 6 faces, each 3 × 3 = 9 cm². 6 × 9 = 54 cm²."],
      ["On a scatter graph the points go up from left to right in a narrow band. What does this show?", ["Negative correlation", "Positive correlation", "No correlation", "The mean"], 1, "When one variable increases as the other increases, there is positive correlation."]
    ]}
  ],
  biology: [
    { topics: "13 Plants: photosynthesis, testing leaves, plant growth, flowers, seed dispersal · 14 Adaptation and survival: adaptations, extreme environments, sampling", q: [
      ["What is the green pigment in leaves that absorbs light?", ["Chlorophyll", "Glucose", "Starch", "Haemoglobin"], 0, "Chlorophyll is found in chloroplasts and absorbs light energy for photosynthesis."],
      ["Which chemical is used to test a leaf for starch, and what is a positive result?", ["Iodine solution turns blue-black", "Benedict's solution turns orange", "Limewater turns cloudy", "Universal indicator turns red"], 0, "Plants store the glucose they make as starch. Iodine solution turns from orange-brown to blue-black when starch is present."],
      ["Which part of a flower makes pollen?", ["The stigma", "The anther", "The ovary", "The petal"], 1, "Pollen is made in the anthers. The stigma is where pollen lands."],
      ["Dandelion seeds have a parachute of fine hairs. How are they dispersed?", ["By animals eating them", "By the wind", "By water", "By exploding pods"], 1, "The light seeds with hairs are carried far away by the wind, so new plants do not compete with the parent."],
      ["How is a camel adapted to living in the desert?", ["It has thick fur for snow", "It can go a long time without drinking and stores fat in its hump", "It has gills", "It sleeps all summer"], 1, "Storing fat in one place and losing very little water help the camel survive heat and drought."],
      ["What do ecologists use a quadrat for?", ["To catch flying insects", "To estimate how many plants of a species grow in an area", "To measure rainfall", "To measure the pH of soil"], 1, "Counting plants inside quadrats placed at random gives an estimate for the whole area."]
    ]},
    { topics: "15 Energy flow: food webs, decomposers, changing populations, biodiversity · 16 Human influences: air pollution, water pollution, saving rainforests", q: [
      ["Why is only part of the energy passed on from one level of a food chain to the next?", ["Energy is used for life processes and lost as heat", "Animals do not need energy", "Plants keep all the energy", "Energy increases at each level"], 0, "Organisms use energy to move, keep warm and grow, and some is lost in waste, so less is passed on."],
      ["What do decomposers such as bacteria and fungi do?", ["Make food by photosynthesis", "Break down dead organisms and return nutrients to the soil", "Eat only living plants", "Pollinate flowers"], 1, "Decomposers recycle nutrients so that plants can use them again."],
      ["In a food web, foxes eat rabbits. A disease kills many of the foxes. What will most likely happen to the rabbits at first?", ["Their number falls", "Their number rises", "Their number stays exactly the same", "They start eating foxes"], 1, "With fewer predators, more rabbits survive and breed, so their population increases."],
      ["Which gas from burning fossil fuels causes acid rain?", ["Oxygen", "Sulfur dioxide", "Nitrogen", "Helium"], 1, "Sulfur dioxide (and nitrogen oxides) dissolve in rain water and make it acidic."],
      ["Fertiliser runs off fields into a lake and algae grow very fast. Why do fish then die?", ["The water gets too cold", "Bacteria that decompose the dead algae use up the oxygen in the water", "The fish eat the fertiliser", "The lake dries up"], 1, "This is called eutrophication. Without enough oxygen, fish and other animals die."],
      ["Why are rainforests important for the whole planet?", ["They contain very few species", "They hold huge biodiversity and absorb lots of carbon dioxide", "They cause acid rain", "They are the best places to build cities"], 1, "Rainforests are home to more than half of land species and help reduce the carbon dioxide in the air."]
    ]},
    { topics: "17 Variation and classification: using keys, chromosomes and genes, inheritance, selective breeding, Darwin's theory of evolution, using genes", q: [
      ["What can you use to identify an organism by answering a series of yes/no questions?", ["A food web", "A dichotomous key", "A microscope", "A quadrat"], 1, "A dichotomous key splits organisms into two groups at each step until only one is left."],
      ["How many chromosomes are there in a normal human body cell?", ["23", "46", "48", "92"], 1, "Body cells have 46 chromosomes (23 pairs). Sex cells have 23."],
      ["What carries the instructions for inherited characteristics?", ["Genes made of DNA", "Red blood cells", "Enzymes in the stomach", "Vitamins"], 0, "Genes are short sections of DNA on chromosomes. You inherit half your genes from each parent."],
      ["Farmers breed only from the cows that give the most milk, generation after generation. This is called…", ["natural selection", "selective breeding", "fertilisation", "cloning"], 1, "In selective breeding, humans choose which organisms reproduce to get useful characteristics."],
      ["In Darwin's theory of natural selection, which organisms are most likely to survive and reproduce?", ["The oldest ones", "Those best adapted to their environment", "The largest ones", "Those that move the most"], 1, "Well-adapted individuals survive, reproduce and pass on their useful characteristics to their offspring."],
      ["What did Darwin notice on the Galápagos Islands that helped him develop his theory?", ["Finches with different beak shapes on different islands", "Dinosaurs", "Penguins in the Arctic", "Identical animals on every island"], 0, "Each finch's beak suited the food on its island, which suggested that species change over time."]
    ]}
  ],
  physics: [
    { topics: "8 Forces and motion: pressure, pressure in liquids and gases, density, turning forces and moments, centre of mass and stability", q: [
      ["A box weighs 200 N and rests on an area of 0.5 m². What pressure does it exert?", ["100 Pa", "400 Pa", "200.5 Pa", "1000 Pa"], 1, "Pressure = force ÷ area = 200 ÷ 0.5 = 400 N/m², which is 400 Pa."],
      ["Why do snowshoes stop you sinking into deep snow?", ["They increase your weight", "They spread your weight over a larger area, so the pressure is lower", "They make the snow harder", "They reduce gravity"], 1, "The same force over a bigger area gives a smaller pressure."],
      ["What happens to the pressure in a liquid as you go deeper?", ["It decreases", "It increases", "It stays the same", "It becomes zero"], 1, "The deeper you go, the more liquid is above you, so the pressure increases. Dams are thicker at the bottom for this reason."],
      ["A metal block has a mass of 270 g and a volume of 100 cm³. What is its density?", ["2.7 g/cm³", "27 g/cm³", "0.37 g/cm³", "370 g/cm³"], 0, "Density = mass ÷ volume = 270 ÷ 100 = 2.7 g/cm³ (this is aluminium)."],
      ["A gas is heated in a sealed container. What happens to its pressure?", ["It decreases", "It increases, because the particles move faster and hit the walls harder and more often", "It stays the same", "It turns into a liquid"], 1, "Hotter particles have more kinetic energy, so they collide with the walls more often and with more force."],
      ["A force of 20 N acts 0.5 m from a pivot. What is its moment?", ["10 N m", "40 N m", "20.5 N m", "100 N m"], 0, "Moment = force × perpendicular distance from the pivot = 20 × 0.5 = 10 N m."],
      ["Why is a racing car built low and wide?", ["To make it heavier", "To lower its centre of mass and make it more stable", "To increase air resistance", "To make it easier to tip over"], 1, "A low centre of mass and a wide base make an object much harder to topple."]
    ]},
    { topics: "9 Electricity: static electricity, current, series and parallel circuits, how components affect current, voltage, energy and power", q: [
      ["A balloon rubbed on a jumper sticks to a wall. Why?", ["The balloon becomes magnetic", "Electrons are moved by rubbing, so the balloon becomes charged", "The balloon gets hot", "Air pressure pushes it"], 1, "Rubbing moves electrons from one material to the other. The charged balloon attracts the wall."],
      ["Which instrument measures electric current?", ["A voltmeter", "An ammeter", "A thermometer", "A barometer"], 1, "Current is measured in amperes (A) with an ammeter connected in series."],
      ["More lamps are added in series to a circuit with one cell. What happens to the lamps?", ["They get brighter", "They get dimmer", "They all go out", "They stay the same"], 1, "More lamps in series give more resistance, so the current is smaller and each lamp is dimmer."],
      ["In a parallel circuit, one branch has a current of 0.4 A and the other has 0.6 A. What is the current from the cell?", ["0.2 A", "0.5 A", "1.0 A", "0.24 A"], 2, "In a parallel circuit the branch currents add up to the total: 0.4 + 0.6 = 1.0 A."],
      ["How should a voltmeter be connected to measure the voltage across a lamp?", ["In series with the lamp", "In parallel with the lamp", "In place of the cell", "It does not need to be connected"], 1, "A voltmeter is always connected in parallel, across the component."],
      ["The resistance in a circuit increases but the voltage stays the same. What happens to the current?", ["It increases", "It decreases", "It stays the same", "It doubles"], 1, "Resistance makes it harder for current to flow, so a bigger resistance means a smaller current."],
      ["What is the unit of electrical power?", ["Volt (V)", "Watt (W)", "Ohm (Ω)", "Ampere (A)"], 1, "Power is measured in watts. A 60 W lamp transfers 60 joules of energy every second."]
    ]},
    { topics: "10 Energy: conduction, convection, radiation, cooling by evaporation, fossil fuels, generating electricity, renewable energy", q: [
      ["Why are saucepans usually made of metal with plastic handles?", ["Metal is a good conductor and plastic is an insulator", "Metal is an insulator and plastic is a conductor", "Both are good conductors", "Plastic is heavier"], 0, "Heat passes easily through the metal to the food, but not through the plastic to your hand."],
      ["How is heat mainly transferred through a liquid or a gas?", ["Only by conduction", "By convection currents", "It cannot be transferred", "Only by evaporation"], 1, "Warm fluid expands, becomes less dense and rises; cooler fluid sinks to take its place."],
      ["Which surface is the best emitter and absorber of infrared radiation?", ["Shiny silver", "Dull black", "Shiny white", "Clear glass"], 1, "Dull black surfaces absorb and give out infrared radiation best. Shiny surfaces reflect it."],
      ["Why does sweating cool you down?", ["Sweat is cold", "The fastest particles escape as the sweat evaporates, so the liquid left behind and your skin cool down", "Sweat reflects sunlight", "Sweat stops convection"], 1, "Evaporation takes away the particles with the most energy, so the average energy (temperature) falls."],
      ["Which of these is a renewable energy resource?", ["Coal", "Natural gas", "Wind", "Oil"], 2, "Renewable resources, such as wind, solar and hydroelectric power, will not run out."],
      ["In a power station, which part turns kinetic energy into electrical energy?", ["The boiler", "The generator", "The cooling tower", "The furnace"], 1, "A turbine spins the generator, which transfers kinetic energy to electrical energy."],
      ["Most of Kyrgyzstan's electricity comes from…", ["nuclear power", "hydroelectric power", "solar panels", "oil"], 1, "Dams on the Naryn River, such as Toktogul, use falling water to drive turbines and generators."]
    ]}
  ],
  english: [
    { topics: "Unit 1 Views and values · Unit 2 Well-being · Unit 3 Tourism: -ing forms, present passives, must/might/can't have, strong adjectives and intensifiers, multi-word verbs, past continuous passive, participle adjectives", q: [
      ["Choose the present continuous passive: “The classroom ___ at the moment.”", ["is painting", "is being painted", "painted", "has paint"], 1, "Present continuous passive: am/is/are + being + past participle."],
      ["Choose the correct modal: “She looks very tired. She ___ have slept well.”", ["can't", "must", "should", "will"], 0, "Can't have + past participle shows we are sure something did not happen."],
      ["Which strong adjective means “very tired”?", ["exhausted", "tiring", "sleepy", "bored"], 0, "Strong (extreme) adjectives include exhausted, delicious, freezing and enormous."],
      ["Which intensifier goes best with “delicious”?", ["very", "absolutely", "a bit", "fairly"], 1, "Use absolutely with strong adjectives (absolutely delicious) and very with normal ones (very good)."],
      ["Choose the correct adjective: “The tour was so ___ that I fell asleep.”", ["bored", "boring", "bore", "boredom"], 1, "-ing adjectives describe the thing (a boring tour); -ed adjectives describe how people feel (I was bored)."],
      ["Choose the past continuous passive: “When we arrived, the old castle ___.”", ["was being repaired", "was repairing", "is repaired", "had repair"], 0, "Past continuous passive: was/were + being + past participle."]
    ]},
    { topics: "Unit 4 Science · Unit 5 Technology · Unit 6 Rules and laws: present perfect passive, dependent prepositions, have something done, future continuous, third conditional, reported statements and questions", q: [
      ["Choose the present perfect passive: “A new vaccine ___ by scientists.”", ["has developed", "has been developed", "was develop", "is developing"], 1, "Present perfect passive: has/have + been + past participle."],
      ["Choose the correct preposition: “Scientists depend ___ accurate data.”", ["of", "on", "at", "with"], 1, "We say depend on something."],
      ["Which sentence uses “have something done” correctly?", ["I had my phone repaired yesterday.", "I had repaired my phone by someone yesterday.", "I have my phone repair yesterday.", "I had my phone repair yesterday."], 0, "Have + object + past participle means someone else does the job for you."],
      ["Choose the future continuous: “This time tomorrow, I ___ my science exam.”", ["will take", "will be taking", "am take", "take"], 1, "Future continuous (will be + -ing) describes an action in progress at a time in the future."],
      ["Choose the third conditional: “If we ___ the rules, we wouldn't have lost points.”", ["followed", "had followed", "would follow", "follow"], 1, "Third conditional: If + past perfect, would have + past participle. It talks about an imaginary past."],
      ["Report the statement. “I am late,” said Ali.", ["Ali said that he was late.", "Ali said that I am late.", "Ali said he is being late.", "Ali told that he was late."], 0, "In reported speech the tense usually moves back (am → was) and pronouns change (I → he)."]
    ]},
    { topics: "Unit 7 Competition · Unit 8 The environment · Unit 9 Achievements and ambitions: past perfect continuous, comparatives and superlatives, adverbs of frequency, verbs + -ing, relative clauses, dependent prepositions with adjectives", q: [
      ["Choose the past perfect continuous: “She was tired because she ___ for three hours.”", ["had been running", "has run", "was run", "had ran"], 0, "Past perfect continuous (had been + -ing) shows an activity that continued up to a point in the past."],
      ["Choose the correct form: “This is ___ race I have ever run.”", ["the most difficult", "the more difficult", "most difficult", "the difficultest"], 0, "Long adjectives form the superlative with the most: the most difficult."],
      ["Choose the correct form: “We should avoid ___ plastic bags.”", ["use", "to use", "using", "used"], 2, "Some verbs, such as avoid, enjoy and finish, are followed by verb + -ing."],
      ["Choose the correct word order.", ["I always cycle to school.", "I cycle always to school.", "Always I am cycle to school.", "I cycle to school always never."], 0, "Adverbs of frequency usually go before the main verb."],
      ["Choose the correct relative pronoun: “Marie Curie, ___ won two Nobel Prizes, was a brilliant scientist.”", ["which", "who", "whose", "where"], 1, "Use who for people and which for things."],
      ["Choose the correct preposition: “He is very proud ___ his achievements.”", ["of", "on", "at", "with"], 0, "Some adjectives take a fixed preposition: proud of, interested in, good at, keen on."]
    ]}
  ],
  geography: [
    { topics: "1 From rock to soil: rock groups, weathering, the rock cycle, soil · 2 Living off Earth's resources: water, soil, desertification, oil, renewable energy", q: [
      ["Which group of rocks forms when magma or lava cools and hardens?", ["Sedimentary", "Igneous", "Metamorphic", "Fossil"], 1, "Igneous rocks, such as granite and basalt, form from cooled magma or lava."],
      ["Limestone and sandstone are examples of which rock group?", ["Igneous", "Sedimentary", "Metamorphic", "Volcanic"], 1, "Sedimentary rocks form from layers of sediment that are pressed and cemented together over time."],
      ["What is weathering?", ["The breakdown of rock in place by the weather, plants and chemicals", "Rocks being carried away by rivers", "Rock melting deep underground", "Forecasting the weather"], 0, "Weathering breaks rock down where it is. Erosion wears it away and carries it off."],
      ["What is desertification?", ["Planting trees in deserts", "Dry land turning into desert, often because of drought and overgrazing", "Deserts getting colder", "Building cities in deserts"], 1, "When vegetation is lost, the soil dries out and blows away, so the land becomes desert-like."],
      ["Which of these is a non-renewable resource?", ["Solar energy", "Oil", "Wind", "Wood from a managed forest"], 1, "Oil took millions of years to form. Once it is used up, it is gone."],
      ["What is an aquifer, such as the Ogallala?", ["A dam on a river", "A layer of rock underground that holds water", "A salt lake", "A type of cloud"], 1, "Water is pumped up from aquifers. If it is used faster than it is replaced, the water level falls."]
    ]},
    { topics: "3 Earning a living: employment sectors, changing jobs, global industries · 4 International development: measuring development, the development gap, escaping poverty", q: [
      ["A farmer works in which sector of the economy?", ["Primary", "Secondary", "Tertiary", "Quaternary"], 0, "The primary sector takes raw materials from the earth or sea: farming, fishing, mining."],
      ["A teacher works in which sector of the economy?", ["Primary", "Secondary", "Tertiary", "Quaternary"], 2, "The tertiary sector provides services, such as teaching, healthcare and shops."],
      ["Why did many factory jobs move from the UK to countries like China and Bangladesh?", ["Wages and costs were lower there", "The UK ran out of factories", "The weather is colder there", "There were no workers in the UK"], 0, "Companies moved production to places where labour and running costs were cheaper."],
      ["What does GNI per person measure?", ["The average income per person in a country", "The number of doctors", "The area of the country", "Population growth"], 0, "GNI (gross national income) per person is an economic measure of development."],
      ["Which of these is a social indicator of development?", ["Life expectancy", "GNI per person", "The value of exports", "The number of factories"], 0, "Social indicators measure people's quality of life, such as life expectancy and literacy."],
      ["In geog.3, Malawi and Singapore are compared. Which statement is true?", ["Malawi is a developing country and Singapore is a developed country", "Both are developing countries", "Both are developed countries", "Malawi is developed and Singapore is developing"], 0, "Singapore is a rich, high-income country. Malawi is one of the poorest countries in the world."]
    ]},
    { topics: "5 Our restless planet: plates, earthquakes, tsunamis, volcanoes · 6 Russia: physical features, climate and biomes, people · 7 The Middle East: physical geography, climate, people", q: [
      ["The Earth's crust is broken into large pieces called…", ["tectonic plates", "continents", "magma chambers", "valleys"], 0, "Tectonic plates move a few centimetres a year, carried by currents in the mantle."],
      ["At which type of plate boundary do plates move apart?", ["Destructive (convergent)", "Constructive (divergent)", "Conservative", "Collision"], 1, "At constructive boundaries, magma rises to fill the gap and makes new crust."],
      ["Which instrument records earthquakes?", ["A seismometer", "A barometer", "An anemometer", "A thermometer"], 0, "A seismometer records the shaking of the ground. Kyrgyzstan has many because it is an active earthquake zone."],
      ["Why does Iceland have so many volcanoes?", ["It lies on a constructive plate boundary, the Mid-Atlantic Ridge", "It is near the Equator", "It is made of limestone", "It is in the middle of a plate"], 0, "Iceland sits on the ridge where the North American and Eurasian plates move apart."],
      ["Which mountain range is often used as the border between European Russia and Asian Russia?", ["The Alps", "The Ural Mountains", "The Himalayas", "The Tian Shan"], 1, "The Urals run north to south and divide Russia into a European part and a huge Asian part (Siberia)."],
      ["What is the main export of many Middle Eastern countries, such as Saudi Arabia?", ["Coffee", "Oil", "Rice", "Timber"], 1, "The Middle East has some of the world's largest oil reserves."],
      ["What kind of climate does most of the Middle East have?", ["Hot and dry (desert)", "Cold and snowy all year", "Tropical rainforest", "Mild and wet all year"], 0, "Much of the region is desert, with very hot summers and little rain."]
    ]}
  ],
  /* Mock Checkpoint: one timed test with Mathematics, Science and English (as a Second Language). */
  checkpoint: {
    minutes: 45,
    subjects: ["math", "science", "english"],
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
      ["Choose the correct word: “I have lived in Bishkek ___ 2015.”", ["for", "since", "from", "at"], 1, "Use since with a point in time (since 2015) and for with a period of time (for ten years)."],
      ["Choose the correct form: “If it rains tomorrow, we ___ inside.”", ["stay", "will stay", "would stay", "stayed"], 1, "First conditional: If + present simple, will + verb."],
      ["Choose the correct passive: “English ___ in many countries.”", ["speaks", "is spoken", "is speaking", "spoke"], 1, "Present simple passive: am/is/are + past participle."],
      ["Which word is closest in meaning to “enormous”?", ["tiny", "huge", "quick", "ancient"], 1, "Enormous means very big, like huge."],
      ["Report the sentence. “I will help you,” he said.", ["He said he would help me.", "He said he will help me.", "He said I would help you.", "He told he would help me."], 0, "In reported speech, will becomes would and the pronouns change."],
      ["Choose the correct preposition: “She is interested ___ photography.”", ["on", "in", "at", "for"], 1, "We say interested in something."],
      ["“Although the test was difficult, Aibek passed it easily.” What does “although” show?", ["A reason", "A contrast", "A time", "A result"], 1, "Although joins two ideas that contrast with each other."],
      ["Choose the correctly punctuated sentence.", ["“Wait for me!” she shouted.", "“Wait for me” she shouted!", "“Wait for me”! she shouted.", "Wait for me! “she shouted.”"], 0, "The punctuation that belongs to the spoken words goes inside the speech marks."],
      ["Which sentence is written in a formal register?", ["The concert was awesome!", "We would be grateful if you could reply by Friday.", "Text me later, OK?", "That's so cool."], 1, "Formal writing avoids slang and uses polite, complete sentences."],
      ["Choose the correct word: “This is the girl ___ bike was stolen.”", ["who", "whose", "which", "who's"], 1, "Use whose to show possession in a relative clause: the girl whose bike…"]
    ]
  }
};
