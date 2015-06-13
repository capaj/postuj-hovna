import EXIF from 'exif-js/exif-js';

export class Add {
	constructor() {
		this.GPS = null;
	}
	activate(params, routeConfig) {
		this.route = routeConfig;
	}
	clickInput(){
		$(':file').click();
	}
	handleOnFilesSelected(evt) {
		this.files = [];
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
					self.files.push(e.target.result);
				};
			})(f);

			// Read in the image file as a data URL.
			reader.readAsDataURL(f);
		}
	}
	getGPS(ev){
		//thanks to http://blogs.microsoft.co.il/ranw/2015/01/07/reading-gps-data-using-exif-js/
		var self = this;
		var toDecimal = function(number) {
			return number[0].numerator + number[1].numerator /
				(60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
		};

		EXIF.getData(ev.target, function() {
			var pos = {
				long: toDecimal(EXIF.getTag(this, "GPSLongitude")),
				lat: toDecimal(EXIF.getTag(this, "GPSLatitude"))
			};

			console.log("was taken on " + pos.lat + " " + pos.long);
			self.GPS = [pos.lat, pos.long];
		});
	}
}
