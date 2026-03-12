// 05-advanced.ts

// Examples of advanced TypeScript concepts:

// 1. Generics
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>('Hello Generics')); // Output: Hello Generics

// 2. Unions
function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'string') {
        return padding + value;
    }
    return Array(padding + 1).join(' ') + value;
}
console.log(padLeft('Hello World', 4)); // Output: '    Hello World'

// 3. Type Guards
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
interface Fish {
    swim: () => void;
}
interface Bird {
    fly: () => void;
}
const pet: Fish | Bird = { swim: () => console.log('swimming') };
if (isFish(pet)) {
    pet.swim(); // Output: swimming
}

// 4. Utility Types
type Person = { name: string; age: number; }
type ReadonlyPerson = Readonly<Person>;
const person: ReadonlyPerson = { name: 'Alice', age: 30 };
// person.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
