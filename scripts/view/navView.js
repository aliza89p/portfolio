$(function() {
  $('.icon-menu').on('click', function(){
    if($('.nav-items').css('display') === 'none'){
      $('.nav-items').css('display', '');
    }else{
      $('.nav-items').css('display', 'none');
    }
  });

  $('.nav-items').on('click', function() {
    if ($('html').width() < 850){
      $('.nav-items').css('display', 'none');
    }
  });

  $(window).resize(function(){
    if ($('html').width() > 850){
      $('.nav-items').css('display', '');
    };
  });
});
