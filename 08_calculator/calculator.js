const add = function(num1, num2) {
	let addAnswer = num1 + num2;
  return(addAnswer);
};

const subtract = function(num1, num2) {
	let subtractAnswer = num1 - num2;
  return(subtractAnswer);
};

const sum = function(input) {
	let sumArray = input.concat();
  let sumAnswer = 0;

  if (sumArray.length == 0) {
    return(0);
  } else {
    for (let i = 0; i < sumArray.length; i++) {
      sumAnswer += sumArray[i];
    }
  }
  return(sumAnswer);
};

const multiply = function(input) {

  let multiplyArray = input.concat();
  let multiplyAnswer = 1;

  if (multiplyArray.length == 0) {
    return(0);
  } else {
    for (let i = 0; i < multiplyArray.length; i++) {
      multiplyAnswer *= multiplyArray[i];
    }
  }
  return(multiplyAnswer);

};

const power = function(num1, num2) {
	let powerAnswer = num1 ** num2;
  return(powerAnswer);
};

const factorial = function(input) {
	let x = input;
  factorialAnswer = x;

  if (x == 0 || x == 1) {
    return(1);
  } else {
    while (x > 1) {
      x--;
      factorialAnswer *= x;
    }
  }
  return(factorialAnswer);
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
