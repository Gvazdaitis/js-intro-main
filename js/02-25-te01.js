function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

// console.log(getDrinkByProfession("progRAmmer"));

const knight = [3, "C"];
const king = [4, "B"];
function chessboard() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  const letters = "ABCDEFGH";
  for (let i = 0; i < 8; i++) {
    let firstRow = "";
    for (let j = 0; j < 8; j++) {
      firstRow += num[i] + letters[j] + " ";
    }
    console.log(firstRow);
  }
}

function knightVsKing(knightPosition, kingPosition) {
  // Three possible outputs are "Knight", "King" and "None".
  if (knightPosition[0] - kingPosition[0]) {
  }
  return;
}

chessboard();
