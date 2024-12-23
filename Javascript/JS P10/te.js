let text=document.querySelector("#text");
let editor=document.querySelector("#edit");
editor.addEventListener("input",function()
{
    text.innerText=this.value;
});