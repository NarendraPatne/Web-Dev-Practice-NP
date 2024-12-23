// Axios is a js library to make HTTP requests
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let p=document.querySelector("p");
    let fact=await getfact();
    console.log(fact);
    p.innerText=`${fact}`;
})
let url='https://catfact.ninja/fact';
async function getfact()
{
    // axios.get() method directly returns json data rather than raw data which was returned by fetch() method.
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e)
    {
        return "No fact only lies.";
    }
}
