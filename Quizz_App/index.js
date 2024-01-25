const questions = [
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Pekín", "Seúl", "Tokio", "Bangkok"],
        correctAnswer: "Tokio"
    },
    {
        question: "¿En qué año se fundó la ONU?",
        options: ["1945", "1955", "1965", "1975"],
        correctAnswer: "1945"
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Julio Cortázar", "Gabriel García Márquez", "Mario Vargas Llosa", "Isabel Allende"],
        correctAnswer: "Gabriel García Márquez"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Misisipi", "Ganges"],
        correctAnswer: "Amazonas"
    },
    {
        question: "¿En qué continente se encuentra Egipto?",
        options: ["Asia", "África", "Europa", "América"],
        correctAnswer: "África"
    },
    {
        question: "¿Cuál es el país más grande del mundo por área?",
        options: ["Canadá", "Rusia", "Estados Unidos", "China"],
        correctAnswer: "Rusia"
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "¿Cuál es la moneda oficial de Japón?",
        options: ["Yuan", "Dólar", "Euro", "Yen"],
        correctAnswer: "Yen"
    },
    {
        question: "¿En qué año llegó el hombre a la luna por primera vez?",
        options: ["1961", "1969", "1975", "1983"],
        correctAnswer: "1969"
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
        correctAnswer: "George Washington"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.setAttribute("data-index", index);
        optionElement.onclick = selectOption;
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(event) {
    const selectedOptionIndex = event.target.getAttribute("data-index");
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (questions[currentQuestion].options[selectedOptionIndex] === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h1>Resultado del Quiz</h1><p>Tu puntuación es: ${score} de ${questions.length}</p>`;
}

function checkAnswer() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Respuesta correcta: ${questions[currentQuestion].correctAnswer}`;
}

// Cargar la primera pregunta al cargar la página
window.onload = loadQuestion;
