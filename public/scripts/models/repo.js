'use strict';
//
// (function(module) {
//   const repos = {};
//
//   repos.all = [];
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
  // repos.with = fork => repos.all.filter(repo => repo !== [fork]);
//   module.repos = repos;
// })(window);
'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    console.log('hello')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
