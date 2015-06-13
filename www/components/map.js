import {customElement, inject, bindable} from 'aurelia-framework';
import Leaflet from 'Leaflet/Leaflet';

var defaultCenter = [50.051611, 14.407032];

@customElement('map')
@inject(Element)
export class Map {
	@bindable center;
	constructor(el){
		console.log('this.center', el);
		setTimeout(function(){
			var map = Leaflet.map(el).setView(defaultCenter, 13);
			Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				maxZoom: 18,
				id: 'capaj.024572e4',
				accessToken: 'pk.eyJ1IjoiY2FwYWoiLCJhIjoiODdmMTU1NWQ2NjIxMWEwNjJkZWY4NDQ0MzlkZTVkMWYifQ.0GJycAMIsKzFO6vR8EfTDA'
			}).addTo(map);
		}, 1000);

	}

}