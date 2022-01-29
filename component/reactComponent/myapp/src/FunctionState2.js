import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
    
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
    


  return (
    <React.Fragment>
      <h1>
        ********************** FunctionState2.js | id: root8
        **********************
      </h1>
      <h3>I've rendered {count} times!</h3>
      <h3>I've rendered {calculation} times!</h3>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </React.Fragment>
  );
}

export default Timer;
