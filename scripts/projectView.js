var projectView = {};

projectView.handleNavBar = function(){
  $('.nav-bar').on('click', '.page', function(){
    $('.page-content').hide();
    $('#' + $(this).data('content')).show();
    console.log('#' + $(this).data('content'));
  });

  $('.nav-bar .page:first').click();
};

$(document).ready(function(){
  projectView.handleNavBar();
});
