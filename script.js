
//Chooses a random number between zero, one, and two
function chooseRandomHand()
{
    return Math.floor(Math.random() * 3);
}

//The three choices in the game, mapped to values in an array

let choices = ["rock", "paper", "scissors"]

//The value output from the randomizer function is plugged into the array, returning a string with the random choice

console.log(choices[chooseRandomHand()]);




//Prompt the player for input in the form of a string. 
//Ensure the entered values must be rock, paper, or scissors
//Case sensitivity does not matter. Accept inputs in any case

let playerChoice = prompt("Make your choice: Rock, Paper, or Scissors?").toLowerCase();


console.log(playerChoice);