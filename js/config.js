require.config({
  deps: ['app/app'],
  paths: {
    lib: 'lib',
    jquery: 'lib/jquery-1.8.2.min',
    backbone: 'lib/backbone-min',
    underscore: 'lib/underscore-min',
    geomarker: 'lib/geolocationmarker-compiled',
    jquerymobile: 'lib/jquery.mobile-1.2.0.min',
    jqmconfig: 'app/jqmconfig',
    ui: 'app/ui',
    models: 'app/models',
    collections: 'app/collections',
    templates: 'app/templates',
    views: 'app/views',
    lsAdapter: 'lib/backbone.localStorage-min',
    text: 'lib/text'
  },
  shim: {
    underscore: { exports: '_' },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    lsAdapter: {
      deps: ['backbone']
    },
    jqmconfig: ['jquery'],
    jquerymobile: ['jquery','jqmconfig']
  }
});