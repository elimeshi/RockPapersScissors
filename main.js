const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;
const buttons = Array.from(document.getElementById('buttons').children);
let gameOver = false;
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        playRound(btn.id);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateChoices(humanChoice, computerChoice) {
    const hChoice = document.getElementById('human-choice');
    const cChoice = document.getElementById('computer-choice');
    hChoice.textContent = `Your choice: ${humanChoice}`;
    cChoice.textContent = `Computer's choice: ${computerChoice}`;
}

function updateScores() {
    const hScore = document.getElementById('human-score');
    const cScore = document.getElementById('computer-score');
    hScore.textContent = `Your score: ${humanScore}`;
    cScore.textContent = `Computer's score: ${computerScore}`;
}

function updateOutcomeMessage(message) {
    document.getElementById('outcome').firstElementChild.textContent = message;
}

function playRound(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();

    updateChoices(humanChoice, computerChoice);

    const humanIndex = choices.indexOf(humanChoice);
    const computerIndex = choices.indexOf(computerChoice);

    if (humanIndex === computerIndex) {
        updateOutcomeMessage("It's a tie!");
    } else if ((humanIndex + 1) % choices.length === computerIndex) {
        updateOutcomeMessage("Computer won this turn!");
        computerScore++;
    } else {
        updateOutcomeMessage("You won this turn!");
        humanScore++;
    }

    updateScores();
    if (humanScore === 5) {
        updateOutcomeMessage("Congratulations! You won the game!");
        gameOver = true;        
    } else if (computerScore === 5) {
        updateOutcomeMessage("Computer won the game! Better luck next time!");
        gameOver = true;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScores();
    updateChoices('', '');
    updateOutcomeMessage("Choose your weapon!");
}
