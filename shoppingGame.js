// Shopping List Game for Node.js

const shoppingList = ["computer", "monitor", "keyboard", "mouse", "hdmi cable", "dvd drive"];
let computerParts = [];

console.log("\nCongratulations! You are going shopping!")
console.log("\nHere are the shopping items to choose from:")
console.log() // Extra spaces were added to make the output more readable

for (const [item, element] of shoppingList.entries()) {
  console.log(item + 1, element);
}

console.log("\nThe store is in limited supply! You may only check out 6 items.")

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Press 'Enter' to start.", (firstResponse) => {
    function itemSelection() {
        if (computerParts.length !== shoppingList.length) {
            rl.question ("\nAdd items to your cart by entering their corresponding number (one item at a time).", response => {
                computerParts.push(shoppingList[response - 1]);
                console.log(`Adding ${response}. Your cart now contains: ${computerParts}.\nPlease select up to 6 items.`);
                itemSelection();
            });
        } else {
            console.log("Your cart is full. Thank you for shopping!");
            rl.close();
        }
    }
    itemSelection();
});

rl.on("close", function() {
    process.exit(0);
});
