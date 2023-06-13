var questions = [
    {
        questions: Which Keyword is used to return a value inside a method?
        answers: [
            {text: "Get", correct: false},
            {text: "Break", correct: false},
            {text: "Return", correct: true},
            {text: "Done", correct: false},
        ]
    },
    {
        questions: what does an "Array" index start with ?
        answers: [
            {text: "1", correct: false},
            {text: "0", correct: true},
            {text: "2", correct: false},
            {text: "none of the above", correct: false},
        ]
    },
    {
        questions: Which one compares two vaules?
        answers: [
            {text: "=", correct: false},
            {text: "&&", correct: false},
            {text: "===", correct: false},
            {text: "==", correct: true},
        ]
    },
    {
        questions: which method can be used to find the length of a string?
        answers: [
            {text: "length()", correct: true},
            {text: "getsize()", correct: false},
            {text: "getLength()", correct: false},
            {text: "maxLength()", correct: false},
        ]
    },
    {
        questions: How to insert comments on javascript?
        answers: [
            {text: "you can not comment in javascript", correct: false},
            {text: "!! this is a comment", correct: false},
            {text: "// this is a comment", correct: true},
            {text: "**/ this is a comment", correct: false},
        ]
    },
];

var timeLeft = 60;
var timer = document.getElementById("Timer");
var start = document.getElementById("start-button");
var questionContainer = document.getElementById("the.question.container");
var questions = document.getElementById("question");
var answer = document.getElementById("answers");
var checkAnswers = document.getElementById("check-answer");
var next = document.getElementById("next");
var save = document.getElementById("save");
var initials = document.getElementById("initials");
var StartOver = document.getElementById("restart");
var scores = JSON.parse(localStorage.getItem("your-score"));
var shufflequestions, currentQuestion;

start.addEventListener("click", startQuiz);
next.addEventListener("click", nextQuestion {
    currentQuestion++
    setNext
});

function time() {
    timeLeft--;
    timer.textContent = "time:" + timeLeft;
    if (timeLeft <= 0){
        save();
    }
}

function startQuiz() {
    shufflequestions = questions.sort(() => Math.random() - .10)
    currentQuestion = 0 
    question.classList.remove("hide");

    time();
    setNext();
};

function setNext() {
    showQuestion(shufflequestions[currentQuestion]);
};

function showQuestion(question) {
    questions.innerText = question.question
    question.answer
}
