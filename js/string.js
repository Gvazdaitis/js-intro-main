/*
STRING - tekstas - simbolių grandinėlė
incijuoti galima:
' - 
" - 
` - galima multiline strings lengvai apgaubti.

*/

const hoi = "Chuck";
console.log(hoi);

const lastName = "Norris";
console.log(lastName);

const fullName = hoi + " " + lastName;
console.log(fullName);

const age = 84;

// Hi, my name is Chuck and I am 84 years old.
const chuckIntro = "Hi my name is " + hoi + "and I am " + age + " years old.";

const k1 = "Kabute: '(vienguba).";
console.log(k1);

// naudojant abi kabutes stringa reikia isskaidyt į kelis strings.

const k12 =
  "\nSvarbiausia mokėti teisingai \ncituoti anglišką tekstą, pvz:\n" +
  '"I' +
  "'m happy!!" +
  '".\n';
console.log(k12);

// Backslash \ pažymi naują eilutę kai stringas kelių eilučių.
// arba escapina simbolį, kaip kad kabutes. AČIŪ DIEVUI

const html =
  "<div>\n\
    <h1>Labas rytas, Lietuva!</h1>\n\
    <p>Pirmadienis.</p>\n\
    <p>Pomidoras.</p>\n\
</div>";

// \r reguliuoja kursoriaus vietą. grįžta į pradžią. Kitaip tariant jeigu naudotum \r\
// tada tada rašytų ant viršaus. ir gautusi nonsense

// \n - new line. Kai kuriose operacinėse \n , galimai,
// TIK perkelia į kitą eilutę, bet ne į kitos eilutės pradžią.
// \r - return
// \t - tab
// \r\n - unlimited powa.
console.log(html);

const luckyNumber = 13;
console.log(`
My lucky number is ${luckyNumber}.
    `);

// C:\Documents\troliai\rekia\namie
const troliai1 = "C:\\Documents\\troliai\\rekia\\namie";
console.log(troliai1);
// I guess I'll use ` forever now
