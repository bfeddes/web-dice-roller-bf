// Variables
var cashSum = 250;
var previousRoll = 0;
// Dice roll function
function RollSixSidedDice() {
    var roll1 = document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    var roll2 = document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
    var currentRole = document.getElementById("yourRoll").value = roll1 + roll2;
    if (currentRole > previousRoll) {
        previousRoll = currentRole;
        cashSum = document.getElementById("money").value = cashSum * 2;
    } else {
        cashSum = document.getElementById("money").value = cashSum * 0;
        alert("You lose!");
        location.reload();
    }
}

function cashOut() {
    alert("You won $" + cashSum + "!");
    location.reload();
}