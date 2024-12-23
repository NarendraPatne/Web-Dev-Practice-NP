let n=10;
console.log(`1 to ${n} Numbers:`);
for(let i=1;i<=10;i++)
{
    console.log(i);
}
n=20
console.log(`Odd Numbers upto ${n}:`);
for(let j=1;j<=n;j++)
{
    if(j%2==1)
    {
        console.log(j);
    }
}
n=25;
console.log(`Even Numbers upto ${n}:`);
for(let j=1;j<=n;j++)
{
    if(j%2==0)
    {
        console.log(j);
    }
}
let x=prompt("Give Number for Multiplication Table:");
console.log(`Multiplication Table of ${x} is:`);
for(let i=1;i<=10;i++)
{
    console.log(`${i}*${x}=${i*x}`);
}
