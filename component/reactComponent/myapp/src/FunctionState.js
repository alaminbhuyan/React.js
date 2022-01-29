import React, { useState } from "react";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");
//   return (
//     <React.Fragment>
//       <h1>My favorite color is: {color}</h1>
//       <button type="button" onClick={() => setColor("blue")}>
//         Click me
//       </button>
//     </React.Fragment>
//   );
// }

// export default FavoriteColor;

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "2022",
        color: "red"
    });
    //? If we want to change only the Car color then we can use spread operator
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: 'blue' }
        });
    }

  return (
    <React.Fragment>
      <h1>********************** FunctionState.js | id: root7 **********************</h1>
      <h2>My favorite Car Brand is: {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={updateColor}>
        Click me
      </button>
    </React.Fragment>
  );
}

export default Car;
