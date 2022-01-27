import React, { useRef } from "react";

function RefHook() {
  const inputRef = useRef(null);

  const onClicked = () => {
    inputRef.current.value = "";

    //focuses on the input field on click
    // inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" placeholder="Type something" ref={inputRef} />
      <button onClick={onClicked}>Click to Clear</button>
    </div>
  );
}

export default RefHook;
