// ✅ Type In Functions

// Type inference works well with variables, but not always with function parameters and return types.

// ❌ Example 1: Function without type annotations

function addTwo(num) {
    num.toLowerCase();
    // ❌ This will not throw an error at compile time because 'num' is inferred as 'any'
    // Even though 'toLowerCase' is a string method, we're calling it on a number.

    return true;
    // ❌ We can return a boolean, string, or number — and still no type error is shown.
}

// ⚠️ Problem:
// - The parameter 'num' is inferred as 'any'.
// - This defeats the purpose of TypeScript's type safety.
// - Any type of value (string, number, boolean) can be passed, and any type can be returned.

// ✅ Solution: Explicitly define parameter and return types

function addThree(num: number): number {
    return num + 3;
    // ✔️ TypeScript now ensures 'num' is a number
    // ✔️ Return type is also enforced
}



// ✅ Example 2: Function that returns a string

function greet(name: string): string {
    return "Hello, " + name;
}



// ✅ Example 3: Function with multiple parameters and default value

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    // ✔️ 'isPaid' has a default value, so it becomes optional when calling the function
    console.log(name, email, isPaid);
};

let signupUser = (name: string, email: string, isPaid: boolean) => {
    // ❗ 'isPaid' has no default, so it must be provided explicitly
    console.log(name, email, isPaid);
};

// Correct usage
signupUser('Shahbaz', 'shahbaz@mail.com', false);

// Also correct — 'isPaid' will default to false
loginUser('Shahbaz', 'shahbaz@mail.com');

// ❌ If you call signupUser without the third argument, it will throw an error
// signupUser('John', 'john@mail.com'); // ❌ Error: Expected 3 arguments, but got 2

// 📝 Tip:
// - You can make a parameter optional by either giving it a default value
// - Or using the `?` syntax: isPaid?: boolean



// ✅ Example 4: Function returning a union type
function getValue(val: number): string | boolean {
    if (val > 5) {
        return true;
    }
    return '200 OK';
}



// ✅ Example 5: Inference in array methods

const heros = ['thor', 'ironman', 'spiderman'];
// const heros = [1, 2, 3]; // In this case, TypeScript infers number

heros.map((hero): string => {
    return `hero is ${hero}`;
});

// 📝 Notes:
// - TypeScript automatically infers the type of 'hero' based on the array.
// - So there's no need to explicitly type the parameter.
// - However, you *can* annotate the return type of the arrow function (`: string`).



// ✅ Example 6: Function with 'void' return type
function consoleError(errMsg: string): void {
    console.log(errMsg);
}

// 📝 'void' means the function does not return anything.


// ✅ Example 7: Function with 'never' return type

function handleError(errMsg: string): never {
    throw new Error(errMsg);
}

// 📝 'never' is used when a function:
// - Never returns (e.g., throws an error)
// - Or has an infinite loop



export { }