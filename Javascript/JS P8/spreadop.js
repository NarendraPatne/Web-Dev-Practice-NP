let arr=[1,2,3,4,5];
console.log(arr);
console.log(...arr);
let arr2=arr;
let arr3=[...arr,...arr2];
console.log(arr2);
console.log(arr3);
console.log("----------------------------------");
let arr4=[..."hello"];
console.log(...arr4);
console.log(..."adfgfag");
console.log(Math.min(...arr));