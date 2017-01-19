'use strict';

(function(module) {
  const repoView = {};
  // const ui = function() {
  //   let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.
  //   $about.find('ul').empty();
  //   $about.show().siblings().hide();
  // };
  repoView.index = function() {
    // ui();
    var render = Handlebars.compile($('#repo-template').text());
    $('#githubRepo ul').append(repos.with('name').map(render));
  };
  module.repoView = repoView;
})(window);
