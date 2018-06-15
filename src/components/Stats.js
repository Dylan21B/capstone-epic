import React, { Component } from 'react';
import PlayerImg from '../images/character.jpg';
import './Stats.css';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: "Cork the Ork",
           hp: 100,
           image: PlayerImg,
           inventory: [],

        }
    }


        render(){
            return(
                <div className="statsContainer">
                <div className="content">
                    <h1>Stats:</h1>
                    <h3>{this.state.user}</h3>
                    <h3>HP:  {this.state.hp}</h3>
                    </div>
                <div className="image">
                    <img className="playerImage" src={this.state.image} />
                </div>
                </div>
            )
    }
}

export default Stats;