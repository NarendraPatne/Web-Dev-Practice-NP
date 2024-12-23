console.log("Beginning of Set Interval code:");
let id=setInterval(()=>{
    console.log("Hello!");
},500);
console.log(id);
let id1=setInterval(()=>{
    console.log("Hello! Bhai!!");
},1000);
console.log(id1);
setTimeout(()=>{
    clearInterval(id);
},3000);