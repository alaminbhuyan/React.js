import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Welcome alamin</h1>
                    <button onClick={this.props.clickData}>LogOut</button>
                </div>
            </React.Fragment>
        );
    }
}

export default User;