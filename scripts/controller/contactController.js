(function (module) {
  var contactController = {};

  contactController.index = function() {
    $('#home').hide();
    $('#projects').hide();
    $('#about').hide();
    $('#contact').show();
  };
  module.contactController = contactController;
})(window);
