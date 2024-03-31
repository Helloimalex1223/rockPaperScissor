
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
        console.log(`You won! You chose ${playerChoice} and the computer chose ${computerChoice}`)
    }

    //The following scenarios equal the computer winning
    else if(playerChoice == "scissors" && computerChoice == "rock" ||
       playerChoice == "rock" && computerChoice == "paper" ||
       playerChoice == "paper" && computerChoice == "scissors")
    {
        console.log(`You lost! You chose ${playerChoice} and the computer chose ${computerChoice}`)
    }

    //The following scenarios result in a tie
    else
    {
        console.log("It's a tie!!")
    }
}