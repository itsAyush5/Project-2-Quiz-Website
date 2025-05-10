// Quiz questions organized by category and difficulty
const quizData = {
    general: {
        name: "General Knowledge",
        questions: {
            easy: [
                {
                    question: "Which is the most spoken language in the world?",
                    options: ["English", "Spanish", "Mandarin", "Hindi"],
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
                }
            ],
            medium: [
                {
                    question: "What is the most popular social media platform?",
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
                    question: "Which year did World War I begin?",
                    options: ["1914", "1915", "1916", "1917"],
                    correct: 0
                },
                {
                    question: "What is the speed of light in kilometers per second (approximate)?",
                    options: ["250,000", "300,000", "350,000", "400,000"],
                    correct: 1
                },
                {
                    question: "Who developed the theory of relativity?",
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
                    question: "How many bones are in the human body?",
                    options: ["206", "205", "207", "208"],
                    correct: 0
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Iron", "Diamond", "Platinum"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "What is the process by which plants make their food?",
                    options: ["Photosynthesis", "Respiration", "Digestion", "Absorption"],
                    correct: 0
                },
                {
                    question: "Which gas do plants absorb from the air?",
                    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                    correct: 1
                },
                {
                    question: "What is the atomic number of Carbon?",
                    options: ["5", "6", "7", "8"],
                    correct: 1
                },
                {
                    question: "What is the unit of measurement for force?",
                    options: ["Watt", "Joule", "Newton", "Pascal"],
                    correct: 2
                },
                {
                    question: "Which blood type is known as the universal donor?",
                    options: ["A+", "B+", "AB+", "O-"],
                    correct: 3
                }
            ],
            hard: [
                {
                    question: "What is the Heisenberg Uncertainty Principle?",
                    options: [
                        "You can't measure position and momentum simultaneously",
                        "Energy is constant in a closed system",
                        "Matter cannot be created or destroyed",
                        "Light behaves as both wave and particle"
                    ],
                    correct: 0
                },
                {
                    question: "What is the half-life of Carbon-14?",
                    options: ["4,730 years", "5,730 years", "6,730 years", "7,730 years"],
                    correct: 1
                },
                {
                    question: "Which subatomic particle is not found in the nucleus?",
                    options: ["Proton", "Neutron", "Electron", "Quark"],
                    correct: 2
                },
                {
                    question: "What is the molecular formula for glucose?",
                    options: ["C6H12O6", "C6H6O6", "C12H22O11", "C6H10O5"],
                    correct: 0
                },
                {
                    question: "What is the name of the closest galaxy to the Milky Way?",
                    options: ["Andromeda", "Triangulum", "Centaurus A", "Sombrero"],
                    correct: 0
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
                    options: ["1943", "1944", "1945", "1946"],
                    correct: 2
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correct: 2
                },
                {
                    question: "Which ancient wonder was located in Egypt?",
                    options: ["Hanging Gardens", "Great Pyramid", "Colossus", "Temple of Artemis"],
                    correct: 1
                },
                {
                    question: "What civilization built Machu Picchu?",
                    options: ["Aztec", "Maya", "Inca", "Olmec"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "When did the French Revolution begin?",
                    options: ["1789", "1790", "1791", "1792"],
                    correct: 0
                },
                {
                    question: "Who was the first Emperor of China?",
                    options: ["Qin Shi Huang", "Sun Yat-sen", "Kublai Khan", "Wu Zetian"],
                    correct: 0
                },
                {
                    question: "Which empire was ruled by the Ottomans?",
                    options: ["Persian", "Roman", "Turkish", "Byzantine"],
                    correct: 2
                },
                {
                    question: "When did the Industrial Revolution begin?",
                    options: ["Late 1700s", "Early 1800s", "Mid 1800s", "Late 1800s"],
                    correct: 0
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    options: ["Mother Teresa", "Marie Curie", "Pearl Buck", "Jane Addams"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "Which battle ended the Wars of the Roses?",
                    options: ["Battle of Bosworth Field", "Battle of Hastings", "Battle of Agincourt", "Battle of Waterloo"],
                    correct: 0
                },
                {
                    question: "When was the Magna Carta signed?",
                    options: ["1215", "1225", "1235", "1245"],
                    correct: 0
                },
                {
                    question: "Who was the last Pharaoh of Ancient Egypt?",
                    options: ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Tiye"],
                    correct: 1
                },
                {
                    question: "What was the capital of the Byzantine Empire?",
                    options: ["Rome", "Athens", "Constantinople", "Alexandria"],
                    correct: 2
                },
                {
                    question: "Which year marked the fall of the Western Roman Empire?",
                    options: ["476 CE", "486 CE", "496 CE", "506 CE"],
                    correct: 0
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
                    question: "Which is the largest continent?",
                    options: ["North America", "Africa", "Europe", "Asia"],
                    correct: 3
                },
                {
                    question: "What is the longest river in the world?",
                    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                    correct: 1
                },
                {
                    question: "Which country is known as the Land of the Rising Sun?",
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
                    question: "Which is the smallest country in the world?",
                    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                    correct: 1
                },
                {
                    question: "What is the highest mountain in Africa?",
                    options: ["Mount Kenya", "Kilimanjaro", "Mount Stanley", "Ras Dashen"],
                    correct: 1
                },
                {
                    question: "Which desert is the largest in the world?",
                    options: ["Gobi", "Arabian", "Sahara", "Antarctic"],
                    correct: 3
                },
                {
                    question: "On which continent is the Atacama Desert located?",
                    options: ["Africa", "Asia", "South America", "North America"],
                    correct: 2
                },
                {
                    question: "Which country has the most islands in the world?",
                    options: ["Indonesia", "Japan", "Philippines", "Sweden"],
                    correct: 3
                }
            ],
            hard: [
                {
                    question: "What is the deepest point in the ocean?",
                    options: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Puerto Rico Trench"],
                    correct: 0
                },
                {
                    question: "Which country is located in all four hemispheres?",
                    options: ["Brazil", "Kenya", "Kiribati", "France"],
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
                    question: "What is the largest lake by volume in the world?",
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
                    options: ["Football", "Basketball", "Tennis", "Golf"],
                    correct: 1
                },
                {
                    question: "How many players are there in a standard soccer team?",
                    options: ["9", "10", "11", "12"],
                    correct: 2
                },
                {
                    question: "Which sport uses a shuttlecock?",
                    options: ["Table Tennis", "Badminton", "Tennis", "Squash"],
                    correct: 1
                },
                {
                    question: "What is the duration of a regular soccer match?",
                    options: ["80 minutes", "85 minutes", "90 minutes", "95 minutes"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "Which country invented basketball?",
                    options: ["USA", "Canada", "England", "France"],
                    correct: 1
                },
                {
                    question: "How many Olympic rings are there?",
                    options: ["4", "5", "6", "7"],
                    correct: 1
                },
                {
                    question: "In which year were the first modern Olympics held?",
                    options: ["1886", "1896", "1906", "1916"],
                    correct: 1
                },
                {
                    question: "What is the national sport of Japan?",
                    options: ["Karate", "Judo", "Sumo", "Kendo"],
                    correct: 2
                },
                {
                    question: "How many points is a touchdown worth in American football?",
                    options: ["4", "5", "6", "7"],
                    correct: 2
                }
            ],
            hard: [
                {
                    question: "Who holds the record for most Olympic medals?",
                    options: ["Usain Bolt", "Michael Phelps", "Larisa Latynina", "Paavo Nurmi"],
                    correct: 1
                },
                {
                    question: "Which tennis player has won the most Grand Slam titles?",
                    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                    correct: 2
                },
                {
                    question: "In which year was the first FIFA World Cup held?",
                    options: ["1926", "1930", "1934", "1938"],
                    correct: 1
                },
                {
                    question: "What is the longest running Formula 1 team?",
                    options: ["McLaren", "Ferrari", "Mercedes", "Williams"],
                    correct: 1
                },
                {
                    question: "Which country has won the most Cricket World Cups?",
                    options: ["India", "West Indies", "England", "Australia"],
                    correct: 3
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
retryBtn.addEventListener('click', () => selectCategory(currentCategory));
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
    const question = quizData[currentCategory].questions[currentDifficulty][currentQuestion];
    questionText.textContent = question.question;
    currentQuestionNum.textContent = currentQuestion + 1;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    nextBtn.classList.add('hidden');
    selectedOption = null;
}

function selectOption(index) {
    if (selectedOption !== null) return;
    
    selectedOption = index;
    const options = optionsContainer.children;
    const question = quizData[currentCategory].questions[currentDifficulty][currentQuestion];
    
    for (let option of options) {
        option.classList.remove('selected');
    }
    
    options[index].classList.add('selected');
    
    if (index === question.correct) {
        options[index].classList.add('correct');
        score++;
    } else {
        options[index].classList.add('wrong');
        options[question.correct].classList.add('correct');
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
    startScreen.classList.remove('hidden');
} 