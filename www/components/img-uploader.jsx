import React from 'react';
import EXIF from 'exif-js/exif-js';

export default class ImgUploader extends React.Component {
	constructor(...props) {
		super(...props);
    this.state = {
      files: []
    };
	}
  onFilesSelected(evt) {
    console.log('onFilesSelected ev', this);

    var self = this;
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          var ind = self.state.files.push(e.target.result);
          var img = new Image();
          img.onload = function() {
            var canvasEl = self.el.find('<canvas class="loaded-photo"></canvas>');
            var ctx = canvasEl.getContext('2d');
            self.el.append(canvasEl)
          }
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
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
  clickInput(ev){
    console.log('this', this);
    this.el = $(ev.target.parentElement);
    this.el.find('input').click();
  }
	render() {
		return <div className="post item">
      <img src={this.props.icon} className="big-icon img-responsive" width="160px"/>
      <span className="glyphicon glyphicon-camera clickable" onClick={this.clickInput.bind(this)}/>
      <input className="glyphicon glyphicon-camera" ref="input" type="file" accept="image/*;capture=camera" name="images"
             onChange={this.onFilesSelected.bind(this)} multiple/>
      <div id="canvas-container">
      </div>
    </div>;
	}
}