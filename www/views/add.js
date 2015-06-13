import EXIF from 'exif-js/exif-js';

export class Add {
	constructor() {
		this.files = [];
		console.log('add');
	}
	activate(params, routeConfig) {
		this.route = routeConfig;
	}
	handleOnFilesSelected(evt) {
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
		EXIF.getData(ev.target, function() {
			var pos = {
				long: EXIF.getTag(this, "GPSLongitude"),
				lat: EXIF.getTag(this, "GPSLatitude")
			};

			console.log("was taken on " + pos.lat + " " + pos.long);
		});
	}
}
