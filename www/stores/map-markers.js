import _ from 'lodash';
import LSBackedStore from '../js/ls-backed-store';
import Hashset from 'hashset.js';
import InfoBubble from 'googlemaps/js-info-bubble/src/infobubble';
import MarkerBubble from '../components/marker-bubble.jsx!';
import React from 'react';
import 'jspm_packages/npm/hashset.js@1.1.0/test/object-assign-polyfill';
import backend from '../services/moonridge';
import gonePoosLQ from '../stores/states-store';

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
  photos: new Hashset('_id'),

  /**
   * @param {Array<Objects>} markers
   */
  addMarkers: (markers, map) => {

    markers.forEach(function (marker){
      var updated = store.photos.upsert(marker);
      if (!updated) {  //markers cannot change position, so we don't have to recreate google map marker instances
        store.addMarkerToMap(marker, map);
      }
    });

  },
  addMarkerToMap: function addMarkerToMap(marker, map) {
    const myLatLng = new google.maps.LatLng(marker.loc[0], marker.loc[1]);
    const newMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: `/img/pin-${marker.type}.svg`
    });

    function createBubble() {
      const infoBubble = new InfoBubble({
        map: map,
        content: `<div id="${marker._id}" class="${marker.type}-bubble" style="width: 345px;height: 300px;"></div>`,
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
        height: 600,
        buildCloseBtn: function() {
          var el = document.createElement('SPAN');
          el.style['font-size'] = '25px';
          el.className = 'glyphicon glyphicon-remove';
          return el;
        }
      });

      marker.openInfoBubble = function() {
        if (openedBubble) {
          openedBubble.close();
        }
        infoBubble.open(map, newMarker);
        openedBubble = infoBubble;
        var infoBubbleContainer;

        google.maps.event.addDomListener(infoBubble.close_, 'click', function() {
          location.hash = '#/';
          React.unmountComponentAtNode(infoBubbleContainer);
        });

        location.hash = `#/${marker.type}/${marker._id}`;
        setTimeout(function() {
          infoBubbleContainer = infoBubble.contentContainer_.children[0].children[0];
          React.render(<MarkerBubble {...marker}/>, infoBubbleContainer);
        }, 50);
      };
      google.maps.event.addListener(newMarker, 'click', marker.openInfoBubble);
    }

    if (marker.type === 'bin') {
      return backend.binState.query().find().limit(1).sort({date: -1}).exec().promise.then((binArr)=>{
        var latest = binArr[0];
        if (latest.bag_count > 4) {
          newMarker.icon = '/img/pin-bin-good.svg';
        } else {
          newMarker.icon = '/img/pin-bin-bad.svg';
        }
        createBubble();

      });
    }
    createBubble();

  }

};

//LSBackedStore('map-markers', store);

export default store;