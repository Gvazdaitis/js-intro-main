// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
const numbers1 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let suma1 = 0;
for (let i = 0; i < numbers1.length; i++) {
  suma1 += numbers1[i];
}
console.log(suma1);

// Sprendimas su array metodu (reduce):
// Jūsų kodas čia...
console.log(numbers1.reduce((sum, num) => sum + num, 0));

console.log("\n-----------\n");

// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
const numbers2 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let count1 = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) count1++;
}
console.log(count1);

// Sprendimas su filter metodu:
// Jūsų kodas čia...

console.log(numbers2.filter((a) => a % 2 === 0).length);

console.log("\n-----------\n");
// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
const numbers3 = [10, 5, 20, 8, 15];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let maxNum = numbers3[0];
for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] >= maxNum) maxNum = numbers3[i];
}
console.log(maxNum);

// Sprendimas su Math.max ir spread operator:
// Jūsų kodas čia...
console.log(Math.max(...numbers3));

console.log("\n-----------\n");

// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;

// Sprendimas su for ciklu:
// Jūsų kodas čia...
function kiekKo(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) sum++;
  }
  return sum;
}
console.log(kiekKo(numbers4, target));
console.log("\n-----------\n");

// Sprendimas su filter metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
const numbers5 = [-3, 0, 5, -1, 8, -2];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const tikTeigiami = (arr) => {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) finalArr.push(arr[i]);
  }
  return finalArr;
};
console.log(tikTeigiami(numbers5));

// Sprendimas su filter metodu:
// Jūsų kodas čia...

console.log(numbers5.filter((a) => a > 0));

console.log("\n-----------\n");

// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
const numbers6 = [1, 2, 3, 4];
console.log("6 uzd.");

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const elementuSandauga = (arr) => {
  let sandauga = 1;
  for (let i = 0; i < arr.length; i++) {
    sandauga *= arr[i];
  }
  return sandauga;
};

console.log(elementuSandauga(numbers6));

// Sprendimas su reduce metodu:
// Jūsų kodas čia...
const elementuSandauga2 = (arr) => {
  return arr.reduce((a, b) => a * b, 1);
};
console.log(elementuSandauga2(numbers6));

console.log("\n-----------\n");

// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
const array7 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const reverseArr = (arr) => {
  let finalArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    finalArr.push(arr[i]);
  }
  return finalArr;
};

console.log(array7.unshift(100));
console.log(reverseArr(array7));

// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...

console.log("\n-----------\n");
// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
const array8 = ["a", "b", "c", "d"];
const searchElement = "c";

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const firstIndex = (arr, a) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) return i;
  }
  return -1;
};
console.log(firstIndex(array8, searchElement));

// Sprendimas su indexOf metodu:
// Jūsų kodas čia...

console.log(array8.indexOf(searchElement));

console.log("\n-----------\n");

// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
const array9 = [1, 3, 5, 7, 9];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted(array9));

// Sprendimas su every metodu:
// Jūsų kodas čia...
function isAsc(arr) {
  return arr.every((a, b) => a <= b);
}
console.log(isAsc(array9));

console.log("\n-----------\n");
// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
const numbers10 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const squareElements = (arr) => {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr[i] = arr[i] * arr[i]; // galima priskirt tustiem masyvo elemtam reiksmes be .push() metodo.
    //jei praleisi elemento masyva ir priskirsi reiksme sekanciam elementui, tarp ju esantis elementas tures empty item reiksme
  }
  return finalArr;
};

console.log(squareElements(numbers10));

// Sprendimas su map metodu:
// Jūsų kodas čia...
console.log(numbers10.map((x) => x * x));
console.log("\n-----------\n");

// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
const numbers11 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const sumOdd = (arr) => {
  let finalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      finalSum += arr[i];
    }
  }
  return finalSum;
};
console.log(sumOdd(numbers11));

// Sprendimas su filter ir reduce:
// Jūsų kodas čia...

console.log("\n-----------\n");
// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
const numbers12 = [10, 20, 30, 40, 50];
console.log("12 uzd.");

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce:
// Jūsų kodas čia...

console.log(numbers12.reduce((a, b) => a + b) / numbers12.length);

console.log("\n-----------\n");

// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
const numbers13 = [1, 2, 3, 2, 4, 3, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su Set:
// Jūsų kodas čia...
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates(numbers13));

