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
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    let question = questions[currentQuestion];

    document.getElementById("actuallQuestion").innerHTML = currentQuestion + 1;

    document.getElementById("currentQuestion").innerHTML = question["question"];
    document.getElementById("answer1").innerHTML = question["answer1"];
    document.getElementById("answer2").innerHTML = question["answer2"];
    document.getElementById("answer3").innerHTML = question["answer3"];
    document.getElementById("answer4").innerHTML = question["answer4"];
}

function answer(id) {
    let question = questions[currentQuestion];
    console.log("Selected answer is", id);
    let selectedQuestionNumber = id.slice(-1);
    console.log("selectedQuestionNumber is", selectedQuestionNumber);
    console.log("Current question is", question["rightAnswer"]);
    let idOfRightAnswer = `answer${question["rightAnswer"]}`;

    if (selectedQuestionNumber == question["rightAnswer"]) {
        console.log("richtige Antwort");
        document.getElementById(id).parentNode.classList.add("bg-success");
    } else {
        console.log("falsche Antwort");
        document.getElementById(id).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showCurrentQuestion();
    document.getElementById("nextButton").disabled = true;
    resetAnswerButtons();
}

function resetAnswerButtons() {
    document.getElementById("answer1").parentNode.classList.remove("bg-success");
    document.getElementById("answer1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer2").parentNode.classList.remove("bg-success");
    document.getElementById("answer2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer3").parentNode.classList.remove("bg-success");
    document.getElementById("answer3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer4").parentNode.classList.remove("bg-success");
    document.getElementById("answer4").parentNode.classList.remove("bg-danger");
}
