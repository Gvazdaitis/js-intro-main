const a = [1, 2, 3, 4];
const b = [...a];

console.log("a", a, "b", b);

a[0] = 99;
console.log("a", a, "b", b);

const c = [1, 11];
const d = [2, 22];
const e = [3, 33];
const g = [4, 5, [6, [7, 8, [9]]]];
const str = "abc";

const f1 = [44, ...c, ...str, 4];
console.log(f1);

const f2 = [...d, ...c, ...e, 5];
console.log(f2);

const obj1 = {
  name: "Lebowski",
  age: 45,
  job: "Bowling pro",
  alsoKnownAs: "The Dude",
  scarePhrase: "Where's my money Lebowski",
};

const obj2 = { ...obj1 };
console.log(obj2);

const f3 = [...g];

console.log(...f3);
console.log(f3);

const h = [
  [1, 11],
  [2, 22],
  [3, 33],
];
const h2 = [c, d, e];
console.log(h);
console.log(h2);
const h3 = [...h];
console.log(h3);

console.log("\n-----------\n");
h[0][0] = 9;
console.log(h);
console.log(h3);

const objA = { name: "Jonas" };
const objA2 = { name: "Maryte" };
const objB = { age: 99 };
const objC = { isMarried: true };

const objABC = { ...objA, ...objB, ...objC };
const objAA = { ...objA, ...objA };
const objAA2 = { ...objA, ...objA2 };
console.log(objAA);
console.log(objABC);
console.log(objAA2);
