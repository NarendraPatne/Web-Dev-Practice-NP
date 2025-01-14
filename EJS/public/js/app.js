const btns=document.querySelectorAll("button");
for(b of btns)
{
    b.addEventListener("click",()=>{
        console.log("Button was clicked.");
    });
}
const imgs=document.querySelectorAll("img");
for(i of imgs)
{
    i.addEventListener("click",()=>{
        console.log("Image was clicked.");
    });
}