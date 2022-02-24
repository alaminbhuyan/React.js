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
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <React.Fragment>
        {
          isLoggedIn ? (<User clickData={this.clickLogOut} />) : (<Guest clickData={this.clickLogIn} />)
        }
      </React.Fragment>
    );
  }
}

export default App;
