import React from 'react';
import GoogleMap from './google-map.jsx!';
import {photo, pooState, binState} from '../services/moonridge';
import backend from '../services/moonridge';
import calcDistance from '../js/gps-distance';
import {liveQueryComponent} from 'capaj/moonridge-react-utils';

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
      },
      nonexistent: false
    };

    //todo live query on binStates/pooStates
  }
  isAnExisting(){
    return this.props.params.id && this.state.nonexistent === false;
  }
  componentDidMount() {
    console.log('componentDidMount home');
    if (this.isAnExisting()) {
      var id = this.props.params.id;
      photo.query().findOne({_id: id}).exec().promise.then((displayed)=>{
        if (displayed) {
          this.setState({nonexistent: false, displayed: displayed});
          var prom = this.refs.mainMap.addMarkers([displayed]);

          Promise.resolve(prom).then(function(){
            setTimeout(function(){
              displayed.openInfoBubble(); //we need the pin to be rendered before opening the window
            }, 32);
          });
        }else{
          this.setState({nonexistent: true});
        }
      }, (err)=> {
        console.error(err);
        this.setState({nonexistent: true});
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

    this.setState({
      queriesPromise: photo.query().where('loc').within({box: box}).exec().promise.then((photos)=> {
        if (this.refs.mainMap) {  //a map can unmount while the query is running
          this.refs.mainMap.addMarkers(photos);
        }
      })
    });
  }
  willTransitionTo(transition, params) {
    console.log('transition', transition);
  }
  createStatus = (present) => {
    let state = {photo: this.props.params.id};
    if (this.props.params.type === 'poo') {
      state.type = 'present';
      if (!present) {
        state.type = 'gone';
      }
      pooState.create(state);

    } else {
      state.bag_count = 10;
      binState.create(state);
    }

  }
  renderFooter(){
    if (this.props.params.id && this.state.nonexistent === true) {
      let badUrlAlertStyle = {position: 'absolute', bottom: 0, left: 0,
        backgroundColor: "#372321", borderRadius: 37, margin: 10, padding: 10};
      return <div className='add' style={badUrlAlertStyle}>
        <h3>Špatná URL: {this.props.params.id} neexistuje</h3>
      </div>;
    } else {
      var leftBtn = <a href="/#/pridat-hovno">
        <img className="add poo" src="img/poo.svg" width="75px"/>
      </a>;
      var rightBtn = <a href="/#/pridat-kos">
        <img className="add bin" src="img/bin.svg" width="75px"/>
      </a>;
      if (this.isAnExisting()) {
        leftBtn = <div style={{backgroundColor: 'red'}} className="add poo btn btn-default btn-circle"
                       onClick={()=>{this.createStatus(false)}}>
          <span className="glyphicon glyphicon-remove"></span>
        </div>;
        rightBtn = <div style={{backgroundColor: 'green'}} className="add bin btn btn-default btn-circle"
                        onClick={()=>{this.createStatus(true)}}>
          <span className="glyphicon glyphicon-ok"></span>
        </div>
      }
      return <div>
        {leftBtn}{rightBtn}
      </div>;
    }

  }
  render() {
    return <div className="google-map-wrapper">
      <GoogleMap ref="mainMap" center={this.state.center} zoom={this.state.zoom}
                 onBoundsChanged={this.query}>
      </GoogleMap>
      {this.renderFooter()}
    </div>;
  }
}
