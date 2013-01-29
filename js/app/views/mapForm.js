define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
  var MapForm = Backbone.View.extend({
    el: '#map_form',
    
    lat: "-23.56432",
    lng: "-46.65183",
    map: null,
    marker: new google.maps.Marker(),
    
    events: {
    },
    
    initialize: function(){
    },
    
    render: function(){
      
    }
  });
  
  return MapForm;
});
