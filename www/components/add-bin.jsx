import React from 'react';
import ImgUploader from './img-uploader.jsx!';
import GoogleMap from './google-map.jsx!';

import backend from '../services/moonridge';
const binModel = backend.model('bin');

export default class AddBin extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      photos: []
    };

  }
  addImages(imageIds){

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
      <ImgUploader onGPSRead={(GPS) => {this.setState({loc: GPS})}} onImageRead={this.addImages}
                   icon={'img/bin-plain.svg'}/>
      {submitBtn}
      {alert}
    </div>;
  }
};

AddBin.defaultProps = {
  zoom: 9
};