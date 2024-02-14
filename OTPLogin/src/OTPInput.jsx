import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function OTPInput({ length, onOTPSubmit }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const inputHandler = (index,e) => {
    let value=e.target.value;
    if(isNaN(value)) return ;
    let newOtp=[...otp];
    console.log('newotp',newOtp)
    newOtp[index]=value.substring(value.length-1);
    setOtp(newOtp);

  let combinedOtp=newOtp.join("");
   console.log('cotp',combinedOtp);
  if(combinedOtp.length===length) onOTPSubmit(combinedOtp);

  //move to next input if filled(next empty field)
    if(value && inputRefs.current[newOtp.indexOf("")] && index!=otp.length-1){
        inputRefs?.current[newOtp.indexOf("")]?.focus();
    }

  };
  const handleClick = (index) => {
    if(index>0 && index<=otp.length-1){
        inputRefs?.current[otp.indexOf("")]?.focus();
    }
  };
  const handleKeyDOwn = (index,e) => {
    if(e.key==='Backspace' && !otp[index] && inputRefs.current[index-1] && index>0){
        inputRefs.current[index-1].focus();
    }

  };

  useEffect(()=>{
    inputRefs?.current[0]?.focus();
  },[])
  return (
    <div className="otp">
      {otp.map((item, index) => (
        <input
          type="text"
          className="otpInput"
          onChange={(e) => inputHandler(index, e)}
          key={index}
          ref={(input)=>inputRefs.current[index]=input}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDOwn(index, e)}
          value={otp[index]}
        ></input>
      ))}
    </div>
  );
}

export default OTPInput;
