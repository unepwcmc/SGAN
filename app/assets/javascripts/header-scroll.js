jQuery(document).ready(function($){

  // .atob is only available IE10+
  var isIe9 = document.all && !window.atob;

  ///// HEADER SCROLLMAGIC /////
  if ($(window).width() > 1024 && !isIe9) {
    var headerController = new ScrollMagic();  

    var scaleHeader = new ScrollScene({duration: 100})
      .setTween(new TimelineMax ()
        .add([
          TweenMax.fromTo($('.primary-nav > ul > li a'), 1, {paddingTop: 36, paddingBottom: 36}, {paddingTop: 20, paddingBottom: 20, ease: Linear.easeNone}),
          TweenMax.fromTo($('.logo'), 1, {maxWidth: 100, margin: 15}, {maxWidth: 70, margin: 10, ease: Linear.easeNone}) 
        ])
      )
      .addTo(headerController);

    var pinHeader = new ScrollScene({offset: 100})
    .setTween(new TimelineMax ()
        .add([
          TweenMax.fromTo($('#primary-header'), 0.3, {boxShadow: 0}, {boxShadow: "0 1px 10px #5A606E", ease: Linear.easeNone}) 
        ])
      )
      .addTo(headerController);
  }
  

});