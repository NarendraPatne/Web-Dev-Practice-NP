// In js arrays are also considered as objects 
//  As arrays are also objects they also inherit the object prototype'
// array also has its own methods and also we can define our new method for the array
let arr=[1,23,4,3];
console.log(arr);
let str="sting"
console.log(str);
arr.hi=function(){
    console.log("Hi i am arr");
};