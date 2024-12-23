let url='https://dog.ceo/api/breeds/image/random';
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let diurl=await getDimg();
    console.log(diurl);
    let img=document.querySelector("img");
    img.setAttribute("src",diurl);
});
async function getDimg()
{
   try{
    let resp=await axios.get(url);
    console.log(resp);
    return resp.data.message;
   }catch(e)
   {
    // return "/";
    console.log("Error:",e);
   }
}   