let ul=document.querySelector("ul");
let div=document.querySelector("div");
let lis=document.querySelectorAll("li");
ul.addEventListener("click",function(e)
{
    console.log("Ul Clicked");
    e.stopPropagation();
});
div.addEventListener("click",function()
{
    console.log("Div Clicked");
});
for(li of lis)
{
    li.addEventListener("click",function(e)
{
    console.log("Li Clicked");
    e.stopPropagation();
});
}