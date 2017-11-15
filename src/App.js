import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWord from './views/HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="App">
       <HelloWord />
      </div>
    );
  }
}

export default App;
