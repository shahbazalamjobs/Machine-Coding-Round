
let score = 10
// score = '20' // Type 'string' is not assignable to type 'number'.

// to add 2 or more different type of value we can use union with |

let score2: number | string = 30
score2 = '40'

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let shahbaz: User | Admin = { name: 'Shahbaz', id: 345 }
shahbaz = { username: '@sa', id: 345 }


function getDbId(id: number | string) {
    // make some API calls
    console.log(`Db id is ${id}`)
}

getDbId('20');
getDbId(30);


// array

let data1: string[] = ['1', '2', '3']
let data2: number[] = [4, 5, 6]

let data3: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']
data3 = ['a', 'b', 4, 5]

// if we have only number (number)[] then array can have only number and so with string (string)[]
// if we use (number[] | string[]) then we can have array of only string values or only number values
// if we use (number, string)[] then we can have combination of both number and string


let seatAllotment: "upple" | "lower" | "middle"

seatAllotment = 'lower'
// seatAllotment = 'chair' // will give error




/* ----------- Extra Notes -------------- */

// ✅ 1. Union Type Basics
let value: string | number;
value = "hello";
value = 42;
// value = true; ❌ Error: Type 'boolean' is not assignable

// ✅ 2. Union in Function Parameters
function printId(id: string | number) {
    console.log("ID:", id);
}
printId("abc");
printId(123);

// ✅ 3. Type Narrowing using typeof
function handleInput(input: string | number) {
    if (typeof input === "string") {
        console.log("Uppercase:", input.toUpperCase());
    } else {
        console.log("Fixed:", input.toFixed(2));
    }
}

// ✅ 4. Union with Arrays
let mixedArray: (string | number)[] = [1, "two", 3, "four"];

// ✅ 5. Literal Unions
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction) {
    console.log("Moving:", direction);
}
move("up");
// move("forward"); ❌ Error

// ✅ 6. Union with Custom Types
type Dog = { bark: () => void };
type Cat = { meow: () => void };
type Pet = Dog | Cat;

function speak(pet: Pet) {
    // Custom type narrowing
    if ("bark" in pet) {
        pet.bark();
    } else {
        pet.meow();
    }
}

// ✅ 7. Discriminated Unions
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side ** 2;
    }
}

// ✅ 8. Union Return Types
function getValue(flag: boolean): string | number {
    return flag ? "Yes" : 0;
}

// ✅ 9. Union with Interface
interface Admin_ {
    role: "admin";
    accessLevel: number;
}
interface User_ {
    role: "user";
    name: string;
}
type Person = Admin_ | User_;

function describePerson(p: Person) {
    if (p.role === "admin") {
        console.log("Admin Access:", p.accessLevel);
    } else {
        console.log("User Name:", p.name);
    }
}

// ✅ 10. Common Use Case: Optional Values
function greet(name: string | undefined) {
    if (name) {
        console.log("Hello,", name);
    } else {
        console.log("Hello, Guest");
    }
}
