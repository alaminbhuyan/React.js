import React, { Component } from 'react';

class MyState extends Component {
    //* State inside the constructor
    constructor(props) {
        super(props);
        this.state = {
            name: "Bangladesh",
            village: this.props.village
        };
    }

    //? State inside the class
    // state = {
    //     name: "Bangladesh",
    //     village: this.props.village
    // }

    render() {
        return (
            <div>
                <h2>I am from {this.state.name}</h2>
                <p>My village name is: {this.state.village}</p>
            </div>
        );
    }
}

export default MyState;

//? we can create state only class based Component. In function based component we can but we have to use hooks.