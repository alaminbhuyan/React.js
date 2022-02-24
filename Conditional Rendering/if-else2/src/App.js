import React, { Component } from 'react';
import User from './components/User';
import Guest from './components/Guest';

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  clickLogIn = () => {
    this.setState({ isLoggedIn: true });
  };

  clickLogOut = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    // return (
    //   <React.Fragment>

    //   </React.Fragment>
    // );
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <User clickData={this.clickLogOut} />
    } else {
      return <Guest clickData={this.clickLogIn} />
    }
  }
}

export default App;
