function getNum()
{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve(1);
       },1000);
    });
}
async function caller()
{
    // Below code executes all the instances of getNum() function at same time 
    // getNum();
    // getNum();
    // getNum();
    // If we need to execute the functions one after completion of another we can do in following ways:
    // Synchronizing of functions using then() method
    // getNum()
    // .then(()=>{
    //     getNum()
    //     .then(()=>{
    //         getNum();
    //     })
    // })
    // Synchronizing of functions using await keytord
    await getNum();
    await getNum();
    await getNum();
    console.log("hi")
}
caller();