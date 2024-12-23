let h1=document.querySelector("h1");
function changeColor(color,delay,nextColorchange)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=`${color}`;
            resolve(1);
        },delay)
    })
}
// Traditional Method for execution of functions one after another
// changeColor("violet",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("red",1000);
//         });
//     });
// });
// Solution of Callback hell using Promises
// changeColor("purple",1000)
// .then(()=>{
//     console.log("Violet---");
//     return changeColor("green",1000);
// }).then(()=>{
//     console.log("green");
//     return changeColor("orange",1000);
// }).then(()=>{
//     console.log("orange");
//     return changeColor("red",1000);
// })
// Using async function and await keyword to solve execute the functions one after another
async function caller()
{
    await changeColor("purple",1000);
    await changeColor("green",1000);
    await changeColor("orange",1000);
     changeColor("blue",1000);
}
caller();