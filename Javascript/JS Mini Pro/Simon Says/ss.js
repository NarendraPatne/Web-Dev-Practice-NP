let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let abtn=document.querySelectorAll(".btn");
for(b of abtn)
{
    b.addEventListener("click",btnPress);
}
document.addEventListener("keypress",function()
{
    if(started==false)
    {
    console.log("Game Started");
    started=true;   
    levelUp();
    }
});
function btnFlash(bt,call)
{
    let c=(call=="game")?"gameflash":"userflash";
    bt.classList.add(`${c}`);
    setTimeout(function(){
        bt.classList.remove(`${c}`);
    },300);
}
function btnPress()
{
    let b=this;
    // console.log(this);
    btnFlash(b,"user");
    let ucolor=b.getAttribute("id");
    // console.log(ucolor);
    userSeq.push(ucolor);
    checkAns(userSeq.length-1);
}
function checkAns(ind)
{
    // console.log("Current Level:",level);
    // let ind=level-1;
    if(userSeq[ind]===gameSeq[ind])
    {
        if(userSeq.length==gameSeq.length)
        {
           setTimeout(()=>{
            levelUp();
           },1000);
        }
    }else{
        h2.innerHTML=`Game Over!! Your Score was ${level} <br>Press any key to Start.`;
        reset();
    }
}
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rInd=Math.floor(Math.random()*3);
    let rColor=btns[rInd];
    gameSeq.push(rColor);
    console.log(gameSeq);
    let ranBtn=document.querySelector(`.${rColor}`);
    btnFlash(ranBtn,"game");
}