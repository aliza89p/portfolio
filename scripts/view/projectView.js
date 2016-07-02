(function(module){
  var projectView = {};

  projectView.initializeProjects = function(){
    if($('#projects section').length === 0){
      Project.all.forEach(function(a){
        $('#projects').append(a.toHtml());
      });
    };
  };

  module.projectView = projectView;

})(window);
