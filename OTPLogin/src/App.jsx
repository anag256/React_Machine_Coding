import { useState } from "react";
import "./App.css";
import OTPInput from "./OTPInput";

function App() {
  const [mobileNumber, setMobileNumber] = useState();
  const [showOtpInput,setShowOtpInput]=useState(false);
  const validateMobileNumber = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (mobileNumber.length > 10 || regex.test(mobileNumber)) {
      alert("invalid phone number");
      return;
    }
    setShowOtpInput(true);
  };
  const onOTPSUbmit=(otp)=>{
    console.log('successful',otp)
  }

  return (
    <div className="bg">{
      !showOtpInput ? <form className="form" onSubmit={validateMobileNumber}>
      <h3 className="text">Login with Mobile</h3>
      <input
        type="text"
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button type="submit">Login</button>
    </form> :<OTPInput length={4} onOTPSubmit={onOTPSUbmit}/>
    }

    </div>
  );
}

export default App;
