define(['jquery'], function ($) {
  $(document).on("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    
    $.mobile.defaultDialogTransition = "none";
    $.mobile.defaultPageTransition = "slidedown";
    //$.mobile.page.prototype.options.degradeInputs.date = true;
    //$.mobile.page.prototype.options.domCache = false;

    //enable flag to disable rendering
    //$.mobile.ignoreContentEnabled=true;
    // enable loading page+icon
    $.mobile.loader.prototype.options.text = "loading";
    //$.mobile.loader.prototype.options.textVisible = false;
    //$.mobile.loader.prototype.options.theme = "a";
    //$.mobile.loader.prototype.options.html = "";
  });
});