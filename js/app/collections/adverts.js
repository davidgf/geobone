define(['jquery', 'backbone', 'models/advert', 'lsAdapter'], function( $, Backbone, Advert ) {
  
  var Adverts = Backbone.Collection.extend( {
    model: Advert,
    localStorage: new Backbone.LocalStorage('adverts-list')
  });
  
  return Adverts;
});