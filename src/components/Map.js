import React, { Component } from 'react';
import MapImg from '../images/basic-map.png';
import './Map.css';
import MapFull from '../images/map/Map-capstone-full.png';
import MapNW from '../images/map/SkyrimmapNW.png';
import MapNE from '../images/map/SkyrimmapNE.png';
import MapSW from '../images/map/SkyrimmapSW.png';
import MapSE from '../images/map/SkyrimmapSE.png';

import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap';



class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quad: "north west",
            imgSrc: "",
            modal: false
   }}

   componentWillReceiveProps(nextProps){
       this.setState({
           quad: nextProps
        },
    )
    // console.log(this.state.quad, "from map");
    // console.log(typeof MapNE);
    this.setMapQuad()
   }

   setMapQuad = () => {
   /// function to assign map image based on current quadrent
    if(this.state.quad.quad === "north west"){
            this.setState({imgSrc: MapNW })

    }else if(this.state.quad.quad === "north east"){
        this.setState({imgSrc: MapNE}) 
   
    }else if(this.state.quad.quad === "south west"){
        this.setState({imgSrc: MapSW})

    }else if(this.state.quad.quad === "south east"){
        this.setState({imgSrc: MapSE})
      }
    else {
         this.setState({
             imgSrc: MapFull
         })
     }
}

toggle = () =>{
    this.setState({
      modal: !this.state.modal
    });
  }



render(){
    return(
    <div>
        <img className="mapImg" src={this.state.imgSrc} onClick={this.toggle} alt="map" />
        <div>
       
        <Modal size="lg" isOpen={this.state.modal} id="modal1" toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Full Map</ModalHeader>
              <img src={MapFull} alt="full map" className="fullMap" />
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>X</Button>
          </ModalFooter>
        </Modal>

      </div>
    </div>
    )
}

}

export default Map;