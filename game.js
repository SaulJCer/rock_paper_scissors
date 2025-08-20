console.log("Hola world")

let humanScore = 0;
let cpuScore = 0;
let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"


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
console.log(getComputerChoice());

console.log(Math.random() * 3);

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors");
}

console.log(getPlayerChoice());

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
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
}

playRound();

