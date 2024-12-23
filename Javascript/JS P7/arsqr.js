// let sqr=(n)=>{
//     return n*n;
// }
let sqr=(n)=>n*n;
console.log(sqr(2));
console.log("---------------------------------");
let id=setInterval(()=>{
    console.log("Hello World!")
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("Interval Cleared");
},10000);
conso