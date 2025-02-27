// OOP - object oriented programming

class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.isAdult = age >= 18;
    this.legsCount = 2;
  }
}

const jonas = new Person("Jonas", 99, true);
const maryte = new Person("Maryte", 88, false);

console.log(jonas);
console.log(maryte);

// const jonas = {
//   name: "Jonas",
//   age: 99,
//   isMarried: true,
// };
// const maryte = {
//   name: "Maryte",
//   age: 88,
//   isMarried: false,
// };

// function hi(person) {
//   return `Sveiki, mano vardas yra ${person.name}.`;
// }

// console.log(hi(jonas));
// console.log(hi(maryte));
// console.log(hi({}));
// console.log(hi({ age: 66 }));

console.log(typeof Person);

// dog, cat, car classes.
