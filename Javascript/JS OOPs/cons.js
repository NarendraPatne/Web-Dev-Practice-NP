// Constructor Function: Doesnt return anything and start with Capital letters.
function Create(name, age) {
  // constructor function doesnt create the separate function for each object it keeps it same for all the objects
  // it uses new keyword to create new blank plain js object
  // and accesses the new object using the this keyword to assign it the values.
  this.name = name;
  this.age = age;
  // Above code is considered as the code in function not in object.
  // Below we are defining the intro function for the object this method creates separate copy of method for each obj
  this.intro = () => {
    console.log(`Hello! My name is ${name} and age is ${age}`);
  };
}
// Below we are adding the method to the prototype of the Create function
// This way to add method is the efficient way
// As it is shared between all the objects created from Create Constructor function.
// We can also define the method in the prototype of Constructor function and use it in the previously created objects.
Create.prototype.intro2 = function(){
  console.log(`Hello! I am ${this.name} and my age is ${this.age}`);
};
let p1 = new Create("Ram", 38);
// console.log(p1);
// p1.intro();
// p1.intro2();
Create.prototype.mage=function()
{
  console.log(`My age is ${this.age}`);
}
p1.mage();