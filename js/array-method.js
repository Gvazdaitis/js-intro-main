const students = ["Jonas", "Marytė", "Petras", "Ona"];

// Studentas: Jonas pradėjo mokytis.
for (let i = 0; i < students.length; i++) {
  console.log(`Studentas: ${students[i]} pradėjo mokytis.`);
}

const arr1 = [123, 321, 456, 654];

console.log([1].concat([2], [3], [4]));

const notFlat = [1, 2, 3, [4, [5]], 6];
console.log(notFlat);
console.log(notFlat.flat());
console.log(notFlat.flat(2));

console.log(arr1.concat(1));

//pop() is galo ismeta elementa
//
const medziai = ["azuolas", "egle", "berzas", "pusis"];
console.log(medziai.pop()); // ismeta paskutini pakeicia originala
console.log(medziai.shift()); // ismeta pirma, pakeicia originala
console.log(medziai);
console.log(medziai.unshift("liepa")); //prideda prieki, pakeicia originala. grazina jau pakeisto array ilgi?
console.log(medziai);
console.log(medziai.slice(0, 2));
console.log(medziai.splice(1, 1)); // pakeicia originala. ispjauna
console.log(medziai);
console.log(medziai.join(" "));

const lrl = "Labas rytas, Lietuva";
console.log(lrl.split(" ").reverse().join(" "));
console.log(lrl);
