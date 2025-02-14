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

console.log("\n-----------\n");
// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
const numbers3 = [10, 5, 20, 8, 15];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let maxNum = -Infinity;
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

// Sprendimas su filter metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
const numbers6 = [1, 2, 3, 4];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
const array7 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...

// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
const array8 = ["a", "b", "c", "d"];
const searchElement = "c";

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su indexOf metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
const array9 = [1, 3, 5, 7, 9];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su every metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
const numbers10 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su map metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
const numbers11 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su filter ir reduce:
// Jūsų kodas čia...

// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
const numbers12 = [10, 20, 30, 40, 50];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce:
// Jūsų kodas čia...

// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
const numbers13 = [1, 2, 3, 2, 4, 3, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su Set:
// Jūsų kodas čia...

// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
const numbers14 = [5, 3, 9, 1, 7];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

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

// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su concat metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su flat metodu:
// Jūsų kodas čia...

// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su filter:
// Jūsų kodas čia...

// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
const numbers19 = [1, 2, 3, 4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce:
// Jūsų kodas čia...

// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su reduce:
// Jūsų kodas čia...
