let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");

const result=document.querySelector("#msg");

const comScorepara=document.querySelector("#opponent-score");
const usrScorepara=document.querySelector("#user-score");

const computerchoice = ()=>{
    let opt=["rock", "Paper", "scissor"];
   const gen= Math.floor(Math.random ()*3);
   return opt[gen];
}

const showWinner=(usrWin , userchoice , comGen)=>{
    if (usrWin){
      comScore++;
comScorepara.innerText=comScore;
console.log(userchoice)
        msg.innerText =`You loose! opponent ${comGen} beats Your ${userchoice}`  ;
        msg.style.backgroundColor="red";
    }else{
    userScore++;
    usrScorepara.innerText=userScore;
        msg.innerText =`You win! Your ${userchoice}  beats opponent ${comGen}`;
        msg.style.backgroundColor="green";
    }
}

const drawgame= ()=>{
    console.log("game was draw");
    msg.innerText="Game draw Play again"
    msg.style.backgroundColor="#1B2838";
}




let playgame=(userchoice)=>{
    console.log("userchoice is", userchoice)

    const comGen=computerchoice();

    console.log("Opponent choice=", comGen);

    if (userchoice===comGen){
drawgame();
    }else{
        let usrWin=true;
        if(userchoice==="rock"){
          usrWin =  comGen==="paper"? true:false;
        }else if(userchoice==="paper"){
            usrWin = comGen==="scissor"? true:false;

        }else{
            usrWin = comGen==="rock"? true:false;
        }
        showWinner(usrWin , userchoice , comGen);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click",() =>{
const userchoice= choice.getAttribute("id");
playgame(userchoice);

    })
});