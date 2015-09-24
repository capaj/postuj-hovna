import React from 'react'
import GoogleMap from './google-map.jsx!'
import {photo} from '../services/moonridge'
import backend from '../services/moonridge'
import calcDistance from '../js/gps-distance'
import {liveQueryComponent} from 'capaj/moonridge-react-utils'
import gonePoosLQ from '../stores/states-store'
import HomeFooter from './map-controls.jsx!'
import currentGps from '../stores/current-gps-location'

const LatLng = function(obj) {
  return new google.maps.LatLng(obj.lat, obj.lng)
}

export default class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      zoom: 16,
      center: {
        lat: currentGps.coords.latitude,
        lng: currentGps.coords.longitude
      },
      nonexistent: false
    }

    //todo live query on binStates/pooStates
  }
  isAnExisting(){
    return this.props.params.id && this.state.nonexistent === false
  }
  componentDidMount() {
    console.log('componentDidMount home')
    if (this.isAnExisting()) {
      var id = this.props.params.id
      photo.query().findOne({_id: id}).exec().promise.then((displayed)=>{
        if (displayed) {
          this.setState({nonexistent: false, displayed: displayed})
          var prom = this.refs.mainMap.addMarkers([displayed])

          Promise.resolve(prom).then(function(){
            setTimeout(function(){
              displayed.openInfoBubble() //we need the pin to be rendered before opening the window
            }, 32)
          })
        }else{
          this.setState({nonexistent: true})
        }
      }, (err)=> {
        console.error(err)
        this.setState({nonexistent: true})
      })
    } else {
      const mainMap = this.refs.mainMap
      currentGps.once('gotCurrentPosition', (pos) => {
        var zoom = Math.floor(17 - (pos.coords.accuracy/500))
        const coords = pos.coords
        if (mainMap) {  //a mainMap can unmount while localizing
          mainMap.map.setCenter(LatLng({lat: coords.latitude, lng: coords.longitude}))
          mainMap.map.setZoom(zoom)
        }
      })
    }
  }
  query = (bounds) => {
    const southWest = bounds.getSouthWest()
    const northEast = bounds.getNorthEast()
    var box = [[southWest.lat(), southWest.lng()], [northEast.lat(), northEast.lng()]]

    this.setState({
      queriesPromise: photo.query().where('loc').within({box: box}).exec().promise.then((photos)=> {
        if (this.refs.mainMap) {  //a map can unmount while the query is running
          this.refs.mainMap.addMarkers(photos)
        }
      })
    })
  }
  willTransitionTo(transition, params) {
    console.log('transition', transition)
  }
  render() {
    return <div className="google-map-wrapper">
      <GoogleMap ref="mainMap" center={this.state.center} zoom={this.state.zoom}
                 onBoundsChanged={this.query}>
      </GoogleMap>
      <HomeFooter id={this.props.params.id}
                  type={this.props.params.type}
                  nonexistent={this.state.nonexistent}
                  gone={this.props.query.gone}
      />
    </div>
  }
}
