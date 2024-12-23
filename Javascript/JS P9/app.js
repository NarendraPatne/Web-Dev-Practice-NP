
let smallImges=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImges.length;i++)
    {
        console.dir(smallImges[i]);
    }
    setTimeout(()=>{
        smallImges[1].src="assets/spiderman_img.png";
    },2000);
    let par=document.getElementsByTagName("p");
    console.dir(par);
    console.log(par);
    setTimeout(function(){
        par[0].innerText="apososdunasuddufnnasdifh";
    },3000);
    console.log("-------------------------------------");
    //  Query Selector: to select particular html element in js object
    // Query selector uses all the css selectors 1] Tag 2] ID 3] Class etc 
    //  It selects the first element with the specified selector
    console.log(document.querySelector("p"));
    console.log(document.querySelector("#mainImg"));
    console.log(document.querySelector(".oldImg"));
//  querySelectorAll selects all the elements that can be selected from the specified selector
console.log(document.querySelectorAll(".oldImg"));
console.log("-------------------------------------");
// Style property of element in js
let links=document.querySelectorAll(".box a");
for(let i=0;i<links.length;i++)
    {
        links[i].style.color="red";
    }
    // classList property of element
    let iob=document.querySelector("#mainImg");
    iob.classList.add("e","f","g");
    console.log(iob.classList);
    console.log("-------------------------------------");
    // Navigation
    let o=document.querySelector("#mainImg");
    console.log("Parent of #mainImg is:",o.parentElement);
    console.log(document.querySelector(".boxLink").parentElement);
    console.log(document.querySelector(".box").children);
    console.log("-------------------------------------");
    let x=document.querySelector("ul");
    console.log(x.children);
    console.log(x.children[1].previousElementSibling);
    console.log(x.children[1].nextElementSibling);
    console.log("-------------------------------------");
    let mImges=document.getElementById("mainImg");
    mImges.previousElementSibling.style.color="yellow";
    console.log("-------------------------------------");
    // Adding Element to Document
    let body=document.querySelector("body");
    let head=document.createElement("h1");
    head.innerText="Hi This heading is created in JS";
    body.appendChild(head);
    let btn=document.createElement("button");
    btn.innerText="buttonx"
    let bx=document.querySelector(".box");
    bx.appendChild(btn);
    let d=document.querySelector("h4");
    d.append(" of Marvel Comics");
    let pa=document.querySelector("#description");
    let paa=document.createElement("p");
    paa.innerText="Hi this Para is created in JS";
    pa.prepend(btn);
    pa.insertAdjacentElement("beforebegin",paa);
    pa.insertAdjacentElement("afterEnd",paa);
    // Removing Element from document
    setTimeout(()=>{
        paa.remove();
    },2000);
    setTimeout(()=>{
        bx.removeChild(document.querySelector(".box h4"));
    },2000);