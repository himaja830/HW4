var highestScoresString = localStorage.getItem('highestScores');
var cardBody = document.querySelector('.card-body');
var clearButton = document.querySelector('#clear');
var homeButton = document.querySelector('#home');

if (highestScoresString) {
    var highestScores = JSON.parse(highestScoresString);
    for (var inital in highestScores) {
        var pElem = document.createElement('p');
        pElem.textContent = inital + ' : ' + highestScores[inital];
        cardBody.appendChild(pElem);
    }
}

clearButton.addEventListener('click', function() {
    localStorage.removeItem('highestScores');
    window.location.href = 'index.html';
});

homeButton.addEventListener('click', function() {
    window.location.href = 'index.html';
})