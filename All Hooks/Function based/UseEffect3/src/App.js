import React, { useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(50);

  // const handleIncrement = () => {
  //   setCount(count+1)
  // }

  useEffect(() => {
    console.log("useEffect function called");
  }, [count]);

  return (
    <React.Fragment>
      <h1>Count Up: {count}</h1>
      <h1>Count1 Down: {count1}</h1>
      {/* <button type="button" onClick={handleIncrement}>Increment</button> */}

      <button type="button" onClick={() => setCount1(count1 - 2)}>Decrement</button>&nbsp;&nbsp;
      <button type="button" onClick={() => setCount(count + 2)}>Increment</button>
    </React.Fragment>
  );
}

export default App;



// !syntax: useEffect(<function>, <dependency>)

// useEffect(() => {
//   Runs on every render
// });

// useEffect(() => {
//   Runs only on the first render
// },[]);

// useEffect(() => {
//   Runs only on the first render
//   And any time any dependency value changes
// },[prop, state]);