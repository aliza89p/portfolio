(function(module){
  var projectView = {};

  projectView.handleNavBar = function(){
    $('.nav-bar').on('click', '.page', function(){
      $('.page-content').hide();
      $('#' + $(this).data('content')).show();
    });
    $('.nav-bar .page:first').click();
  };


  projectView.initializeIndex = function(){
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    projectView.handleNavBar();
  };
  module.projectView = projectView;
})(window);
