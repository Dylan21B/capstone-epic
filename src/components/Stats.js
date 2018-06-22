import React, { Component } from 'react';
import PlayerImg from '../images/character.jpg';
import './Stats.css';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: "Cork the Ork",
           hp: 80,
           image: PlayerImg,
           inventory: [],

        }
    }
    componentWillMount(){
        this.grabCharacter();
    }

    grabCharacter = () =>{
        var characterLS = localStorage.getItem('character');
        console.log(characterLS, "12345");
        this.setState({
            user: characterLS
        })
    console.log(this.state.user, "user");
    }

        render(){
            return(
                <div className="statsContainer">
                <div className="content">
                    <h1>Stats:</h1>
                    <h4>{this.state.user}</h4>
                    </div>
                <div className="image">
                    <img className="playerImage" src={this.state.image} alt="character" />
                </div>
                </div>
            )
    }
}

export default Stats;