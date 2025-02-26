const arr = [4, 8, 18, 65, 40, 33, 14];

function differenceInAges(ages) {
  return [
    Math.max(...ages),
    Math.min(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}

console.log(differenceInAges(arr));

console.log([Math.max(...arr)]);

const ss = "_|_|_";
const inputActions = ["run", "jump", "run", "jump", "run"];
console.log(ss[0]);

function testit(act, s) {
  let track = "";
  for (let i = 0; i < act.length; i++) {
    if (s[i] === "_" && act[i] === "run") {
      track += "_";
    } else if (s[i] === "_" && act[i] === "jump") {
      track += "x";
    } else if (s[i] === "|" && act[i] === "run") {
      track += "/";
    } else if (s[i] === "|" && act[i] === "jump") {
      track += "|";
    }
  }
  return track;
}

console.log(inputActions, ss);
