function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

// console.log(getDrinkByProfession("progRAmmer"));

const knight = [3, "C"];
const king = [5, "A"];
// apversta lenta, bet principas aiskus ir padeda issprest uzdavini.
// Kad butu tiksli lenta reiktu nuo 8 pradet ir baigt 1. Atvirksciai pasukt cikla.
function chessboard() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  const letters = "ABCDEFGH";
  for (let i = 0; i < 8; i++) {
    let firstRow = "";
    for (let j = 0; j < 8; j++) {
      firstRow += num[i] + letters[j] + " ";
    }
    console.log(firstRow);
  }
}

function knightVsKing(knightPosition, kingPosition) {
  // Three possible outputs are "Knight", "King" and "None".
  if (
    Math.abs(knightPosition[0] - kingPosition[0]) <= 1 &&
    Math.abs(knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt()) <= 1
  ) {
    return "King";
  }
  if (
    (Math.abs(knightPosition[0] - kingPosition[0]) === 1 &&
      Math.abs(
        knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt()
      ) === 2) ||
    (Math.abs(knightPosition[0] - kingPosition[0]) === 2 &&
      Math.abs(
        knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt()
      ) === 1)
  ) {
    return "Knight";
  }
  return "None";
}

// chessboard();
// console.log(knightVsKing(knight, king));
// console.log(king[1].charCodeAt());

const bingoArr = [1, 2, 3, 7, 5, 8, 9, 10, 15, 14];

//2 7 9
function bingo(a) {
  const bingoWord = "BINGO";
  let count = 0;
  for (let i = 0; i < bingoWord.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (bingoWord[i].charCodeAt() === a[j] + 64) {
        count++;
        break;
      }
    }
  }
  return count === 5 ? "WIN" : "LOSE";
}

console.log(bingo(bingoArr));

// console.clear();

// const sum = (start, finish) =>
//   (finish * (finish + 1) - start * (start - 1)) / 2;

// function sum2(start, finish) {
//   let result = 0;
//   for (let start = 0; i < finish; i++) {}
//   return result;
// }
// console.log(sum(0, 0));
// console.log(sum(0, 4));
// console.log(sum(0, 100));
// console.log(sum(5, 10));
// console.log(sum(-50, 50));
// console.log(sum(-70, 30));
// console.log(sum(-5, 0));

// const countOfDivisors = (start, finish, divisor) =>
//   Math.floor(finish / divisor) - Math.floor((start - 1) / divisor);

// console.log(countOfDivisors(-15, -4, 5));

const trollAttack = "Paksas geriausias";

disemvowel = (str) => str.replace(/[aeiou]/gi, "");

console.log(disemvowel(trollAttack));

const testChess = "RNBQKBNR";
function isValidChess960(pieces) {
  if (
    (pieces.indexOf("B") - pieces.lastIndexOf("B")) % 2 !== 0 &&
    pieces.indexOf("R") < pieces.indexOf("K") &&
    pieces.indexOf("K") < pieces.lastIndexOf("R")
  ) {
    return true;
  }
  return false;
}

console.log(isValidChess960(testChess));

var number = function (busStops) {
  let result = 0;
  for (let i = 0; i < busStops.length; i++) {
    result = result + busStops[i][0] - busStops[i][1];
  }

  return result;
};
//const number2 = (busStops) => busStops.reduce((p, n) => p + n[0] - n[1], 0);

const a = [1, 2, 3, 4, 5];
const b = [1, 2];
const c = [3, 4];
const d = [2, 3];

const shuffleIt = (arr, ...arrays) => {
  const result = [...arr];
  for (let array of arrays) {
    [result[array[0]], result[array[1]]] = [result[array[1]], result[array[0]]];
  }
  return result;
};

const shuffleIt2 = (arr, ...rest) => {
  for (const [a, b] of rest) [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
};

console.log(shuffleIt(a, b, c, d));
console.log(shuffleIt2(a, b, c, d));

const myStr = "'rcpxq bntyt d nr  gpcze'";
function testit(s) {
  result = s.split(" ");
  for (let i = 0; i < result.length; i++) {
    if (result[i].length > 0) {
      result[i] =
        result[i].slice(0, -1) + result[i][result[i].length - 1].toUpperCase();
    }
  }
  result = result.join(" ");
  return result;
}

const testit2 = (s) => s.replace(/.\b/g, (c) => c.toUpperCase());
console.log(testit(myStr));

function isolateIt(arr) {
  const result = arr.map((e) =>
    e.length % 2 === 0
      ? e.slice(0, e.length / 2) + "|" + e.slice(e.length / 2)
      : e.slice(0, (e.length - 1) / 2) + "|" + e.slice((e.length + 1) / 2)
  );
  return result;
}

// clever way to do it from codewards:
function isolateIt2(arr) {
  return arr.map(
    (s) => s.slice(0, s.length / 2) + "|" + s.slice(-s.length / 2)
  );
}

console.log(isolateIt(["1234", "56789"]));
console.log(isolateIt2(["1234", "56789"]));
