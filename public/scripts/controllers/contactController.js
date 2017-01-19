'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function () {
    $('#articles').hide();
    $('#about').hide();
    $('#contact').show();

    repos.requestRepos(repoView.index);
  }
  module.contactController = contactController;
})(window);
