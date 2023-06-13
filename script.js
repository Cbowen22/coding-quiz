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
var timerID;
var start = document.getElementById("start-button");
var questionContainer = document.getElementById("the.question.container");
var questions = document.getElementById("question");
var answer = document.getElementById("answers");
var checkAnswers = document.getElementById("check-answer");
var next = document.getElementById("next");
var save = document.getElementById("save");
var initials = document.getElementById("initials");
var StartOver = document.getElementById("restart");
var scoreContainer = document.getElementById("score-container")
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
    timerId = setInterval(time, 1000);
    start.classList.add("hide");
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
    question.answers.forEach(answers => {
        var button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("button")
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
    })
};

function reset() {
    next.classList.add("hide")
    checkAnswers.classList.add("hide")
    while (answer.firstChild) {
        answer.removeChild
            (answer.firstChild)
    }
};

function selectAnswer(a) {
    var selectButton = a.target;
    var correct = selectButton.dataset.correct;
    checkAnswers.classList.remove("hide")
    if (correct) {
            checkAnswers.innerHTML = "Yay! Thats Correct";
    } else {
            checkAnswers.innerHTML = "No, thats not it";
            if (timeLeft <=10) {
                timeLeft = 0;
            } else {
                timeLeft -=10;
            }
    }

    Array.from(answer.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if (shufflequestions.length > currentQuestion + 1) {
        next.classList.remove("hide")
        checkAnswers.classList.remove("hide")
    } else {
        start.classList.remove("hide")
        save();
    }
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
};

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
};

function save() {
    clearInterval(timerID);
    timer.textContent = "time" + timeLeft;
    setTimeout(function () {
        questionContainer.classList.add("hide");
        document.getElementById("score-Container").classList.remove("hide");
        document.getElementById("scores").textContent = "your score is " + timeLeft;


    }, 1000)
};

save.addEventListener("click", function (event) {
    event.preventDefault()
    var initials = document.querySelector ("#initials").value;
    showScore(initials);
});

StartOver.addEventListener("click", function (){
    window.location.reload();
});
