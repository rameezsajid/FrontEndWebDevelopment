$('#nav-toggle').click(function(e) {
  e.stopPropagation();
  $(".menu").toggleClass('bar')
});
$('body').click(function(e) {
  if ($('.menu').hasClass('bar')) {
    $(".menu").toggleClass('bar')
  }
})