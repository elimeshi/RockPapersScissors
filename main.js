const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;

playGame(5);

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choise: (rock/paper/scissors)").toLowerCase();
    while (!choices.includes(choice)) {
        choice = prompt("Invalid input.\nEnter your choise: (rock/paper/scissors)").toLowerCase();
    }
    return choice;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}`);

    const humanIndex = choices.indexOf(humanChoice);
    const computerIndex = choices.indexOf(computerChoice);

    if (humanIndex === computerIndex) {
        console.log("It's a tie!");
    } else if ((humanIndex + 1) % choices.length === computerIndex) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("You win!");
        humanScore++;
    }
}

function playGame(winPoints) {
    console.log("Hello, World! This is the Rock Paper Scissors game.");
    console.log("Let's play!");
    while (humanScore < winPoints && computerScore < winPoints) {
        playRound();
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }
    if (humanScore === winPoints) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Sorry! The computer won the game.");
    }
}
