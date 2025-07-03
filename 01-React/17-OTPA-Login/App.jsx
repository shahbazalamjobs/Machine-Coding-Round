import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handlePhoneSubmit = () => {
    if (phoneNumber.length !== 10) {
      setMessage("Enter a valid 10-digit phone number.");
      return;
    }

    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);
    console.log("Generated OTP:", otpCode); // For demo only
    setStep(2);
    setMessage("OTP sent (simulated)");
  };

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (!/^[0-9]?$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === generatedOtp) {
      setMessage("✅ OTP verified successfully!");
    } else {
      setMessage("❌ Incorrect OTP. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>OTP Login</h2>

      {step === 1 && (
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            maxLength={10}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter 10-digit number"
          />
          <button onClick={handlePhoneSubmit}>Send OTP</button>
        </div>
      )}

      {step === 2 && (
        <>
          <div className="form-group">
            <label>Enter OTP</label>
            <div className="otp-inputs">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={inputRefs[idx]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                />
              ))}
            </div>
            <button onClick={verifyOtp}>Verify OTP</button>
          </div>
        </>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;