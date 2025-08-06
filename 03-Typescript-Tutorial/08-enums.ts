
/* ----------- Enums in TypeScript ----------- */

// ✅ Enums define a set of named constants for better readability.
enum Direction1 { Up, Down }

// ✅ Compiles to:
/// var Direction1;
/// (function (Direction1) {
///   Direction1[Direction1["Up"] = 0] = "Up";
///   Direction1[Direction1["Down"] = 1] = "Down";
/// })(Direction1 || (Direction1 = {}));

// ✅ Use 'const enum' for better performance (inlined, no object created)
const enum Direction2 {
    Up,
    Down
}
const move = Direction2.Up; // Compiles to: const move = 0;

// 🔹 Use 'const enum' when:
// - You want smaller, faster JS output
// - You don’t need reverse mapping or iteration





// ✅ 1. Numeric Enums (Default)
enum Direction {
    North, // 0
    East,  // 1
    South, // 2
    West   // 3
}
console.log(Direction.North); // 0
console.log(Direction[0]);    // "North"

// ✅ 2. Numeric Enum (Custom Values)
enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
console.log(StatusCode.Success); // 200
console.log(StatusCode[404]);    // "NotFound"

// ✅ 3. String Enums
enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
console.log(LogLevel.Warn); // "WARN"

// ✅ 4. Heterogeneous Enums (⚠️ Avoid if possible)
enum Mix {
    No = 0,
    Yes = "YES"
}
console.log(Mix.Yes); // "YES"

// ✅ 5. Using Enums in Functions
function getDirection(dir: Direction) {
    return `You are moving ${Direction[dir]}`;
}
console.log(getDirection(Direction.South)); // You are moving South

// ✅ 6. Const Enums (Better performance, no runtime object)
const enum Size {
    Small,
    Medium,
    Large
}
let selectedSize = Size.Medium;
// At compile time, this becomes: let selectedSize = 1;

// ✅ 7. Reverse Mapping (only for numeric enums)
enum Role {
    Admin,
    User
}
console.log(Role.Admin); // 0
console.log(Role[0]);    // "Admin"

// ❌ Not possible with string enums
enum Theme {
    Light = "LIGHT",
    Dark = "DARK"
}
// console.log(Theme["LIGHT"]); ❌ undefined

// ✅ 8. Enum in Switch Statement
function getStatusMessage(status: StatusCode) {
    switch (status) {
        case StatusCode.Success:
            return "OK";
        case StatusCode.NotFound:
            return "Not Found";
        case StatusCode.ServerError:
            return "Server Error";
    }
}

// ✅ 9. Enum as Object Keys
enum HttpMethod {
    GET = "GET",
    POST = "POST"
}

const handlers = {
    [HttpMethod.GET]: () => console.log("Handling GET"),
    [HttpMethod.POST]: () => console.log("Handling POST")
};

handlers[HttpMethod.GET](); // Handling GET

// ✅ 10. Enum with Type Safety
enum Colors {
    Red,
    Green,
    Blue
}
let color: Colors = Colors.Red;
// color = "Red"; ❌ Error: Type '"Red"' is not assignable to type 'Colors'



export { }