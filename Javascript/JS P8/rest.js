Disp(2,3,5,3,53,2,4);
function Disp(...args){
    for(let i=0;i<args.length;i++)
    {
        console.log(args[i]);
    }
}
console.log("------------------------");
console.log("Do your work.",Sum(2,34,35,63,2,4,5,3,66));
function Sum(msg,...ar)
{
    console.log(msg);
    // let sum=[...arguments].reduce((acc,e)=>{
    //     return acc+e;
    // });
    let sum=ar.reduce((acc,e)=>{
        return acc+e;
    });
    return sum;
}
