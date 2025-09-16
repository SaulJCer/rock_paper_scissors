// console.log("Hola world")

let humanScore = 0;
let cpuScore = 0;
let rock = "rock"
let paper = "paper"
let scissors = "scissors"

const rockButton = document.getElementById('rockBtn');
const paperButton = document.getElementById('paperBtn');
const scissorsButton = document.getElementById('scissorsBtn');

const playerButtonContainer = document.querySelector(".playerButtonsContainer");

const playerChoice = document.querySelector("#playerChoice");
const botChoice = document.querySelector("#cpuChoice")
playerChoice.textContent = ' ';

const gameResult = document.querySelector("#result");
const bodyElement = document.querySelector("body");
const gameChoices = document.querySelector(".choices");

const playAgainButton = document.querySelector(".playAgainButton");

playAgainButton.addEventListener("click", function() {
    console.log("YO WE ARE CLICKED")
    playAgain();
})


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
    if (humanScore == 5 || cpuScore == 5) {
        // rockButton.style.display = "none";
        // paperButton.style.display = "none";
        // scissorsButton.style.display = "none";
        

        playAgainButton.style.display = "block"

        gameChoices.style.display = "none";
        bodyElement.style.justifyContent = "center";
        bodyElement.style.backgroundColor = "#0C6291";
        bodyElement.style.color = "#ACECF7";
        playerButtonContainer.style.display = 'none';
        
        
        if (humanScore > cpuScore) {
            gameResult.textContent = ("You Won the GAME - Player: " + humanScore + " CPU: " + cpuScore);
            gameResult.style.backgroundColor = "#7BC950"
            bodyElement.style.color = "#FEFCAD";
        }
        else{
            gameResult.textContent = ("You Lost the GAME - Player: " + humanScore + " CPU: " + cpuScore);
            gameResult.style.backgroundColor = "#470024"
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

function playAgain () {
    playAgainButton.style.display = "none";
    playerButtonContainer.style.display = '';
    gameChoices.style.display = "";
    gameResult.textContent = ("Lets Play AGAIN!!");
    humanScore = 0;
    cpuScore = 0;


    // Changes style of page back to orginal style
    gameResult.style.backgroundColor = "";
    bodyElement.style.color = "";
    bodyElement.style.justifyContent = "";
    bodyElement.style.backgroundColor = "";
    bodyElement.style.color = "";


    // rockButton.style.display = "block";
    // paperButton.style.display = "block";
    // scissorsButton.style.display = "block";
}