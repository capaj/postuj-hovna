import Leaflet from 'Leaflet/Leaflet';
import _ from 'lodash';

var iconBase = {
	iconSize:     [38, 95], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
};

var makeIcon = function(props) {
	return Leaflet.icon(_.assign(props, iconBase));
};

export default {
	poo: makeIcon({
		iconUrl: 'leaf-green.png'
	}),
	bin: {
		plain: makeIcon({
			iconUrl: '/img/bin-plain.svg'
		}),
		good: makeIcon({
			iconUrl: '/img/bin-good.svg'
		}),
		bad: makeIcon({
			iconUrl: '/img/bin-bad.svg'
		})
	}
}


