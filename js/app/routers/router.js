define(['jquery', 'backbone'], function( $, Backbone ) {
  var Router = Backbone.Router.extend( {
    routes: {
      "map": "map",
      "" : "root"
    },
    map: function() {
      $.mobile.changePage( "#map", {
        transition: "pop",
        reverse: false,
        changeHash: true
      });
    },
    root: function() {
      app.views.map.render();
      $.mobile.changePage( "#main", {
        transition: "pop",
        reverse: false,
        changeHash: true
      });
    }
  });
  
  return Router;
});