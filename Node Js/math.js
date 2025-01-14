// Module.exports allows us to export some data from one file 
// This can be collected in another file by require("path_of_source")
// WAY 1: combining in one object and exporting it
// const sum=(a,b)=>a+b;
// const sub=(a,b)=>a-b;
// const mul=(a,b)=>a*b;
// const div=(a,b)=>a/b;
// const opr={
//     addition:sum,
//     subtraction:sub,
//     multiplication:mul,
//     division:div
// };
// module.exports=opr;
// --------------------------------------------------
// Way 2: directly exporting the object at the time of definition
// module.exports={
//         addition:sum,
//         subtraction:sub,
//         multiplication:mul,
//         division:div
//     };
// ---------------------------------------------------
// WAY 3: exporting each thing separately
// module.exports.sum=(a,b)=>a+b;
// module.exports.sub=(a,b)=>a-b;
// module.exports.mul=(a,b)=>a*b;
// module.exports.div=(a,b)=>a/b;
// Way 4: exporting each thing using exports only
// exports can only be treated as module.exports only when it is treated as object i.e  exports.somedata=val
// exports.sum=(a,b)=>a+b;
// exports.sub=(a,b)=>a-b;
// exports.mul=(a,b)=>a*b;
// exports.div=(a,b)=>a/b;
// If we do not use . (dot) with exports i.e. do not treat it as object then it is considered as variable
// exports=3;
// exports=3;
// exports must be treated like object if its used alone
// exports.b=3;
// exports.a=3;
// In below lines only last line value is considered
// module.exports.a=4;
// module.exports=5;
// module.exports=6;
// module.exports=7;
