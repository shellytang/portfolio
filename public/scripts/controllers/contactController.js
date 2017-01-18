'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function () {
    $('#articles').hide();
    $('#about').hide();
    $('#contact').show();
  }
  module.contactController = contactController;
})(window);
