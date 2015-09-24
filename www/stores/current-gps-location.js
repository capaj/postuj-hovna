import Emitter from 'weakee'
const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 6000,
  maximumAge: 0
}

class CurrentGps extends Emitter {
  constructor() {
    super()
    navigator.geolocation.getCurrentPosition(pos => {
      Object.assign(this, pos)
      this.emit('gotCurrentPosition', pos)
    }, err => {
      this.error = err
      this.emit('error', err)
      console.warn('ERROR(' + err.code + '): ' + err.message)
    }, geolocationOptions)
  }
}

export default new CurrentGps()