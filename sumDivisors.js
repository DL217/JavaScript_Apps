// A calculator for Node.js

console.log("Enter a number, and this program will calculate the sum of all divisors of that number.");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("\nGive it a try: ", (response) => {
    response = response.trim();
    function sumDivisors(number) {
        let sum = 0;
        let divisor = 1;
        while (divisor < number) {
            if (number % divisor == 0) {
                sum += divisor
            }
            divisor += 1
        }
        console.log("The sum of the divisors is: " + sum);
    }
    sumDivisors(response);
    rl.close();
});

rl.on("close", function() {
    process.exit(0);
});
