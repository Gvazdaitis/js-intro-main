/*
HOF - higher order functions
*/

const numbers = [1, 2, 3, 4];
const numbers2x = [2, 4, 6, 8];

for (let i = 0; i < numbers.length; i++) {
  numbers2x.push(numbers[i] * 2);
}

const numbers5x = numbers.map((n) => n * 5);
console.log(numbers5x);
