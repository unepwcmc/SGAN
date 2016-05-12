function setGreyBoxAccordion() {
  var $greyBoxContent = $('.grey-box .grey-box-content');
  var hideGreyBoxContent = $greyBoxContent.hide();

  // $resourcesList.css('height', 'auto');
  
  $('.grey-box > h2').unbind('click');
  $('.grey-box > h2').click(function(e) {
    var currentBoxContent = $(this).siblings();

    $('.grey-box > h2').removeClass('shown');
    currentBoxContent.removeClass('shown');

    $greyBoxContent.slideUp();

    if(!$(currentBoxContent).is(':visible')){
      $(currentBoxContent).slideDown();
      $(this).addClass('shown');
      $(this).siblings().addClass('shown');
    }

    e.preventDefault();
  });
}

function showGreyBoxContent() {
  var $greyBoxContent = $('.grey-box .grey-box-content');
  $greyBoxContent.show();
}

function setLatestResourcesAccordion(){
  var $resourcesList = $('.latest-resources h3 + ul');  
  var hideResourcesList = $resourcesList.hide();

  // $resourcesList.css('height', 'auto');

  $('.scrollable .viewport').width('100%');
  $('.latest-resources').removeClass('default-skin scrollable');
  $('.scroll-bar.vertical, .thumb, .viewport').height('auto');

  $('.latest-resources h3').unbind('click');
  $('.latest-resources h3').click(function(e) {
    var latestResources = $(this).siblings();

    $('.latest-resources h3').removeClass('shown');
    latestResources.removeClass('shown');

    $resourcesList.slideUp();

    if(!$(latestResources).is(':visible')){
      $(latestResources).slideDown();
      $(this).addClass('shown');
      $(latestResources).addClass('shown');
    }

    e.preventDefault();
  });
}

function showLatestResources() {
  var $resourcesList = $('.latest-resources h3 + ul');  
  $resourcesList.show();
}

jQuery(document).ready(function($){

  // on load set mobile accordions
  if ($(window).width() < 901) {
    setLatestResourcesAccordion();
    setGreyBoxAccordion();
  }

  // on resize set mobile accordions
  $(window).on('resize', function(){
    if ($(window).width() < 901) {
      setLatestResourcesAccordion();
      setGreyBoxAccordion();
      $('.grey-box, .latest-resources').css('height', 'auto');
    } else {
      showLatestResources();
      showGreyBoxContent();
      setUniformHeightOnElements($('.js-equal-height-2'));
    }
  });

  ///// RESOURCES ACCORDION /////
  var $listChildPanels = $('.resource-accordion > li .item-content');  
  var hideListChildPanels = $listChildPanels.hide();
      
  $('.resource-accordion > li').click(function(e) {
    var itemContent = $(this).find('.item-content');

    hideListChildPanels.slideUp();

    $('.resource-accordion li').removeClass('shown');

    if(!$(itemContent).is(':visible')){
      $(itemContent).slideDown();
      $(this).addClass('shown');
      $(this).closest('li').addClass('shown');
    }

    e.preventDefault();
  });

  $('.resource-accordion > li .item-content').click(function(e) {
    e.stopPropagation();
  });

  

  // TODO: refactor accordion scripts into reusable function
  var $resourceChildPanels = $('.category-accordion > li .resource-content');  
  var hideResourceChildPanels = $resourceChildPanels.hide();
      
  $('.category-accordion .sub_category-category-title').click(function(e) {
    console.log($(this).siblings('.resource-content'));
    var resourceContent = $(this).siblings('.resource-content');

    hideResourceChildPanels.slideUp();

    $('.category-accordion .sub_category-category-title').removeClass('shown');

    if(!$(resourceContent).is(':visible')){
      console.log($(this));
      $(resourceContent).slideDown();
      $(this).addClass('shown');
    }

    e.preventDefault();
  });

});