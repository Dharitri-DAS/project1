let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game is stareted");
    started=true;
    levelup();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400);

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },400);

}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn choose
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    // console.log("Current level :",level);
    // let idx=level-1;

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> press any key to start .`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },1000)
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
   userflash(btn); 

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allbtns =document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}


function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}



//home work print ighest score of user...?