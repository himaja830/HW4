var scoreElem = document.querySelector('#score');
scoreElem.textContent = scoreElem.textContent + localStorage.getItem('currentScore');

var inputText = document.querySelector('#initials');
var submitButton = document.querySelector('#submit');

inputText.addEventListener('input', function() {
    if (this.value) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});


submitButton.addEventListener('click', function() {

    var currentScore = localStorage.getItem('currentScore');
    var highestScoresString = localStorage.getItem('highestScores');
    var highestScores = JSON.parse(highestScoresString);
    if (!highestScores) {
        highestScores = {};
    }
    
    highestScores[inputText.value] = currentScore;

    highestScoreString = JSON.stringify(highestScores);
    localStorage.setItem('highestScores', highestScoreString);
    localStorage.removeItem('currentScore');

    window.location.href = 'highScore.html'

});