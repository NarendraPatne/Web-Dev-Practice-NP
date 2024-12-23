let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 3 Seconds!");
        resolve(2);
    },3000);
});
p1.then(()=>{
    console.log("P1 is done");
    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise 2");
        },2000);
    })
    return p2;
}).then(()=>{
    console.log("We are done finally!");
});