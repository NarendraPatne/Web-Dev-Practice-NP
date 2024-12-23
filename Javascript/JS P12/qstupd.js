let url="http://universities.hipolabs.com/search?name=";
let inp=document.querySelector("#cont");
let button=document.querySelector("button");
button.addEventListener("click",async()=>{
    let country=inp.value;
    console.log(country);
    let colleges=await getCollege(country)
    show(colleges);
});
function show(colleges)
{
        let list=document.querySelector("#list")
    for(col of colleges)
    {
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}
async function getCollege(country) {
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log(e);
        return [];
    }
};