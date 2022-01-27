import React, { useState } from "react";

const StateHook = () => {
  const [inputValue, setInputValue] = useState("");

  let changeHandler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  const Clicked=()=>{
    setInputValue("Clicked & input has been replaced!");
  }

  return (
    <div>
      <input placeholder="Enter Something" onChange={changeHandler} />
      
      <button onClick={Clicked}>Click</button>
      {inputValue}
    </div>
  );
};

export default StateHook;
