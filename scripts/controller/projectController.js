(function (module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    $('#home').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#projects').show();
    Project.fetchAllProjects(projectView.initializeProjects);
  };

  module.projectController = projectController;
})(window);
