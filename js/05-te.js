/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", jei neigiamas arba nulis.
 */

/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */

function monthName(num) {
  if (!Number.isInteger(num) || num > 12 || num < 1) {
    return "Įveskite mėnesio numerį(sveikasis skaičius nuo 1 iki 12).";
  }
  const months = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegužė",
    "Birželis",
    "Liepa",
    "Rugpjūtis",
    "Rugsėjis",
    "Spalis",
    "Lapkritis",
    "Gruodis",
  ];
  return months[num - 1];
}

console.log(monthName(2) + "\n\n");

/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */

/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 */

/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname tą patį skaičių.
 */

function skaitmenuSuma(num) {
  if (!Number.isInteger(num)) {
    return "Įveskite sveikąjį skaičių, kad suskaičiuotumėte jo skaitmenų sumą.";
  }
  let sum = 0;
  if (num < 0) num = Math.abs(num); // ši eilutė dėl neigiamų skaičių
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(skaitmenuSuma(12345) + "\n");

/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo 0 iki 100 (sveikasis skaičius).
 */

function atsitiktinisSkaicius100() {
  return Math.floor(Math.random() * 101); // padauginti iš reikšmės lygios norimų output'ų skaičiui.
  //šiuo atveju 0-100 (101 skirtinga reikšmė)
}

// for (let i = 0; i < 30; i++) {
//   console.log(atsitiktinisSkaicius100());
// }

/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos lentelės rezultatais iki 10.
 */

function daugybosLenteleIki(num, iki) {
  if (isNaN(num)) return "Neteisinga įvestis: įrašykite skaičių";
  let masyvas = [];
  for (let i = 1; i <= iki; i++) {
    masyvas.push(num * i);
  }
  return masyvas;
}
console.log(daugybosLenteleIki(1.5, 10));
