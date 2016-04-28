(function(module){
  var projectView = {};

  projectView.fillUpCategoryFilter = function() {
    $('.projects').each(function() {
      if (!$(this).hasClass('project-template')) {
        var val = $(this).attr('data-category');
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#category-filter option[value="' + val + '"]').length === 0) {
          $('#category-filter').append(optionTag);
        }
      }
    });
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('#projects article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
  };

  projectView.initializeProjects = function(){
    if($('#projects section').length === 0){
      Project.all.forEach(function(a){
        $('#projects').append(a.toHtml());
      });
    };
    projectView.fillUpCategoryFilter();
    projectView.handleCategoryFilter();
  };

  module.projectView = projectView;

})(window);
