class Mammal {
  constructor(name) {
    this.name = name;
    this.type = "Warm Blooded";
  }
  eat() {
    console.log("Eating!!");
  }
}
class Dog extends Mammal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("Bhow Bhow!");
  }
}
class Cat extends Mammal {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("Meow Meow!");
  }
}
const d = new Dog("Braunce");
const c = new Cat("Chuchi");
d.bark();
c.meow();
console.log(d);
console.log(c);