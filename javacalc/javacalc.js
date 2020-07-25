const readlineSync = require("readline-sync");

const num1 = readlineSync.question("Please enter your first number: ");

const num2 = readlineSync.question("Please enter your second number: ");

const operation = ["add", "sub", "mul", "div"];

const index = readlineSync.keyInSelect(
operation,"Please choose an result to perform");
console.log("The result is:" + [result]);

function add(num1, num2) {
  return num1 + num2;
}

var result = add(num1, num2);
console.log(result);

function sub(num1, num2) {
  return num1 - num2;
}

var result = sub(num1, num2);
console.log(result);

function mul(num1, num2) {
  return num1 * num2;
}

var result = mul(num1, num2);
console.log(result);

function div(num1, num2) {
  return num1 / num2;
}

var result = div(num1, num2);
console.log(result);


