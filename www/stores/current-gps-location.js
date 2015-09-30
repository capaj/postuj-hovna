import Emitter from 'weakee'
const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 6000,
  maximumAge: 0
}

class Gps extends Emitter {
  constructor() {
    super()
    var self = this;
    this.coords = {
      latitude: 50.051611,
      longitude: 14.407032
    }
    navigator.geolocation.getCurrentPosition(pos => {
      self.coords = pos.coords
      self.timestamp = pos.timestamp
      this.emit('gotCurrentPosition', pos)
    }, err => {
      this.error = err
      this.emit('error', err)
      console.warn('ERROR(' + err.code + '): ' + err.message)
    }, geolocationOptions)
  }
}
const currentGps = new Gps()
export default currentGps