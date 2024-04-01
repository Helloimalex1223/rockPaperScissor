//Initialize the following variables to keep track of the player and computer's score
let playerScore = 0;
let computerScore = 0;


//Sets the round number
let roundNumber = 1;



//The function simulates one round of rock, paper, scissors.




function playRound()
{
    console.log("**************************************");
    console.log(`ROCK PAPER SCISSORS ROUND ${roundNumber}`);
    console.log("**************************************");
    
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

    let playerChoice = prompt("Make your choice: Rock, Paper, or Scissors?").toLowerCase();

    //Create the logic for how each choice interacts with the other

    function determineWinner(playerchoice, computerChoice)
    {
        //The following scenarios equal the player winning
        if(playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper")
        {
            playerScore++;
            console.log(`You won! You chose ${playerChoice} and the computer chose ${computerChoice}`)
            console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}.`)
        }

        //The following scenarios equal the computer winning
        else if(playerChoice == "scissors" && computerChoice == "rock" ||
        playerChoice == "rock" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "scissors")
        {
            computerScore++;
            console.log(`You lost! You chose ${playerChoice} and the computer chose ${computerChoice}.`)
            console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}.`)
            
        }

        //The following scenarios result in a tie
        else
        {
            console.log("It's a tie!!")
        }
}


    determineWinner(playerChoice, computerChoice);
    roundNumber++;
}


//At the end of five rounds, determine if the player or computer has the higher score.
function totalPointsScored(playScore, compScore)
{
    if(playScore > compScore)
    {
        console.log("Nice!! You beat the computer");
    }
    else if (compScore > playScore)
    {
        console.log("You lost :(. The computer scored higher.");
    }
    else
    {
        console.log("It's a tie?!? Better luck next time.");
    }
}


//simulates five rounds of rock, paper, scissors
function playFiveRounds()
{
    for(let i = 0; i <= 5; i++)
    {
        if(i < 5)
        {
            playRound();
        } 
        else
        {
            totalPointsScored(playerScore, computerScore);
        }
    }
}

playFiveRounds();
