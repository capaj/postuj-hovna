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

  mapCenterLatLng() {
    var props = this.props;
    return new LatLng(props.center);
  }

  componentWillReceiveProps(nextProps) {
    console.log('willReceive');
    this.setState(nextProps);
    this.state.map.setCenter(LatLng(nextProps.center));
    this.state.map.setZoom(nextProps.zoom);
  }
  addMarkers(type, markerEntities){
    mapMarkers.addMarkers(type, markerEntities, this.state.map);
  }
  componentDidMount() {
    const mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: 8,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      streetViewControl: false
    };
    var domNode = React.findDOMNode(this);
    const map = new google.maps.Map(domNode, mapOptions);
    //const marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});

    //we need this, because google maps are triggering this way to much
    var debouncedBoundsChangedEvent = debounce(()=>{
      this.props.onBoundsChanged(map.getBounds());
    }, 1000);
    map.addListener('bounds_changed', (ev) => {
      debouncedBoundsChangedEvent();
      console.log('ev', ev);
    });

    this.setState({map: map});
  }

  render() {
    return <div className='google-map-container'></div>;
  }
}
