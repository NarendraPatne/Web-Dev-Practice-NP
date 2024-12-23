let arr=[1,2,3,4,5,6,7,8,9,10];
let earr=arr.filter((e)=>{
    return e%2==0;
});
let oarr=arr.filter((e)=>{
    return e%2!=0;
});
console.log("Even Array Elements:");
earr.forEach((e)=>{
    console.log(e);
});
console.log("Odd Array Elements:");
oarr.forEach((e)=>{
    console.log(e);
});