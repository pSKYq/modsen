const quizData = [
    {
        question: "Сколько океанов на Земле?",
        answers: ["4", "5", "6"],
        correct: "5"
    },
    {
        question: "Какая самая высокая гора в мире?",
        answers: ["Эверест", "Килиманджаро", "Монблан"],
        correct: "Эверест"
    },
    {
        question: "Какой элемент обозначается символом 'O'?",
        answers: ["Кислород", "Золото", "Серебро"],
        correct: "Кислород"
    },
    {
        question: "Как называется столица Австралии?",
        answers: ["Сидней", "Канберра", "Мельбурн"],
        correct: "Канберра"
    },
    {
        question: "Какой из этих видов спорта считается зимним?",
        answers: ["Футбол", "Хоккей", "Баскетбол"],
        correct: "Хоккей"
    },
    {
        question: "В каком году началась Вторая мировая война?",
        answers: ["1939", "1941", "1945"],
        correct: "1939"
    },
    {
        question: "Кто написал 'Войну и мир'?",
        answers: ["Достоевский", "Толстой", "Чехов"],
        correct: "Толстой"
    },
    {
        question: "Как называется самый большой остров в мире?",
        answers: ["Гренландия", "Новая Гвинея", "Борнео"],
        correct: "Гренландия"
    },
    {
        question: "Какой город является столицей Японии?",
        answers: ["Токио", "Осака", "Киото"],
        correct: "Токио"
    },
    {
        question: "Сколько зубов у взрослого человека?",
        answers: ["28", "30", "32"],
        correct: "32"
    }
];

let currentQuestionIndex = 0; 
let score = 0; 

const questionEl = document.getElementById('question');
const answerListEl = document.getElementById('answer-list');
const nextButton = document.getElementById('next-button');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');
const restartButton = document.getElementById('restart-button');
const questionCounterEl = document.getElementById('question-counter');
const totalQuestionsEl = document.getElementById('total-questions');

totalQuestionsEl.textContent = quizData.length;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answerListEl.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => selectAnswer(li, answer));
        answerListEl.appendChild(li);
    });

    nextButton.disabled = true;
    nextButton.classList.remove('hidden');

    questionCounterEl.textContent = currentQuestionIndex + 1;
}

function selectAnswer(selectedLi, answer) {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswers = Array.isArray(currentQuestion.correct) ? currentQuestion.correct : [currentQuestion.correct];

    if (correctAnswers.includes(answer)) {
        selectedLi.classList.add('correct');
        score++;
    } else {
        selectedLi.classList.add('incorrect');
    }

    Array.from(answerListEl.children).forEach(child => {
        child.removeEventListener('click', () => selectAnswer(child, child.textContent));
        child.style.pointerEvents = 'none';
        if (correctAnswers.includes(child.textContent)) {
            child.classList.add('correct');
        }
    });

    nextButton.disabled = false;
}

function showResult() {
    resultEl.classList.remove('hidden');
    scoreEl.textContent = score;
    totalEl.textContent = quizData.length;
    nextButton.classList.add('hidden');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultEl.classList.add('hidden');
    loadQuestion();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', resetQuiz);

function startQuiz() {
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', startQuiz);
