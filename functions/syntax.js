// Create a function that takes in a number n as an argument and
// returns the result of finding the nth number in the Fibonacci
// sequence using recursion.

function fib(n) {
    if (n <= 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(8));

