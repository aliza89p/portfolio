$(function() {
  $('.icon-menu').on('click', function(){
    if($('.nav-items').css('display') === 'none'){
      $('.nav-items').show();
      $('main').css('padding-top', '140px');
    }else{
      $('.nav-items').hide();
      $('main').css('padding-top', '');
    }
  });

  $('.nav-items').on('click', function() {
    if ($('html').width() < 850){
      $('.nav-items').hide();
      $('main').css('padding-top', '');
    }
  });

  $(window).resize(function(){
    if ($('html').width() > 850){
      $('.nav-items').show();
      $('main').css('padding-top', '');
    };
  });

  $(window).resize(function(){
    if ($('html').width() < 850 && $('.nav-items').show()){
      $('main').css('padding-top', '140px');
    }
    if ($('html').width() < 850 && $('.nav-items').hide()){
      $('main').css('padding-top', '');
    }
  });

});
