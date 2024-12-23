//  Function Expression Anonymous
let sum=function(a,b){
    return a+b;
}
//  Function Expression Named
let add=function Sum(a,b){
    return a+b;
}
// Arrow Function
let s=(a,b)=>{
    return a+b;
}
console.log(sum(5,5));
console.log(add(5,5));
console.log(s(5,5));
