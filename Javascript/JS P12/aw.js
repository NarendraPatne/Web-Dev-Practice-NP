let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Prommise is resolved");
        resolve(1);
    },3300)
});
async function caller(params) {
    let res= await promise;
    console.log("res");
    console.log("hello");
}
caller();