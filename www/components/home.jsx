import React from 'react';
import GoogleMap from './google-map.jsx!';
import backend from '../services/moonridge';

const knownModels = ['bin', 'poo'];

const LatLng = function(obj) {
  return new google.maps.LatLng(obj.lat, obj.lng);
};

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 16,
      center: {
        lat: 50.051611,
        lng: 14.407032
      }
    };

  }
  componentDidMount() {
    console.log('componentDidMount home');
    var id = this.props.params.id;
    var type = this.props.params.type;

    if (id && knownModels.indexOf(type) !== -1) {
      backend.model(type).query().findOne({_id: id}).exec().promise.then((displayed)=>{

        var prom = this.refs.mainMap.addMarkers(type, [displayed]);

        Promise.resolve(prom).then(function(){
          setTimeout(function(){
            displayed.openInfoBubble(); //we need the pin to be rendered before opening the window
          }, 32);
        });

      });
    } else {
      const geolocationOptions = {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(pos => {
        var crd = pos.coords;

        var zoom = Math.floor(17 - (pos.coords.accuracy/500));
        const mainMap = this.refs.mainMap;
        if (mainMap) {  //a mainMap can unmount while the query is running
          mainMap.map.setCenter(LatLng({lat: crd.latitude, lng: crd.longitude}));
          mainMap.map.setZoom(zoom);
        }

      }, err => {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }, geolocationOptions);
    }

  }
  query = (bounds) => {
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();
    var box = [[southWest.lat(), southWest.lng()], [northEast.lat(), northEast.lng()]];

    let queriesPromises = knownModels.map((model) =>{
      return backend.model(model).query().where('loc').within({box: box}).exec().promise.then((entity)=>{
        if (this.refs.mainMap) {  //a map can unmount while the query is running
          this.refs.mainMap.addMarkers(model, entity);
        }
      });
    });

    this.setState({queriesPromises: queriesPromises});
  }
  render() {
    return <div className="google-map-wrapper">
      <GoogleMap ref="mainMap" center={this.state.center} zoom={this.state.zoom}
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
