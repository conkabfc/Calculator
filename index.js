const readline = require('readline-sync');
console.log('Welcome to the calculator');
console.log('=========================');

console.log('Please enter the operator:');
const operator = readline.prompt();

console.log('Please enter your first number:');
const first_num = parseInt(readline.prompt());

console.log('Please enter your second number:');
const second_num = parseInt(readline.prompt());

switch (operator) {
    case "+":
        console.log('The result:');
        console.log(first_num + second_num);
        break;
    case "-":
        console.log('The result:');
        console.log(first_num - second_num);
        break;
    case "*":
        console.log('The result:');
        console.log(first_num * second_num);
        break;
    case "/":
        console.log('The result:');
        console.log(first_num / second_num);
        break;
    default:
        console.log('Unrecognised operator');
}

