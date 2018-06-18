import React, { Component } from 'react';
import './Engine.css';
import { rebase } from '.././Base.js';

///// Images import ///////
import FeildPath from '../images/field-path.jpg';
import OutsideCastle from '../images/outside-castle.jpg';
import InsideCastle from '../images/inside-castle.jpg';
import Mountian from '../images/mountian.jpg';
import MountianTop from '../images/mountian-top.jpg';
import RiverBank from '../images/river-bank.jpg';
import Woods from '../images/woods.jpg';

class Engine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            north: 3,
            south: 0,
            east: 0,
            west: 3,
            position: "Start",
            worldSize: 4,
            quad: "north west",
            img: ""
        }
this.moveNorth = this.moveNorth.bind(this);
this.moveWest = this.moveWest.bind(this);
this.moveEast = this.moveEast.bind(this);
this.moveSouth = this.moveSouth.bind(this);
    }



///// FIREBASE CALL IN COMPONENTDIDMOUNT SO ALWAYS UPDATED /////////
    componentDidUpdate(){
        rebase.fetch('locations', {
            context: this,
            asArray: true,
            queries: {
                orderByChild: "Q", 
                equalTo: this.state.quad
            },
            then(data){
              data.forEach((element, i) => {
                  var splitter = element.pos.split("")
                var quadSplit = element.Q.split(" ")
                // console.log(splitter[0], splitter[1])
            if(Number(splitter[0]) === this.state[quadSplit[0]] && Number(splitter[1]) === this.state[quadSplit[1]]){
                console.log(element, "current location");
            }
              });
            }
          });
      
      }


checkWorldSize(...direction){
// console.log(this.state[direction[0]], "check")
if( this.state.worldSize < this.state[direction[0]]){
    console.log(this.state.worldSize, "toooooo far");
    return;
}


if (this.state[direction[1]] < 1) {
            this.setState({[direction[0]]: this.state[direction[0]] + 1}, this.myposition)
        }else {
            if(this.state[direction[1]] === 1){
                this.setState({[direction[1]]: this.state[direction[1]] -1,[direction[0]]: this.state[direction[0]] +1}, this.myposition)
            }else{
            this.setState({[direction[1]]: this.state[direction[1]] - 1}, this.myposition)
            }
        };

}
getquad(){   /// function to assign quad
    if(this.state.north > 0 && this.state.west > 0){
            this.setState({quad: "north west"}, this.checkState)
    }else if(this.state.south > 0 && this.state.west > 0){
        this.setState({quad: "south west"},this.checkState)    
    }else if(this.state.north > 0 && this.state.east > 0){
        this.setState({quad: "north east"},this.checkState)
    }else if(this.state.south > 0 && this.state.east > 0){
        this.setState({quad: "south east"},this.checkState)
     }

}
checkState = () =>{
    console.log(this.state.quad, "= quad");

}


//////// MOVERS /////////////
moveNorth() {
// console.log("north", this.state.north);

this.checkWorldSize("north", "south")
       
}

moveWest() {
// console.log("west", this.state.west); 

this.checkWorldSize("west", "east")
   
}
            
moveEast() {
// console.log("east", this.state.east);

this.checkWorldSize("east", "west")
    
}

moveSouth() {
// console.log("souht", this.state.south);

this.checkWorldSize("south", "north")  
}



// FUNCTION TO FIGURE EXACT POSITIONING
 myposition() {
     console.log(this.state);
     document.getElementById("demo").innerHTML =
            "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
    
      this.getquad();
        var image = document.getElementById('myImage');
          if (this.state.north === 3 && this.state.west === 3){
            this.setState({position: "Fucking Cat"});
            image.src = "http://www.noonco.com/rc/java_art/cat_01.jpg";
           }else if (this.state.north === 2 && this.state.west === 2){
            this.setState({position: "skyrim!"});
            image.src = "https://images4.alphacoders.com/802/802364.jpg";

           }else{
            this.setState({position: "lost"});
            image.src = Woods;
          }
        }   
   
    render(){
        return (
        <div className="mainContainer">
            <h1> Adventure </h1>
            <p>&nbsp;&nbsp;<img id="myImage" src={InsideCastle} width="350" height="250" alt="location" />
</p>
<p>Dylan's Adventure Game</p>
<div>
<div className="topCompass">
<button className="moveButton" onClick={this.moveNorth}><span className="movement">{this.state.north}</span>  North</button>
</div>
<div className="midCompass">
<button className="moveButton" onClick={this.moveWest}><span className="movement">{this.state.west}</span>  West</button>
<button className="moveButton" onClick={this.moveEast}>East  <span className="movement">{this.state.east}</span></button>
</div>
<div className="bottomCompass"> 
<button className="moveButton" onClick={this.moveSouth}><span className="movement">{this.state.south}</span>  South</button>
</div>
</div>
<p id="demo"></p>

            </div>
        )
    }
}

export default Engine;