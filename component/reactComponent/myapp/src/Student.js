import React, { Component } from 'react';
import "./Student.css";
import PropTypes from "prop-types";



// const Student = () => {
//     return <h1>Hello Alamin</h1>
// };

const Student = (props) => {
    return (
      <React.Fragment>
        <h1>********************** Student.js | id: root2 **********************</h1>
        <h2 className="bg">Hello, {props.name}</h2>
        <p>Roll: {props.roll}</p>
      </React.Fragment>
    );
};


//? Normal validation check

Student.propTypes = {
    name : PropTypes.string,
    roll : PropTypes.number
 };

//? Normal validation check with required 

Student.propTypes = {
    name : PropTypes.string.isRequired,
    roll : PropTypes.number.isRequired
};

//? set default props

Student.defaultProps = {
    name : "Tania Akter",
    roll : 1050
}

// ----------------------------------------------------------
// Class based

// class Student extends Component {
//     render() { 
//         return (<h1>Hello {this.props.name}</h1>);
//     }
// }
 
export default Student;