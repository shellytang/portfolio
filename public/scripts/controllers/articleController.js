'use strict';

(function(module) {
  const articleController = {};
  console.log('this is the articleview controller!');

  articleController.init = function () {
    $('#about').hide();
    $('#contact').hide();
    $('#articles').show();
  }
  module.articleController = articleController;
})(window);
