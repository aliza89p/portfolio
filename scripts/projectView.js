var projectView = {};

projectView.handleNavBar = function(){
  $('.nav-bar').on('click', '.page', function(){
    $('.page-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('.nav-bar .page:first').click();
};

$(document).ready(function(){
  projectView.handleNavBar();
});
