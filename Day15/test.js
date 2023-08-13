class Animal {
    constructor(name, age, color, legs, raze) {
      this.name = name
      this.age = age
      this.color = color
      this.legs = legs
      this.raze = raze
    }
    toString() {
      return `${this.name} is a ${this.color}, ${this.raze} dog with ${this.legs} legs.`;
    }
  }
  class Dog extends Animal {
    constructor(name, age, color, legs, raze) {
      super(name, age, color, legs, raze);
    }
  
    toString() {
      return `${this.name} is a ${this.color}, ${this.raze} dog with ${this.legs} legs.`;
    }
  }
  class Cat extends Animal {
    constructor(name, age, color, legs, raze) {
      super(name, age, color, legs, raze);
    }

    toString() {
      return `${this.name} is a ${this.color}, ${this.raze} dog with ${this.legs} legs.`
    }
  }
  
  const Dogg = new Dog('Kyra', 2, 'black', 4, 'Pastor aleman')
  const Catt = new Cat('Lily', 4, 'white', 4, 'Siamese')
  
  console.log(Dogg.toString())
  console.log(Catt.toString())