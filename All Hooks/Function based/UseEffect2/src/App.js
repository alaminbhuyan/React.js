import { useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count + 2);
  }, [count]);

  return (
    <div className="App">
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
}

export default App;

// #Here is an example of a useEffect Hook that is dependent on a variable.If the count variable updates, the effect will run again:

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