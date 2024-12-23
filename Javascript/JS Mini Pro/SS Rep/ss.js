let gameSeq=[];
let userSeq=[];
let start=false;
let highs=0;
let level=0;
let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
let abtn=document.querySelectorAll(".btn");
for(b of abtn)
{
    b.addEventListener("click",btnPress);
}
function btnPress()
{
    // console.log(this);
    let b=this;
    btnFlash(this,"user")
    let uCol=this.getAttribute("id");
    console.log(uCol)
    userSeq.push(uCol);
    check(userSeq.length-1)
}
document.addEventListener("keypress",function(){
    if(start==false)
    {
        start=true;
        levelUp();
    }
});
function check(ind)
{
    if(gameSeq[ind]==userSeq[ind])
    {
        if(gameSeq.length==userSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }else{
        highs=level>highs?level:highs;
        h2.innerHTML=`Game Over!! Your Score is ${level} <br> High Score: ${highs} <br> Press any key to Start Again`;
        document.querySelector("body").style.backgroundColor="red";
        document.querySelector("body").style.color="white";
        setTimeout(()=>{
            document.querySelector("body").style.color="black";
            document.querySelector("body").style.backgroundColor="white";
        },300);
        reset();
    }
}
function reset()
{
    gameSeq=[];
    userSeq=[];
    start=false;
    level=0;
}
function btnFlash(btn,call)
{
    let c=call=="game"?"gflash":"uflash";
    btn.classList.add(`${c}`)
        setTimeout(()=>{
            btn.classList.remove(`${c}`)
        },300);
}
function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranInd=Math.floor(Math.random()*3);
    let rColor=btns[ranInd];
    gameSeq.push(rColor);
    console.log(gameSeq);
    let rbtn=document.querySelector(`.${rColor}`);
    btnFlash(rbtn,"game");
}