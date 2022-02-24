import React, { Component } from 'react';
import Guest from './components/Guest';
import User from './components/User';

class App extends Component {
  render() {
    const isRegistered = this.props.consumer;
    if (isRegistered) {
      return <User/>
    } else {
      return <Guest/>
    }
  }
}

export default App;