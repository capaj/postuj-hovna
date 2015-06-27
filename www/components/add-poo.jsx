import React from 'react';
import ImgUploader from './img-uploader.jsx!';
import GoogleMap from './google-map.jsx!';
import Marker from './marker.jsx!';

import backend from '../services/moonridge';
const binModel = backend.model('bin');

export default class AddPoo extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      pos: []
    }
  }

  onFilesSelected(ev) {

  }
  addGPS(pos){
    this.setState({pos: pos});
  }
  addImages(imageIds){
    this.setState({photos: imageIds});
  }
  submit() {
    console.log('submit');
    this.setState({inProgress: true});
    binModel.create(this.state).then(function(newPoo){
        //TODO transition to home
      this.setState({inProgress: false});
    }, function(err) {
      this.setState({
        error: err
      });
    });
  }

  render() {
    var props = this.props;
    var submitBtn;
    var state = this.state;
    if (state.pos && state.photos.length > 1 && !state.inProgress) {
      submitBtn =  <div className="post button ok clickable" onClick={this.submit}>
        <span className="glyphicon glyphicon-ok"/>
      </div>;
    }
    var alert;
    if (state.error) {
      alert = <div className="alert">
        {state.error}
      </div>;
    }
    return <div className="container add-form">
      <div className="post item">cvbh
          center={state.loc}
          zoom={props.zoom}
        <GoogleMap
          markers={state.markers}>
        </GoogleMap>
      </div>
      <ImgUploader onGPSRead={this.addGPS} onImageReady={this.addImages}/>
      {submitBtn}
      {alert}
    </div>;
  }
};

AddPoo.defaultProps = {
  zoom: 9
};