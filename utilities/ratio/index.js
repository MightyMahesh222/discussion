function ratioOfTwoNumbers(num1, num2) {
  return num1 / num2;
}

module.exports = ratioOfTwoNumbers;

let { factorial, ratios } = require("./utilities/ratioFactorial/index");
console.log(factorial(3));
console.log(ratios(2, 3));
