function greet(name)
{
    return `Hi! ${name}`;
}
function greeting(gfun,name,msg)
{
    console.log(`${gfun(name)}  ${msg}`);
}
greeting(greet,"Ram"," Jai Shree Ram Ji ki!!");