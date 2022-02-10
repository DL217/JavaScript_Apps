// Adventure Game for Node.js

const availableExits = ["north", "east", "south", "west"];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const correctExit = availableExits[getRandomIntInclusive(0,3)];

console.log("\nWelcome to the Adventure Game!");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Press 'Enter' to start.", (firstResponse) => {
    function exitSelection() {
        rl.question ("\nYou are lost!\nYou can go in one of the following directions: 'north', 'east', 'south', 'west'.\nPlease choose a direction, then press 'Enter'.", response => {
            response = response.trim();
            if (response !== correctExit) {
                console.log("Wrong direction! Please try again.");
                exitSelection();
            } else {
                console.log("Well done. You chose the right direction. GAME OVER.");
                rl.close();
            }
        });
    }
    exitSelection();
});

rl.on("close", function() {
    process.exit(0);
});
