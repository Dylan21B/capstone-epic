import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      score: 0
    }
  }
  

  render() {
    return (
      <div className="containerBody">
    <Main  />
    </div>
    );
  }
}

export default App;
