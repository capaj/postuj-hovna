import React from 'react';
import GoogleMap from './google-map.jsx!';

export default class Home extends React.Component {
  constructor() {
    super();
    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 6000,
      maximumAge: 0
    };
    this.state = {
      zoom: 18,
      center: {
        lat: 50.051611,
        lng: 14.407032
      }
    };

    navigator.geolocation.getCurrentPosition(pos => {
      var crd = pos.coords;

      this.setState({
        center: {lat: crd.latitude, lng: crd.longitude},
        zoom: 16
      });
    }, err => {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }, geolocationOptions);
  }

  render() {
    return <div className="google-map-wrapper">
      <GoogleMap center={this.state.center} zoom={this.state.zoom}>
      </GoogleMap>
      <a href="/#/pridat-hovno">
        <img className="add poo" src="img/poo.svg" width="75px"/>
      </a>
      <a href="/#/pridat-kos">
        <img className="add bin" src="img/bin.svg" width="75px"/>
      </a>
    </div>;
  }
}
