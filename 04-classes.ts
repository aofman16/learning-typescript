// Example TypeScript classes demonstrating classes, constructors, inheritance, and access modifiers

// Base class
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): string {
        return `${this.name} makes a noise.`;
    }
}

// Inherited class
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): string {
        return `${this.name} barks.`;
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): string {
        return `${this.name} meows.`;
    }
}

// Instantiate the classes
const dog = new Dog('Rex');
const cat = new Cat('Whiskers');

console.log(dog.speak()); // Rex barks.
console.log(cat.speak()); // Whiskers meows.