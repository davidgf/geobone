define(['jquery', 'underscore', 'backbone', 'views/adMarker', 'geomarker'], function($, _, Backbone, adMarker){
  var Map = Backbone.View.extend({
    el: '#map_canvas',
    
    lat: "-23.56432",
    lng: "-46.65183",
    map: null,
    infowindow: new google.maps.InfoWindow(),
    
    events: {
      "orientationchange": "fitScreen"
    },
    
    initialize: function(){
      var self = this,
        mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(this.lat, this.lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      this.$el.css('min-height', '300px');
      self.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      window.app.collections.adverts.on('add', this.addAdvert, this );
      this.on('mapready', this.addAllAdverts );
    },
    
    render: function(){
      var self = this;
      navigator.geolocation.getCurrentPosition(function(pos){
        self.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        self.trigger('mapready');
        GeoMarker = new GeolocationMarker();
        GeoMarker.setCircleOptions({fillColor: '#808080'});
        GeoMarker.setMap(self.map);
        setTimeout(function(){
          window.google.maps.event.trigger(self.map, "resize");
        }, 100);
      }, function(err){
        console.log('Error getting position: '+err.message);
        self.trigger('mapready');
        setTimeout(function(){
          window.google.maps.event.trigger(self.map, "resize");
        },200);
      }, {maximumAge:6000, timeout: 2000});
      return this;
    },
    
    addAllAdverts: function(){
      window.app.collections.adverts.each(this.addAdvert, this);
    },
    
    addAdvert: function(ad){
      var self = this;
      var adView = new adMarker({model: ad, map: self.map, infowindow: self.infowindow});
     // adView.setMap(this.map);
    },
    
    fitScreen: function(){
      //window.google.maps.event.trigger(this.map, "resize");
    }
  });
  
  return Map;
});
