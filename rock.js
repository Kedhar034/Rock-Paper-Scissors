let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genComputerChoice = () =>{
    let options = ["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}

const drawGame=()=>{
    
    msg.innerText="game was DRAWN"
    msg.style.backgroundColor="Yellow";
    msg.style.color="black";
}

const showWinner =  (userwin,userchoice,compchoice)=>{
    if (userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You WIN, Your ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lose");
        msg.innerText=`You LOSE, ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }

};

const playGame=(userchoice)=> {
    console.log("user choice:",userchoice);
    const compchoice= genComputerChoice();
    console.log("comp choice:",compchoice);

    if(userchoice===compchoice){
        drawGame();
    } else {
        let userwin = true;
        if(userchoice  ==="rock"){
            userwin=compchoice==="paper" ? false: true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors" ? false: true;
        } else {
            userwin=compchoice==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);

    })
})
