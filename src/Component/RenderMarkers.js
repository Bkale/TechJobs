import React, { PropTypes, Component } from 'react'
import {greatPlaceStyle, greatPlaceStyleHover} from '../Css/Markerscss.js';

class RenderMarker extends Component{
  constructor(props){
    super(props);
    this.state =({
      $hover: this.props.hover
    })
  }


 render(){
   const style = this.state.hover ? greatPlaceStyleHover : greatPlaceStyle;
    return (
      <div style={style}>
         {this.props.text}
      </div>
    );
  }
}
export default RenderMarker
