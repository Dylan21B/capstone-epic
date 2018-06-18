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
        this.state.north = this.state.north + 1;
    }else {
        this.state.south = this.state.south - 1;
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
        this.state.west = this.state.west + 1;
    }else{
        this.state.east = this.state.east - 1;
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
        this.state.east = this.state.east + 1;
    }else{
        this.state.west = this.state.west - 1;
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
        this.state.north = this.state.north - 1;
    }else{
        this.state.south = this.state.south + 1;
    }
    this.myposition();
            document.getElementById("demo").innerHTML =
            "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
    
}

 myposition() {
    var image = document.getElementById('myImage');
        if (this.state.north === 3 && this.state.west === 3){
            this.state.position = "Cat Freak Out!";
            image.src = "http://www.noonco.com/rc/java_art/cat_01.jpg";
           }else if (this.state.north === 2 && this.state.west === 2){
            this.state.position = "skyrim!";
            image.src = "https://images4.alphacoders.com/802/802364.jpg";
           }else if (this.state.north === 1 && this.state.west === 1){
            this.state.position = "skyrim!";
            image.src = "https://images4.alphacoders.com/802/802364.jpg";
           } ////// Castle /////
        else if (this.state.north === 1 && this.state.west === 0 && this.state.east === 0){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }else if (this.state.north === 1 && this.state.east === 1){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }else if (this.state.north === 1 && this.state.west === 1){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }else if (this.state.north === 0 && this.state.west === 1){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }else if (this.state.north === 0 && this.state.east === 1){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }else if (this.state.south === 1 && this.state.west === 1){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }else if (this.state.south === 1 && this.state.west === 0){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }else if (this.state.south === 1 && this.state.east === 1){
         this.setState({position: "Casle Outskirts"});
         image.src = OutsideCastle;
        }
         //// River /////
         else if (this.state.north === 4 && this.state.east === 3){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
         }else if (this.state.north === 4 && this.state.east === 2){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }else if (this.state.north === 4 && this.state.east === 1){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }else if (this.state.north === 4 && this.state.west === 0 && this.state.east === 0){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }else if (this.state.north === 4 && this.state.west === 1){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }else if (this.state.north === 5 && this.state.west === 2){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }else if (this.state.north === 4 && this.state.west === 3){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }else if (this.state.north === 3 && this.state.west === 4){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }else if (this.state.north === 3 && this.state.west === 5){
             this.setState({position: "Snake River"});
             image.src = RiverBank;
            }  
            
 ///////////// Mountian //////////////

 else if (this.state.north === 5 && this.state.east === 1){
     this.setState({position: "Stendar Mountian Range"});
     image.src = Mountian;
    }else if (this.state.north === 5 && this.state.east === 2){
     this.setState({position: "Stendar Mountian Range"});
     image.src = Mountian;
    }else if (this.state.north === 5 && this.state.east === 3){
     this.setState({position: "Stendar Mountian Range"});
     image.src = Mountian;
    }

 //////// Mountian Top //////

 else if (this.state.north === 6 && this.state.east === 1){
     this.setState({position: "Stendar Mountian Trail"});
     image.src = MountianTop;
    }else if (this.state.north === 6 && this.state.east === 2){
     this.setState({position: "Stendar Mountian Trail"});
     image.src = MountianTop;
    }else if (this.state.north === 6 && this.state.east === 3){
     this.setState({position: "Stendar Mountian Trail"});
     image.src = MountianTop;
    }
     else{
         this.setState({position: "lost"});
         image.src = "http://www.noonco.com/rc/java_art/picture_field.jpg";
       }
     }     
   
   
   
    render(){
        return (
        <div>
            <h1> Adventure </h1>
            <p>&nbsp;&nbsp;<img id="myImage" src="http://www.noonco.com/rc/java_art/picture_doorway.jpg" width="200" height="150" />
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Javascript Text Adventure</p>
<ul>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button onClick={this.moveNorth}>North</button>
</p>
<p>&nbsp;&nbsp;
<button onClick={this.moveWest}>West</button>
<button onClick={this.moveEast}>East</button>
</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button onClick={this.moveSouth}>South</button>
</p>
</ul>
<p id="demo"></p>

            </div>
        )
    }
}

export default Engine;