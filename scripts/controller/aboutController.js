(function (module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#home').hide();
    $('#projects').hide();
    $('#contact').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
