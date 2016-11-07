import React, { Component } from "react"
import GoogleMap from 'google-map-react'
import RenderMarkers from './RenderMarkers.js'

class Maps extends Component{
  constructor(){
    super();
    this.state = {
      center: [40.7400081, -73.9897434],
      zoom: 4,
      key: "",
      markers:[{id:'A', lat: 59.955413, lng: 30.337844},{id:'B',lat: 58.724, lng: 30.080},{id:'C',lat: 57.724, lng: 31.080},{id:'D',lat: 56.724, lng: 30.080}],
      onMarkerHover: false
    }
  }

  _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    this.setState({
       center: center.center,
       zoom: center.zoom,
     });
   }

  _onChildClick = (key, childProps) => {
    this.setState({
       center:[childProps.lat,childProps.lng]
     });

  }

  _onChildMouseEnter = (key , childProps ) => {
    console.log("key",key);
    const markerId = childProps.text
    this.setState({
       onMarkerHover: true
     });
  }

  _onChildMouseLeave = (key, childProps ) => {
    this.props.onHoverKeyChange;
    console.log(this.props.onHoverKeyChange);
    this.setState({
       onMarkerHover: false
     });
  }



  render(){

    const markers = this.props.markers.map((venue,i) => {
      if(venue.company.location){
        const marker = {
          position:{
            lat: typeof(parseInt(venue.company.location.lat)) == "number" ? parseInt(venue.company.location.lat) : console.log("error"),
            lng: typeof(parseInt(venue.company.location.lng)) == "number" ? parseInt(venue.company.location.lng) : console.log("error")
          }
        }
        console.log("Marker",marker);
        return <RenderMarkers key={i} {...marker.position} text={"A"} hover={this.state.onMarkerHover}/>

      }
    })

    return(
      <div className="Maps">
        <GoogleMap className="GoogleMap"
          bootstrapURLKeys={{
            key: "AIzaSyAYA1eCg1ToFOxVfVxqZHzqNnNJFgnLNYw"
          }}
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this._onBoundsChange}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}>
          {markers}
        </GoogleMap>
      </div>

    )
  }
}
export default Maps
