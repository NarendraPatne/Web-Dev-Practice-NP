// Dad joke api by default sends html document as response to request
// To get json data we need to send header data referencing about the json data requirement
// To create header we need to create a js object with specific headers for the particular api with its value required
// Then to pass the header we pass the header object with url to axios.get(url,head) method.
let url='https://icanhazdadjoke.com/';
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let res=await getJokes();
    let p=document.querySelector("p");
    p.innerText=res;
})
async function getJokes()
{
   try{
    const head={headers:{Accept:"text/plain"}}
    let res=await axios.get(url,head);
    console.log(res.data);
    return res.data;
   }catch(e)
   {
    console.log("Error:",e);
    return "No Joking!";
   }
}
getJokes();