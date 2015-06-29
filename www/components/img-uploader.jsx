import React from 'react';
import EXIF from 'exif-js/exif-js';

export default class ImgUploader extends React.Component {
	constructor(...props) {
		super(...props);

	}
  getGPS(imgBase64) {
    //thanks to http://blogs.microsoft.co.il/ranw/2015/01/07/reading-gps-data-using-exif-js/
    var self = this;
    var toDecimal = function(number) {
      return number[0].numerator + number[1].numerator /
        (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
    };

    EXIF.getData(imgBase64, function() {
      var pos = {
        lng: EXIF.getTag(this, "GPSLongitude"),
        lat: EXIF.getTag(this, "GPSLatitude")
      };
      if (Array.isArray(pos.lng) && Array.isArray(pos.lat)) {
        pos.lat = toDecimal(pos.lat);
        pos.lng = toDecimal(pos.lng);

        if (this.props.onGPSread) {
          this.props.onGPSread(pos);
        }
      }
      console.log("was taken on " + self.GPS.lat + " " + self.GPS.lng);

    });
  }
  clickInput(){
    $(this.refs.input).click();
  }
	render() {
		return <div className="post item">
      <img src={this.props.icon} className="big-icon img-responsive" width="160px"/>
      <span className="glyphicon glyphicon-camera clickable" onClick={this.clickInput}/>
      <input className="glyphicon glyphicon-camera" ref="input" type="file" accept="image/*;capture=camera" name="images"
             onChange={this.onFilesSelected} multiple/>
      <div id="canvas-container">
      </div>
    </div>;
	}
}