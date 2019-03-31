import React, { Component } from 'react';
import './App.css';

import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Cart />
        </header>
      </div>
    );
  }
}

export default App;
