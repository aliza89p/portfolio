(function (module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#home').css('display', 'none');
    $('#projects').css('display', 'none');
    $('#contact').css('display', 'none');
    $('#about').css('display', 'block');
  };
  module.aboutController = aboutController;
})(window);
