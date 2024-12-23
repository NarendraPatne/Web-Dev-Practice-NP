let p1=new Promise(function(resolve,reject){
    // console.log("Promise 1 is Pending.");
    setTimeout(()=>{
        console.log("Promise First log");
        resolve(1);
    },3000);
});
let p2=new Promise(function(resolve,reject){
    // console.log("Promise 2 is pending.")
   setTimeout(()=>{
    console.log("Promise Second log.");
    reject(new Error("second promise error"));
   },3000)
});


// // ----------------------------------
// console.log("Hello One!");
// setTimeout(function(){
//     console.log("Hello in 2 seconds");
// },2000);
// console.log("My god!");
// console.log(p1); 
// console.log(p2); 
// To get the value returned by resolve
p1.then((value)=>{
        console.log(value);
});
// To catch the error thrown by reject
p2.catch((error)=>{
    console.log("Error occurred in P2");
});

p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})