import React from 'react';

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

    //this.props = nextProps;
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
      streetViewControl: false,
    };
    var domNode = React.findDOMNode(this);
    console.log('domNode', domNode);
    console.log('mapOptions', mapOptions);
    const map = new google.maps.Map(domNode, mapOptions);
    //const marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
    this.setState({map: map});
  }

  render() {
    return <div className='google-map-container'></div>;
  }
}
