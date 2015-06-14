import {customElement, inject, bindable, bindingMode} from 'aurelia-framework';
import {Compiler} from 'gooy/aurelia-compiler';
import Leaflet from 'Leaflet/Leaflet';
import _ from 'lodash';
import icons from './map-icons'

var defaultCenter = [50.051611, 14.407032];

var options = {
	enableHighAccuracy: true,
	timeout: 6000,
	maximumAge: 0
};

@customElement('map')
@bindable({
	name:'center',
	attribute:'center',
	changeHandler:'centerChanged',
	defaultBindingMode: bindingMode.twoWay
})
export class Map {
	@bindable markers;
	constructor(el, compiler) {
    this.compiler = compiler;
    this._markerLayers = [];
    this.lastMarkersVal = [];
		this.element = el;
		console.log('this.markers', this.markers);
		if (this.center !== null) {
			this.initMap();
		}
	}
  static inject = [Element, Compiler];
	initMap(){
		var self = this;
		setTimeout(function(){
			self.map = Leaflet.map(self.element);
			Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				maxZoom: 18,
				id: 'capaj.024572e4',
				accessToken: 'pk.eyJ1IjoiY2FwYWoiLCJhIjoiODdmMTU1NWQ2NjIxMWEwNjJkZWY4NDQ0MzlkZTVkMWYifQ.0GJycAMIsKzFO6vR8EfTDA'
			}).addTo(self.map);

			self.map.on('moveend', function(e) {
				//console.log('e', e);
				self.center = e.target.getCenter();
			});
			if (self.center) {
				self.map.setView(self.center, 17);
			} else {
				navigator.geolocation.getCurrentPosition(pos => {
					var crd = pos.coords;
					self.map.setView({lat: crd.latitude, lng:crd.longitude}, 17);
				}, err => {
					self.map.setView(defaultCenter, 11);
					console.warn('ERROR(' + err.code + '): ' + err.message);
				}, options);
			}

		}, 30);
	}
	centerChanged(val){
		if (!this.map) {
			this.initMap();
		} else {
			if (!_.isEqual(this.map.getCenter(),val)) {
				this.map.setView(val, 17);
			}
		}
	}
  clearMarkers(){
    this._markerLayers.forEach(layer => {
      this.map.removeLayer(layer);
    });
  }

  markersChanged(val) {
    if (this.lastMarkersVal.length !== val.length && this.map) {
      var self = this;
      this.lastMarkersVal = val;

      console.log('adding markers', val);
      this.clearMarkers();
      val.forEach(markerOptions=> {
        var marker = Leaflet.marker(markerOptions.pos, {icon: markerOptions.icon});
        marker.bindPopup(markerOptions.popup);
        marker.on('popupopen', ev=> {
          console.log('ev', ev);
          self.compiler.compile(ev.popup._wrapper.firstChild);  //TODO figure why this won't compile the map-popup-content element
        });
        marker.addTo(this.map);

        this._markerLayers.push(marker);
      });


    }

  }

}