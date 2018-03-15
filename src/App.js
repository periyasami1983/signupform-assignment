import React, { Component } from 'react';
import './App.css';

import SignupForm from './components/signup-form/SignupForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignupForm />
      </div>
    );
  }
}

export default App;
