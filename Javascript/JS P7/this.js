const Student={
    name:"A",
    roll:12,
    age:18,
    eng:86,
    math:87,
    sci:89,
    getAvg()
    {
        let a=(this.eng+this.math+this.sci)/3;
        console.log(`${this.name} Got average marks: ${a}`);
    }
}
console.log(Student.name,Student.roll,Student.age);
Student.getAvg();