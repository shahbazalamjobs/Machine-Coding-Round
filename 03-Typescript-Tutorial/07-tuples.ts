
// Tuple 


// ✅ Tuple Declaration
let data: [string, number];

// ✅ Correct assignment
data = ['hello', 5];

// ❌ Incorrect assignments
// data = [5, 'hello'];         // Error: Order must be [string, number]
// data = ['hello', 5, true];   // Error: Too many elements
// data = ['hello', true];      // Error: Second element must be a number

// ✅ Tuple enforces fixed types and order

// ⚠️ But push is allowed (not strictly type-checked)
data.push(10);                 // No error, even though it's beyond declared length
// data.push(true);            // Error: boolean is not assignable to type string | number

// ✅ Valid assignment to tuple elements
data[0] = 'bye';               // OK
// data[1] = 'bye';            // Error: 'bye' is not a number

// 📝 Summary:
// - Tuples define a fixed-length array with specific types per position
// - TypeScript does not strictly prevent push (unless using `as const` or readonly tuple)
// - Index-based assignment is type-checked






/* ---------------- Extra Notes ------------ */

// ✅ 1. Basic Tuple Declaration
let person: [string, number];
person = ["Alice", 30];
// person = [30, "Alice"]; ❌ Error: Order matters in tuples

// ✅ 2. Accessing Tuple Elements
console.log(person[0].toUpperCase()); // "ALICE" 
console.log(person[1].toFixed(2));    // "30.00"

// ✅ 3. Tuple with Optional Elements
let user: [string, number?];
user = ["Max"];
user = ["Max", 25];

// ✅ 4. Readonly Tuple
const coordinates: readonly [number, number] = [10, 20];
// coordinates[0] = 15; ❌ Error: Cannot assign to read-only property

// ✅ 5. Tuple with Spread (Rest) Elements
type StringNumberBooleans = [string, number, ...boolean[]];
const example1: StringNumberBooleans = ["test", 1, true, false, true];

// ✅ 6. Destructuring a Tuple
const response: [number, string] = [200, "OK"];
const [statusCode, message] = response;
console.log(statusCode, message);

// ✅ 7. Tuple in Functions (Return Type)
function getUserInfo(): [string, number] {
  return ["Shahbaz", 28];
}
const [name, age] = getUserInfo();

// ✅ 8. Labeled Tuple Elements (for readability)
type HTTPResponse = [statusCode: number, message: string];
const res: HTTPResponse = [404, "Not Found"];

// ✅ 9. Tuple as Parameters
function printPoint(point: [number, number]) {
  console.log(`X: ${point[0]}, Y: ${point[1]}`);
}
printPoint([5, 10]);

// ✅ 10. Tuple with Different Types
type MixedTuple = [string, number, boolean];
const mixed: MixedTuple = ["data", 123, true];

// ✅ Bonus: Array vs Tuple
let arr: (string | number)[] = ["a", 1, "b", 2]; // Order/length not enforced
let tup: [string, number] = ["a", 1];            // Strict length and order


export { }