(function (module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#home').hide();
    $('#projects').hide();
    $('#about').show();
    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);