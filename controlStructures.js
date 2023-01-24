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

console.log(num1 + operation + num2 + '=' + result);
