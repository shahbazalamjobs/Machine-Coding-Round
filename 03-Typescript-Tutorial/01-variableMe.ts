// -------- Types in TypeScript ---------

// 1. string

let greetings: string = "Hello Shahbaz";
console.log(greetings);
greetings.toLowerCase(); // Can perform string functions

// greetings = 10; ❌
// Error: Type 'number' is not assignable to type 'string'.

// To prevent "Cannot redeclare block-scoped variable" error:
export { }; // Marks this file as a module

// 💡 Why this is needed:
// If multiple files declare the same `let`/`const` variable globally,
// TypeScript merges them into a single global scope.
// Use `export {}` to isolate the file as a module and avoid variable redeclaration issues.


// 2. number

let userId: number = 33446.2;
userId.toFixed();

// Not necessary to explicitly give a type if assigning a number directly:
let userId2 = 33446.2;
userId2.toFixed(); // Inferred as number

// 3. boolean

let isLoggedIn: boolean = false;


// ✅ Type Inference in TypeScript

// TypeScript infers the type based on the assigned value:
let name = "Shahbaz";           // string
let age = 25;                   // number
let isActive = true;            // boolean
let numbers = [1, 2, 3];        // number[]
let user = { name: "Ali" };     // { name: string }

// ✅ So this:
let userId3 = 33446.2;

// Is equivalent to:
let userId4: number = 33446.2;

// Use explicit types when:
// - Writing function parameters or return types
// - Declaring variables without initialization
// - Dealing with `any`, `unknown`, or union types
// - You want self-documenting code

// Example:
let id: number | string;
id = 123;
id = "abc";



// [Note]: Type inference means TypeScript automatically figures
//  out the type of a variable, function return, or expression 
// without you explicitly writing it.

// 4. Don't Use Any

// ❌ Avoid implicit 'any'
let hero; // TypeScript infers type 'any' — no type safety

function getHero() {
    return "Thor";
}

hero = getHero(); // 'hero' is still of type 'any'

// ✅ Use type inference when assigning immediately
let hero1 = getHero(); // inferred as string

// ✅ Use explicit type when assigning later
let hero2: string;
hero2 = getHero();

// ✅ Use type inference when possible
// ✅ Use 'let hero: string;' if assigning later
// ❌ Avoid leaving variables untyped (implicitly 'any')
