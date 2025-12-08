const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".userResult img");
const resultBoard = document.querySelector(".result");
const computerResult = document.querySelector(".compResult img");
const optionsImages = document.querySelectorAll(".optionImage");
const choices = ["./images/paper", "./images/rock", "./images/scissors"];
let userScore = 0;
let computerScore = 0;
console.log(userResult);

optionsImages.forEach((image) => {
  image.addEventListener("click", () => {
    optionsImages.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
    const clickedImg = image.querySelector("img").src;
    userResult.src = clickedImg;
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    computerResult.src = computerChoice + ".png";

    let userValue = ["R","P","S"][randomNumber];
    let computerValue = ["R","P","S"][randomNumber];

    if (clickedImg.includes("rock")) {
      userValue = "R";
    } else if (clickedImg.includes("paper")) {
      userValue = "P";
    } else {
      userValue = "S";
    }
    if (computerChoice.includes("rock")) {
      computerValue = "R";
    } else if (computerChoice.includes("paper")) {
      computerValue = "P";
    } else {
      computerValue = "S";
    }   
    // logic
    if (userValue === computerValue) {
      resultBoard.textContent = "It's a tie!";       
    } else if (
      (userValue === "R" && computerValue === "S") ||
      (userValue === "P" && computerValue === "R") ||
        (userValue === "S" && computerValue === "P")
    ) {
      resultBoard.textContent = "User wins !";
      userScore++;
    } else {
      resultBoard.textContent = "Computer wins !";
      computerScore++;
    }   

  });
});