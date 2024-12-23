let arrAvg=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum/(arr.length);
}
let arr=[10,20,30];
console.log("Array is:",arr)
console.log("Average of array is:",arrAvg(arr));
let isEven=(num)=>{
    return (num%2==0);
};
console.log(isEven(4));