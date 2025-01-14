// Factory function creates the object of particular type and return them
// It contains the code for object creation
// Factory Function
function createPerson(name,age)
{
    const person={
        name:name,
        age:age,
        intro:()=>{
            console.log(`Hello! I am ${name} and my age is ${age}`);
        },
        eat:()=>{
            console.log("I am eating biryani.");
        }
    }
    return person;
}
const p1=createPerson("Shalimar",23);
p1.intro();
p1.eat();
const p2=createPerson("Shaktiman",99);
p2.intro();
p2.eat();
// Below comparison of the intro function of both objects returns false
console.log(p1.intro==p2.intro);
// this is because factory function creates the separate copy of the similar functions 
// This takes more memory and considered as inefficient way to create similar objects.
// To solve this disadvantage of factory functions we use Constructor Functions.