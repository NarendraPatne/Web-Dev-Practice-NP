let arr=[23,54,64,22,42,56,75];
let max=arr.reduce((acc,e)=>{
    if(e>acc){
        return e;
    }else{
        return acc;
    }
});
console.log(max);