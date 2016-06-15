(function (module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    $('#home').hide();
    $('#about').hide();
    $('#contact').hide();
    Project.fetchAllProjects(projectView.initializeProjects);
    $('#projects').show();
    // next();
  };

  // projectController.displayByCategory = function(ctx) {
  //   $('#category-filter').on('change', function() {
  //     if ($(this).val()) {
  //       $('#projects article').hide();
  //       $('article[data-category="' + $(this).val() + '"]').show();
  //     }
  //     else {
  //       $('article').show();
  //       $('article.template').hide();
  //     }
  //   });
  // };

  module.projectController = projectController;
})(window);
