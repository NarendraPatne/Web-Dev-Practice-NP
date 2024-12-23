let p=document.querySelector("p");
let d=document.querySelector(".box");
p.addEventListener("click",function (){
    console.log("Para was clicked!!");
});
d.addEventListener("mouseenter",function(){
    d.style.zindex=3;
    d.style.backgroundColor="pink";
    console.log("mouse ")
});
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let h6=document.querySelector("h6");
let b=document.querySelector("button");
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
h6.addEventListener("click",changeColor);
b.addEventListener("click",changeColor);
function changeColor()
{
    console.log(this);
    this.style.backgroundColor="pink";
}