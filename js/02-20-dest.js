// Destruktūrizavimas

const numbers = [10, 2, 8, 4, 6];

const n1 = numbers[0];
const n2 = numbers[1];
const nRest = numbers.slice(2);
console.log(n1);
console.log(n2);
console.log(nRest);

const [m1, m2] = numbers;
console.log(m1, m2);

const [l1, l2, ...l] = numbers;
console.log(l1, l2, l);

const [...r] = numbers; // rest operatorius
console.log(r); // naujas masyvas

const t = [...numbers]; // spread operatorius
console.log(t);

const numbersList = [9, 99, 999, 9999];
const [y1, , y2, ...yRest] = numbersList; // rest sukuria masyva
console.log(y1, y2, yRest);

const person = {
  name: "Jonas",
  age: 99,
  isMarried: true,
  marks: [10, 2, 8, 4, 6],
  phone: 861234567,
  address: {
    city: "Miestas",
    streee: "Gatve",
  },
};

const vardas = person.name;
const { ...obj } = person.address;
console.log(obj);
