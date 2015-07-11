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
    }
    this.model = pooModel;
  }

  onFilesSelected(ev) {

  }
  addImage(imageData){
    this.setState({images: this.state.images.concat([imageData])});
  }
  submit() {
    console.log('submit');
    this.setState({inProgress: true});
    backend.rpc('savePhoto')(this.files[0]).then(photoId => {
      var toCreate = {
        loc: this.state.loc,
        photos: [photoId]
      };
      return this.model.create(toCreate).then(created => {
        location.hash = `/${this.type}/${created._id}`;
      });
    }, err => {
      this.error = err;
    });

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
      <ImgUploader onGPSRead={(GPS) => {this.setState({loc: GPS})}} onImageRead={this.addImage.bind(this)}
                   icon={'img/poo-plain.svg'}/>
      {submitBtn}
      {alert}
    </div>;
  }
};

AddPoo.defaultProps = {
  zoom: 9
};