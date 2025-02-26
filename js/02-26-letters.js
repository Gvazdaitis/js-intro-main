function isrinktiRaides(text, step) {
  if (typeof text !== "string") {
    if (arguments.length !== 2) {
      return "Netinkamas parametru kiekis.";
    }
    return "Pirmasis kintamasis yra netinkamo tipo.";
  }

  return;
}
// netinkamos parametru kiekis
console.assert(
  isrinktiRaides() === "Netinkamas parametru kiekis.",
  "Nera nei vieno parametro"
);
console.assert(
  isrinktiRaides("abc") === "Netinkamas parametru kiekis.",
  "Yra tik vienas parametras"
);
console.assert(
  isrinktiRaides(1, 2, 3) === "Netinkamas parametru kiekis.",
  "Per daug parametru"
);
console.assert(
  isrinktiRaides(1, 2, 3, 4) === "Netinkamas parametru kiekis.",
  "Per daug parametru"
);

// netinkamas duomenu tipas - pirmasis parametras
console.assert(
  isrinktiRaides() === "Pirmasis kintamasis yra netinkamo tipo.",
  "Netinkamo tipo reiksme pirmame parametre."
);

// netinkamas duomenu tipas - antrasis parametras
console.assert(
  isrinktiRaides("text", "string") ===
    "Antrasis kintamasis yra netinkamo tipo.",
  "Netinkamo tipo reiksme antrajame parametre."
);
console.assert(
  isrinktiRaides("") === "Antrasis kintamasis yra netinkamo tipo.",
  "Netinkamo tipo reiksme antrajame parametre."
);
console.assert(
  isrinktiRaides() === "Antrasis kintamasis yra netinkamo tipo.",
  "Netinkamo tipo reiksme antrajame parametre."
);
console.assert(
  isrinktiRaides() === "Antrasis kintamasis yra netinkamo tipo.",
  "Netinkamo tipo reiksme antrajame parametre."
);
console.assert(
  isrinktiRaides() === "Antrasis kintamasis yra netinkamo tipo.",
  "Netinkamo tipo reiksme antrajame parametre."
);

// nelogiskos reiksmes

console.assert(
  isrinktiRaides("abcdefg", 2) === "Antrasis kintamasis yra netinkamo tipo.",
  "Step: 2"
);
console.assert(
  isrinktiRaides("abcdefghijkl", 3) ===
    "Antrasis kintamasis yra netinkamo tipo.",
  "Step: 3"
);
console.assert(
  isrinktiRaides("abc", 4) === "Antrasis kintamasis yra netinkamo tipo.",
  ""
);
console.assert(
  isrinktiRaides("abc", -Infinity) ===
    "Antrasis kintamasis yra netinkamo tipo.",
  ""
);
console.assert(
  isrinktiRaides("abc", Infinity) === "Antrasis kintamasis yra netinkamo tipo.",
  ""
);
console.assert(
  isrinktiRaides("abc", NaN) === "Antrasis kintamasis yra netinkamo tipo.",
  ""
);
console.assert(
  isrinktiRaides("abc", 3.14) === "Antrasis kintamasis yra netinkamo tipo.",
  ""
);
console.assert(
  isrinktiRaides("abc", 0) ===
    "Antrasis kintamasis turi buti didesnis uz nuli.",
  "Step: 0"
);

// normalus testai - pozityvus zingsniai
console.assert(isrinktiRaides("abcdefg", 2) === "bdf", "Step: 2");
console.assert(isrinktiRaides("abcdefghijkl", 3) === "bdf", "Step: 3");

// normalus testai - negatyvus zingsniai
