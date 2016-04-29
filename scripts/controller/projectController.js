(function (module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAllProjects(projectView.initializeProjects);
    $('#home').hide();
    $('#about').hide();
    $('#projects').show();
  };

  projectController.displayByCategory = function(ctx, next) {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('#projects article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
    next();
  };

  module.projectController = projectController;
})(window);
