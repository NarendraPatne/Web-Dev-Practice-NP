let h1=document.querySelector("h1");
function changeColor(color,delay,nextColorchange)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // if(nextColorchange)
            // {
            //     nextColorchange();
            // }
            h1.style.color=`${color}`;
            resolve(1);
        },delay)
    })
}
// changeColor("violet",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("red",1000);
//         });
//     });
// });
// Solution of Callback hell using Promises
changeColor("purple",1000)
.then(()=>{
    console.log("Violet---");
    return changeColor("green",1000);
}).then(()=>{
    console.log("green");
    return changeColor("orange",1000);
}).then(()=>{
    console.log("orange");
    return changeColor("red",1000);
})