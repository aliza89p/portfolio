(function (module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    $('#home').css('display', 'none');
    $('#about').css('display', 'none');
    $('#contact').css('display', 'none');
    $('#projects').css('display', 'block');
    Project.fetchAllProjects(projectView.initializeProjects);
  };

  module.projectController = projectController;
})(window);
