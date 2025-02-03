var jQ = jQuery.noConflict();

jQ(document).ready(function () {
  //This function for sticky header
  jQ(window).scroll(function () {
    if (jQ(this).scrollTop() > 50) {
      jQ(".top-head").addClass("Sticky-top-head");
    } else {
      jQ(".top-head").removeClass("Sticky-top-head");
    }
  });

  jQ('.mob-btn').on('click', function () {
    jQ('.lft-menu').addClass('slide-right');
    jQ('.menu-close').fadeIn();
  });
  jQ('.menu-close').on('click', function () {
    jQ('.lft-menu').removeClass('slide-right');
    jQ(this).hide();
  });

});
