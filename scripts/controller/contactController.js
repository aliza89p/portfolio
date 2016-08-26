(function (module) {
  var contactController = {};

  contactController.index = function() {
    $('#home').css('display', 'none');
    $('#projects').css('display', 'none');
    $('#about').css('display', 'none');
    $('#contact').css('display', '');
  };
  module.contactController = contactController;
})(window);
