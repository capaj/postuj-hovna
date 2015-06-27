import React from 'react';
import debounce from 'just-debounce';

const LatLng = function(obj) {
  return new google.maps.LatLng(obj.lat, obj.lng);
};

export default class GoogleMap extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      markers: []
    }
  }

  mapCenterLatLng() {
    var props = this.props;
    return new LatLng(props.center);
  }

  componentWillReceiveProps(nextProps) {

    this.setState(nextProps);
    this.state.map.setCenter(LatLng(nextProps.center));
    this.state.map.setZoom(nextProps.zoom);
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
    console.log('domNode', domNode);
    console.log('mapOptions', mapOptions);
    const map = new google.maps.Map(domNode, mapOptions);
    //const marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});

    //we need this, because google maps are triggering this way to much
    var debouncedBoundsChangedEvent = debounce(()=>{
      this.props.onBoundsChanged(map.getBounds());
    }, 1500);
    map.addListener('bounds_changed', (ev) => {
      debouncedBoundsChangedEvent();
    });

    this.setState({map: map});
  }

  render() {
    return <div className='google-map-container'></div>;
  }
}
