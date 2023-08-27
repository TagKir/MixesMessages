function randomNumber(item) {
  return Math.floor(Math.random() * item);
}

const mlbbRound = {
  person: ["Pharsa", "Valir", "Lunoks", "Natasha", "Dshonson"],
  line: ["Gold", "Mid", "Exp", "Roum", "Jungle"],
  end: ["Winner", "Loser"],
};

let answer = [];
let randRes;

for (item in mlbbRound) {
  randRes = randomNumber(item.length - 1);
  switch (item) {
    case "person":
      answer.push(mlbbRound.person[randRes]);
      break;
    case "line":
      answer.push(mlbbRound.line[randRes]);
      break;
    case "end":
      answer.push(mlbbRound.end[randRes]);
      break;
  }
}

function answerPrint(answer) {
  console.log(
    `Your person: ${answer[0]}
Your line: ${answer[1]}
You are: ${answer[2]}`
  );
}
answerPrint(answer);
