// 6 matematiniai operatoriai: - + * / % **

// console.log(typeof NaN);
// const a = "skeebeedee" - 4;
// const b = "skrrrr" * 8.21;
// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log(NaN > 0 ? "N" : "T");
// console.log(NaN < 0 ? "N" : "T");

// Matematinių f-ijų bilblioteka Math(). E, PI, abs(), sqrt(), floor()...

// console.log("\n**** Teigiamas ar neigiamas? ****\n");

// function numSign(num) {
//   if (isNaN(num)) {
//     return "Error: input must be a number.";
//   }
//   if (num === 0) return "a number 0 is neither negative nor positive";
//   return num > 0 ? num + " is positive" : num + " is negative";
// }

// console.log(numSign("aaa") + "\n");

// console.log("\n" + Math.sign(-6) + "\n\n ********");
// console.log(Math.random(10));

// function randomSkaicius(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// for (let i = 0; i < 20; i++) {
//   console.log(randomSkaicius(10, 20));
// }

function randomSkaicius1(min, max, skPoKablelio) {
  const sk = 10 ** skPoKablelio;
  return Math.round((Math.random() * (max - min) + min) * sk) / sk;
}

// naudojant Math.round vietoj Math.floor - atsiranda galimybė generuoti dar vieną reikšmę(funkcijoje - max),
// tačiau, tuomet dvigubai sumažėja tikimybė gauti min reikšmę(min ir max dalinasi
// to paties reikšmių laiptelio tikimybę). min tikimybė lygi max tikimybei.
// Kitaip tariant, didžiausia ir mažiausia galimos reikšmės bus dvigubai rečiau generuojamos už visas kitas reikšmes.

function randomSkaicius2(min, max, skPoKablelio) {
  const sk = 10 ** skPoKablelio;
  return Math.floor((Math.random() * (max - min) + min) * sk) / sk;
}

function randSk(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const n = 3000000;

const a = 0;
const b = 3;
const c = 1;

const stats = new Array(b + 1).fill(0);

for (let i = 0; i < n; i++) {
  const x = randSk(a, b, c);
  stats[x]++;
}
console.log(stats);
