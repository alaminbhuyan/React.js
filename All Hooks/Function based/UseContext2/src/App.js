import React, { useState, createContext } from "react";
import User1 from "./User1";

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "alamin bhuyan",
    age: 22
  });

  const handleClickAge = () => {
    setUser(previousState => {
      return {...previousState, age:25}
    });
  };
  const contextValue = {
    user: user,
    handleFunc: handleClickAge
  }
  return (
    <React.Fragment>
      <MyContext.Provider value={contextValue}>
        <User1 />
      </MyContext.Provider>
    </React.Fragment>
  );
};

export default App;
