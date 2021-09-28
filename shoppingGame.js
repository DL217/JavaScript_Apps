// Shopping List Game for Node.js
// Draft #1 
// Work in progress...

const shoppingList = ["computer", "monitor", "keyboard", "mouse", "hdmi cable", "dvd drive"];
let computerParts = [];
let numberList = [];

console.log("\nCongratulations! You are going shopping!")
console.log("\nHere are the shopping items to choose from:")
console.log() // Extra spaces were added to make the output more readable
for (const [index, element] of shoppingList.entries()) {
  console.log(index + 1, element);
}
console.log();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Press 'Enter' to start.", (firstResponse) => {
    function itemSelection() {
        let currentChoice = rl.question ("\nGreat. Add items to your cart by entering their corresponding number (one item at a time).", response => {
            response = response.replace(/\s+/g, '');
            response = parseInt(response);
            if (response in numberList) {
                const index = shoppingList.indexOf("computer");
                console.log(index+"is the index.");
                computerParts.splice(index, 1);
                numberList.pop();
                console.log(numberList);
                console.log(`Removing ${response}. Your cart now contains ${computerParts}.`);
                itemSelection();
            } else if (computerParts.length === shoppingList.length) {
                console.log("Your cart is full. Thank you for shopping!")
                rl.close();
            } else {
                switch (response) {
                    case 1:
                        computerParts.push("computer");
                        numberList.push(1);
                        console.log(numberList);
                        console.log(`Adding ${response}. Your cart now contains: ${computerParts}.`);
                        itemSelection();
                        break;
                    case 2:
                        computerParts.push("monitor");
                        numberList.push(2);
                        console.log(`Adding ${response}. Your cart now contains: ${computerParts}.`);
                        itemSelection();
                        break;
                    case 3:
                        computerParts.push("keyboard");
                        numberList.push(3);
                        console.log(`Adding ${response}. Your cart now contains: ${computerParts}.`);
                        itemSelection();
                        break;
                    case 4:
                        computerParts.push("mouse");
                        numberList.push(4);
                        console.log(`Adding ${response}. Your cart now contains: ${computerParts}.`);
                        itemSelection();
                        break;
                    case 5:
                        computerParts.push("hdmi cable");
                        numberList.push(5);
                        console.log(`Adding ${response}. Your cart now contains: ${computerParts}.`);
                        itemSelection();
                        break;
                    case 6:
                        computerParts.push("dvd drive");
                        numberList.push(6);
                        console.log(`Adding ${response}. Your cart now contains: ${computerParts}.`);
                        itemSelection();
                        break;
                    default:
                        console.log("Please enter a valid choice.");
                        itemSelection();
                        break;
                    }
                }
        });
    }
    itemSelection();
});

rl.on("close", function() {
    process.exit(0);
});
