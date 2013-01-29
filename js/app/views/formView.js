define(['jquery', 'underscore', 'backbone'], function($, _ , Backbone){
  var formView = Backbone.View.extend({
    el: '#adForm',
    
    lat: "-23.56432",
    lng: "-46.65183",
    map: null,
    marker: null,
    
    events: {
      'submit':  'createAdvert'
    },
    
    initialize: function(){
      window.app.collections.adverts.on('add', this.success, this);
    },
    
    render: function(){
      var self = this,
        mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(this.lat, this.lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      this.$el.css('min-height', '300px');
      navigator.geolocation.getCurrentPosition(function(pos){
        mapOptions.center = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        self.map = new google.maps.Map(document.getElementById("map_form"), mapOptions);
        self.trigger('mapready');
        self.marker = new google.maps.Marker({position: mapOptions.center, map: self.map, draggable:true});
        setTimeout(function(){
          window.google.maps.event.trigger(self.map, "resize");
        }, 100);
      }, function(err){
        console.log('Error getting position: '+err.message);
        self.map = new google.maps.Map(document.getElementById("map_form"), mapOptions);
        self.trigger('mapready');
        self.marker = new google.maps.Marker({position: self.map.getCenter(), map: self.map, draggable:true});
        setTimeout(function(){
          window.google.maps.event.trigger(self.map, "resize");
        }, 200);
      }, {maximumAge:60000, timeout: 2000});
      return this;
    },
    
    createAdvert: function(ev){
      ev.preventDefault();
      var self = this;
      var markerPos = self.marker.getPosition();
      var data = {
            title: self.$el.find('[name=title]').val(),
            text: self.$el.find('[name=text]').val(),
            lat: markerPos.lat(),
            lng: markerPos.lng()
      };
      app.collections.adverts.create(data);
    },
    
    success: function(ad) {
      Lungo.Notification.success("Success", "Successful operation", "check", 5);
    }
  });
  
  return formView;
});
