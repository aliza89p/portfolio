(function (module) {
  var homeController = {};

  homeController.index = function() {
    $('#projects').css('display', 'none');
    $('#about').css('display', 'none');
    $('#contact').css('display', 'none');
    $('#home').css('display', 'block');
  };
  module.homeController = homeController;
})(window);
