// Function Scope
function print()
{
    let x=3;
    const y=3;
    var z=3;
    console.log(x+y);
}
print();
// console.log(x);
// console.log(y);
// console.log(z);
// --------------------------------------------------------------------
// Block Scope: Only let and const follows not var
{
    let r=3;
    const s=4;
    console.log(r+s);
    var v=5
}
// console.log(r+s);
console.log(v);
// --------------------------------------------------------------------
// 

