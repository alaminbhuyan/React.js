import React, { Component } from 'react';
import Person from './Person';

// let element = <h1>Hello alamin bhuyan</h1>;


// Class based component

// class App extends Component {
//     render() { 
//         return <h1>Hello world</h1>;
//     }
// }
// **************************************************************************
// class App extends Component {
//     render() { 
//         return (
//             <React.Fragment>
//                 <h1>Hello this is react fragment</h1>
//                 <p>Hello world</p>
//                 <h3>Hello alamin</h3>
//             </React.Fragment>
//         );
//     }
// }
// **************************************************************************
class App extends Component {
    render() { 
        return (
          <React.Fragment>
            <h1>
              ********************** App.js | id: root1 **********************
            </h1>
            <Person name="Alamin" />
            <Person name="Karim" />
            <Person name="Mim" />
          </React.Fragment>
        );
    }
}
 
export default App;

// export default element;