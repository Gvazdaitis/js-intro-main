/*
// Sudėtingesnis. Write a function that checks if a number is both greater than 10 and less than 100.

function betweenTenAndHundred (n) {
    if (typeof n !== "number") {
        throw new Error("Invalid input: this function only works with number type inputs.");
    } 
    return n > 10 && n < 100;
}

console.log(betweenTenAndHundred(15));

// Sudėtingesnis. Write a function that takes age and hasLicense as arguments and returns:
// "Can drive" if the person is 18 or older AND has a license
// "Cannot drive" otherwise

function canDrive(age, hasLicense) {
    if (typeof age !== "number" || typeof hasLicense !== "boolean") {
        throw new Error("Invalid input: age must be a number and hasLicense must be a boolean type.");
    }
    if (age >= 18 && hasLicense) {
        return "Can drive";
    } else {
        return "Cannot drive";
    }
}

console.log(canDrive(55, 1));
*/

// function grabDoll(dolls) {
//   var bag = [];
//   //coding here
//   const dollsLen = dolls.length;
//   for (let i = 0; i < dollsLen; i++) {
//     if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
//       bag.push(dolls[i]);
//     }
//     if (bag.length < 3) continue;
//     if (bag.length >= 3) break;
//   }

//   return bag;
// }

// ar1 = [
//   "Mickey Mouse",
//   "Barbie doll",
//   "Hello Kitty",
//   "Hello Kitty",
//   "Hello Kitty",
//   "Snow white",
// ];
// console.log(grabDoll(ar1));

// function palukanos(paskola, metai, norma) {
//   if (metai > 0) {
//     metai--;
//     paskola = paskola * norma;
//     return palukanos(paskola, metai, norma);
//   }
//   return paskola;
// }

// console.log(palukanos(5000, 20, 1.08));

// function isIsogram(str) {
//   const strLen = str.length;
//   str = str.toLowerCase();
//   for (let i = 0; i < strLen - 1; i++) {
//     for (let j = i + 1; j < strLen; j++) {
//       if (str[i] === str[j]) return true;
//     }
//   }
//   return false;
// }

// console.log(isIsogram("asdfgha"));

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replaceAll("T", "U");
}

console.log(DNAtoRNA("UTTT"));
