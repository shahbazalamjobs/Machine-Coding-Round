

/* -------------- Interface ------------ */

// An interface in TypeScript is used to define the shape of an object 
// — it describes the structure, not implementation.

interface User1 {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail: () => string,
    // starTrail(): string // another simple way to write function
    getCoupon(couponname: string, value: number): number
}

interface User1 {
    githubToken: string
}

interface Admin extends User1 {
    role: 'admin' | 'ta' | 'learner'
}

const shahbaz: Admin = {
    dbId: 22, email: 's1@mail.com', userId: 2201,
    role: 'admin',
    githubToken: 'token',
    startTrail: () => {
        return 'trial started'
    },
    getCoupon: (name: 'shahbaz', off = 10) => {
        return 10;
    }
}

shahbaz.email = 's2@mail.com'
// shahbaz.dbId = 23 // error cannot assign readonly value 

/* -------------- Extra Notes ------------ */

// ✅ 1. Basic Interface Declaration
interface User {
    name: string;
    age: number;
}

const user1: User = {
    name: "Shahbaz",
    age: 28,
};

// ✅ 2. Optional Properties
interface Product {
    name: string;
    price?: number;
}

const item: Product = {
    name: "Pen",
    // price is optional
};

// ✅ 3. Readonly Properties
interface Location {
    readonly lat: number;
    readonly long: number;
}

const loc: Location = {
    lat: 18.5,
    long: 73.9,
};
// loc.lat = 19.0; ❌ Error: Cannot assign to 'lat' because it is a read-only property

// ✅ 4. Interface with Methods
interface Auth {
    username: string;
    login(): void;
}

const authUser: Auth = {
    username: "admin",
    login() {
        console.log("Logged in");
    },
};

// ✅ 5. Interface as Function Type
interface AddFn {
    (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;

// ✅ 6. Extending Interfaces (Inheritance)
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: "Buddy",
    breed: "Labrador",
};

// ✅ 7. Interface vs Type Alias (Key Difference)
interface Car {
    model: string;
}

type Bike = {
    model: string;
};

// Both are similar, but interfaces are preferred for object shapes and extension

// ✅ 8. Interface with Index Signature
interface StringNumberMap {
    [key: string]: number;
}

const scores: StringNumberMap = {
    math: 90,
    science: 85,
};

// ✅ 9. Interface with Arrays
interface StringArray {
    [index: number]: string;
}

const colors: StringArray = ["red", "blue", "green"];

// ✅ 10. Implementing Interface in Class
interface Person {
    name: string;
    greet(): void;
}

class Employee implements Person {
    constructor(public name: string) { }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}
const emp = new Employee("Alice");
emp.greet();


export { }