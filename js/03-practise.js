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

/**
 * 1. Parašykite funkciją calculateClassAverage(classObj), kuri priims klasės objektą ir grąžins klasės mokinių pažymių vidurkį.
 */

const average = (arr) => {
  let sum = 0;
  const countOfElements = arr.length;
  for (let i = 0; i < countOfElements; i++) {
    sum += arr[i];
  }
  return sum / countOfElements;
};

const calculateClassAverage = (classObj) => {
  const sum = 0;
  for (let i = 0; i < classObj.classes.length; i++) {}
  sum += average(classObj.classes[i].grades);

  return sum;
};

/**
 * 2. Parašykite funkciją calculateSchoolAverages(schoolObj), kuri apskaičiuos visų mokyklos klasių vidurkius ir grąžins juos masyve.
 */
const calculateSchoolAverages = (schoolObj) => {
  const averages = [];

  for (let i = 0; i < schoolObj.classes.length; i++) {
    averages.push(calculateClassAverage(schoolObj.classes[i]));
  }

  return averages;
};

/**
 * 3. Išrikiuokite klases pagal vidurkį (nuo didžiausio iki mažiausio) ir išveskite jas į konsolę formatu:
 * 1C - 8.5
 * 1A - 8.0
 * 1B - 6.5
 */
const sortedClasses = school.classes.sort(
  (a, b) => calculateClassAverage(b) - calculateClassAverage(a)
);

for (let i = 0; i < sortedClasses.length; i++) {
  console.log(
    `${sortedClasses[i].name} - ${calculateClassAverage(sortedClasses[i])}`
  );
}

// la.kvk? (ᵔᴥᵔ) -> nk. ¯\_(ツ)_/¯
