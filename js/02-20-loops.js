const numbers = [10, 2, 8, 4, 6];
const names = ["Jonas", "Maryte", "Petras", "Ona"];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//FOR-OF eina is eiles per visus elementus. Taciau, nesimato indexu
{
  let i = 0;
  for (const number of numbers) {
    console.log(i++, "-->", number);
  }
}

for (const name of names) {
  console.log(name);
}

// WHILE
{
  let i = 0;
  while (true) {
    console.log(i++, "while...");

    if (i === 15) {
      break;
    }
  }
}

{
  let i = 0;
  while (i < 5) {
    console.log(i, "while...");
    i++;
  }
}

for (let i = 0, j = 25; i < 20 && j > i; i++, j--) {
  console.log(i, j);
}
