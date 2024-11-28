let user_score = document.querySelector(".your-score");
let comp_score = document.querySelector(".comp-score");
let msg = document.querySelector(".msg");
let userScore = 0;
let compScore = 0;
let choice = document.querySelectorAll(".choice");
let drawGame = () => {
  msg.innerText = "The game was Draw";
  msg.style.color = "rgb(15, 15, 88)";
};
let showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
    msg.innerText = "Congratulations! You can Win ";
    msg.style.color = "Green";
  } else {
    console.log(compScore);
    compScore++;
    comp_score.innerText = compScore;
    msg.innerText = "Ohh! You can loss . Try again ";
    msg.style.color = "red";
  }
};
const getComChoice = () => {
  let option = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};
let gameplay = (userchoice) => {
  let comChoice = getComChoice();
  if (userchoice == comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice == "rock") {
      userWin = comChoice == "paper" ? false : true;
    } else if (userchoice == "paper") {
      userWin = comChoice == "scissors" ? false : true;
    } else {
      userWin = comChoice == "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    gameplay(userchoice);
  });
});
