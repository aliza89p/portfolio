(function (module) {
  var homeController = {};

  homeController.index = function() {
    $('#projects').css('display', 'none');
    $('#about').css('display', 'none');
    $('#contact').css('display', 'none');
    $('#home').css('display', '');
  };
  module.homeController = homeController;
})(window);
