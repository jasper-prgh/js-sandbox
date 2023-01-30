let numbers = [1, 2, 3, 4, 5];

// push
numbers.push(6);

// pop
let val = numbers.pop();

// higher order functions

// map
let doubled = [1, 2, 3, 4].map(v => v * 2);

// reduce
let sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);

console.log(sum)
