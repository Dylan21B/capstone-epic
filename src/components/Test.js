import React, { Component } from 'react';
import './Engine.css';
import { rebase } from '.././Base.js';
import Map from './Map';
import Stats from './Stats.js';
// import Npc from './Npc.js';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap';




class Engine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            north: 3,
            south: 0,
            east: 0,
            west: 4,
            position: "Start",
            worldSize: 4,
            quad: "north west",
            img: "",
            title: "",
            situationalText: "",
            sitText: "",
            location: {},
            npc: {},
            npcModal: false,
            npcText: ""
        }
this.moveNorth = this.moveNorth.bind(this);
this.moveWest = this.moveWest.bind(this);
this.moveEast = this.moveEast.bind(this);
this.moveSouth = this.moveSouth.bind(this);
    }



    componentWillMount(){
        this.getScene();
      
      }


/// FIREBASE CALL /////
getScene =() =>{
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
            var scene = element.img
            var name = element.title
            var text = element.text
            var npcObj = element.npc
            var modal = element.npc.m
            // console.log(splitter[0], splitter[1])
        if((Number(splitter[0]) === this.state[quadSplit[0]]) && (Number(splitter[1]) === this.state[quadSplit[1]])){
             this.setState({
                 img: scene,
                 title: name,
                 sitText: text,
                 location: element,
                 npc: npcObj,
                 npcModal: modal,
                })
            // console.log(typeof element, "current location");
            console.log(this.state.npcModal, "fuck");
            console.log(this.state.npc.m, "stuff")
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
this.getScene();     
}

moveWest() {
// console.log("west", this.state.west); 

this.checkWorldSize("west", "east")
this.getScene();     
 
}
            
moveEast() {
// console.log("east", this.state.east);

this.checkWorldSize("east", "west")
this.getScene();     

}

moveSouth() {
// console.log("souht", this.state.south);

this.checkWorldSize("south", "north")
this.getScene();     
  
}

closeModal = () => {
    this.setState({
        npcModal: false
      });
}

// FUNCTION TO FIGURE EXACT POSITIONING
 myposition() {
     console.log(this.state);
     document.getElementById("demo").innerHTML =
            "North: " + this.state.north +"   South: " + this.state.south+"   East: " + this.state.east + "   West: " + this.state.west + "<br>" + "Location: " + this.state.position;
    
      this.getquad();
        }   
   
    render(){
        return (
        <div className="mainContainer">
        <div className="div1">
            <h1> {this.state.title} </h1>

            <p>&nbsp;&nbsp;<img id="myImage" src={this.state.img} width="600" height="450" alt="location" />
</p>
<p>Dylan's Adventure Game</p>
<h4>{this.state.sitText} </h4>
{/* <Npc location={this.state.location}/> */}
</div>
<div className="div2">
<Map quad={this.state.quad} />
<Stats />

<Modal isOpen={this.state.npcModal} id="modalNpc" className={this.props.className}>
          <ModalHeader><div className="npcText">{this.state.npc.name}</div></ModalHeader>
              <img src={this.state.npc.npcImg} alt="npc" className="npcImg" height="300" width="200" />
              <h3 className="npcText"> {this.state.npc.npcText} </h3>
          <ModalFooter>
            <Button color="secondary" onClick={this.closeModal}>X</Button>
          </ModalFooter>
        </Modal>

{/******* MOVER ********/}
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


<Link to='/gameover'>To GameOver</Link>

</div>

            </div>
        )
    }
}

export default Engine;