$(function () {
  // Init popover
  $('[data-toggle="popover"]').popover();

  // Red buttons will trigger a click on the dots
  $('.triggers a').click(function (e) {
    e.stopPropagation();
    $($(this).data('href')).trigger('click');
  });

  // Close the popovers if another element is clicked
  $(document).bind('click', function (e) {
    $('[aria-describedby^="popover"]').not(e.target).popover('hide');
  });
});
