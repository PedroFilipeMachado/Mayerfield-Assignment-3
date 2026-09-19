let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


function playRound(playerSelection) {

    const computerSelection = getComputerChoice();

    let roundResult = "";

    if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    }

    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        roundResult = "You win this round!";
    }

    else {
        computerScore++;
        roundResult = "Computer wins this round!";
    }


    results.innerHTML = `
        <p>You chose: ${playerSelection}</p>
        <p>Computer chose: ${computerSelection}</p>
        <p>${roundResult}</p>
        <p>Your Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;


    if (humanScore === 5) {
        results.innerHTML += "<h2>You won the game!</h2>";
        endGame();
    }

    else if (computerScore === 5) {
        results.innerHTML += "<h2>Computer won the game!</h2>";
        endGame();
    }
}


function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


rockButton.addEventListener("click", function () {
    playRound("rock");
});

paperButton.addEventListener("click", function () {
    playRound("paper");
});

scissorsButton.addEventListener("click", function () {
    playRound("scissors");
});
