console.log("Hola world")



function getComputerChoice() {
    cpuChoice = Math.floor(Math.random() * 3); // gets a number from 0 - 2 inclusive

    if (cpuChoice == 0) {
        return "Rock"
    }
    else if (cpuChoice == 1) {
        return "Paper";
    }
    else if (cpuChoice == 2) {
        return "Scissors";
    }

}
// console.log(getComputerChoice());

// console.log(Math.random() * 3);

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors");
}

console.log(getPlayerChoice());