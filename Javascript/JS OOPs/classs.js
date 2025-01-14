class Person{
    // constructor keyword is used to define the constructor for the class used for object initialization
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    // no need to write function keyword to define the class method.
    info() {
        console.log("My name is:",this.name);
    }
}
// to create object of the class we use new keyword
// Syntax:
//  const obj=new Classn(args);
const p1=new Person("akshay",21);
p1.info();
const p2=new Person("bkl",26);
p2.info();
console.log(p1.info === p2.info)