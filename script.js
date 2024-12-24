let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userPara = document.querySelector(".user");
const compPara = document.querySelector(".comp");

//Generate Computer Choices
const genchoice = () =>{
    let options = ["rock", "paper", "scissors"];
    Math.floor(Math.random() * options.length);
    return options[Math.floor(Math.random() * options.length)];
};

//Draw Game 
const drawGame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw! Play again!";
    msg.style.backgroundColor = "rgb(2, 2, 43)";
};

//Winner Function
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userPara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compPara.innerText = compScore;
            console.log("Computer Wins!");
            msg.innerText = `Computer Wins! ${computerChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
            }
};

//Function for playing game
const playGame = (userChoice) => {
    console.log("User choice is - ",userChoice);
    const computerChoice = genchoice();
    console.log("Computer choice is - ",computerChoice);

    if (userChoice === computerChoice){
        drawGame(); //Draw Game 
    }
    else{
        let userWin = true; 
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true; //paper, scissor
        }else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true; //scissors, rock
        }else {
            userWin = computerChoice === "rock" ? false : true; //scissors, paper
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

//Event Listener for buttons, accessing choices with id
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked - ",userChoice);
        playGame(userChoice);
    });
});