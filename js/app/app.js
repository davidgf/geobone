require(['jquery', 'underscore', 'app/views/map', 'app/routers/router', 'jquerymobile'], function($, _, Map, Router){

  window.app = window.app || {
    views: {
      map: new Map()
    },
    routers: {
      router: new Router()
    }
  };
  
  Backbone.history.start();
 
 //app.map = new Map();
 //app.map.render();
 //return app;
})
