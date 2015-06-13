import {customElement, inject, bindable} from 'aurelia-framework';
import Leaflet from 'Leaflet/Leaflet';

var defaultCenter = [50.051611, 14.407032];

var options = {
	enableHighAccuracy: true,
	timeout: 6000,
	maximumAge: 0
};

@customElement('map')
@inject(Element)
export class Map {
	@bindable center;
	constructor(el){
		var self = this;

		console.log('this.center', el);
		setTimeout(function(){
			self.map = Leaflet.map(el);
			Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				maxZoom: 18,
				id: 'capaj.024572e4',
				accessToken: 'pk.eyJ1IjoiY2FwYWoiLCJhIjoiODdmMTU1NWQ2NjIxMWEwNjJkZWY4NDQ0MzlkZTVkMWYifQ.0GJycAMIsKzFO6vR8EfTDA'
			}).addTo(self.map);

			navigator.geolocation.getCurrentPosition(pos => {
				var crd = pos.coords;
				self.map.setView([crd.latitude, crd.longitude], 17);
			}, err => {
				self.map.setView(defaultCenter, 11);
				console.warn('ERROR(' + err.code + '): ' + err.message);
			}, options);
		}, 100);
	}

}