/**inheritance
 * if multiple classes have some same properties, make a parent class with those preperties
 *  "extends" keyword: reaches to ...
 *  "class Dog extends Animal"
 * then inside the child classes, super() to call paret properties
 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal{
  constructor(name, age, color) {
    super(name, age)
    this.color = color
  }

  meow(){
    console.log(`${this.name} is meowing`)
  }
}

class Bird extends Animal {
  constructor(name, age, species) {
    super(name, age)
    this.species = species;
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

const dog1 = new Dog('coffee', 'Deshi', 7)
// dog1.eat()
console.log(dog1)

const cat1 = new Cat("SP", 5, "white");
cat1.eat()
console.log(cat1);


const bird1 = new Bird("kokil", 2, 'Deshi');
console.log(bird1);
