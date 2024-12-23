let count=0;
let num=6414;
let c=num;
while(num!=0)
{
    count=count+1;
    num=Math.floor(num/10);
}
console.log(`Number of Digits in ${c} is: ${count}`);