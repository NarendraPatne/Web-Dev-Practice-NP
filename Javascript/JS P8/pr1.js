let arr=[10,20,30,40,50];
let isMul10=arr.every((e)=>{
    if(e%10==0)
    {
        return true;
    }else{
        return false;
    }
});
console.log(isMul10);
let min=arr.reduce((min,e)=>{
    if(e<min){
        return e;
    }else{
        return min;
    }
});
console.log(min);