// console.log("Hola world")

let humanScore = 0;
let cpuScore = 0;
let rock = "rock"
let paper = "paper"
let scissors = "scissors"

const rockButton = document.getElementById('rockBtn');
const paperButton = document.getElementById('paperBtn');
const scissorsButton = document.getElementById('scissorsBtn');

const playerChoice = document.querySelector("#playerChoice");
const botChoice = document.querySelector("#cpuChoice")
playerChoice.textContent = ' ';

const gameResult = document.querySelector("#result");


rockButton.addEventListener('click', function() {
    playRound(rock);
    playerChoice.textContent = rock;
})

paperButton.addEventListener('click', function() {
    playRound(paper);
    playerChoice.textContent = paper;
})
scissorsButton.addEventListener('click', function() {
    playRound(scissors);
    playerChoice.textContent = scissors;
})


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


// console.log(getPlayerChoice());



function playRound(playerChoice) {
    

    const computerChoice = getComputerChoice();
    botChoice.textContent = computerChoice;
    // Checks the results of round
    if (playerChoice == computerChoice) {
        gameResult.textContent = ("This round is a TIE - Player: " + humanScore + " CPU: " + cpuScore);
    }
    else if (
        ((playerChoice == rock) && (computerChoice == scissors))
        || ((playerChoice == paper) && (computerChoice == rock))
        || ((playerChoice == scissors) && (computerChoice == paper))
    ) {
        humanScore += 1;
        gameResult.textContent = ("You Won This round - Player: " + humanScore + " CPU: " + cpuScore);    }
    // 2nd else if could just be an else, but 
    // since using string values, we will make sure
    else if (
        ((playerChoice == rock) && (computerChoice == paper))
        || ((playerChoice == paper) && (computerChoice == scissors))
        || ((playerChoice == scissors) && (computerChoice == rock))
    ){
        cpuScore += 1; 
        gameResult.textContent = ("You Lost this round - Player: " + humanScore + " CPU: " + cpuScore);
        
    }

    // Checks the results of round



    checkGameOver();
}

// playRound();


// fix function to use two condtions to see if it become more efficent;
function checkGameOver() {
    console.log(`${humanScore} vs ${cpuScore}`);
    if (humanScore == 5 || cpuScore == 5) {
        rockButton.remove();
        paperButton.remove();
        scissorsButton.remove();
        if (humanScore > cpuScore) {
        gameResult.textContent = ("You Won the GAME - Player: " + humanScore + " CPU: " + cpuScore);

        }
        else{
            gameResult.textContent = ("You Lost the GAME - Player: " + humanScore + " CPU: " + cpuScore);
        }
    }
}

function playGame() {
    while (humanScore < 5 || cpuScore < 5) {
        playRound(playerChoice);
        // console.log(humanScore);
        // console.log(cpuScore);
    }

    if (humanScore > cpuScore) {
        gameResult.textContent = ("You Won the GAME - Player: " + humanScore + " CPU: " + cpuScore);

    }
    else{
        gameResult.textContent = ("You Lost the GAME - Player: " + humanScore + " CPU: " + cpuScore);
    }
}
// playGame();

