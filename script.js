let questions = [
    {
        question: "Wer wurde letztes Jahr Champions Leaugue Sieger?",
        answer1: "Manchester City",
        answer2: "Chelsea FC",
        answer3: "Arsenal London",
        answer4: "Real Madrid",
        rightAnswer: 1,
    },

    {
        question: "Wer wurde letztes Jahr englischer Meister?",
        answer1: "Manchester City",
        answer2: "Chelsea FC",
        answer3: "Arsenal London",
        answer4: "Liverpool FC",
        rightAnswer: 1,
    },

    {
        question: "Wer wurde letztes Jahr deutscher Meister?",
        answer1: "Borussia Dortmund",
        answer2: "FC Augsburg",
        answer3: "Bayern München",
        answer4: "RB Leipzig",
        rightAnswer: 3,
    },

    {
        question: "Wer wurde letztes Jahr spanischer Meister?",
        answer1: "FC Girona",
        answer2: "Real Madrid",
        answer3: "FC Barcelona",
        answer4: "Atletico Madrid",
        rightAnswer: 3,
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("currentQuestion").innerHTML = question["question"];
    document.getElementById("answer1").innerHTML = question["answer1"];
    document.getElementById("answer2").innerHTML = question["answer2"];
    document.getElementById("answer3").innerHTML = question["answer3"];
    document.getElementById("answer4").innerHTML = question["answer4"];
}

function answer(id) {}
