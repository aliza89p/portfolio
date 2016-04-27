(function(module) {
  var repos = {};
  commits = 0;
  totalCommits = [];

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.ajax({
      url: 'https://api.github.com/users/aliza89p/repos' +
      '?per_page=10' +
      '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        repos.all = data;
        callback();
      }
    });
  };

  // repos.all.map(function(repo) {
  //   $.ajax({
  //     url: 'https://api.github.com/repos/aliza89p/' + repo.name + '/stats/participation',
  //     type: 'GET',
  //     headers: {
  //       'Authorization': 'token ' + githubToken },
  //     success: function(data){
  //       if (data.owner.length > 0) {
  //         totalCommits.push(commits = commits + data.owner.reduce(function(a, b){
  //           return a + b;
  //         }));
  //       }
  //       // totalCommits.reduce(function(a, b) {
  //       //   return a + b;
  //       // });
  //       callback();
  //     }
  //   });
  // });

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
