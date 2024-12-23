// function OddEvenFactory(req)
// {
//     if(req=="odd")
//     {
//         let odd=function(n){
//             return(!(n%2)==0);
//         }
//         return odd;
//     }else if(req=="even"){
//         let even=function(n){
//             return((n%2)==0);
//         }
//         return even;
//     }else{
//         console.log("Wrong Request");
//     }
// }
// let req="odd";
// let fun=OddEvenFactory(req);
// console.log(fun(7));
function OddEvenFactory(req)
{
    if(req=="odd")
    {
        return function(n)
        {
            console.log(!(n%2==0));
        }
    }
    else if(req=="even")
    {
        return function(n)
        {
            console.log((n%2==0));
        }
    }else{
        console.log("Wrong Request");
    }
}