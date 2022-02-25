import React from "react";
import useCustomCounter from "./CustomHook";

function App() {
  const data = useCustomCounter();

  return (
    <React.Fragment>
      <h1>Count Up: {data.count}</h1>
      <button type="button" onClick={data.handleIncrement}>Increment</button>
    </React.Fragment>
  );
}

export default App;
