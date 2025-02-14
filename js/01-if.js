// if (salyga) {cia bus vykdomas kazkoks kodas} else if (kita salgya) {}
// else {esant visom kitom reiksmem negu pirmose salygose, ivykdys sia kodo dali}
if (true) {
  console.log(123);
}

const n = 11;
if (n % 2) console.log("nelyginis");
else console.log("lyginis");

// switch dirba iki break
const d5 = 6;
switch (d5) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("darbo diena");
    break;

  case 6:
  case 7:
    console.log("savaitgalis");
    break;

  default:
    console.log("tokia diena savaiteje neegzistuoja");
    break;
}
// naudotina viešajame transporte kai žinai
// kokioj stotelėj esi ir reikia sužinot kiek liko ir panašiai
// ternary operatoriai paprastiem's if'ams.
const text2 = 4 > 2 ? "Taip" : "Ne";
console.log(text2);

// 0 arba "" yra false. Visu kitu skaiciu ir strings yra reiksmes grazina true.
console.log(1 < 2 ? 3 : 4);
console.log(2 > 3 ? 4 : 5 ? 6 : 7);
console.log(NaN ? 1 : 2);
console.log(null ? 1 : 2);
console.log(undefined ? 1 : 2);
console.log([] ? 1 : 2);
/*
ternary pavyzdys kad lengviau suprast. grazina 5.
0 
    ? 1
        ? 2
        : 3
    : 4
        ? 5
        : 6
*/
