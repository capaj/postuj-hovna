import React from 'react';
import GoogleMap from './google-map.jsx!';
import backend from '../services/moonridge';
const models = {
  bin: backend.model('bin'),
  poo: backend.model('poo')
};

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
  query = (bounds) => {
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();
    var box = [[southWest.lat(), southWest.lng()], [northEast.lat(), northEast.lng()]];

    models.bin.query().where('loc').within({box: box}).exec().promise.then((bins)=>{
      console.log('bins', bins);
      this.refs.map.addMarkers('bin', bins);
    });
    models.poo.query().where('loc').within({box: box}).exec().promise.then((poos)=>{
      console.log('poos', poos);
      this.refs.map.addMarkers('poo', poos);
    });
  }
  render() {
    return <div className="google-map-wrapper">
      <GoogleMap ref="map" center={this.state.center} zoom={this.state.zoom}
                 onBoundsChanged={this.query}>
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