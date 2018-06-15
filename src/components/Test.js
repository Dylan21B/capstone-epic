import React, { Component } from 'react';
import './Engine.css';

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
            north: 0,
            south: 0,
            east: 0,
            west: 0,
            position: "Castle NSS",
            currentMove: "",
            worldSize: 5,
            quad: ""
        }
this.moveNorth = this.moveNorth.bind(this);
this.moveWest = this.moveWest.bind(this);
this.moveEast = this.moveEast.bind(this);
this.moveSouth = this.moveSouth.bind(this);
    }
// componentDidUpdate(){
//     this.setState({quad: this.getquad})    
// }



// quadSwitch() {
//       switch {
//           case "": return () => { this.setState({
//             countBeverage: this.state.countBeverage + 1
//           }); }
//           case "fruit": return () => { this.setState({
//             countFruit: this.state.countFruit + 1
//           }); }
//           case "vegetable": return () => { this.setState({
//             countVegetable: this.state.countVegetable + 1
//           }); }
//           case "snack": return () => { this.setState({
//             countSnack: this.state.countSnack + 1
//           }); }
//           default: return console.log("unknown category");
//         };
//     }; 


checkWorldSize(...direction){
console.log(this.state[direction[0]], "check")
if( this.state.worldSize < this.state[direction[0]]){
    console.log(this.state.worldSize, "toooooo far");
    return;
}


if (this.state[direction[1]] < 1) {
    console.log("increments current dir +1 ")
            this.setState({[direction[0]]: this.state[direction[0]] + 1}, this.myposition)
        }else {
            if(this.state[direction[1]] === 1){
                console.log("opposite dir should = 1")
                this.setState({[direction[1]]: this.state[direction[1]] -1,[direction[0]]: this.state[direction[0]] +1}, this.myposition)
            }else{
                console.log("opposite dir greater than 1")
            this.setState({[direction[1]]: this.state[direction[1]] - 1}, this.myposition)
            }
        };

// if (this.state[direction[1]] = 0){
//     this.setState({[direction[0]]: + 1 })
// }

}
getquad(){   /// function to assign quad
    if(this.state.north > 0 && this.state.west > 0){
            this.setState({quad: "nw"})
    }else if(this.state.south > 0 && this.state.west > 0){
        this.setState({quad: "sw"})    
    }else if(this.state.north > 0 && this.state.east > 0){
        this.setState({quad: "ne"})
    }else if(this.state.south > 0 && this.state.east > 0){
        this.setState({quad: "se"})
     }
    //else {
    //     this.setState({quad: "origin"})
    // }
        this.checkState();
}
checkState = () =>{
    console.log(this.state.quad, "quad state");

}


//////// MOVERS /////////////
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
            image.src = "http://www.noonco.com/rc/java_art/picture_field.jpg";
          }
        }   
   
    render(){
        return (
        <div className="mainContainer">
            <h1> Adventure </h1>
            <p>&nbsp;&nbsp;<img id="myImage" src="http://www.noonco.com/rc/java_art/picture_doorway.jpg" width="300" height="250" alt="location" />
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