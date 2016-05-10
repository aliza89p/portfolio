$(function() {
  $('.icon-menu').on('click', function(){
    if($('.nav-items').css('display') === 'none'){
      $('.nav-items').show();
    }else{
      $('.nav-items').hide();
    }
  });
});
