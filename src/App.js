import React, { Component } from 'react';
import './App.css';
import Engine from './components/Test.js';
import Stats from './components/Stats.js';
import Map from './components/Map.js';
import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      score: 0
    }
  }

  componentDidMount(){
    const rootRef = firebase.database().ref();
    const scoreRef = rootRef.child('score');
    scoreRef.on('value', snap => {
      this.setState({
        score: snap.val()
      })
    })
    }
  

  render() {
    return (
      <div className="containerBody">
        <Stats />
    <Engine />
    <div>
      <Map />
    <h1>{this.state.score}</h1>
    </div>
    </div>
    );
  }
}

export default App;
