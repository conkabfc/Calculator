const readline = require('readline-sync');
console.log('Welcome to the calculator');
console.log('=========================');

console.log('Please enter the operator:');
const operator = readline.prompt();

console.log('How many numbers do you want to ' + operator + '?');
const operands = parseInt(readline.prompt());


let operandlist = [];
for (let i = 0; i < operands; i++) {
    let j = i+1;
    console.log('Please enter number ' + j + ':');
    operandlist.push(parseInt(readline.prompt()));
}

let result = operandlist.shift();
switch (operator) {
    case "+":
        operandlist.forEach((operand) => result += operand);
        break;
    case "-":
        operandlist.forEach((operand) => result -= operand);
        break;
    case "*":
        operandlist.forEach((operand) => result *= operand);
        break;
    case "/":
        operandlist.forEach((operand) => result /= operand);
        break;
    default:
        console.log('Unrecognised operator');
}
console.log('The result:');
console.log(result);

