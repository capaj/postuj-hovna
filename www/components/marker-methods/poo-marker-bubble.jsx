import React from 'react';
import ImgUploader from '../img-uploader.jsx!';

export default class PooMarkerBubbleBody extends React.Component {
  addPhoto() {
    //clcik on hidden input
  }
  clearedNow(){

  }
  render() {
    return (<div>
      <button onClick={this.clearedNow}>Už je uklizeno</button>
      <h3>Přidat novou fotku</h3>
      <ImgUploader onGPSRead={this.addGPS} onImageReady={this.addImages}/>
    </div>);
  }
};