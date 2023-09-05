let factorials = require("../utilities/factorial/index");
let ratio = require("../utilities/ratio/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratio(num1, num2);
  const factorial = factorials(num3);
  return { factorial, ratio };
};
module.exports = ratioAndFactorial;
