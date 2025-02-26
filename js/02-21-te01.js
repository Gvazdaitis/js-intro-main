const arr01 = [1, 2, 2];
const squareSum = (numbers) => numbers.reduce((a, b) => a + b * b, 0);
console.log(squareSum(arr01));
console.log("\n-----------\n");

//3uzd.
const positiveSum = (arr) =>
  arr.filter((a) => a > 0).reduce((a, b) => a + b, 0);
console.log(positiveSum(arr01));

// 4uzd.

const str01 = "Jędrzej Błądziński";
// function correctPolishLetters(string) {
//   let finalStr = string.replaceAll("ą", "a");
//   finalStr = finalStr.replaceAll("ć", "c");
//   finalStr = finalStr.replaceAll("ę", "e");
//   finalStr = finalStr.replaceAll("ł", "l");
//   finalStr = finalStr.replaceAll("ń", "n");
//   finalStr = finalStr.replaceAll("ó", "o");
//   finalStr = finalStr.replaceAll("ś", "s");
//   finalStr = finalStr.replaceAll("ź", "z");
//   finalStr = finalStr.replaceAll("ż", "z");

//   //   let finalStr = "";
//   //   const polishLetters = "ąćęłńóśźż";
//   //   const englishLetters = "acelnoszz";

//   return finalStr;
// }
console.log("\n-----------\n");

function correctPolishLetters2(string) {
  const polishLetters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return string
    .split("")
    .map((raide) => polishLetters[raide] || raide)
    .join("");
  // jei raides key objecte nera, tada polishLetters yra
  // undefined(false), raide = raide. Raide nesikeicia.
}

//console.log(correctPolishLetters(str01));
console.log(correctPolishLetters2(str01));

// visu raidziu nenormalizuoja deja...
// function correctPolishLetters2(string) {
//   return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }

// console.log(correctPolishLetters2(str01));

console.log("\n-----------\n");
const polishLetters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};
console.log(polishLetters["x"] ? true : false);

console.clear();

var puzzle1 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const atsakymas = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function sudoku(puzzle) {
  const ourSudoku = [...puzzle];
  const arrLen = ourSudoku.length;
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < ourSudoku; j++) {}
  }

  return ourSudoku;
  //return the solved puzzle as a 2d array of 9 x 9
}

//console.log(sudoku(puzzle1));

const input = [5, 4, 3, 2, 1];
function smaller(nums) {
  const arrLen = nums.length;
  const finalArr = [];
  let count = 0;
  for (let i = 0; i < arrLen; i++) {
    count = 0;
    for (let j = i; j < arrLen; j++) {
      if (nums[i] > nums[j]) count++;
      finalArr[i] = count;
    }
  }
  return finalArr;
}

console.log(smaller(input));

const smaller2 = (nums) =>
  nums.map((n, i, arr) => arr.filter((num, j) => num < n && j > i).length);

console.log(smaller2(input));
