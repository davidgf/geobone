require.config({
  deps: ['app/app'],
  paths: {
    lib: 'lib',
    jquery: 'lib/jquery-1.8.2.min',
    backbone: 'lib/backbone-min',
    underscore: 'lib/underscore-min',
    geomarker: 'lib/geolocationmarker-compiled',
    jquerymobile: 'lib/jquery.mobile-1.2.0.min',
    jqmconfig: 'app/jqmconfig'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    jqmconfig: ['jquery'],
    jquerymobile: ['jquery','jqmconfig']
  }
});