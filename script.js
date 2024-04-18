//Initialize the following variables to keep track of the player and computer's score
let playerScore = 0;
let computerScore = 0;


//Sets the round number
let roundNumber = 1;



// roundNumber = 1;
// computerScore = 0;
// playerScore = 0;


//The function simulates one round of rock, paper, scissors.


function checkWinner(playerScore, computerScore)
{
    if(playerScore == 5 || computerScore == 5)
    {
        totalPointsScored(playerScore, computerScore); 
    } 
}

function playRound(playChoice)
{
    //resets the score values and clears the winner text if the checkWinner function was already called and the user plays another round
    if(playerScore == 5 || computerScore == 5)
    {
        playerScore = 0;
        computerScore = 0;
        winnerText.textContent = "";
    }
    
    //Chooses a random number between zero, one, and two
    function chooseRandomHand()
    {
        return Math.floor(Math.random() * 3);
    }

    //The three choices in the game, mapped to values in an array

    let choices = ["rock", "paper", "scissors"]

    //The value output from the randomizer function is plugged into the array, returning a string with the random choice

    let computerChoice = (choices[chooseRandomHand()]);

    //Prompt the player for input in the form of a string. 
    //Ensure the entered values must be rock, paper, or scissors
    //Case sensitivity does not matter. Accept inputs in any case

    let playerChoice = playChoice;

    //Create the logic for how each choice interacts with the other

    function determineWinner(playerchoice, computerChoice)
    {
        //The following scenarios equal the player winning
        if(playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper")
        {
            playerScore++;

            playerChoiceText.textContent = playerChoice;
            computerChoiceText.textContent = computerChoice;

            playerScoreText.textContent = playerScore;
            computerScoreText.textContent = computerScore;
        }

        //The following scenarios equal the computer winning
        else if(playerChoice == "scissors" && computerChoice == "rock" ||
        playerChoice == "rock" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "scissors")
        {
            computerScore++;

            playerChoiceText.textContent = playerChoice;
            computerChoiceText.textContent = computerChoice;

            playerScoreText.textContent = playerScore;
            computerScoreText.textContent = computerScore;
            
        }

        //The following scenarios result in a tie
        else
        {
            playerChoiceText.textContent = playerChoice;
            computerChoiceText.textContent = computerChoice;

            playerScoreText.textContent = playerScore;
            computerScoreText.textContent = computerScore;
        }
}


    determineWinner(playerChoice, computerChoice);
    roundNumber++;
    checkWinner(playerScore, computerScore);
}

//selecting DOM elements for the text content part of the UI
let playerChoiceText = document.querySelector("#playChoice");
let computerChoiceText = document.querySelector("#compChoice");

let winnerText = document.querySelector("#winner");

playerChoiceText.style.color = "#FFC482";
computerChoiceText.style.color = "#FFC482";

let playerScoreText = document.querySelector("#playScore"); 
let computerScoreText = document.querySelector("#compScore"); 

//At the end of five rounds, determine if the player or computer has the higher score.
function totalPointsScored(playScore, compScore)
{
    if(playScore > compScore)
    {
        winnerText.textContent = "Nice!! You beat the computer";
    }
    else if (compScore > playScore)
    {
        winnerText.textContent = "You lost :(. The computer scored higher.";
    }
    else
    {
        winnerText.textContent = "It's a tie?!? Better luck next time.";
    }
}


//Selecting DOM elements/calling the play round function when a button is clicked
let rockBtn = document.querySelector("#rock");

rockBtn.addEventListener("click", function()
{
    playRound("rock");
});

let paperBtn = document.querySelector("#paper");

paperBtn.addEventListener("click", function()
{
    playRound("paper");
});

let scissorsBtn = document.querySelector("#scissors");

scissorsBtn.addEventListener("click", function()
{
    playRound("scissors");
});
