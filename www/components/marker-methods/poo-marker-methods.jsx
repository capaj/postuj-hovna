import React from 'react';

export default {
  addPhoto: function() {
    //clcik on hidden input
  },
  clearedNow: function(){

  },
  bodyRender: function() {
    return (<div>
      <button onClick={this.clearedNow}>Už je uklizeno</button>
      <h3>Přidat novou fotku</h3>
      <ImgUploader onGPSRead={this.addGPS} onImageReady={this.addImages}/>
    </div>);
  }
};