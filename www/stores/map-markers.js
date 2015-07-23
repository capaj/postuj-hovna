import _ from 'lodash';
import LSBackedStore from '../js/ls-backed-store';
import Hashset from 'hashset.js';
import InfoBubble from 'googlemaps/js-info-bubble/src/infobubble';
import MarkerBubble from '../components/marker-bubble.jsx!';
import React from 'react';
import 'jspm_packages/npm/hashset.js@1.1.0/test/object-assign-polyfill';

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
var openedBubble;


const store = {
  bin: new Hashset('_id'),
  poo: new Hashset('_id'),
  /**
   * @param {String} type
   * @param {Array<Objects>} markers
   */
  addMarkers: (type, markers, map) => {

    markers.forEach(function (marker){
      var updated = store[type].upsert(marker);
      if (!updated) {  //markers cannot change position, so we don't have to recreate google map marker instances
        store.addMarkerToMap(type, marker, map);
      }
    });

  },
  addMarkerToMap: function addMarkerToMap(type, marker, map) {
    const myLatLng = new google.maps.LatLng(marker.loc[0], marker.loc[1]);
    const newMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: `/img/pin-${type}.svg`
    });
    const infoBubble = new InfoBubble({
      map: map,
      content: `<div id="${marker._id}" class="${type}-bubble" style="width: 345px;height: 300px;"></div>`,
      shadowStyle: 1,
      padding: 10,
      backgroundColor: '#3A1F07',
      borderRadius: 5,
      arrowSize: 25,
      borderWidth: 1,
      borderColor: '#987230',
      //disableAutoPan: true,
      arrowPosition: 50,
      backgroundClassName: 'transparent',
      arrowStyle: 2,
      width: 300,
      height: 600
    });

    marker.openInfoBubble = function() {
      if (openedBubble) {
        openedBubble.close();
      }
      infoBubble.open(map, newMarker);
      openedBubble = infoBubble;
      location.hash = `#/${type}/${marker._id}`;
      setTimeout(function() {
        React.render(<MarkerBubble {...marker}/>, infoBubble.contentContainer_.children[0].children[0]);
      }, 50);
    };
    google.maps.event.addListener(newMarker, 'click', marker.openInfoBubble);
  }

};

//LSBackedStore('map-markers', store);

export default store;