$(window).on("load", function () {
    "use strict";
  
    /*=========================================================================
          Preloader
      =========================================================================*/
    $("#preloader").delay(350).fadeOut("slow");
    // Because only Chrome supports offset-path, feGaussianBlur for now
    var isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  
    if (!isChrome) {
      document.getElementsByClassName("infinityChrome")[0].style.display = "none";
      document.getElementsByClassName("infinity")[0].style.display = "block";
    }})
