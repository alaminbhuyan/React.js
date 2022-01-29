import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Person from './Person';
import Student from "./Student";
import Mobile from "./MyChildren";
import MyState from "./MyState";
import Event from "./EventHandling";
import FunctionState from "./FunctionState"
import FunctionState2 from "./FunctionState2"
import FunctionState3 from "./FunctionState3"



ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Student name="Alamin Bhuyan" roll={1030} />,document.getElementById("root2"));
ReactDOM.render(<Person name={"Good Bye"}/>, document.getElementById('root3'));
ReactDOM.render(<Mobile>Samsung Galaxy</Mobile>, document.getElementById("root4"));
ReactDOM.render(<MyState village="Manikkandi" />, document.getElementById("root5"));
ReactDOM.render(<Event />, document.getElementById("root6"));
ReactDOM.render(<FunctionState />, document.getElementById("root7"));
ReactDOM.render(<FunctionState2 />, document.getElementById("root8"));
ReactDOM.render(<FunctionState3 />, document.getElementById("root9"));