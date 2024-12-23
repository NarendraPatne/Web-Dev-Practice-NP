function Sum(a,b=4){
    return a+b;
}
console.log(Sum(2,3));
console.log(Sum(2));
function Sum1(a=2,b){ // Wrong default para use
    return a+b;
}
console.log(Sum1(2,4));
console.log(Sum1(4));
