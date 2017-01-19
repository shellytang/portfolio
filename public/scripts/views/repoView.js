'use strict';

(function(module) {
  const repoView = {};

  repoView.index = function() {
    var render = Handlebars.compile($('#repo-template').text());
    $('#githubRepo').append(repos.with('name').map(render));
  };
  module.repoView = repoView;
})(window);
