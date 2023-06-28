const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('Welcome to the calculator');
    console.log('=========================');
}

function performOneCalculation() {
    const details = getCalculationDetails();
    const ops = getOperands(details[1]);
    performCalculation(details[0],ops);
}

function getCalculationDetails() {
    console.log('Please enter the operator:');
    const operator = readline.prompt();
    
    console.log('How many numbers do you want to ' + operator + '?');
    const operands = parseInt(readline.prompt());

    return [operator, operands];
}

function getOperands(num_ops) {
    let operandlist = [];
    for (let i = 0; i < num_ops; i++) {
        let valid = false;
        let userinput = 0;
        while (!valid){
            let j = i+1;
            console.log('Please enter number ' + j + ':');
            userinput = readline.prompt();
            if (isNaN(userinput)) {
                console.log('Invalid number.')
            } else {
                valid = true;
            }
        }
        operandlist.push(parseInt(userinput));
    }
    return operandlist;
}

function performCalculation(operator, ops) {
    let result = ops.shift();
    switch (operator) {
        case "+":
            ops.forEach((operand) => result += operand);
            break;
        case "-":
            ops.forEach((operand) => result -= operand);
            break;
        case "*":
            ops.forEach((operand) => result *= operand);
            break;
        case "/":
            ops.forEach((operand) => result /= operand);
            break;
        default:
            console.log('Unrecognised operator');
    }
    console.log('The result:');
    console.log(result);
}





printWelcomeMessage();
let doCalc = true;
while (doCalc) {
    console.log("Perform Calculation? Y/N");
    const performinput = readline.prompt();
    if (performinput.toLowerCase() == "y") {
        performOneCalculation();
    } else {
        doCalc = false;
    }
}

console.log("Goodbye.");
