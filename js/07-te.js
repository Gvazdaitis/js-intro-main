function sep() {
  console.log("\n ------- \n");
}
// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
// (Pvz., kvadratu(4) turi grąžinti 16.)
function keltiKvadratu(num) {
  if (isNaN(num)) return "Įveskite skaičių";
  return num ** 2;
}
console.log(keltiKvadratu(5), "\n -------\n");

// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)

// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)

// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)
function reverseString(str) {
  if (typeof str !== "string") return "Įveskite tekstą";
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
const str1 = "JavaScript";
console.log(reverseString(str1), "\n -------\n");

// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)
// pabandysiu funkcija su visu raidžių pasikartojimų skaičiumi. Returnins objektą:
// reikšmė suporuota su kiek kartų ji pasikartojo stringe.
// function countChars(str) {
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.legth; j++) {
//       if (obj.hasOwn(str[i])) {
//       }
//     }
//   }
//   return obj;
// } // reiks uzbaigt paskui

// su arrow functions ir for of.
const countChars2 = (str) => {
  const obj = {};
  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};

const s1 = "Labas rytas, Lietuva";
console.log(countChars2(s1), "\n -------\n");
const s2 = "hello world";
console.log(countChars(s2), "\n -------\n");

// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" arba "nulis" naudojant ternary.

// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji ar mažoji).
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.)

// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5(grąžina true arba false).

// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.

// 10. Parašykite for ciklą, kuris išveda tik lyginius skaičius nuo 2 iki 20.

// 11. Naudodami for ciklą, suskaičiuokite visų skaičių nuo 1 iki 100 sumą ir grąžinkite rezultatą.

// 12. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina jų vidurkį.
// (Pvz., vidurkis([5, 10, 15]) → 10.)

// 13. Naudodami for ciklą, raskite didžiausią skaičių iš pateikto masyvo.
// (Pvz., rastiDidziausia([3, 9, 2, 11, 7]) → 11.)
const masyvas = [3, 9, 2, 11, 7];

function maxNum(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxNum <= arr[i]) maxNum = arr[i];
  }
  return maxNum;
}
console.log(maxNum(masyvas));

sep();
// 14. Sukurkite funkciją, kuri priima stringą ir grąžina jį be tarpų.
// (Pvz., beTarpų("Labas pasauli") → "Labaspasauli".)

// 15. Parašykite funkciją, kuri patikrina, ar string'e yra daugiau nei 10 simbolių.
// (Pvz., arIlgas("JavaScript") → true, arIlgas("Labas") → false.)

// 16. Sukurkite for ciklą, kuris išveda daugybos lentelę 5(nuo 1 iki 10).
// funkcija isprintina galimas 2 skaiciu sudauginimo kombinacijas.
function daugybosLentele(a, b) {
  for (let i = a; i <= b; i++) {
    for (let j = a; j <= b; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log();
  }
  return;
}
// daugybosLentele(1, 10);

// 17. Parašykite funkciją, kuri priima stringą ir pakeičia visas "a" raides į "@".
// (Pvz., keistiRaide("banana") → "b@n@n@".)
function replaceSymbol(str, symbol, toSymbol) {
  finalStr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === symbol ? (finalStr += toSymbol) : (finalStr += str[i]);
  }
  return finalStr;
}
const str3 = `keistiRaide("banana");`;
console.log(replaceSymbol(str3, "a", "@"), "\n -------\n");

// 18. Sukurkite funkciją, kuri sugeneruoja stringą "**********"(10 žvaigždučių), naudojant for ciklą.
function stars(num) {
  let output = "";
  for (let i = 0; i < num; i++) {
    output += "*";
  }
  return output;
}
console.log(stars(20));
sep();

// 19. Parašykite funkciją, kuri priima skaičių ir grąžina visus jo daliklius(išskyrus 1 ir patį save).
// (Pvz., dalikliai(12) →[2, 3, 4, 6].)
function dalikliai(num) {
  const arr = [];
  for (let i = 2; i < num / 2 + 1; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
}
console.log(dalikliai(340));
sep();

// 20. Sukurkite funkciją, kuri tikrina, ar pateiktas skaičius yra pirminis.
// (Pvz., arPirminis(7) → true, arPirminis(8) → false.)
function arPirminis(num) {
  return dalikliai(num).length === 0;
}
console.log(arPirminis(15));
console.log(0 <= masyvas[0]);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(16));
