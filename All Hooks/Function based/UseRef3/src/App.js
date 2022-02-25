import React, { useState, useEffect, useRef } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");

  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <React.Fragment>
      <div>
        <h1>Tracking State Changes</h1>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h3>Current value: {inputValue}</h3>
        <h3>Previous value: {previousInputValue.current}</h3>
      </div>
    </React.Fragment>
  );
};

export default App;

// !Tracking State Changes

// #useRef returns a mutable ref object whose.current property is initialized to the passed argument(initialValue).The returned object will persist for the full lifetime of the component.

// #It can be used to store a mutable value that does not cause a re - render when updated.

// #It can be used to access a DOM element directly.