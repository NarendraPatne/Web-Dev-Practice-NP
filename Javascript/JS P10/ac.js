let b=document.querySelector("button");
b.addEventListener("click",function(){
    let c=getrandomcolor();
    let h=document.querySelector("h2");
    let d=document.querySelector("div");
    // h.setAttribute("color",);
    h.innerText=`${c}`;
    h.style.color=c;
    d.style.backgroundColor=c;
});
function getrandomcolor()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
     let col=`rgb(${red},${green},${blue})`
     console.log(col)
     return col;
}