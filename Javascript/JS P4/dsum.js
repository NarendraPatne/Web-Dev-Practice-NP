let num=345;
let sum=0;
let cnum=num;
while(cnum>0)
{
    let dig=cnum%10;
    cnum=Math.floor(cnum/10);
    sum+=dig;
}
console.log(`Sum of digits in ${num} is:${sum}`);