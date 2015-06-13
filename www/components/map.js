import {customElement, inject, bindable, bindingMode} from 'aurelia-framework';
import Leaflet from 'Leaflet/Leaflet';
import _ from 'lodash';

var defaultCenter = [50.051611, 14.407032];

var options = {
	enableHighAccuracy: true,
	timeout: 6000,
	maximumAge: 0
};

@customElement('map')
@inject(Element)
@bindable({
	name:'center',
	attribute:'center',
	changeHandler:'centerChanged',
	defaultBindingMode: bindingMode.twoWay
})
export class Map {
	constructor(el){
		var self = this;
		this.element = el;
		console.log('this.center', el);
		if (this.center !== null) {
			this.initMap();
		}
	}
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

		}, 100);
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

}