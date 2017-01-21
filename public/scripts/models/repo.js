'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  // repos.requestRepos = function(callback) {
  //   $.ajax({
  //     url: 'https:api.github.com/users/shellytang/repos?type=owner',
  //     method: 'GET',
  //     headers: {
  //       Authorization: `token ${githubToken}`
  //       // Authorization: 'token ' + githubToken
  //     }
  //   })
  //   .then(data => {
  //     repos.all = data;
  //     callback();
  //   })
  // };
  repos.requestRepos = function(callback) {
  // DONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    $.get('/github/user/repos?type=owner') //remove .com!!
    .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };
// repos.with = attr => repos.all.filter(repo => repo[attr]);
  repos.with = fork => repos.all.filter(repo => repo !== [fork]);
  module.repos = repos;
})(window);
