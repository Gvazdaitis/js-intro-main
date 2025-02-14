// Chuch name is 5 letters long.
const firstName = "Chuck";

// length metodas gražina skaičių(string arba array ilgis).
const chuckName = `${firstName} name is ${firstName.length} letters long.`;
console.log(chuckName);

let ourText = `     Lorem          Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
   specimen book. It has survived not only five centuries, but also the leap 
   into electronic typesetting, remaining essentially unchanged. It was popularised 
   in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
   and more recently with desktop publishing software like Aldus PageMaker including 
   versions of Lorem Ipsum.
   `;

// split metodas padalina string į Array
// console.log(ourText.split(""));

// Panaikina space pradžioje ir pabaigoje string.
// console.log(ourText.trim());

// pakeičia substringą stringe.
// console.log(ourText.replaceAll("Lorem", "Gražu"));

// gražina substringą apibrėžtą indexais iš jau egzistuojančio stringo.
// console.log(ourText.slice());

// repeat nekeičia originalaus string bet pakartoja jį pasirinktą kartą skaičių.
// console.log(ourText.repeat(3));

// console.log(ourText);

// šitas apkarpo extra spaces
// console.log(ourText.replace(/\s+/g, " ").trim());

const tekstas = "Labas rytas, Lietuva";

function capitalize(str1) {
  let strArr = str1.replace(/\s+/g, " ").trim().split(" ");
  // regExp empty space istrynimas
  const arrLen = strArr.length;
  let finalStr = "";
  let word = "";
  for (let i = 0; i < arrLen; i++) {
    word = strArr[i][0].toUpperCase();
    for (let j = 1; j < strArr[i].length; j++) {
      word += strArr[i][j];
    }
    finalStr += word + " ";
  }
  return finalStr;
}

console.log(capitalize(ourText));

console.log(tekstas[tekstas.length - 1]);

//console.log(ourText.toUpperCase());

// function charCount(str1) {
//   var chars = {};
//   str1.replace(/\S/g, function (l) {
//     chars[l] = isNaN(chars[l]) ? 1 : chars[l] + 1;
//   });
//   return chars;
// }

var myString = "This is my String.3.141592653589793238";
// console.log(charCount(myString));

function weHaveAtAtHome(text, position) {
  if (position >= 0) {
    return text[position];
  } else {
    return text[text.length + position];
  }
}
console.log(weHaveAtAtHome(myString, -5));

const pilnaTustumos = `  
      asdf   h     a       p     p            y  
                 sup       homie     
 it'    s    Tony    .      .    . !  @     # 


:)


`;
function removeExtraSpace(str) {
  while (str.includes("  ")) {
    str = str.replaceAll("  ", " ");
  }
  return str.trim();
}

console.log(removeExtraSpace(pilnaTustumos));

//jeigu splitini pagal simbolį kuris yra string gale, gautame array paskutinis elementas bus "". Tuscias string.
