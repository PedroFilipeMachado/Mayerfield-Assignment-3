const choices = ["Rock", "Paper", "Scissors"];

// Returns a random choice for the computer
function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Plays one round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "draw";
    }

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        return "player";
    }

    return "computer";
}

// Main game
function game() {

    let playerScore = 0;
    let computerScore = 0;

    alert(
        "Welcome to Rock, Paper, Scissors!\n\n" +
        "You will play against the computer.\n" +
        "The first player to win 3 rounds wins the game.\n\n" +
        "Your results will appear in the browser console.\n\n" +
        "Click OK to start!"
    );

    while (playerScore < 3 && computerScore < 3) {

        let playerSelection = prompt(
            "Choose Rock, Paper or Scissors:"
        );

        // Player pressed Cancel
        if (playerSelection === null) {
            alert("Game cancelled. See you next time!");
            return;
        }

        // Clean the player's input
        playerSelection = playerSelection.trim().toLowerCase();

        // Validate input
        if (
            playerSelection !== "rock" &&
            playerSelection !== "paper" &&
            playerSelection !== "scissors"
        ) {
            alert(
                "Invalid choice!\n\n" +
                "Please enter Rock, Paper or Scissors."
            );

            continue;
        }

        // Convert to the format used by our game
        playerSelection =
            playerSelection.charAt(0).toUpperCase() +
            playerSelection.slice(1);

        const computerSelection = computerPlay();

        const result = playRound(
            playerSelection,
            computerSelection
        );

        // Display round information
        console.log("--------------------");
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);

        if (result === "player") {
            playerScore++;
            console.log("You win this round!");
        }
        else if (result === "computer") {
            computerScore++;
            console.log("Computer wins this round!");
        }
        else {
            console.log("It's a draw!");
        }

        console.log(
            "Score → You: " +
            playerScore +
            " | Computer: " +
            computerScore
        );
    }

    // Final result
    console.log("--------------------");

    if (playerScore === 3) {
        console.log("YOU WIN THE GAME!");

        alert(
            "Congratulations!\n\n" +
            "You defeated the evil AI!"
        );
    }
    else {
        console.log("THE COMPUTER WINS!");

        alert(
            "Game over!\n\n" +
            "The evil AI has defeated you!"
        );
    }
}

// Start the game
game();