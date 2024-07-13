// Import required module
let readline = require("readline");

const Solution = () => {
  // Write your code here
  let qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  qInterface.question("Please enter first number \n", (num1) => {
    qInterface.question("Please enter second number \n", (num2) => {
      console.log(Math.max(parseInt(num1, 10), parseInt(num2, 10)));
    });
  });
};

Solution();
module.exports = Solution;
