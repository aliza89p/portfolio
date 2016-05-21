$(function() {
  $('.icon-menu').on('click', function(){
    if($('.nav-items').css('display') === 'none'){
      $('.nav-items').show();
    }else{
      $('.nav-items').hide();
    }
  });
  $(window).resize(function(){
    if ($('html').width() > 850){
      $('.nav-items').show();
    };
  });
});
