jQuery(function() {
  $('#event_start_date').datepicker({
    dateFormat: 'yy-mm-dd'
  });

    $('#event_end_date').datepicker({
        dateFormat: 'yy-mm-dd'
    });

  $.each($('.depth_0'), function() {
    var a = $(this);

    if ($('#document_category_ids_').prop('checked')) {
      a.children('fieldset').css("display", "block");
    }


    $(this).children('input').click(function(){
      if (this.checked) {
        a.children('fieldset').css("display", "block");

      } else {
        // a.children('fieldset').css("display", "none");
        a.children('fieldset').find('input').attr('checked', false);
        a.children('fieldset').css("display", "none");
      }
    });

  });
});