let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    // console.log("ouho");
    let li=document.createElement("li");
    li.textContent=inp.value;
    let dbt=document.createElement("button");
    dbt.innerText="Delete";
    dbt.classList.add("del");
    li.appendChild(dbt);
    ul.appendChild(li);
    inp.value="";
});
// Below eventlistener is applied only on existing delete button
// If we add new buttons it is not applicable to them to do so
// We use event delegation
// let de=document.querySelectorAll(".del");
// for(d of de)
// {
//     d.addEventListener("click",function(){
//         let p=d.parentElement;
//         console.log(p);
//         p.remove();
//     });
// }
// -------------------------------------------------------------
// Event Delegation by applying event handler on parent i.e ul
ul.addEventListener("click",function(event){
    console.log(event.target.nodeName);
        if(event.target.nodeName=="BUTTON")
        {
           event.target.parentElement.remove();
        }
});

