let arr=[1,2,3,4,5];
let narr=arr.map((e)=>{
    return e*e;
});
arr.forEach((e)=>{
    console.log(e);
});
narr.forEach((e)=>{
    console.log(e);
});
console.log("-------------------------------------------");
let students=[
    {
        name:"a",
        per:84
    },
    {
        name:"b",
        per:93
    },
    {
        name:"c",
        per:82
    },
    {
        name:"d",
        per:84
    }
];
let gpa=students.map((stu)=>{
    return stu.per/10;
})
students.forEach((s)=>{
    console.log(s);
});
gpa.forEach((s)=>{
    console.log(s);
});