// 1) Forma Validation (Best)

import React, { useState } from 'react';

const App = () => {
    // 1. State Management
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. Event Handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Optional: Clear error for the field as user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Perform validation
        const validationErrors = validate(formData);
        setErrors(validationErrors);

        // If no errors, proceed with submission
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted successfully:', formData);
            // Here you would typically send data to an API
            // For this example, we'll just log it.
        } else {
            setIsSubmitting(false); // Re-enable submit button if validation fails
        }
    };

    // 3. Validation Logic
    const validate = (data) => {
        let validationErrors = {};

        if (!data.username.trim()) {
            validationErrors.username = 'Username is required';
        } else if (data.username.length < 3) {
            validationErrors.username = 'Username must be at least 3 characters';
        }

        if (!data.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            validationErrors.email = 'Email address is invalid';
        }

        if (!data.password) {
            validationErrors.password = 'Password is required';
        } else if (data.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters';
        } else if (!/[A-Z]/.test(data.password)) {
            validationErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[a-z]/.test(data.password)) {
            validationErrors.password = 'Password must contain at least one lowercase letter';
        } else if (!/[0-9]/.test(data.password)) {
            validationErrors.password = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*()]/.test(data.password)) {
            validationErrors.password = 'Password must contain at least one special character (!@#$%^&*())';
        }

        return validationErrors;
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>Register</h2>
            <div style={formGroupStyle}>
                <label htmlFor="username" style={labelStyle}>Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.username && <p style={errorStyle}>{errors.username}</p>}
            </div>

            <div style={formGroupStyle}>
                <label htmlFor="email" style={labelStyle}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
            </div>

            <div style={formGroupStyle}>
                <label htmlFor="password" style={labelStyle}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.password && <p style={errorStyle}>{errors.password}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} style={buttonStyle}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

// Basic Inline Styles (for demonstration purposes)
const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
};

const formGroupStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box', // Ensures padding doesn't add to the width
    fontSize: '16px',
};

const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
};

const buttonStyle = {
    width: '100%',
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
};

// Hover effect for button

buttonStyle[':hover'] = {
    backgroundColor: '#0056b3',
};


export default App;







// 2) 

// import logo from "./logo.svg";
// import "./App.css";
// import InputComponent from "./Components/InputComponent/InputComponent";
// import { useState } from "react";

// function App() {
//   const [userInput, setUserInput] = useState({
//     firstName: "",
//     lastName: "",
//     mobile: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     mobile: "",
//     password: "",
//   });

//   const isValidValue = () => {
//     const errorObj = {
//       firstName: "",
//       lastName: "",
//       mobile: "",
//       password: "",
//     };

//     if (userInput.firstName.length < 5) {
//       errorObj.firstName = "Please enter a longer value";
//     } else {
//       errorObj.firstName = "";
//     }

//     if (userInput.lastName.length < 2) {
//       errorObj.lastName = "Please enter a longer value";
//     } else {
//       errorObj.lastName = "";
//     }

//     if (userInput.mobile.length !== 10 || isNaN(userInput.mobile)) {
//       errorObj.mobile = "Please enter a valid 10-digit mobile number";
//     } else {
//       errorObj.mobile = "";
//     }


//     if (userInput.password.length < 8) {
//       errorObj.password = "Please enter a password with at least 8 characters";
//     } else {
//       errorObj.password = "";
//     }


//     setErrors(errorObj);

//     return !Object.values(errorObj).some((error) => error !== "");
//   };

//   const handleUserInput = (e, type) => {
//     let value = e.target.value;
//     let userNewInput = { ...userInput, [type]: value };
//     setUserInput(userNewInput);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let isValid = isValidValue();
//     if (isValid) {
//       console.log("Form is valid");
//     } else {
//       console.log("Form has errors");
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <InputComponent
//           name="First Name"
//           type="text"
//           onChange={(e) => handleUserInput(e, "firstName")}
//           error={errors.firstName}
//         />

//         <InputComponent
//           name="Last Name"
//           type="text"
//           onChange={(e) => handleUserInput(e, "lastName")}
//           error={errors.lastName}
//         />

//         <InputComponent
//           name="Mobile"
//           type="text"
//           onChange={(e) => handleUserInput(e, "mobile")}
//           error={errors.mobile}
//         />

//         <InputComponent
//           name="Password"
//           type="password"
//           onChange={(e) => handleUserInput(e, "password")}
//           error={errors.password}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;