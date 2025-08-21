// console.log("Hola world")

let humanScore = 0;
let cpuScore = 0;
let rock = "rock"
let paper = "paper"
let scissors = "scissors"


function getComputerChoice() {
    cpuChoice = Math.floor(Math.random() * 3); // gets a number from 0 - 2 inclusive

    if (cpuChoice == 0) {
        return rock
    }
    else if (cpuChoice == 1) {
        return paper;
    }
    else if (cpuChoice == 2) {
        return scissors;
    }

}
// console.log(getComputerChoice());

    // console.log(Math.random() * 3);

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors").toLowerCase();
}

// console.log(getPlayerChoice());



function playRound() {
    
    // Get rock,paper or scissors from player and cpu
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    // console.log(playerChoice);
    // console.log(computerChoice);

    // Checks the results of round
    if (playerChoice == computerChoice) {
        return console.log('Its a tie')
    }
    else if (
        ((playerChoice == rock) && (computerChoice == scissors))
        || ((playerChoice == paper) && (computerChoice == rock))
        || ((playerChoice == scissors) && (computerChoice == paper))
    ) {
        humanScore += 1;
        return console.log("You won Score: You: " + humanScore + " CPU: " + cpuScore);
    }
    // 2nd else if could just be an else, but 
    // since using string values, we will make sure
    else if (
        ((playerChoice == rock) && (computerChoice == paper))
        || ((playerChoice == paper) && (computerChoice == scissors))
        || ((playerChoice == scissors) && (computerChoice == rock))
    ){
        cpuScore += 1;
        return console.log("You lost Score: You: " + humanScore + " CPU: " + cpuScore);
    }
    // Checks the results of round

}

// playRound();

function playGame() {
    roundCounter = 0;
    while (roundCounter < 5) {
        roundCounter += 1;
        playRound();
        // console.log(humanScore);
        // console.log(cpuScore);
    }

    if (humanScore > cpuScore) {
            console.log ("You Won: Player: " + humanScore + " CPU: " + cpuScore);

    }
    else if (humanScore < cpuScore) {
        console.log ("You Lost Player: " + humanScore + " CPU: " + cpuScore);
    }
    
    else {
        console.log ("You Tied: " + humanScore + " CPU: " + cpuScore);
    }
}

playGame();

