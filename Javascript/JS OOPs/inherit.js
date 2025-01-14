class Person{
    constructor(name,age)
    {
        console.log("Parent class constructor.")
        this.name=name;
        this.age=age;
    }
    info(){
        console.log("Hi my name is:",this.name);
    }
}
// Inheriting the properties of Person class 
class Student extends Person{
    constructor(name,age,cgpa){
        // Calling Parent class constructor.
        super(name,age);
        this.cgpa=cgpa;
    }
}
// Iniheriting the perperties of Person class
class Teacher extends Person{
    constructor(name,age,sub)
    {
        // Calling Parent class constructor.
        super(name,age);
        this.sub=sub;
    }
}
const stu=new Student("harry",17,8.7);
const tea=new Teacher("Sejal",48,"DSA");
stu.info();
tea.info();