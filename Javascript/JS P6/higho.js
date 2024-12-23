function Mulwel(func,n)
{
   for(let i=1;i<=n;i++)
    {
        func(i);
    } 
}
function Welcome(i){
    console.log("Welcome to the Jungle!! "+i);
}
Mulwel(Welcome,5);