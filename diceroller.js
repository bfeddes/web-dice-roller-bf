/*
    Author:  Brian Feddes
    Class:   Software Engineering 
    Description: Web Dice Roller
*/

// Variables
var cashSum = 250;
var previousRoll = 0;

// Prints the starting balance
function printStart() {
    cashSum = cashSum;
    document.getElementById("money").value = "$" + cashSum;
}

// Dice roll function
function RollSixSidedDice() {
    var roll1 = document.getElementById("dice").value = Math.floor(Math.random()*10) + 1;
    var roll2 = document.getElementById("dice2").value = Math.floor(Math.random()*10) + 1;
    var currentRole = document.getElementById("yourRoll").value = roll1 + roll2;
    if (currentRole > previousRoll) {
        previousRoll = currentRole;
        cashSum = cashSum * 2;
        document.getElementById("money").value = "$" + cashSum;
    } else {
        cashSum = document.getElementById("money").value = cashSum * 0;
        alert("You lose!");
        location.reload();
    }
}

//Sending cash out message
function cashOut() {
    alert("You won $" + cashSum + "!");
    location.reload();
}