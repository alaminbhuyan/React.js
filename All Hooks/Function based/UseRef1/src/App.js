import React, { useState, useEffect, useRef } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <React.Fragment>
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h3>Render count: {count.current}</h3>
      </div>
    </React.Fragment>
  );
};

export default App;

// !Use useRef to track application renders.

// #useRef returns a mutable ref object whose.current property is initialized to the passed argument(initialValue).The returned object will persist for the full lifetime of the component.

// #It can be used to store a mutable value that does not cause a re - render when updated.

// #It can be used to access a DOM element directly.