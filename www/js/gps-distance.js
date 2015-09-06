//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
export default function calcDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km

  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}