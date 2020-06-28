var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
// Initially, let the ative player be player-1 = 0. (player-2 = 1)
activePlayer = 0;

function roll() {
    var number = parseInt(Math.random() * 6 + 1);
    document.getElementById("js-die-number").innerHTML = number;

    if(number == 1) roundScore = 0;
    else roundScore += number;
    if(activePlayer == 0) {
        document.getElementsByClassName("js-player1-temp-score")[0].innerHTML = roundScore;
    } else {
        document.getElementsByClassName("js-player2-temp-score")[0].innerHTML = roundScore;
    }
    
}

function changePlayer() {
    if(activePlayer == 0) {
        activePlayer = 1;
        scores[0] += roundScore;
        roundScore = 0;
        document.getElementsByClassName("js-player1-temp-score")[0].innerHTML = roundScore;
        document.getElementsByClassName("js-player1-score")[0].innerHTML = scores[0];
        if(scores[0] > 24) {
            document.getElementsByClassName("js-player1-winner")[0].innerHTML = "-- WINNER! --"
        }
    } else {
        activePlayer = 0;
        scores[1] += roundScore;
        roundScore = 0;
        document.getElementsByClassName("js-player2-temp-score")[0].innerHTML = roundScore;
        document.getElementsByClassName("js-player2-score")[0].innerHTML = scores[1];
        if(scores[1] > 24) {
            document.getElementsByClassName("js-player2-winner")[0].innerHTML = "-- WINNER! --"
        }
    }

}

