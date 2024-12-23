let arr=[1,2,3,4];
let fin=arr.reduce((acc,e)=>{
    console.log(acc);
    return acc+e;
});
console.log(fin);