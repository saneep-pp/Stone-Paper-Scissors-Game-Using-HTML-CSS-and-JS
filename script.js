const imgEle = document.querySelectorAll("img");
const resultEle = document.querySelector(".result");
const userChoiceEle = document.querySelector(".userchoice");
const systemChoiceEle = document.querySelector(".systemchoice");
const userPoints = document.querySelector(".userpoints");
const systemPoints = document.querySelector(".systempoints");

let userPoint = 0;
let systemPoint = 0;

imgEle.forEach((im) => {
  im.addEventListener("click", () => {
    const systemTurn = systemChoice();

    const result = gamePlay(im.id, systemTurn);

    userChoiceEle.textContent = im.id;
    systemChoiceEle.textContent = systemTurn;
    resultEle.textContent = result;
  });
});

//System randomly pick choice from given choices

function systemChoice() {
  const choices = ["Stone", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

//It checks userchoice with systemchoice

function gamePlay(userSelection, systemSelection) {
  if (userSelection == systemSelection) {
    return "It is a Tie....!";
  } else if (
    (userSelection === "Stone" && systemSelection === "Scissors") ||
    (userSelection === "Paper" && systemSelection === "Stone") ||
    (userSelection === "Scissors" && systemSelection === "Paper")
  ) {
    userPoint++;
    userPoints.textContent = userPoint;

    return "You Win....!  " + userSelection + " beats " + systemSelection;
  } else {
    systemPoint++;
    systemPoints.textContent = systemPoint;
    return "Oops! You Lose...! " + systemSelection + " Beats " + userSelection;
  }
}
