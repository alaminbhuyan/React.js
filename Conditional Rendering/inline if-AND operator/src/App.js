import React, { Component } from 'react';
import User from './components/User';

class App extends Component {
  render() {
    const primeMember = this.props.primeMember;
    return (
      <React.Fragment>
        <h1>Welcome User</h1>
        {primeMember && <User />}
      </React.Fragment>
    );
  }
}

export default App;

// !if primeMember is 'true' then <User/> component will be render;

// !if primeMember is 'false' then <User/> component won't be render;