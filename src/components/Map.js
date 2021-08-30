// npm install --save --save-exact react-scripts@3.4.0

import React,{Component,useState}  from "react";
import { Map, Marker, Popup, TileLayer , Polygon } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "../data/skateboard-parks.json";
import "../style/App.css";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});


class Mapcomp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      coords: [
       
        
    ]
    };
  }

  changecoor(e){console.log(e.state.coords)}
render(){

  // const [activePark, setActivePark] = React.useState(null);
  
  return (
    <div>
    <Map center={[30.4, 31.7]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polygon color={'green'} positions={this.state.coords} />
        
    </Map>

    <button onClick={() => this.setState({       coords: [
        {lat: 30.9946436,lon: 31.20163200000002},
        {lat: 30.9041, lon: 31.1025},
        {lat: 30.9567, lon: 31.2345}, {lat: 30.9567, lon: 31.7345}
        
    ] })}>change coords</button>
    {/* <button onClick={()=>this.changecoor(this)}>saaaa</button> */}
    </div>
  );
}
}
export default Mapcomp;