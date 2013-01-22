define(['jquery'], function ($) {

  var $pages = $('.page');
  
  $(function(){
    $(window).on('resize', function(){
      var height = window.innerHeight || $( window ).height();
      $pages.css('min-height', height);
    }).trigger('resize');
    $(document).on('click','[data-role=back]', function(){ window.history.back() });
  });
  
  var UI = {
    activePage: function(){
      return $('.page.active');
    },
    changePage: function(page){
      $pages.removeClass('active');
      $pages.filter(page).addClass('active');
    }
  };
  
  return UI;
});