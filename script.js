
//Chooses a random number between zero, one, and two
function chooseRandomHand()
{
    return Math.floor(Math.random() * 3);
}

//The three choices in the game, mapped to values in an array

let choices = ["Rock", "Paper", "Scissors"]

//The value output from the randomizer function is plugged into the array, returning a string with the random choice

console.log(choices[chooseRandomHand()]);