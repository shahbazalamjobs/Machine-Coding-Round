// ✅ Object definition
const User = {
    name: 'Shahbaz',
    email: 'shahbaz@mail.com',
    isActive: true
};

// ✅ Function with destructured object parameter and type annotation
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log(name, isPaid);
}

// ✅ Valid: Matches expected shape exactly
createUser({ name: 'Anuj', isPaid: false });

// ❌ Invalid: Direct object with extra property (email) will throw an error
// createUser({ name: 'Anuj', isPaid: false, email: 'a@mail.com' });
// Error: Object literal may only specify known properties...

// ✅ Workaround: Assign to a variable first, then pass
const newUser = { name: 'Anuj', isPaid: false, email: 'a@mail.com' };
createUser(newUser); // ✔️ Works fine

// 🔍 Why it works:
// When passing an object literal directly, TypeScript performs **excess property checks**.
// But when assigning to a variable first, it allows extra properties as long as the required ones are present.

// ✅ Function returning an object with specific shape

function createCourse(): { name: string; price: number } {
    return { name: 'reactjs', price: 250 };
}





// ✅ Type with optional and readonly properties
type User = {
    readonly _id: string;       // 🔒 Cannot be reassigned
    name: string;
    email: string;
    isActive: boolean;
    credCardDetail?: number;   // ❓ Optional property
};

// ✅ Valid object assignment
let myUser: User = {
    _id: '1245',
    name: 's',
    email: 's@s.com',
    isActive: false,
};

// ✅ You can update mutable properties
myUser.email = 's@mail.com';

// ❌ This will give an error (as expected)
// myUser._id = 'asa'; // Error: Cannot assign to '_id' because it is a read-only property


type cardNumber = {
    cardnumber: string;
};

type cardDate = {
    cardDate: string;
};

type cardDetails = cardNumber & cardDate & {
    cvv: number;
};

// These are two separate object types. Each one defines a shape:
// cardNumber → expects { cardnumber: string }
// cardDate → expects { cardDate: string }

// The & operator combines all properties from:
// cardNumber
// cardDate
// an inline object { cvv: number }

// So cardDetails now expects an object with all three properties:

// type cardDetails = {
//     cardnumber: string;
//     cardDate: string;
//     cvv: number;
// };

// cardDetails = cardNumber + cardDate + { cvv: number }


// ✅ Example Usage

const cardInfo: cardDetails = {
    cardnumber: '1234 5678 9012 3456',
    cardDate: '12/30',
    cvv: 123
};


// Required to make this file a module and avoid global scope issues
export { };



