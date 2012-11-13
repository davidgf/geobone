define(['jquery', 'underscore', 'backbone', 'geomarker'], function($, _, Backbone){
  var Map = Backbone.View.extend({
    el: '#map_canvas',
    
    lat: "-23.56432",
    lng: "-46.65183",
    map: null,
    
    initialize: function(){
      var self = this;
    },
    
    render: function(){
      var self = this, map,
        mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(this.lat, this.lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      navigator.geolocation.getCurrentPosition(function(pos){
        mapOptions.center = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        self.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        GeoMarker = new GeolocationMarker();
        GeoMarker.setCircleOptions({fillColor: '#808080'});
        GeoMarker.setMap(self.map);
      }, function(err){
        console.log('Error getting position: '+err.message);
        self.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      });
    }
  });
  
  return Map;
});
