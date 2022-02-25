import React, { useState } from "react";


function App() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1999",
    color: "red"
  });

  // #we can write this function methodology arrow function

  // function updateColor() {
  //   setCar(previousState => {
  //     return {...previousState, color:"blue"};
  //   });
  // };

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <React.Fragment>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button type="button" onClick={updateColor}>Blue</button>
    </React.Fragment>
  );
}

export default App;



// !syntax: useState(initialState, function)

// !If we only called setCar({ color: "blue" }), this would remove the brand, model, and year from our state.

// !We then return an object, spreading the previousState and overwriting only the color.