(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/users/aliza89p/repos' +
          '?per_page=500' +
          '&sort=updated')
    .done(function(data) {
      repos.all = data;
    })
  .done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
