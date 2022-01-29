import React, { Component } from 'react';


//? Class based

// export default class EventHandling extends Component {

//     handleClick = () => {
//         console.log("Button clicked", this)
//     };

//   render() {
//       return <div>
//           <h2>Hello event</h2>
//           <button onClick={this.handleClick}>Click me</button>
//     </div>;
//   }
// }

//? Function based

function EventHandling(props) {
    function handleClick() {
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default EventHandling;