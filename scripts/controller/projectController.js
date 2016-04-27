(function (module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAllProjects(projectView.initializeProjects);
    $('#home').hide();
    $('#about').hide();
    $('#projects').show();
  };
  module.projectController = projectController;
})(window);
