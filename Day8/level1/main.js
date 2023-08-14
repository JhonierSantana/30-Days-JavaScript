// Create an empty object called dog
const dog = {};

// Print the dog object on the console
console.log(dog);

// Add properties to the dog object
dog.name = 'Buddy';
dog.legs = 4;
dog.color = 'Brown';
dog.age = 3;
dog.bark = function() {
  return 'woof woof';
};

// Get values from the dog object
const name = dog.name;
const legs = dog.legs;
const color = dog.color;
const age = dog.age;
const barkSound = dog.bark();

// Print the values on the console
console.log('Name:', name);
console.log('Legs:', legs);
console.log('Color:', color);
console.log('Age:', age);
console.log('Bark:', barkSound);

// Set new properties to the dog object
dog.breed = 'Golden Retriever';
dog.getDogInfo = function() {
  return `${this.name} is a ${this.breed} with ${this.legs} legs, ${this.color} fur, and is ${this.age} years old. It goes ${this.bark()}.`;
};

// Get dog information using the getDogInfo method
const dogInfo = dog.getDogInfo();
console.log(dogInfo);
