let object1 = {
  name: "Tony",
  age: 18,
};
let object2 = object1; // object2 pointina i object1 objecta.

// sukuriu nauja objecta i kuri pointina object1
object1 = {
  name: "Homie",
  age: 24,
};

object3 = object2;

object1.age = 20; // atrodo kad object2 ir object1 turetu ten pat pointint, bet tai netiesa, nes dabar jau jie abu pointina i skirtingus objects.
object2.age = 25;
object3.age = 30; // sitas pakeicia pries tai parasyta object age 24 i 30 abiem variables. Nes abu pointina ten pat.

console.log(object1);
console.log(object2);
console.log(object3);

let arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = arr2;
arr2[0] = 10; // const, bet reiksme galiu pakeist nes pati reiksme pareina is stack?
arr1 = [3, 3, 3];
arr1[0] = 4;
console.log(arr1, arr2, arr3);

// MYSTERIES SOLVED!!!
