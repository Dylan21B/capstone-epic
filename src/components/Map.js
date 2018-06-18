import React, { Component } from 'react';
import MapImg from '../images/basic-map.png';
import './Map.css';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: MapImg
   }}

render(){
    return(
        <img className="mapImg" src={this.state.map} alt="map" />
    )
}

}

export default Map;