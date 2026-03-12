// 03-interfaces.ts

// Example of an interface in TypeScript

// 1. Basic Interface
interface Person {
    name: string;
    age: number;
}

// This interface describes a person with a name and age.

// 2. Optional Properties
interface User {
    username: string;
    email: string;
    age?: number; // age is optional
}

// Here, age is an optional property.

// 3. Function Types
interface Add {
    (a: number, b: number): number;
}

// The Add interface describes a function that takes two numbers and returns a number.

// 4. Indexable Types
interface StringArray {
    [index: number]: string;
}

// This interface allows an array of strings to be indexed by number.

// 5. Extending Interfaces
interface Employee extends Person {
    employeeId: number;
}

// The Employee interface extends the Person interface by adding an employeeId property.