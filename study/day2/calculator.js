const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  powerOf: function (a, b) {
    return a ** b;
  },
};

const resultAdd = calculator.add(10, 2);
const resultMinus = calculator.minus(resultAdd, 2);
const resultTimes = calculator.times(resultMinus, 2);
const resultDivide = calculator.divide(resultTimes, resultAdd);
const resultPowerOf = calculator.powerOf(resultMinus, 2);

console.log(resultAdd);
console.log(resultMinus);
console.log(resultTimes);
console.log(resultDivide);
console.log(resultPowerOf);
