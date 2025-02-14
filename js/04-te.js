// 3dienio uždaviniai: // Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono
// pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?

function sezonas(menesis) {
  // Manau, čia būtų tikslinga naudoti !Number.isInteger(menesis), kad veiktų tik su sveikais skaičiais.
  // Tuomet reiktų pakoreguoti if sąlygas.
  if (isNaN(menesis) || 1 > menesis || menesis >= 13) {
    return "Neteisinga įvestis: naudokite skaičių nuo 1 iki 12";
  }
  if (menesis >= 12 || menesis < 3) return "Žiema";
  return menesis < 6 ? "Pavasaris" : menesis < 9 ? "vasara" : "Ruduo";
}

console.log("\n" + sezonas() + "\n\n ********");

// Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.
// Kuris operatorius naudoti?

function lyguNelygu(a, b) {
  return a === b ? a + " yra lygu " + b : a + " nėra lygu " + b;
}

console.log("\n" + lyguNelygu(3, 3) + "\n\n ********");

// Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.
// Koks operatorius geriausiai tinka?

function koksChar(char) {
  if (typeof char !== "string" || char.length > 1 || char === "") {
    // sitoj vietoj typeof ir instanceof skirtumas?
    return "Įveskite tik vieną simbolį(string type)";
  }
  char = char.toLocaleLowerCase();
  if ("aąeęėiįyouųū".includes(char)) return char + " yra balsė";
  else if ("bcčdfghjklmnprsštvzžxw".includes(char)) {
    return char + " yra priebalsė";
  }
  return char + " nėra raidė";
}

console.log("\n" + koksChar("") + "\n\n ********");

// Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) išveda,
// ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?

function arDarboD(diena) {
  if (typeof diena !== "string") {
    return "Neteisigna įvestis: įrašykite savaitės dieną, pvz: Antradienis";
  }
  diena = diena.toLocaleLowerCase();
  switch (diena) {
    case "pirmadienis":
      return "Darbo diena";
    case "antradienis":
      return "Darbo diena";
    case "trečiadienis":
      return "Darbo diena";
    case "ketvirtadienis":
      return "Darbo diena";
    case "penktadienis":
      return "Darbo diena";
    case "šeštadienis":
      return "Savaitgalis";
    case "sekmadienis":
      return "Savaitgalis";
    default:
      return "Neteisinga įvestis: įrašykite savaitės dieną, pvz: Antradienis";
  }
}

console.log("\n" + arDarboD("šešTADienis") + "\n\n ********");

// Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: "Šalta"(< 10°C),
// "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?

function oroBukle(temp) {
  if (isNaN(temp))
    return "Įveskite temperatūros reikšmę laipsniais(number type)";

  return temp < 10 ? "Šalta" : temp < 25 ? "Šilta" : "Karšta";
}

console.log("\n" + oroBukle(10) + "\n\n ********");

// Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5.
// Kurį operatorių naudoti?

function dalijasi3ir5(num) {
  if (!Number.isInteger(num)) {
    return "Įveskite sveiką skaičių ir programa patikrins ar jis dalijasi iš 3 ar 5";
  }
  return num % 15 === 0
    ? num + " dalijasi iš 3 ir 5"
    : num % 3 === 0
    ? num + " dalijasi iš 3"
    : num % 5 === 0
    ? " dalijasi iš 5"
    : num + " nesidalina nei iš 3 nei iš 5";
}
console.log("\n" + dalijasi3ir5(20) + "\n\n ********");

// Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą
// veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?
function arDirbti(veikla) {
  if (veikla !== "darbo diena") return;
}

// Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?

function keliamieji(metai) {
  if (!Number.isInteger(metai)) return "Įveskite metus(number)";
  if (metai % 4 === 0 && (metai % 100 !== 0 || metai % 400 === 0))
    return metai + " yra keliamieji metai";
  return metai + " nėra kelemieji metai";
}

console.log("\n" + keliamieji(2000) + "\n\n ********");

// Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją:
//  "Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
