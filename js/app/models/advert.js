define(['jquery', 'backbone'], function( $, Backbone ) {

  /*var Coords = Backbone.Model.extend( {
    defaults: {
      lat: 0,
      lng: 0
    }
  });*/
  
  var Advert = Backbone.Model.extend( {
    defaults: {
      title: '',
      lat: 0,
      lng: 0
    },
    
    initialize: function(){
      this.set('latLng', new google.maps.LatLng(this.get('lat'), this.get('lng')));
    }
  });
  
  return Advert;
});