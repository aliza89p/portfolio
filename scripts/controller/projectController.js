(function (module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    $('#home').hide();
    $('#about').hide();
    $('#projects').show();
    Project.fetchAllProjects(projectView.initializeProjects);
    next();
  };

  projectController.displayByCategory = function(ctx) {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('#projects article').hide();
        $('article[data-category="' + $(this).val() + '"]').show();
      }
    });
  };

  module.projectController = projectController;
})(window);
