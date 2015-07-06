import _ from 'lodash';
import LSBackedStore from '../js/ls-backed-store';
import Hashset from 'hashset.js';

function getIcon(type, entity) {
  var icons = {
    poo: '/img/pin-poo.svg',
    bin: {
      plain: '/img/pin-bin-plain.svg',
      good: '/img/pin-bin-good.svg',
      bad: '/img/pin-bin-bad.svg'
    }
  };
  if (type === 'bin') {
    if (entity.bags_count > 8) {

    }
  } else {
    return icons[type];

  }

}

const store = {
  bin: new Hashset('_id'),
  poo: new Hashset('_id'),
  /**
   *
   * @param {String} type
   * @param {Array<Objects>} markers
   */
  addMarkers: (type, markers, map) => {
    markers.forEach(function (marker){
      var replaced = store[type].upsert(marker);
      if (!replaced) {  //markers cannot change position, so we don't have to recreate google map marker instances
        var myLatLng = new google.maps.LatLng(marker.loc[0], marker.loc[1]);
        var newMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: '/img/pin-poo.svg'
        });
      }
    });

  }
};

//LSBackedStore('map-markers', store);

export default store;