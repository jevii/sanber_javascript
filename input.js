const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('Enter a first number: ');
const num2 = prompt('Enter a second number: ');

console.log('first number + second number =');

console.log(Number(num1) + Number(num2));