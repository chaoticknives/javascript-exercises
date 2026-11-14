const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

//`sum()`: take an array of numbers and add all the numbers together
const sum = function(array) {
  return result = array.reduce((sum, current) => sum + current, 0);
};

//`multiply()`: take an array of numbers and multiply all the numbers together
const multiply = function(array) {
  return result = array.reduce((product, current) => product * current, 1);
};

//`power()`: take two numbers (base and exponent) and return the result of raising the base to that exponent
const power = function() {
	
};

//`factorial()`: given a single number, find its [factorial](https://www.mathsisfun.com/numbers/factorial.html)
const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
