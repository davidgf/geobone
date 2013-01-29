require(['jquery', 'underscore', 'views/map', 'views/advertsList', 'app/routers/router', 'collections/adverts', 'views/formView', 'lungo'], function($, _, Map, advertsList, Router, Adverts, formView, Lungo){

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
    advertsList: new advertsList(),
    formView: new formView()
  };
  
  Lungo.init({
      version : '2.0'
  });
  
  Backbone.history.start();
})
