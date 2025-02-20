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

const k = ["Aa1", "Bb2", "Cc3"];
const kresult = k.map((s) => s[3]);
console.log(kresult);
k[5] = "Ff6";
console.log(k);

console.log(k[4]);

const luckyNumbers = [0, 1, 5, 13, 28, 66, 69];
const luckerNumbers = luckyNumbers.filter((n) => n > 20); // eina per visa array ir grazina pagal funkcija?
console.log(luckerNumbers);

//map
const funkcijaMapui = (s) => (s + "").length;

for (let i = 0; i < luckyNumbers.length; i++) {
  luckyNumbers[i] = funkcijaMapui(luckyNumbers[i]);
}

console.log(luckyNumbers);

//filter
//const funkcijaFiltrui = (s) => IndexOf(s) / 2 === 0;

const names = ["Ona", "Petras", "Tekle", "Stasts", "Petras", "Ona"];

// const finalArr = [];
// for (let i = 0; i < names.length; i++) {
//   if (funkcijaFiltrui(names[i])) {
//     finalArr.push(names[i]);
//   }
// }
// console.log(finalArr);

// console.log(names.filter);
//

const colors = [
  "purple",
  "red",
  "green",
  "blue",
  "yellow",
  "red",
  "red",
  "orange",
  "orange",
  "red",
];

const repeatedElements1 = (arr) => {
  const outputArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !outputArr.includes(arr[i])) {
        outputArr.push(arr[i]);
      }
    }
  }
  return outputArr;
};
console.log(repeatedElements1(colors));

const repeatedElements2 = colors.filter((s, i) => colors.indexOf(s) !== i); // gaunamas masyvas.
// jeigu kartojasi daugiau negu karta, gautame masyve irgi kartosis. reiks patobulint...

console.log(repeatedElements2);

//count every element in the arr
const elementCounter = (arr) => {
  resultArr = {};
  for (var i = 0; i < arr.length; ++i) {
    if (!resultArr[arr[i]]) resultArr[arr[i]] = 0;
    resultArr[arr[i]]++;
  }
  return resultArr;
};
console.log(elementCounter(colors));

const repeatedElements3 = colors.filter(
  (s, i, list) => list.indexOf(s) !== list.lastIndexOf(s)
);
// visais atvejais pirma elemento indexa su paskutiniu. visada tikrina ta pati,
// bet suskaiciuoja visus pasikartojancius zodzius.

console.log(repeatedElements3);
