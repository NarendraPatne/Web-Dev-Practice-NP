// first();
// function first(){
//     console.log("Hello through First Function!!");
// }
// function isAdult(age)
// {
//     if(age>=18)
//     {
//         console.log("You are An Adult");
//     }else{
//         console.log("You are kid or teenager!");
//     }
// }
// function rollDice()
// {
//     console.log(Math.floor(Math.random()*6)+1);
// }
// isAdult(12);
// rollDice();
// function printDetails(name,age)
// {
//     console.log(`Your name is ${name} and age is ${age}`);
// }
// printDetails("Narendra",20);
// function Sum(a,b)
// {
//     console.log(a+b);
// }
// Sum(50,49);
// function calcAvg(a,b,c)
// {
//     console.log((a+b+c)/3);
// }
// calcAvg(4,4,4);
// function mulTab(x)
// {
//     for(let i=1;i<=10;i++)
//     {
//         console.log(`${x}*${i}=${i*x}`);
//     }
// }
function rSum(a,b)
{
    return a+b;
}
let s=rSum(4,8);
console.log(s);
// To perform sum of three numbers from sum function with two arguments use following trick
console.log(rSum(rSum(1,2),3));