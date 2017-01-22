'use strict';

(function(module) {
  const articleController = {};

  articleController.init = function () {
    $('#about').hide();
    $('#contact').hide();
    $('#articles').show();
  }
  module.articleController = articleController;
})(window);
