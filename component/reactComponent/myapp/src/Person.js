import React from 'react';


const Person = (props) => {
    return (
      <React.Fragment>
     
        <h2 className="bg">Hello, {props.name}</h2>

      </React.Fragment>
    );
}
 
export default Person;