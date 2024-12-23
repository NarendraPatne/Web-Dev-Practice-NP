async function greet()
{
    throw "404";
    console.log("Hello!");
    return 4;
    // resolve(1);
}
greet().then((res)=>{
    console.log("Promise fulfilled");
    console.log("Result was:",res);
}).catch((err)=>{
    console.log("Promise was rejected with error.");
    console.log("Error :",err);
});
