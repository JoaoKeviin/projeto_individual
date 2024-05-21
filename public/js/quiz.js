const quizData = [
    {
        question: "Qual é o maior oceano do mundo?",
        a: "Oceano Atlântico",
        b: "Oceano Índico",
        c: "Oceano Pacífico",
        d: "Oceano Ártico",
        correct: "c",
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        a: "William Shakespeare",
        b: "Gabriel García Márquez",
        c: "Miguel de Cervantes",
        d: "Fernando Pessoa",
        correct: "c",
    },
    // Adicione mais perguntas aqui
];

const startContainer = document.getElementById('start');
const startBtn = document.getElementById('start-btn');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

startBtn.addEventListener('click', () => {
    startContainer.style.display = 'none';
    quiz.style.display = 'block';
    loadQuiz();
});

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2 style="margin-top: 120px;">Você respondeu corretamente ${score}/${quizData.length} perguntas.</h2>
                <button onclick="location.reload()">Recomeçar</button>
            `;
        }
    }
});

