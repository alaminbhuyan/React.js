import React, { useState, createContext } from "react";
import User1 from "./User1";

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "alamin bhuyan",
    age: 22
  });

  return (
    <React.Fragment>
      <MyContext.Provider value={user}>
        <User1 />
      </MyContext.Provider>
    </React.Fragment>
  );
};

export default App;
