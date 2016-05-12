var highestBox = 0;

function setUniformHeightOnElements(elements) {
  elements.each(function(){

      if ($(this).height() > highestBox) {
        highestBox = $(this).height(); 
      }
         
  });  

  elements.height(highestBox);

  var adjustForPadding = highestBox + 70;

  $('.latest-resources').height(adjustForPadding);
}

function adjustElementWithBorder($el1, $el2, border) {

  if ($el1.height() < $el2.height()) {
    $el1.height($el2.height() - border);
  }
}

jQuery(document).ready(function($){

  if ( $('.home').length && $(window).width() > 899) {
    adjustElementWithBorder($('.home main'), $('.upcoming-events'), 8);
    setUniformHeightOnElements($('.js-equal-height-2'));
  }

  // set element height to tallest
  if ($('.cta-wrapper').length && $(window).width() > 1023) {
    setUniformHeightOnElements($('.cta-wrapper'));
  }

  // unwrap WYSIWYG-added buttons and images
  $('p > .link-button-general').unwrap();
  $('p > img').unwrap();

  ///// PAGINATION /////
  // overwrites will_paginate default
  $('.pagination .next_page').html('Next Page');
  $('.pagination .previous_page').html('Previous Page');

  $('.hamburger-menu').click(function(e){
    $('.mobile-nav').slideToggle();
    $(this).toggleClass('open');
  });

  // add dropdown class if li has dropdown
  $('.primary-nav a, .mobile-nav a').each( function() {
    if ( $(this).siblings('ul').length ) {
       $(this).closest('li').addClass('hasDropdown');
    }
  });
  
  ///// HEADER /////
  $('.hasDropdown > a').on('click', function(e){
    e.preventDefault();
  });

  // mobile nav specific
  $('.mobile-nav .hasDropdown a').on('click', function(){
    $(this).toggleClass('open');
    $(this).siblings('ul').slideToggle();
  });

  ///// HOMEPAGE STYLES > 900px /////
  if ($(window).width() > 900) {
    $('.latest-resources').customScrollbar();
    $('.latest-resources').addClass('one-rounded');
    $('.grey-box').addClass('two-rounded');
  }

  function scrollToElement(hash){
    if ( hash.length === 0 ) return;
    var headerOffset = $('#primary-header').height() + 20;
    $('html, body').stop().animate({
      scrollTop: $(hash).offset().top - headerOffset
    }, 300);
  }
  scrollToElement(window.location.hash);

  $(window).on('resize', function(){
    if ($(window).width() > 900) {
      $('.latest-resources').customScrollbar();
      $('.latest-resources').addClass('one-rounded');
      $('.grey-box').addClass('two-rounded');
    } else {
      $('.latest-resources').removeClass('one-rounded');
      $('.grey-box').removeClass('two-rounded');
    }
  });

  // navigate to relevant resource from homepage to resource page
  if ( window.location.hash !== undefined ){
    var document = window.location.hash.substring(1);
    setTimeout(function(){
      $('#' + document).trigger('click');
    }, 500);
  }

});