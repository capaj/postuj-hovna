import React from 'react';
import ImgUploader from './img-uploader.jsx!';
import GoogleMap from './google-map.jsx!';

import {poo} from '../services/moonridge';
import backend from '../services/moonridge';

export default class AddPoo extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {};
    this.model = poo;
  }

  addImage = (imageData) => {
    this.setState({image: imageData});
  }
  submit = () => {
    console.log('submit', this);
    this.setState({inProgress: true});
    var imgBase64 = this.state.image;
    var image = imgBase64.substr(imgBase64.indexOf(',') + 1);
    backend.rpc('savePhoto')(image).then(photoId => {
      const GPS = this.state.loc;
      var toCreate = {
        loc: [GPS.lat, GPS.lng],
        photos: [photoId]
      };
      return this.model.create(toCreate).then(created => {
        location.hash = `/poo/${created._id}`;
      });
    }, err => {
      this.error = err;
      console.log('err', err);
    });
  }
  addLoc = (GPS) => {
    this.setState({loc: GPS});
  }
  render() {

    var submitBtn;
    var state = this.state;
    if (state.loc && state.image && !state.inProgress) {
      submitBtn = <div className="post button ok clickable" onClick={this.submit}>
        <span className="glyphicon glyphicon-ok"/>
      </div>;
    }
    var alert;
    if (state.error) {
      alert = <div className="alert">
        {state.error}
      </div>;
    }
    var map;
    if (state.loc) {
      map = <GoogleMap center={state.loc} zoom={17} containerClass="small-map"></GoogleMap>;
    }
    return <div className="container add-form">
      <div className="post item">
        {map}
      </div>
      <ImgUploader onGPSRead={this.addLoc} onImageRead={this.addImage}
                   icon={'img/poo-plain.svg'}/>
      {submitBtn}
      {alert}
    </div>;
  }
};

AddPoo.defaultProps = {
  zoom: 9
};