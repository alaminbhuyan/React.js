import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <React.Fragment>
      <h1>
        ********************** FunctionState3.js | id: root9
        **********************
      </h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
          <h2>Render count: {count.current} </h2>
          
          <input type="text" ref={inputElement} />
          <button onClick={focusInput}>Focus input</button>
    </React.Fragment>
  );
}

export default Timer;
