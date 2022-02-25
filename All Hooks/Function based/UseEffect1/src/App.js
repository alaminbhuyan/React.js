import { useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1)
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>I've rendered {count} times</h1>
    </div>
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