console.log("\n-----------\n");
// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
const numbers14 = [5, 3, 9, 1, 7];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

let pirmasDidziausias = Number.MIN_VALUE;
let antrasDidziausias = Number.MIN_VALUE;

for (let i = 0; i < numbers14.length; i++) {
  if (numbers14[i] > pirmasDidziausias) {
    antrasDidziausias = pirmasDidziausias;
    pirmasDidziausias = numbers14[i];
  } else if (
    numbers14[i] > antrasDidziausias &&
    numbers14[i] !== antrasDidziausias
  ) {
    antrasDidziausias = numbers14[i];
  }
}

// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...

// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su filter:
// Jūsų kodas čia...

console.log("\n-----------\n");
// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6, 3.141592653589793238];

const mergeArr1 = (arr1, arr2) => {
  let finalArr = [];
  for (let i = 0; i < arr1.length; i++) finalArr.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) finalArr.push(arr2[i]);
  return finalArr;
};

const mergeArr = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArr1(arrayA, arrayB));
console.log(mergeArr(arrayA, arrayB));

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su concat metodu:
// Jūsų kodas čia...
console.log(arrayA.concat(arrayB));
console.log("\n-----------\n");

// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [[1, 2], [3, 4], [5, [6, [7, 8]]], "assdg", 123];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// veikia kaip karta pritaikytas flat.
const flatAtHome = (arr) => {
  const masyvus = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      masyvus.push(...arr[i]);
      continue;
    }
    masyvus.push(arr[i]);
  }
  return masyvus;
};

// aaa dar nesigavo kaip noriu.. turbut be recursion sunku
const flatUltimate = (arr) => {
  const finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    const currentArr = arr[i];
    if (!Array.isArray(currentArr)) {
      finalArray.push(currentArr);
      continue;
    }
    for (let j = 0; j < currentArr.length; j++) {
      finalArray.push(currentArr[j]);
    }
  }

  return finalArray;
};

console.log(flatAtHome(nestedArray));
console.log(flatUltimate(nestedArray));

// Sprendimas su flat metodu:
// Jūsų kodas čia...

console.log(nestedArray.flat());

console.log("\n-----------\n");
// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4, 3];
const arrB = [3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

function intersection(arr1, arr2) {
  const finalArr = [];
  const tempArr = [...arr2];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < tempArr.length; j++) {
      if (arr1[i] === tempArr[j]) {
        finalArr.push(arr1[i]);
        tempArr.splice(j, j + 1);
      }
    }
  }
  return finalArr;
}
console.log(intersection(arrA, arrB));
// Sprendimas su filter:
// Jūsų kodas čia...

const intersection2 = (arr1, arr2) => arr1.filter((sk) => arr2.includes(sk)); // patobulint kad nebutu pasikartojanciu

console.log(intersection2(arrA, arrB));

console.log("\n-----------\n");
// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
const numbers19 = [1, 2, 3, 4, 5, 6];

function evenOdd() {}

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce:
// Jūsų kodas čia...
console.log(
  numbers19.reduce(
    (result, numberr) => (
      result[numberr % 2 === 0 ? "odd" : "even"].push(numberr), result
    ),
    { odd: [], even: [] }
  )
);

console.log("\n-----------\n");
// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
function kumuotaSuma(arr) {
  let finalArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    finalArr.push(finalArr[i - 1] + arr[i]);
  }

  return finalArr;
}
console.log(kumuotaSuma(numbers20));

// Sprendimas su reduce:
// Jūsų kodas čia...

//console.log(numbers20.reduce());

console.log("\n-----------\n");

console.log("\nRecepto ingredientų sąrašas:");
const ingredientai = ["cukrus", "miltai", "kiaušiniai", "pienas", "sviestas"];

for (let i = 0; i < ingredientai.length; i++) {
  // console.log(`${i + 1}. ${ingredientai[i]}`);
  console.log(i + 1 + ". " + ingredientai[i]);
}

console.log("\n-----------\n");

function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  // console.log(y); // ReferenceError, `y` is scoped to `bar`
  console.log(a); // a pasiekiamas, nes ne funkcijoje. o for loope.
  //funkcijos uzdaro var kintamaji code block scope. Kitu atveju var yra global. Ne tik kad globaly scoped bet part of global object.
}
for (let i = 0; i < 10; i++) {
  var a = 5;
}
console.log(a);

foo();
