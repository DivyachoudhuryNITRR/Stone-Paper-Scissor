let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("Game was draw.");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="black";
}


const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("Yoy Win !");
        msg.innerText=`You Win ! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        // console.log("You Lose !");
        msg.innerText=`You Lose ! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    // console.log("user choice = ",userChoice);
    //generate computer choice -> modular way 
    const computerChoice=genComputerChoice();
    // console.log("computer choice = ",computerChoice);

    if(userChoice===computerChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissor,paper
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissor
            userWin=computerChoice==="scissor"?false:true;
        }
        else {
            //rock,paper
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});


