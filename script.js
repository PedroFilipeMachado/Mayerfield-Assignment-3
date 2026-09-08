var choices = ["rock", "paper", "scissors"];
var playerWins = 0;
var computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Tie";
    return choices[(choices.indexOf(playerSelection) + 1) % 3] === computerSelection
        ? "Computer wins"
        : "Player wins";
}

function resetGameWins() {
    playerWins = 0;
    computerWins = 0;
}

function game() {
    do {
        var playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
        var computerSelection = choices[Math.floor(Math.random() * choices.length)];
        var result = playRound(playerSelection, computerSelection);

        if (result === "Player wins") playerWins++;
        if (result === "Computer wins") computerWins++;

        console.log(result, "Player:", playerWins, "Computer:", computerWins);
    } while (playerWins < 3 && computerWins < 3);
    console.log(playerWins === 3 ? "Player wins the game!" : "Computer wins the game!");
}

game();
resetGameWins();