import React from 'react';
import ImgUploader from './img-uploader.jsx!';
import GoogleMap from './google-map.jsx!';

import backend from '../services/moonridge';

export default class AddBin extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {};
    this.model = backend.bin;
  }
  addImage = (imageData) => {
    this.setState({image: imageData.substr(imageData.indexOf(',') + 1)});
  }
  /**
   * @param {Number} bagCount
   */
  submit = (bagCount) => {
    console.log('submit', this);
    this.setState({inProgress: true});
    var image = this.state.image;
    backend.rpc('savePhoto')(image).then(photoId => {
      const GPS = this.state.loc;
      var toCreate = {
        loc: [GPS.lat, GPS.lng],
        photos: [photoId]
      };
      return this.model.create(toCreate).then(created => {
        backend.binState.create({bin: created._id, bag_count: bagCount}).then(()=>{
          location.hash = `/bin/${created._id}`;
        });
      });
    }, err => {
      this.error = err;
      console.log('err', err);
    });
  }
  render() {

    var submitBtn;
    var state = this.state;
    if (state.loc && !state.inProgress) {
      submitBtn = <div>
        <div className="post good item half clickable" onClick={()=>{this.submit(10)}}>
          <img src="img/bin-good.svg" width="45px"/>
            DOST PYTLÍKŮ
          </div>
          <div className="post bad item half clickable" onClick={()=>{this.submit(0)}}>
            <img src="img/bin-bad.svg" width="45px"/>
              MÁLO PYTLÍKŮ
            </div>
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
      <ImgUploader onGPSRead={(GPS) => {this.setState({loc: GPS})}} onImageRead={this.addImage}
                   icon={'img/bin-plain.svg'}/>
      {submitBtn}
      {alert}
    </div>;
  }
};

AddBin.defaultProps = {
  zoom: 9
};