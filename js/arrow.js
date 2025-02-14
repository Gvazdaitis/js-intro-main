const n1 = 7;
const n2 = 5;

//function declaration
function sudetis(a, b) {
  return a + b;
}
console.log(`${n1} + ${n2} = ${sudetis(n1, n2)}`);

//anonimines funkcijos logika, priskirta kintamajam
const skirtumas = function (a, b) {
  return a - b;
};
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// arrow function (rodykline funkcija) evolution 3
const sandauga = (a, b) => {
  return a * b;
};
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// jeigu, logikos bloke yra tik 1 procedūra,
// galima nerasyti bloko {} ir return. final form.
const dalyba = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${dalyba(n1, n2)}`);

//jeigu, parametru bloke yra tik 1 parametras
// galima nerasyti () BET man dabar formateris uzdeda 🙂
const kvadratu = (a) => a * a;

console.log(`${n1}^2 = ${kvadratu(n1)}`);

// 'Vardenis Pavardenis' -> 'V.P.'
const vardas = "Sal Monella";

const inicialai = (s) => s.split(" ")[0][0] + "." + s.split(" ")[1][0] + ".";
console.log(inicialai(vardas));

//

const lyginis = (n) => !(n % 2);
console.log(lyginis(5));

// Labas rytas, Lietuva! -> 3
const labas = "Labas rytas, Lietuva!";
lengthBetArTikrai = (s) => `${s} -> ` + s.split(" ").unshift();
console.log(lengthBetArTikrai(labas));
