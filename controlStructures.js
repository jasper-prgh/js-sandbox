let num1 = 83;
let num2 = 5;
let operation = '*';

let result;
if (operation == '+') {
    result = num1 + num2;
} else if (operation == '-') {
    result = num1 - num2;
} else if (operation == '*') {
    result = num1 * num2;
} else if (operation == '/') {
    result = num1 / num2;
}

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
}


// if, for, while, do-while

console.log(num1 + operation + num2 + '=' + result);
