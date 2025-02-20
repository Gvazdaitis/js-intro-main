// pakeicia originalu rezultata
const numbers = [10, 2, 8, 4, 6];
console.log(numbers);

// numbers.sort(); // pavercia reiksmes i string ir tada rusiuoja
// console.log(numbers);

console.log(numbers.sort((a, b) => b - a));
console.log(numbers.sort((a, b) => a - b));

// cia reiktu sort f-ja idet
