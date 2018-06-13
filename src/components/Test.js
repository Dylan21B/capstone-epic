import React, { Component } from 'react';
import './Engine.css';

class Engine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            north: 0,
            south: 0,
            east: 0,
            west: 0,
            position: "Start Room",
            currentMove: "",
            worldSize: 3
        }
this.moveNorth = this.moveNorth.bind(this);
this.moveWest = this.moveWest.bind(this);
this.moveEast = this.moveEast.bind(this);
this.moveSouth = this.moveSouth.bind(this);
    }


checkWorldSize(...direction){
console.log(this.state[direction[0]], "check")
if( this.state.worldSize < this.state[direction[0]]){
    console.log(this.state.worldSize, "toooooo far");
    return;
}

if (this.state[direction[1]] < 1) {
    console.log("test");
            this.setState({[direction[0]]: this.state[direction[0]] + 1}, this.myposition)
        }else {
            this.setState({[direction[1]]: this.state[direction[1]] - 1});
        }

}

moveNorth() {
console.log("north", this.state.north);

this.checkWorldSize("north", "south")
       
}

moveWest() {
console.log("west", this.state.west); 

this.checkWorldSize("west", "east")
   
}
            
moveEast() {
console.log("east", this.state.east);

this.checkWorldSize("east", "west")
    
}

moveSouth() {
console.log("souht", this.state.south);

this.checkWorldSize("south", "north")  
}

 myposition() {
     console.log(this.state);
     document.getElementById("demo").innerHTML =
            "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
    
    var image = document.getElementById('myImage');
        if (this.state.north === 3 && this.state.west === 3){
            this.setState({position: "Cat Freak Out!"});
            image.src = "http://www.noonco.com/rc/java_art/cat_01.jpg";
           }else if (this.state.north === 2 && this.state.west === 2){
            this.setState({position: "skyrim!"});
            image.src = "https://images4.alphacoders.com/802/802364.jpg";
           }else if (this.state.north === 1 && this.state.west === 1){
            this.setState({position: "Dylan!"});
            image.src = "https://images4.alphacoders.com/802/802364.jpg";
           }
                
        else{
            this.setState({position: "lost"});
            image.src = "http://www.noonco.com/rc/java_art/picture_field.jpg";
          }
        }   
   
   
    render(){
        return (
        <div className="mainContainer">
            <h1> Adventure </h1>
            <p>&nbsp;&nbsp;<img id="myImage" src="http://www.noonco.com/rc/java_art/picture_doorway.jpg" width="200" height="150" />
</p>
<p>Dylan's Adventure Game</p>
<div>
<div className="topCompass">
<button className="moveButton" onClick={this.moveNorth}>North</button>
</div>
<div className="midCompass">
<button className="moveButton" onClick={this.moveWest}>West</button>
<button className="moveButton" onClick={this.moveEast}>East</button>
</div>
<div className="bottomCompass"> 
<button className="moveButton" onClick={this.moveSouth}>South</button>
</div>
</div>
<p id="demo"></p>

            </div>
        )
    }
}

export default Engine;