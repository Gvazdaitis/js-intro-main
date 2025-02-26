function daugyba(n1, n2) {
  //valydavimas
  if (isNaN(n1) || n1 === Infinity || n1 === -Infinity) {
    return "Error: parametrai turi būti skaičiai.";
  }
  if (isNaN(n1) || n1 === Infinity || n1 === -Infinity) {
    return "Error: parametrai turi būti skaičiai.";
  }

  //logika
  const result = n1 * n2;

  if (result >= Number.MAX_VALUE) {
    return "Error: rezultatas didesnis negu maksimali reikšmė.";
  }
  if (result >= Number.MAX_SAFE_INTEGER) {
    return "Error: rezultatas didesnis negu galima atsiminti maksimali reikšmė.";
  } // kada čia šitą.

  return result;
}

console.log(daugyba(5, 7));

console.log(Number.MAX_VALUE + 1e292);

function kiekSk(n) {
  // parametrų validacija
  // if (typeof n !== "number") {
  //   return "Pateikta netinkamo tipo reikšmė";
  // }
  if (!Number.isFinite(n)) {
    return "Pateikta netinkamo tipo reikšmė";
  }
  // logika
  let result = ("" + n).length;

  if (n < 0) {
    result--;
  }

  if (n % 1 !== 0) {
    result--;
  }
  // rezultato validacija

  // rezultato grąžinimas
  return result;
}
console.log(kiekSk(5), "-->", "1");
console.log(kiekSk(781), "-->", "3");
console.log(kiekSk(37060123456), "-->", "11");
console.log(kiekSk(true), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk("asd"), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(NaN), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(Infinity), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(-Infinity), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(undefined), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk([]), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk({}), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(null), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(kiekSk), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(), "-->", "Pateikta netinkamo tipo reikšmė");
console.log(kiekSk(3.14), "-->", "");
console.log(kiekSk(2.727), "-->", "");
console.log(kiekSk(-3.14), "-->", "");
console.log(kiekSk(-1.0), "-->", "");
console.log(kiekSk(1.0), "-->", "");
console.log(kiekSk(-1_000_000_000.1), "-->", "");
console.log(kiekSk(1_000_000_000_000_000_000), "-->", "");
console.log(kiekSk(100_000_000_000_000_000_000), "-->", "");
console.log(kiekSk(1_000_000_000_000_000_000_000), "-->", "");
console.log(1_000_000_000_000_000_000_00 + "");

console.clear();

function didzSkSar(list) {
  if (!Array.isArray(list)) {
    return "Pateikta netinkamo tipo reikšmė";
  }

  if (list.length === 0) {
    return "Pateiktas sarasas negali buti tuscias";
  }

  let biggestNumber = -Infinity;

  for (const number of list) {
    if (typeof number !== "number" || !isFinite(number)) {
      continue;
    }
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }

  if (biggestNumber === -Infinity) {
    return "Sarase nerasta nei viena tinkama reiksme";
  }

  return biggestNumber;
}

//console.assert();
console.assert(
  didzSkSar([1]) === 1,
  "Grąžinamas vienintelis masyve esantis skaičius."
);

// sarasai su sveikaisiais skaiciais
console.assert(
  didzSkSar([1]) === 1,
  "Grazinamas vienintelis masyve esantis skaicius."
);
console.assert(
  didzSkSar([5]) === 5,
  "Grazinamas vienintelis masyve esantis skaicius."
);
// console.assert(didzSkSar([1, 2, 3]) === 2, "Err:");
console.assert(didzSkSar([-5, 78, 14, 0, 18]), "Err:");
// console.assert(didzSkSar([69, 69, 69, 69, 66]) === 2, "Err:");

console.assert(
  didzSkSar("pomidoras"),
  "Pateikita netinkamo tipo reikšmė.",
  "Netinkamas tipas: string"
);
console.assert(didzSkSar({}) === "Pateikta netinkamo tipo reikšmė", "Err:a");
console.assert(didzSkSar(123) === "Pateikta netinkamo tipo reikšmė", "Err:a");

// console.assert(didzSkSar([-1, -2, -3, -4, -5, -6]) === 2, "Err:");

//console.log(didzSkSar([1]), "-->", 1);

console.assert(
  didzSkSar([]) === "Pateiktas sarasas negali buti tuscias.",
  "Tuscias masyvas"
);
console.assert(
  didzSkSar([true]) === "Sarase nerasta nei viena tinkama reiksme",
  "Tuscias masyvas"
);
console.assert(
  didzSkSar([true]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5(boolean)"
);
console.assert(
  didzSkSar(["string"]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([[], 5]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([{}]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([Infinity]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([-Infinity]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([NaN]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([undefined]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([null]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
console.assert(
  didzSkSar([didzSkSar]) === "Sarase nerasta nei viena tinkama reiksme",
  "Didziausia reiksme: 5"
);
