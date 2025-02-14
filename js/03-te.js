/*
1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą:
 "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
 
2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).
Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?
 
3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.
Kurį metodą čia patartumėte naudoti?
 
4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, 
ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?
 
5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių:
 "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?
 
6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina
 atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?
*/

function vertinimas(balas) {
  if (typeof balas !== "number" || 1 > balas > 10) {
    return "Netinkamas įvesties tipas: įveskite gautą balą nuo 1 iki 10.";
  }
  if (balas >= 9) return "Labai gerai";
  else if (balas >= 7) return "Gerai";
  else if (balas >= 4) return "Patenkinamai";
  else return "Nepatenkinamai";
}

console.log(vertinimas(10));

function rinkejas(amzius) {
  if (typeof amzius !== "number" || amzius < 0) {
    return "Netinkamas įvesties tipas: amžius turi būti skaičius nemažesnis už 0.";
  }
  if (amzius >= 18) return "Gali balsuoti";
  return "Negali balsuoti";
}

console.log(rinkejas(18));

function savaitesDienos(diena) {
  switch (diena) {
    case 1:
      return "Pirmadienis";
    case 2:
      return "Antradienis";
    case 3:
      return "Trečiadienis";
    case 4:
      return "Ketvirtadienis";
    case 5:
      return "Penktadienis";
    case 6:
      return "Šeštadienis";
    case 7:
      return "Sekmadienis";
    default:
      return "Neteisinga įvestis: įrašykite skaičių atitinkatį savaitės dieną(1-7)";
  }
}

console.log(savaitesDienos(2));

function numSign(num) {
  if (typeof num !== "number") {
    return "Error: input must be a number.";
  }
  if (num === 0) return "a number 0 is neither negative nor positive";
  return num > 0 ? num + " is positive" : num + " is negative";
}

console.log(numSign("asdf" - 4)); // Appearantly NaN is a number and has a sign bit(negative)???

function amziausGrupe(amzius) {
  if (typeof amzius !== "number" || amzius < 0 || amzius === NaN) {
    return "Neteisinga įvestis: įveskite žmogaus amžių(teigiamas skaičius).";
  }
  if (amzius < 13) return "Vaikas";
  else if (amzius < 20) return "Jaunuolis";
  else if (amzius < 65) return "Suaugęs";
  return "Pensininkas";
}

console.log(amziausGrupe("asdf" - 30));

function isEven(num) {
  if (typeof num !== "number") return "Invalid input: enter a number.";
  return num % 2 === 0 ? num + " is even." : num + " is odd.";
}

console.log(isEven(0));
