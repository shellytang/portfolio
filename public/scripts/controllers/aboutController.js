'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function () {
    $('#articles').hide();
    $('#contact').hide();
    $('#about').show();
  }
  module.aboutController = aboutController;
})(window);
