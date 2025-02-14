// Sukurkite stringą ir išveskite jo ilgį.
const str1 = "   Labas 'Java Java' rytas";
const str2 = "3.141592653589793238";

console.log(str1.length + "\n");
// Konvertuokite stringą į didžiąsias raides.
console.log(str1.toUpperCase() + "\n");
// Konvertuokite stringą į mažąsias raides.
console.log(str1.toLowerCase() + "\n");
// Pašalinkite tarpus iš string'o pradžios ir pabaigos.
console.log(str1.trim() + "\n");
// Patikrinkite, ar stringas prasideda žodžiu "Hello".
console.log(str1.startsWith("Hello") + "\n");
// Patikrinkite, ar stringas baigiasi žodžiu "World".
console.log(str1.endsWith("rytas   ") + "\n");
// Raskite pirmąją žodžio "Java" poziciją string'e.
console.log(str1.indexOf("Java"));
// Raskite paskutinę žodžio "Java" poziciją string'e.
console.log(str1.lastIndexOf("Java"));
// Pakeiskite pirmąjį "Java" į "JS".
console.log(str1.replace("Java", "JavaScript"));
// Pakeiskite visus "Java" į "JS".
console.log(str1.replaceAll("Java", "JS"));
// Padalinkite stringą į masyvą pagal skyriklį.
console.log(str1.replace(/\s+/g, " ").trim().split(" "));

const zodis = "Java";
console.log(Array.from(zodis));

// Sujunkite du string'us į vieną.
console.log(str1.concat(str2));
// Išskirkite string'o dalį nuo 3 iki 8 simbolio.
console.log(str1.substring(2, 8));

// Naudodami slice, paimkite paskutinius 5 string'o simbolius.
console.log(str1.slice(-5));

// Naudodami substring, paimkite pirmus 5 string'o simbolius.
console.log(str1.substring(0, 5));

// Sukurkite stringą, kuris pakartojamas 4 kartus.
console.log(str1.repeat(4));
// Patikrinkite, ar string'e yra žodis "fun".
console.log(str1.includes("fun"));
// Išveskite stringą su kabutėmis "teksto" viduje.
console.log(str1);

// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
console.log(`Pirmieji PI skaičiai yra ${str2}`);

// Pašalinkite tarpus tik iš string'o pradžios.
console.log(str1.trimStart());

console.log("\nPapildomos užduotys:\n");
//Papildomos užduotys (sprendimams naudokite string metodus ir for ciklą (ne visuose uždaviniuose)):
// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
const str3 = "mokymo centras";

function capitalizeFirstLetter(str) {
  let strArr = str.split(" "); // not triming anything in this case
  const strArrLen = strArr.length;
  for (let i = 0; i < strArrLen; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}
console.log(capitalizeFirstLetter(str3));

// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.
const str4 = "JavaScript programavimas";
console.log(str4.substring(0, 10) + "...");

// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.
const str5 = "JavaScript";
console.log(str5.split("").reverse().join(""));
// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
const str6 = "obuolys, bananas, kivis";
console.log(str6.replaceAll(",", ";"));
// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".
const str7 = "Šiandien gera diena.";
console.log(str7.length);

// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.
const str8 = "test@gmail.com";
function isEmail(str) {
  return str.includes("@") && str.endsWith(".com");
}
console.log(isEmail(str8));
// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.
console.log(" JavaScript".trimStart());
// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.
console.log("JavaScript".toLowerCase() === "javascript".toLowerCase(), "\n");
// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".
const str9 = "a1b2c3";
function removeNumbers(str) {
  return str.replace(/\d/g, "");
}
console.log(removeNumbers(str9));
//kitas variantas:

function removeNumbers2(str) {
  const numbers = "0123456789";
  let finalStr = "";
  let skip = false;
  for (let i = 0; i < str.length; i++) {
    skip = false;
    for (let j = 0; j < numbers.length; j++) {
      if (str[i] === numbers[j]) {
        skip = true;
      }
    }
    if (skip) continue;
    finalStr += str[i];
  }
  return finalStr;
}
console.log(removeNumbers2(str9));

// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.

const str10 = "a1b2c3";
function countNumbers(str) {
  let count = 0;
  const numbers = "0123456789";

  for (let i = 0; i < str.length; i++) {
    if (numbers.includes(str[i])) count++;
  }
  return count;
}
console.log(countNumbers(str10));
// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.
const str11 = "HTML CSS JS";

function firstLetters(str) {
  const strArr = str.split(" ");
  let finalStr = "";
  for (let i = 0; i < strArr.length; i++) {
    finalStr += strArr[i][0];
  }
  return finalStr;
}
console.log(firstLetters(str11));

// 12. Raskite pirmą žodį string'e "Hello World!".
const str12 = "Hello World!";
console.log(String(str12.trim().split(" ")[0]));
// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.
const str13 = "JavaScript";
console.log(str13.slice(0, -3));
// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.
const daysLeft = 5;
const str14 = "Likusios dienos: ";
console.log(`${str14}${daysLeft}\n`);

// 15. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".
const str15 =
  "Mokytojas, mokytojas ir MoKyToJaS bandė racionaliai įvertint    3.1415926535893238 ";
// galima naudoti replaceAll() metoda. taip pat replace() naudojantis RegExp.

function didYouAssumeMyGender1(str) {
  return str.replace(/mokytojas/g, "mokytoja");
}

// naudojant split() ir join().
function didYouAssumeMyGender2(str) {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase() === "mokytojas") {
      strArr[i] = strArr[i].slice(0, 8);
    }
  }
  return strArr.join(" ");
}

function didYouAssumeMyGender3(str) {
  return str
    .replaceAll("mokytojas", "mokytoja")
    .replaceAll("Mokytojas", "Mokytoja");
}

console.log(didYouAssumeMyGender1(str15), "\n");
console.log(didYouAssumeMyGender2(str15), "\n");
console.log(didYouAssumeMyGender3(str15), "\n");
