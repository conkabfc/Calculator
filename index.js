const readline = require('readline-sync');
console.log('Welcome to the calculator');

console.log('Please enter your first number:');
const first_num = parseInt(readline.prompt());

console.log('Please enter your second number:');
const second_num = parseInt(readline.prompt());

console.log('The result:');
console.log(first_num * second_num);