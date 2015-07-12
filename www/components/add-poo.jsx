import React from 'react';
import ImgUploader from './img-uploader.jsx!';
import GoogleMap from './google-map.jsx!';

import backend from '../services/moonridge';
const pooModel = backend.model('poo');

export default class AddPoo extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      images: []
    };
    this.model = pooModel;
  }

  addImage = (imageData) => {
    this.setState({images: this.state.images.concat([imageData])});
  }
  submit = () => {
    console.log('submit', this);
    this.setState({inProgress: true});
    var images = this.state.images.map((imgData)=> {return imgData.substr(imgData.indexOf(',') + 1);});
    backend.rpc('savePhoto')(images[0]).then(photoId => {
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
    var props = this.props;
    var submitBtn;
    var state = this.state;
    if (state.loc && state.images.length > 0 && !state.inProgress) {
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