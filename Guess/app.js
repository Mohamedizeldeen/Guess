// text selector
let score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const guessMyNumber = document.querySelector(".Guess-my-number");
const questionMark = document.querySelector(".q");
const message = document.querySelector(".message");
// user input
const userInput = document.querySelector(".user-input");
// button selector
const restartBtn = document.querySelector(".Again");
const checkBtn = document.querySelector(".Check");
//
let num = Math.trunc(Math.random() * 20) + 1;

// buliding logic
checkBtn.addEventListener("click", () => {
  if (!userInput.value) {
    message.textContent = "No Input";
  } else if (userInput.value > num) {
    if (Number(score.textContent) > 1) {
      message.textContent = "is smaller";

      score.textContent = Number(score.textContent) - 1;
    } else {
      score.textContent = 0;
      guessMyNumber.textContent = "you lose";
      questionMark.textContent = num;
      questionMark.style.backgroundColor = "red";
      userInput.value = null;
    }
  } else if (userInput.value < num) {
    if (Number(score.textContent) > 1) {
      message.textContent = "is bigger";

      score.textContent = Number(score.textContent) - 1;
    } else {
      score.textContent = 0;
      questionMark.style.backgroundColor = "red";
      guessMyNumber.textContent = "you lose";
      userInput.value = null;
      questionMark.textContent = num;
    }
  } else {
    if (Number(highScore.textContent) < Number(score.textContent)) {
      guessMyNumber.textContent = "win";
      questionMark.textContent = num;
      questionMark.style.backgroundColor = "green";
      highScore.textContent = Number(score.textContent);
      message.textContent = "winner winner chicken dinner";
    } else {
      guessMyNumber.textContent = "win";
      message.textContent = "winner winner chicken dinner";
    }
  }
});
restartBtn.addEventListener("click", () => {
  questionMark.style.backgroundColor = "#5f95e6";
  message.textContent = "Guess My Number";
  userInput.value = null;
  score.textContent = 20;
  questionMark.textContent = "?";
  guessMyNumber.textContent = "Guess My Number";
  num = Math.trunc(Math.random() * 20) + 1;
});
