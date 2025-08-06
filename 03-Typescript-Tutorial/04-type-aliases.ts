
// ✅ Type Aliases in TypeScript

// 🔹 1. Basic Type Alias
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user1: User = {
  name: 'Shahbaz',
  age: 25,
  isAdmin: false
};

// 🔹 2. Function with Type Alias as Parameter
type UserDetails = {
  name: string;
  email: string;
  isPaid: boolean;
};

function createUser(user: UserDetails): void {
  console.log(user);
}

createUser({
  name: 'Anuj',
  email: 'anuj@mail.com',
  isPaid: true
});

// 🔹 3. Union Type Alias
type ID = string | number;

let userId: ID = 101;
userId = 'abc123';

// 🔹 4. Function Type Alias
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
};

// 🔹 5. Optional & Readonly Properties
type Product = {
  id: number;
  name: string;
  description?: string; // Optional
  readonly price: number; // Readonly
};

const book: Product = {
  id: 1,
  name: "TS Handbook",
  price: 299
};

// book.price = 500; // ❌ Error: Cannot assign to 'price' because it is a read-only property.

// 🔹 6. Type Aliases with Arrays and Tuples
type StringArray = string[];
type UserTuple = [string, number];

const tags: StringArray = ['ts', 'js'];
const userTuple: UserTuple = ['Shahbaz', 25];

// 🔹 7. Combining Types (Intersection)
type Admin = {
  isAdmin: true;
};

type Employee = {
  name: string;
  department: string;
};

type AdminEmployee = Admin & Employee;

const manager: AdminEmployee = {
  isAdmin: true,
  name: 'Alice',
  department: 'HR'
};


