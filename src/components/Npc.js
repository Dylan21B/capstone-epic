import React, { Component } from 'react';

class Npc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
            npc: {},
            npcModal: false
   }}
   componentWillReceiveProps(nextProps){

    this.setState({
        location: nextProps.location,
        npc: this.state.location.npc
     }
 )
 console.log(this.state.location.npc, "123456789");
 console.log(this.state.npc, "npc")
//  console.log(this.state.npcModal, "TF")
}

render(){
    return(

        <div>
        <h4>{this.state.location.title}</h4>
            </div>
    )
  }
}

// export default Npc;