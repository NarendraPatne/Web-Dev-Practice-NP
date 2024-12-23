function saveDb(data)
{
    return new Promise((resolve,reject)=>{
        let ispeed=Math.floor(Math.random()*10)+1;
        if(ispeed>4)
        {
            resolve("Data was saved");
        }else{
            reject("Failure weak connection");
        }
    });
}
saveDb("data").then(()=>{
    console.log("Promise was Resolved");
}).catch(()=>{
    console.log("Promise was Rejected");
});