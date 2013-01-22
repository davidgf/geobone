require(['jquery', 'underscore', 'app/views/map', 'app/views/advertsList', 'app/routers/router', 'collections/adverts'], function($, _, Map, advertsList, Router, Adverts){

  window.app = window.app || {
    routers: {
      router: new Router()
    },
    collections: {
      adverts: new Adverts()
    }
  };
  
  window.app.views = {
    map: new Map(),
    advertsList: new advertsList()
  };
  
  Backbone.history.start();
  //$(window).on('orientationchange',function(ev){
    //alert('change');
    //$('meta[name=viewport]').remove();
    //$('head').append('<meta name="viewport" content="width = device-width, height=100%, initial-scale=1, maximum-scale=1, user-scalable=no">');
    //$(window.views.map.el).trigger('orientationchange');
  //});
})
