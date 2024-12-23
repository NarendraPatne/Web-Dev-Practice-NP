let h1=document.querySelector("h1");
function changeColor(color,delay,nextColorchange)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let n=Math.floor(Math.random()*5)+1;
            if(n>3)
            {
                reject("Nikal");
            }
            h1.style.color=`${color}`;
            console.log("Color:"+color);
            resolve(1);
        },delay)
    })
}
async function caller()
{
    try{
        await changeColor("purple",1000);
    await changeColor("green",1000);
    await changeColor("orange",1000);
    await changeColor("blue",1000);
    }catch(err){
        console.log("Error :",err);
    }
    let x=5;
    console.log("Value of x is:"+x);
    console.log("Update value is:"+x+5);
}
caller();