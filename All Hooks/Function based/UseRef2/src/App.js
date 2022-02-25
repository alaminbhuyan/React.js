import React, { useRef } from "react";


function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <React.Fragment>
      <div>
        <h1>Accessing DOM Elements</h1>
        <input type="text" ref={inputElement} /><br /><br />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </React.Fragment>
  );
};

export default App;

// !Accessing DOM Elements.

// #useRef returns a mutable ref object whose.current property is initialized to the passed argument(initialValue).The returned object will persist for the full lifetime of the component.

// #It can be used to store a mutable value that does not cause a re - render when updated.

// #It can be used to access a DOM element directly.