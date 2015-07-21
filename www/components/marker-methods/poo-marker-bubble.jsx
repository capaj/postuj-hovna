import React from 'react';
import ImgUploader from '../img-uploader.jsx!';
import backend from '../services/moonridge';
import profile from '../../stores/profile-store';

export default class PooMarkerBubbleBody extends React.Component {
  addPhoto() {
    //clcik on hidden input
  }
  clearedNow(){

  }
  seenAsWell = ()=>{
    this.props.seen_by.push(profile._id);
    backend.poo.update(this.props);
  }
  render() {
    return (<div>
      <button onClick={this.clearedNow}>Už je uklizeno</button>
      <button onClick={this.seenAsWell}>FURT TAM JE</button>
      <h3>Přidat novou fotku</h3>
      <ImgUploader onGPSRead={this.addGPS} onImageReady={this.addImages}/>
    </div>);
  }
};