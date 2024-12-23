let par=document.createElement('p');
par.innerText="Hey I am red!";
let body=document.querySelector("body");
body.appendChild(par);
par.classList.add("rc");
let h=document.createElement("h1");
h.innerText="I am Blue!";
body.appendChild(h);
h.classList.add("bl");
let d=document.createElement("div");
let hd=document.createElement("h1");
let pd=document.createElement("p");
hd.innerText="Im in a Div";
pd.innerText="Me too!";
body.appendChild(d);
d.appendChild(hd);
d.appendChild(pd);
d.classList.add("box");
// ----------------------------HW
let inp=document.createElement("input");
let btn=document.createElement("button");
btn.innerText="Click Me!";  
body.append(inp);
body.appendChild(btn);
inp.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
body.appendChild(h1)
let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p)


