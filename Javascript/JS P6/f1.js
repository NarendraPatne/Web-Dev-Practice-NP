// function Sumn(n)
// {
//     let s=0;
//     for(let i=1;i<=n;i++)
//     {
//         s+=i;
//     }
//     return s;
// }
// console.log(Sumn(5));
function conAr(arr)
{
    let str="";
    for(let i=0;i<arr.length;i++)
    {
        str+=arr[i];
    }
    return str;
}
let arr=["a","b","c","d","IUUHIX    "];
console.log(conAr(arr));