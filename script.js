var questions = [
    {
        "question": "Inside which HTML element do we put the Javascript?",
        "option1": "<js>",
        "option2": "<script>",
        "option3": "<javascript>",
        "option4": "<scipting>",
        "answer": "1"
    },
    {
        "question": "Where is the correct place to insert a javascript?",
        "option1": "The <head> section",
        "option2": "<body> section",
        "option3": "Both <head> & <body> sections",
        "option4": "None of the above",
        "answer": "1"

    },
    {
        "question": "What is the correct syntax for reffering to an external script called 'xxx.js'?",
        "option1": "<script src='xxx.js'>",
        "option2": "<script href = 'xxx.js'>",
        "option3": "<script name='xxx.js'>",
        "option4": "None of the above",
        "answer": "0"

    },
    {
        "question": "The External Javascript file must contain which one of the following tags?",
        "option1": "<script> tag",
        "option2": "<javascript> tag",
        "option3": "<script> tag with 'src 'alt",
        "option4": "None of the above",
        "answer": "3"

    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "option1": "alertBox('Hello World')",
        "option2": "msg('Hello World')",
        "option3": "msg Box ('Hello World')",
        "option4": "alert ('Hello World')",
        "answer": "3"

    }
]

var viewHighestScores = document.querySelector('#highestScores');
var timer = document.querySelector(".card-footer", ".text-muted");
var startquizbtn = document.querySelector(".btn", ".btn-primary");
var nextBtn = document.querySelector("#nextBtn");
var questionEl = document.querySelector(".question");
var optionEl = document.querySelector(".form-check-input");
var optionEl1 = document.querySelector("#exampleRadios1");
var optionEl2 = document.querySelector("#exampleRadios2");
var optionEl3 = document.querySelector("#exampleRadios3");
var optionEl4 = document.querySelector("#exampleRadios4");
var displayEl = document.querySelector("#qAndAContainer");
var radioButtons = document.querySelectorAll(".form-check-input");

var score = 0;
var totalSeconds = 60;
var questionIndex = 0;

function startTimer() {
    setInterval(showtimer, 1000);
};

var showtimer = function () {
    if (totalSeconds >= 0) {
        timer.textContent = totalSeconds;
        totalSeconds--;
    } else {
        timer.textContent = "Sorry Time Out!....Better luck next time."
    }
}

viewHighestScores.addEventListener('click', function() {
    window.location.href = 'highScore.html';
});
startquizbtn.addEventListener("click", startTimer);
startquizbtn.addEventListener("click", nextQuestion);
startquizbtn.addEventListener("click", display);
nextBtn.addEventListener("click", calculateScore);
nextBtn.addEventListener("click", nextQuestion);

for (var radioButton of  radioButtons) {
    radioButton.addEventListener('change', function() {
        nextBtn.classList.remove('disabled');
    });
}

function calculateScore() {
    for (var i = 0; i < radioButtons.length; i++) {
        var radBtn = radioButtons[i];
        if (radBtn.checked) {
            if (questions[questionIndex-1].answer == i) {
                score++;
            }
        }
    }
}

function nextQuestion() {
    if(questions.length === questionIndex){
        nextBtn.style.display="none";
        localStorage.setItem("currentScore", score);
        window.location.href = 'score.html';
        return;
    } else {
        nextBtn.classList.add('disabled');
    }

    questionEl.textContent = questions[questionIndex].question;
    optionEl1.nextElementSibling.textContent = questions[questionIndex].option1;
    optionEl2.nextElementSibling.textContent = questions[questionIndex].option2;
    optionEl3.nextElementSibling.textContent = questions[questionIndex].option3;
    optionEl4.nextElementSibling.textContent = questions[questionIndex].option4;

    for (var radioButton of  radioButtons) {
        radioButton.checked = false;
    }

    questionIndex++;
}

function display() {
    displayEl.style.removeProperty("display");
    nextBtn.style.removeProperty("display");
}
