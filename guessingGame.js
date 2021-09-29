// Number Guessing Game for Node.js

let low = 1
let high = 1000

let guesses = 1

console.log(`\nPlease think of a number between ${low} and ${high}.`);
console.log(); // Extra spaces were added to make the output more readable

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Press 'Enter' to start.", (firstResponse) => {
    function test() {
        let guess = Math.floor(low + (high - low) / 2);
        rl.question(`\nI guessed that this is your number: ${guess}.\n\nShould I guess higher or lower?\n\nType 'H' if I should guess higher, or 'L' if I should guess lower, or 'C' if my guess was correct. Then press 'Enter'.`, (response) => {
            response = response.replace(/\s+/g, '');
            if (low !== high) {
                switch (response) {
                    case 'h':
                    case 'H':
                        low = guess + 1;
                        test();
                        break;
                    case 'l':
                    case 'L':
                        high = guess - 1;
                        test();
                        break;
                    case 'c':
                    case 'C':
                        console.log();
                        console.log("I was correct!");
                        console.log(`I got it in ${guesses} guess(es)!`);
                        rl.close();
                        break;
                    default:
                        console.log("\nPlease enter H, L, or C.");
                        test();
                        break;
                }
            guesses += 1 
            } else {
            console.log(`You thought of the number ${guess}.`)
            console.log(`I got it in ${guesses} guess(es)!`);
            rl.close();
            }
        });
    }
    test();
});


rl.on("close", function() {
    process.exit(0);
});
