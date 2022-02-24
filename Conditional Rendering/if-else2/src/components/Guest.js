import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Welcome Guest</h2>
                <button onClick={this.props.clickData}>Login</button>&nbsp;&nbsp;
                <button>SignUp</button>
            </React.Fragment>
        )
    }
}
