var expect = require('chai').expect;
var Map = require('../components/map').Map;

describe('map', function() {
    it('should have property for storing the current markers on the map', function(){
        var el = document.createElement('map');
        var map = new Map(el, {});
    });
});