//  object -> array -> string
// array - supaprastintas objektas. objektuose indexai yra string reiksme.
// string - supaprastintas array.

const words = [
  "labas",
  "rytas",
  "Lietuva!",
  "random",
  "number:",
  "3.141592653589793238",
];
const jonas = {
  name: "Jonas",
  age: 99,
  isMaried: true,
};
console.log(jonas);

console.log(jonas.age);
console.log(jonas.name);

console.log(jonas["age"]);

const myObj = {};
myObj[words[4]] = words[5];

console.log(myObj);

const crazy = {
  title: "pavadinimas...",
  isMaried: true,
  "atskiri zodziai": "daug atskiru zodziu",
  7: "septyni",
};
console.log(crazy);
crazy["kas cia"] = "dabar vyksta?!";
console.log(crazy);

console.log("\n-----------\n");
const num = 5;
crazy["squaredMotodas"] = (a) => a * a;
console.log(crazy);
console.log(crazy["squaredMetodas"]);

console.log("\n-----------\n");
const maryte = {
  name: "Maryte",
  age: 88,
  isMaried: false,
  marks: [10, 2, 8, 4, 6],
  parents: [
    {
      name: "Juozapas",
      age: 112,
      isMaried: true,
      phone: 861234567,
    },
    {
      name: "Marija",
      age: 110,
      isMaried: true,
      phone: 861234567,
    },
  ],
};
console.log(maryte);

const marksCount = maryte.marks.length;
let marksSum = 0;
for (let i = 0; i < marksCount; i++) {
  marksSum += maryte.marks[i];
}
const maryteMarksAverage = marksSum / marksCount;

console.log("Marytes pazymiu vidurkis: ", maryteMarksAverage);

const students = [
  { name: "Maryte", age: 66, isMaried: false },
  { name: "Jonas", age: 88, isMaried: false },
  { name: "Ona", age: 77, isMaried: false },
  { name: "Petras", age: 99, isMaried: false },
];

// students.sort((a, b) => a.age - b.age);
// console.log(students);
// students.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });
// console.log(students);
//trumpesnė versija:
students.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
console.log(students);
// matematinio veiksmo su stringu neatliksim bet palygint galima.
// eina nuo pirmos raides ASCII ir tikrina reiksmes.

console.log(typeof NaN);

const school = {
  name: "Baltijos Technologijų Institutas",
  classes: [
    {
      name: "1A",
      students: [
        { name: "Jonas", grades: [8, 7, 9, 10] },
        { name: "Ieva", grades: [6, 5, 8, 7] },
        { name: "Mantas", grades: [9, 10, 8, 9] },
      ],
    },
    {
      name: "1B",
      students: [
        { name: "Aistė", grades: [5, 6, 7, 8] },
        { name: "Dovydas", grades: [6, 7, 5, 6] },
        { name: "Tomas", grades: [8, 9, 10, 10] },
      ],
    },
    {
      name: "1C",
      students: [
        { name: "Lukas", grades: [9, 9, 10, 10] },
        { name: "Monika", grades: [7, 8, 6, 7] },
        { name: "Karolis", grades: [8, 7, 9, 10] },
      ],
    },
  ],
};
//paimsiu pvz Tomo paskutini pazymi
console.log(school.classes[1].students[2].grades.at(-1));

console.log("asDs" > "asd");
