define(['jquery', 'underscore', 'backbone', 'text!templates/advertTpl.html'], function($, _ , Backbone, advertTpl){
  var AdvertsList = Backbone.View.extend({
    el: '#adverts_list',
    adTemplate: _.template($(advertTpl).html()),
    events: {
    },
    
    render: function(){
      this.$el.html(this.adTemplate({adverts: window.app.collections.adverts.toJSON()}));
    }
  });
  
  return AdvertsList;
});
