import React from 'react';
import debounce from 'just-debounce';
import mapMarkers from '../stores/map-markers';
const LatLng = function(obj) {
  return new google.maps.LatLng(obj.lat, obj.lng);
};

export default class GoogleMap extends React.Component {
  constructor(...props) {
    super(...props);
  }

  addMarkers(markerEntities){
    return mapMarkers.addMarkers(markerEntities, this.map);
  }
  componentDidMount() {
    console.log('componentDidMount GoogleMap');
    var props = this.props;

    const mapOptions = {
      center: new LatLng(props.center),
      zoom: this.props.zoom || 8,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      streetViewControl: false
    };
    Object.assign(mapOptions, this.props.mapOptions);
    var domNode = React.findDOMNode(this);
    const map = new google.maps.Map(domNode, mapOptions);
    //const marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});

    if (this.props.onBoundsChanged) {
      //we need this, because google maps are triggering this way to much
      var debouncedBoundsChangedEvent = debounce(()=>{
        this.props.onBoundsChanged(map.getBounds());
      }, 900);

      map.addListener('bounds_changed', (ev) => {
        if (this.props.onMove) {
          this.props.onMove()
        }
        debouncedBoundsChangedEvent();
      });

    }

    mapMarkers.photos.each((bin) => {
      mapMarkers.addMarkerToMap(bin, map);
    });

    this.map = map;
  }

  render() {
    return <div className={this.props.containerClass || "google-map-container"}></div>;
  }
}
