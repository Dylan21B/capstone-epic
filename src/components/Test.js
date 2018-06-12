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
            worldSize: 3
        }
this.moveNorth = this.moveNorth.bind(this);
this.moveWest = this.moveWest.bind(this);
this.moveEast = this.moveEast.bind(this);
this.moveSouth = this.moveSouth.bind(this);


    }


moveNorth() {
console.log("north", this.state.north);
if (this.north > this.worldsize){
    return;
    }
    if (this.state.south < 1) {
        this.setState({north: this.state.north + 1});
    }else {
        this.setState({south: this.state.south - 1});
    }
    this.myposition();
        document.getElementById("demo").innerHTML =
        "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
        
}


moveWest() {
console.log("west", this.state.west); 
if (this.state.west > this.state.worldsize){
    return;
    }
    if (this.state.east < 1) {
        this.setState({west: this.state.west + 1});
    }else{
        this.setState({east: this.state.east - 1});
    }
    this.myposition();
            document.getElementById("demo").innerHTML =
            "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
    
}

            
moveEast() {
console.log("east", this.state.east);
if (this.state.east > this.state.worldsize){
    return;
    }
    if (this.state.west < 1) {
        this.setState({east: this.state.east + 1});
    }else{
        this.setState({west: this.state.west - 1});
    }
    this.myposition();
            document.getElementById("demo").innerHTML =
            "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
    
}




moveSouth() {
console.log("souht", this.state.south);
if (this.state.south > this.state.worldsize){
    return;
    }
    if (this.state.north > 0) { 
        this.setState({north: this.state.north - 1});
    }else{
        this.setState({south: this.state.south + 1});
    }
    this.myposition();
            document.getElementById("demo").innerHTML =
            "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
    
}

 myposition() {
    var image = document.getElementById('myImage');
        if (this.state.north === 3 && this.state.west === 3){
            this.setState({position: "Cat Freak Out!"});
            image.src = "http://www.noonco.com/rc/java_art/cat_01.jpg";
           }else if (this.state.north === 2 && this.state.west === 2){
            this.setState({position: "skyrim!"});
            image.src = "https://images4.alphacoders.com/802/802364.jpg";
           }
                
        else{
            this.position = "lost";
            image.src = "http://www.noonco.com/rc/java_art/picture_field.jpg";
          }
        }   
   
   
   
    render(){
        return (
        <div className="mainContainer">
            <h1> Adventure </h1>
            <p>&nbsp;&nbsp;<img id="myImage" src="http://www.noonco.com/rc/java_art/picture_doorway.jpg" width="200" height="150" />
</p>
<p>Javascript Text Adventure</p>
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