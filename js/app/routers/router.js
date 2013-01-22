define(['jquery', 'backbone', 'ui'], function( $, Backbone, UI ) {
  var Router = Backbone.Router.extend( {
    routes: {
      "map": "map",
      "" : "root"
    },
    map: function() {
      app.views.map.render();
      app.collections.adverts.fetch();
      app.views.advertsList.render();
      UI.changePage('#map');
      /*$.mobile.changePage( "#map", {
        transition: "pop",
        reverse: false,
        changeHash: true
      });*/
    },
    root: function() {
      UI.changePage('#main');
      /*$.mobile.changePage( "#main", {
        transition: "pop",
        reverse: false,
        changeHash: true
      });*/
    }
  });
  
  return Router;
});