// Quiz questions organized by category and difficulty
const quizData = {
    general: {
        name: "General Knowledge",
        questions: {
            easy: [
                {
                    question: "Which language has the most native speakers in the world?",
                    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
                    correct: 2
                },
                {
                    question: "How many continents are there in the world?",
                    options: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "What is the largest ocean on Earth?",
                    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                    correct: 3
                },
                {
                    question: "Which animal is known as the 'King of the Jungle'?",
                    options: ["Tiger", "Lion", "Elephant", "Gorilla"],
                    correct: 1
                },
                {
                    question: "How many days are there in a leap year?",
                    options: ["365", "366", "364", "367"],
                    correct: 1
                },
                {
                    question:"Who was defeated in the Third Battle of Panipat?",
                    options:["British","Marathas","French","Mughals"],
                    correct: 1
                },
                {
                    question:"Who defeated the Marathas in the Third Battle of Panipat?",
                    options:["British","Afghans","French","Portuguese"],
                    correct: 1
                },
                {
                    question:"Which of these powers did not rule over a significant part of India?",
                    options:["British","Israel","French","Dutch"],
                    correct: 1
                },

            ],
            medium: [
                {
                    question: "Which social media platform has the most monthly active users worldwide?",
                    options: ["Instagram", "Facebook", "Twitter", "TikTok"],
                    correct: 1
                },
                {
                    question: "Which company created the iPhone?",
                    options: ["Microsoft", "Google", "Apple", "Samsung"],
                    correct: 2
                },
                {
                    question: "What is the currency of Japan?",
                    options: ["Yuan", "Won", "Yen", "Ringgit"],
                    correct: 2
                },
                {
                    question: "Who wrote 'Romeo and Juliet'?",
                    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                    correct: 1
                },
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "O2", "N2"],
                    correct: 0
                }
            ],
            hard: [
                {
                    question: "In which year did World War I begin?",
                    options: ["1914", "1918", "1939", "1945"],
                    correct: 0
                },
                {
                    question: "What is the approximate speed of light in a vacuum?",
                    options: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "1,000,000 km/s"],
                    correct: 1
                },
                {
                    question: "Who developed the theory of general relativity?",
                    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
                    correct: 1
                },
                {
                    question: "What is the smallest prime number?",
                    options: ["0", "1", "2", "3"],
                    correct: 2
                },
                {
                    question: "Which element has the atomic number 1?",
                    options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
                    correct: 1
                }
            ]
        }
    },
    science: {
        name: "Science",
        questions: {
            easy: [
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Ag", "Fe", "Au", "Cu"],
                    correct: 2
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correct: 1
                },
                {
                    question: "What is the largest organ in the human body?",
                    options: ["Heart", "Brain", "Liver", "Skin"],
                    correct: 3
                },
                {
                    question: "How many bones are in the adult human body?",
                    options: ["206", "205", "207", "208"],
                    correct: 0
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Iron", "Diamond", "Platinum"],
                    correct: 2
                },
                {
                    question: "A complete flower typically has how many whorls?",
                    options: ["1", "2", "3", "4"],
                    correct: 3
                },
                {
                    question: "In which mirror is the reflecting surface curved inwards?",
                    options: ["Concave mirror", "Convex mirror", "Plane mirror", "Concave lens"],
                    correct: 0
                }
            ],
            medium: [
                {
                    question: "What is the process by which plants make their own food?",
                    options: ["Photosynthesis", "Respiration", "Transpiration", "Germination"],
                    correct: 0
                },
                {
                    question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
                    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                    correct: 1
                },
                {
                    question: "What is the atomic number of Carbon?",
                    options: ["5", "6", "7", "8"],
                    correct: 1
                },
                {
                    question: "What is the SI unit of measurement for force?",
                    options: ["Watt", "Joule", "Newton", "Pascal"],
                    correct: 2
                },
                {
                    question: "Which blood type is known as the universal donor?",
                    options: ["A+", "B+", "AB+", "O-"],
                    correct: 3
                },
                {
                    question: "Which of the following is an example of a bisexual flower (has both male and female parts)?",
                    options: ["Cucumber", "Corn", "Petunia", "Papaya"],
                    correct: 2
                },
                {
                    question: "What is the acronym for the colors of the visible spectrum (rainbow)?",
                    options: ["VIBGYOR", "GRVBIOY", "PORVIBG", "ROYGBIV"],
                    correct: 0
                }
            ],
            hard: [
                {
                    question: "The Heisenberg Uncertainty Principle states that it is impossible to know simultaneously the exact...",
                    options: [
                        "Position and momentum of a particle",
                        "Mass and energy of a system",
                        "Charge and spin of an electron",
                        "Wavelength and frequency of light"
                    ],
                    correct: 0
                },
                {
                    question: "What is the approximate half-life of Carbon-14?",
                    options: ["4,730 years", "5,730 years", "6,730 years", "7,730 years"],
                    correct: 1
                },
                {
                    question: "Which fundamental particle is not found in the nucleus of an atom?",
                    options: ["Proton", "Neutron", "Electron", "Quark"],
                    correct: 2
                },
                {
                    question: "What is the molecular formula for glucose?",
                    options: ["C6H12O6", "C6H6O6", "C12H22O11", "CH4"],
                    correct: 0
                },
                {
                    question: "What is the name of the closest major galaxy to the Milky Way?",
                    options: ["Andromeda", "Triangulum", "Centaurus A", "Sombrero"],
                    correct: 0
                },
                {
                    question: "What is a change in the position of an object over time called?",
                    options: ["Acceleration", "Velocity", "Motion","Rest"],
                    correct: 2
                },
                {
                    question: "The presence of which element's oxide gives Mars its characteristic red color?",
                    options: ["Cobalt", "Nickel", "Iron", "Copper"],
                    correct: 2
                }
            ]
        }
    },
    history: {
        name: "History",
        questions: {
            easy: [
                {
                    question: "Who was the first President of the United States?",
                    options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                    correct: 2
                },
                {
                    question: "In which year did World War II end?",
                    options: ["1941", "1944", "1945", "1946"],
                    correct: 2
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correct: 2
                },
                {
                    question: "The Great Pyramid of Giza is an ancient wonder located in which country?",
                    options: ["Greece", "Turkey", "Egypt", "Iraq"],
                    correct: 2
                },
                {
                    question: "What civilization built Machu Picchu?",
                    options: ["Aztec", "Maya", "Inca", "Olmec"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "The storming of the Bastille in 1789 marked the start of which revolution?",
                    options: ["American Revolution", "Russian Revolution", "French Revolution", "Industrial Revolution"],
                    correct: 2
                },
                {
                    question: "Who was the first Emperor of a unified China?",
                    options: ["Qin Shi Huang", "Sun Yat-sen", "Kublai Khan", "Mao Zedong"],
                    correct: 0
                },
                {
                    question: "The Ottoman Empire was centered in what is now modern-day...",
                    options: ["Iran", "Greece", "Turkey", "Egypt"],
                    correct: 2
                },
                {
                    question: "In which century did the Industrial Revolution primarily begin?",
                    options: ["17th Century", "18th Century", "19th Century", "20th Century"],
                    correct: 1
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    options: ["Mother Teresa", "Marie Curie", "Pearl Buck", "Jane Addams"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "Which battle in 1485 effectively ended the Wars of the Roses in England?",
                    options: ["Battle of Bosworth Field", "Battle of Hastings", "Battle of Agincourt", "Battle of Waterloo"],
                    correct: 0
                },
                {
                    question: "In which year was the Magna Carta signed by King John of England?",
                    options: ["1066", "1215", "1415", "1492"],
                    correct: 1
                },
                {
                    question: "Who was the last active Pharaoh of Ancient Egypt?",
                    options: ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Ramesses II"],
                    correct: 1
                },
                {
                    question: "What was the capital of the Byzantine Empire?",
                    options: ["Rome", "Athens", "Constantinople", "Alexandria"],
                    correct: 2
                },
                {
                    question: "The 'Fall of the Western Roman Empire' is traditionally dated to which year?",
                    options: ["395 CE", "410 CE", "476 CE", "1453 CE"],
                    correct: 2
                }
            ]
        }
    },
    geography: {
        name: "Geography",
        questions: {
            easy: [
                {
                    question: "What is the capital of France?",
                    options: ["London", "Berlin", "Paris", "Madrid"],
                    correct: 2
                },
                {
                    question: "By land area, what is the largest continent?",
                    options: ["North America", "Africa", "Europe", "Asia"],
                    correct: 3
                },
                {
                    question: "What is the longest river in the world?",
                    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                    correct: 1
                },
                {
                    question: "Which country is known as the 'Land of the Rising Sun'?",
                    options: ["China", "Korea", "Japan", "Vietnam"],
                    correct: 2
                },
                {
                    question: "What is the capital of Australia?",
                    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "What is the smallest country in the world by area?",
                    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                    correct: 1
                },
                {
                    question: "What is the highest mountain in Africa?",
                    options: ["Mount Kenya", "Kilimanjaro", "Mount Stanley", "Ras Dashen"],
                    correct: 1
                },
                {
                    question: "Excluding polar regions, what is the largest hot desert in the world?",
                    options: ["Gobi", "Arabian", "Sahara", "Kalahari"],
                    correct: 2
                },
                {
                    question: "On which continent is the Atacama Desert, one of the driest places on Earth, located?",
                    options: ["Africa", "Asia", "South America", "North America"],
                    correct: 2
                },
                {
                    question: "Which country has the most islands?",
                    options: ["Indonesia", "Japan", "Philippines", "Sweden"],
                    correct: 3
                }
            ],
            hard: [
                {
                    question: "What is the deepest known point in the Earth's oceans?",
                    options: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kermadec Trench"],
                    correct: 0
                },
                {
                    question: "Which island nation is located in all four hemispheres?",
                    options: ["Brazil", "Kenya", "Kiribati", "Indonesia"],
                    correct: 2
                },
                {
                    question: "What is the only country that borders both the Caspian Sea and the Persian Gulf?",
                    options: ["Turkey", "Iraq", "Iran", "Azerbaijan"],
                    correct: 2
                },
                {
                    question: "Which African country was formerly known as Abyssinia?",
                    options: ["Sudan", "Ethiopia", "Somalia", "Eritrea"],
                    correct: 1
                },
                {
                    question: "Which lake is the world's largest by volume?",
                    options: ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Victoria"],
                    correct: 2
                }
            ]
        }
    },
    sports: {
        name: "Sports",
        questions: {
            easy: [
                {
                    question: "Which country won the FIFA World Cup 2022?",
                    options: ["France", "Brazil", "Argentina", "Germany"],
                    correct: 2
                },
                {
                    question: "In which sport would you perform a slam dunk?",
                    options: ["Volleyball", "Basketball", "Tennis", "American Football"],
                    correct: 1
                },
                {
                    question: "How many players are on a standard soccer team on the field at one time?",
                    options: ["9", "10", "11", "12"],
                    correct: 2
                },
                {
                    question: "Which sport uses a shuttlecock?",
                    options: ["Table Tennis", "Badminton", "Tennis", "Squash"],
                    correct: 1
                },
                {
                    question: "What is the duration of a standard, regulation soccer match (excluding stoppage time)?",
                    options: ["80 minutes", "60 minutes", "90 minutes", "120 minutes"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "In which country was the sport of basketball invented?",
                    options: ["USA", "Canada", "England", "France"],
                    correct: 0
                },
                {
                    question: "How many interlocking rings are on the Olympic flag?",
                    options: ["4", "5", "6", "7"],
                    correct: 1
                },
                {
                    question: "In which year were the first modern Olympic Games held?",
                    options: ["1886", "1896", "1906", "1916"],
                    correct: 1
                },
                {
                    question: "What is considered the national sport of Japan?",
                    options: ["Karate", "Judo", "Sumo Wrestling", "Kendo"],
                    correct: 2
                },
                {
                    question: "How many points is a touchdown worth in American football (before the extra point attempt)?",
                    options: ["4", "5", "6", "7"],
                    correct: 2
                }
            ],
            hard: [
                {
                    question: "Who holds the record for the most Olympic medals won by an individual?",
                    options: ["Usain Bolt", "Michael Phelps", "Larisa Latynina", "Paavo Nurmi"],
                    correct: 1
                },
                {
                    question: "As of early 2024, which male tennis player holds the record for the most Grand Slam titles?",
                    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                    correct: 2
                },
                {
                    question: "In which year was the first FIFA World Cup held?",
                    options: ["1920", "1930", "1940", "1950"],
                    correct: 1
                },
                {
                    question: "Which team is the oldest and most successful in Formula 1 history?",
                    options: ["McLaren", "Ferrari", "Mercedes", "Williams"],
                    correct: 1
                },
                {
                    question: "Which country has won the most Men's Cricket World Cups?",
                    options: ["India", "West Indies", "England", "Australia"],
                    correct: 3
                }
            ]
        }
    },
       entertainment: {
        name: "Entertainment",
        questions: {
            easy: [
                {
                    question: "Who is the main character in the 'Harry Potter' series?",
                    options: ["Hermione Granger", "Ron Weasley", "Harry Potter", "Draco Malfoy"],
                    correct: 2
                },
                {
                    question: "Who plays Iron Man in the Marvel Cinematic Universe?",
                    options: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr."],
                    correct: 3
                },
                {
                    question: "Which movie features a friendly green ogre named Shrek?",
                    options: ["Monsters, Inc.", "Shrek", "Toy Story", "Finding Nemo"],
                    correct: 1
                },
                {
                    question: "What is the name of Mickey Mouse's pet dog?",
                    options: ["Goofy", "Donald", "Pluto", "Minnie"],
                    correct: 2
                },
                {
                    question: "Which British band sang the hit song 'Bohemian Rhapsody'?",
                    options: ["The Beatles", "The Rolling Stones", "Queen", "Led Zeppelin"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "Which film won the first-ever Academy Award for Best Picture?",
                    options: ["The Jazz Singer", "Metropolis", "Wings", "Sunrise"],
                    correct: 2
                },
                {
                    question: "Who directed the classic 1994 film 'Pulp Fiction'?",
                    options: ["Steven Spielberg", "Martin Scorsese", "James Cameron", "Quentin Tarantino"],
                    correct: 3
                },
                {
                    question: "What is the best-selling video game of all time?",
                    options: ["Tetris", "Minecraft", "Grand Theft Auto V", "Wii Sports"],
                    correct: 1
                },
                {
                    question: "In the TV show 'Friends', what is Joey Tribbiani's famous catchphrase?",
                    options: ["'Could I BE any more...'", "'We were on a break!'", "'Oh. My. God.'", "'How you doin'?'"],
                    correct: 3
                },
                {
                    question: "Which American artist is known as the 'King of Pop'?",
                    options: ["Elvis Presley", "Michael Jackson", "Prince", "James Brown"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What was the first feature-length animated movie ever released?",
                    options: ["Pinocchio", "Bambi", "Snow White and the Seven Dwarfs", "Fantasia"],
                    correct: 2
                },
                {
                    question: "Who composed the iconic musical score for the original 'Star Wars' trilogy?",
                    options: ["Hans Zimmer", "John Williams", "Howard Shore", "Danny Elfman"],
                    correct: 1
                },
                {
                    question: "The TV series 'Game of Thrones' is primarily set on which fictional continent?",
                    options: ["Middle-earth", "Narnia", "Westeros", "Essos"],
                    correct: 2
                },
                {
                    question: "What is the name of the fictional newspaper where Clark Kent works in 'Superman'?",
                    options: ["The Daily Bugle", "The Gotham Gazette", "The Daily Planet", "The Central City Citizen"],
                    correct: 2
                },
                {
                    question: "In what year was the very first 'Coachella Valley Music and Arts Festival' held?",
                    options: ["1995", "2001", "1999", "2003"],
                    correct: 2
                }
            ]
        }
    },
    space: {
        name: "Space",
        questions: {
            easy: [
                {
                    question: "In which year was Hubble Telescope launched ?",
                    options: ["1982", "1987", "1999", "1990"],
                    correct: 3
                },
                {
                    question: "Which planet is called as Lord of Rings ?",
                    options: ["Neptune", "Uranus", "Jupiter", "Saturn"],
                    correct: 3
                },
                {
                    question: "What is the temperature of Jupiter's Core ? (In degree Celcius)",
                    options: ["23400", "45000", "24000", "56034"],
                    correct: 2
                },
                {
                    question: "How many operational Satellites orbit Earth",
                    options: ["Goofy11", "Donald", "Pluto", "Minnie"],
                    correct: 2
                },
                {
                    question: "",
                    options: ["The Beatles", "The Rolling Stones", "Queen", "Led Zeppelin"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "",
                    options: ["The Jazz Singer", "Metropolis", "Wings", "Sunrise"],
                    correct: 2
                },
                {
                    question: "",
                    options: ["Steven Spielberg", "Martin Scorsese", "James Cameron", "Quentin Tarantino"],
                    correct: 3
                },
                {
                    question: "",
                    options: ["Tetris", "Minecraft", "Grand Theft Auto V", "Wii Sports"],
                    correct: 1
                },
                {
                    question: "",
                    options: ["'Could I BE any more...'", "'We were on a break!'", "'Oh. My. God.'", "'How you doin'?'"],
                    correct: 3
                },
                {
                    question: "",
                    options: ["Elvis Presley", "Michael Jackson", "Prince", "James Brown"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "",
                    options: ["Pinocchio", "Bambi", "Snow White and the Seven Dwarfs", "Fantasia"],
                    correct: 2
                },
                {
                    question: "",
                    options: ["Hans Zimmer", "John Williams", "Howard Shore", "Danny Elfman"],
                    correct: 1
                },
                {
                    question: "",
                    options: ["Middle-earth", "Narnia", "Westeros", "Essos"],
                    correct: 2
                },
                {
                    question: "",
                    options: ["The Daily Bugle", "The Gotham Gazette", "The Daily Planet", "The Central City Citizen"],
                    correct: 2
                },
                {
                    question: "",
                    options: ["1995", "2001", "1999", "2003"],
                    correct: 2
                }
            ]
        }
    }
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const difficultyScreen = document.getElementById('difficulty-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const categoryButtons = document.querySelectorAll('.category-btn');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const backToCategoriesBtn = document.getElementById('back-to-categories');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const retryBtn = document.getElementById('retry-btn');
const changeDifficultyBtn = document.getElementById('change-difficulty-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const totalQuestionsResultElement = document.getElementById('total-questions-result');
const currentQuestionNum = document.getElementById('current-question-num');
const categoryDisplay = document.getElementById('category-display');
const selectedCategoryDisplay = document.getElementById('selected-category');
const currentDifficultyDisplay = document.getElementById('current-difficulty');
const resultCategoryDisplay = document.getElementById('result-category');
const resultDifficultyDisplay = document.getElementById('result-difficulty');

let currentCategory = null;
let currentDifficulty = null;
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// Event Listeners
categoryButtons.forEach(button => {
    button.addEventListener('click', () => selectCategory(button.dataset.category));
});

difficultyButtons.forEach(button => {
    button.addEventListener('click', () => startQuiz(button.dataset.difficulty));
});

backToCategoriesBtn.addEventListener('click', goToStart);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', goToStart);
retryBtn.addEventListener('click', () => showDifficultyScreen(currentCategory)); // Correctly goes to difficulty selection
changeDifficultyBtn.addEventListener('click', () => showDifficultyScreen(currentCategory));

function selectCategory(category) {
    currentCategory = category;
    showDifficultyScreen(category);
}

function showDifficultyScreen(category) {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    selectedCategoryDisplay.textContent = quizData[category].name;
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestion = 0;
    score = 0;
    difficultyScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    categoryDisplay.textContent = quizData[currentCategory].name;
    currentDifficultyDisplay.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    totalQuestionsElement.textContent = quizData[currentCategory].questions[difficulty].length;
    showQuestion();
}

function showQuestion() {
    // Reset from previous question
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');
    selectedOption = null;

    const questionData = quizData[currentCategory].questions[currentDifficulty][currentQuestion];
    questionText.textContent = questionData.question;
    currentQuestionNum.textContent = currentQuestion + 1;
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        // Store the index in the element itself for easy checking
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', () => selectOption(optionElement));
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(selectedElement) {
    // Prevent selecting another option after one has been chosen
    if (selectedOption !== null) return;
    
    const selectedIndex = parseInt(selectedElement.dataset.index);
    selectedOption = selectedIndex; // Mark that an option has been selected
    
    const options = optionsContainer.children;
    const questionData = quizData[currentCategory].questions[currentDifficulty][currentQuestion];
    const correctIndex = questionData.correct;
    
    // Check if the selected answer is correct
    if (selectedIndex === correctIndex) {
        selectedElement.classList.add('correct');
        score++;
    } else {
        selectedElement.classList.add('wrong');
        // Highlight the correct answer if the user was wrong
        options[correctIndex].classList.add('correct');
    }
    
    // Disable all option buttons after a selection is made
    for (let option of options) {
        option.style.pointerEvents = 'none';
    }

    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData[currentCategory].questions[currentDifficulty].length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultCategoryDisplay.textContent = quizData[currentCategory].name;
    resultDifficultyDisplay.textContent = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
    scoreElement.textContent = score;
    totalQuestionsResultElement.textContent = quizData[currentCategory].questions[currentDifficulty].length;
}

function goToStart() {
    resultScreen.classList.add('hidden');
    difficultyScreen.classList.add('hidden');
    questionScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}