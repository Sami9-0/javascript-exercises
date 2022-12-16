const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	const index = numbers.length;
  let sum = 0;
  for(let i = 0; i < index; i++)
  {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  const index = numbers.length;
  let product = 1;
  for(let i = 0; i < index; i++)
  {
    product *= numbers[i];
  }
  return product;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(number) {
  let fac = 1;
	return (number === 0 || number === 1) ? 1 : (number * factorial(number - 1));
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
