let secretNumber = Math.trunc(Math.random() * 100) + 1;
const submit = document.getElementById('submitGuess');
const output = document.getElementById('status');
const highscore = document.getElementById('high');

const lives = document.getElementById('remaining');
let high = 0;
let score = 10;
let tries = 1;

submit.addEventListener('click', function(){
    const input = Number(document.getElementById('guessField').value);
    console.log(input, typeof input);
    lives.innerHTML = score - tries;
    highscore.innerHTML = high;
    if (tries < 10) {
    if (input == "" || input == null) {
        alert("No input! Please enter a number.");
    } else if (input < 1 || input > 100){
        output.innerHTML = "Invalid value: Choose a number between 1 and 100!";
    } else if(input < secretNumber){
        output.innerHTML = "Too low!";
        tries++;
    } else if (input > secretNumber){
        output.innerHTML = "Too high!";
        tries++;
    } else if (input == secretNumber){
        document.getElementById('high').innerHTML = Math.max(lives.innerHTML, high);
        document.getElementById("random").innerHTML = secretNumber;
        output.innerHTML = "Correct Number! <br> Click <b>'Restart'</b> to play again!";
        document.querySelector('body').style.background = 'linear-gradient(to top right, orange, lightpink)';
    }
} else {
    document.getElementById("random").innerHTML = secretNumber;
    output.innerHTML = "Sorry, you have reached the allowed number of guesses. <br> Click <b>'Restart'</b> to try again.";
}
return false;
})

const restart = document.getElementById('restart');
restart.addEventListener('click', restartGame);
function restartGame() {
    high = Math.max(lives.innerHTML,high);
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random").textContent = '?';
    lives.innerHTML = score - tries;
    document.getElementById('remaining').textContent='10';
    score = 10;
    tries = 1;
    document.querySelector('body').style.background = 'linear-gradient(to top right, lightpink, lightblue)';
    document.getElementById('guessField').value = '';
    document.getElementById('status').textContent = 'Start guessing...';
}