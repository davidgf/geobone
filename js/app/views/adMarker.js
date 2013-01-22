define(['jquery', 'underscore', 'backbone', 'text!templates/infowindowTpl.html'], function($, _ , Backbone, infoTpl){
  var AdMarker = Backbone.View.extend({
    
    events: {
    },
    
    infoTpl: _.template($(infoTpl).html()),
    
    initialize: function(options){
      var self = this;
      this.marker = new google.maps.Marker({ 
          position: self.model.get('latLng'),
          map: options.map,
          title: self.model.get('title')
        });
      google.maps.event.addListener(self.marker, 'click', function() {
        options.infowindow.setContent(self.render());
        options.infowindow.open(options.map,self.marker);
      });
      
    },
    
    render: function(){
      //this.$el.html('cousa');
      //return this;
      return this.infoTpl({ad: this.model.toJSON()});
    },
    
    setMap: function(map){
      var self = this;
      this.map = map;
      //var marker = new google.maps.Marker({
      this.marker.setOptions({
          position: self.model.get('latLng'),
          map: map,
          title: self.model.get('title')
        });
    }
  });
  
  return AdMarker;
});