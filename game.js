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

// console.log(Math.random() * 3);

// function getPlayerChoice() {
//     return prompt("Rock, Paper or Scissors");
// }

// // console.log(getPlayerChoice());

// function playRound() {
//     let playerChoice = getPlayerChoice();
//     let computerChoice = getComputerChoice();
//     if (playerChoice == computerChoice) {
//         return console.log('Its a tie')
//     }
//     else if ((playerChoice == "Rock")    )
// }

