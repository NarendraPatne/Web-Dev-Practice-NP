let nums=[1,2,3,4,5];
let sqr=nums.map((n)=>{
    return n*n;
});
let plus5=nums.map((e)=>{
    return e+5;
});
console.log("Nums:",nums);
console.log("Plus 5:",plus5);
console.log(sqr);
let sum=sqr.reduce((acc,e)=>{
    return acc+e;
});
console.log(sum);
console.log("---------------------------------");
let starr=["apple","banana","cat","dog"];
let cstar=starr.map((e)=>{
    return e.toUpperCase();
})
console.log(starr);
console.log(cstar);
console.log("-----------------------------------");
function doubleAndReturnArgs(arr,...args)
{
    // let newarr=arr.map((e)=>{
    //     return e;
    // });
    // let dargs=args.map((e)=>{
    //     return e*2;
    // });
    // return [newarr,...dargs];
    return [...arr,...args.map((e)=>{
        return e*2;
    })]
}
console.log(doubleAndReturnArgs([1,2,3,4],5,6,7));
console.log("-----------------------------------");
const Obj1={
    a:1,
    b:2,
    c:3
};
const Obj2={
    d:4,
    e:5,
    f:6
};
function mergeObjects(ob1,ob2)
{
    const mobj={...ob1,...ob2};
    return mobj;
}
console.log(mergeObjects(Obj1,Obj2));
