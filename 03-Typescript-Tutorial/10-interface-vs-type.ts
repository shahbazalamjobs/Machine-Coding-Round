

/* ------------ Interface Vs Type --------- */

// ✅ TYPE vs INTERFACE – TypeScript Notes using Pareto Principle

// ✅ 1. Basic Object Shape – Both work
type UserType = {
    name: string;
    age: number;
};

interface UserInterface {
    name: string;
    age: number;
}

// ✅ 2. Extending Types

// Interface extending interface
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

// Type using intersection
type AnimalType = { name: string };
type DogType = AnimalType & { breed: string };

// ✅ 3. Tuples and Functions – Only with `type`

type Point = [number, number];

type Greet = (name: string) => string;
const sayHello: Greet = (name) => `Hello, ${name}`;

// ✅ 4. Union and Intersection – Only with `type`

type Status = "success" | "error";
type ID = string | number;

type A = { a: number };
type B = { b: number };
type AB = A & B;

// ✅ 5. Declaration Merging – Only with `interface`

interface Box {
    height: number;
}
interface Box {
    width: number;
}
const myBox: Box = { height: 100, width: 200 };

// ❌ `type` cannot do this:
// type Box = { height: number };
// type Box = { width: number }; // Error: Duplicate identifier

// ✅ 6. Use in React (or Component Props)

interface ButtonProps {
    label: string;
}
const Button = (props: ButtonProps) => {
    return <button>{ props.label } </button>;
};

// ✅ 7. Primitives and Utility – Only with `type`
type MyString = string;
type Callback = () => void;

// ✅ 8. Summary / Rule of Thumb (in comments)

/*
🟢 Use `interface` when:
- Defining object shape
- You need to extend or merge multiple interfaces
- Writing React props or OOP-style code

🟣 Use `type` when:
- Creating unions, intersections, primitives
- Working with tuples or function types
- You want advanced type composition

🧠 Extra:
- Interfaces support declaration merging (combine shapes)
- Types are more flexible (good for modern functional code)
*/


export {}