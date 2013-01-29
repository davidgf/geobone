define(['jquery', 'backbone', 'ui'], function( $, Backbone, UI ) {
  var Router = Backbone.Router.extend( {
    routes: {
      "map": "map",
      "" : "map",
      "formPage": "formPage"
    },
    map: function() {
      app.views.map.render();
      app.collections.adverts.fetch();
      app.views.advertsList.render();
      Lungo.Router.section("map");
    },
    root: function() {
      Lungo.Router.section("main");
    },
    formPage: function() {
      app.views.formView.render();
      Lungo.Router.section("formPage");
    }
  });
  
  return Router;
});