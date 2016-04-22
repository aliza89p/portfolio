(function(module){
  function Project (obj){
    for (key in obj) this[key] = obj[key];
  };

  Project.all = [];

  Project.prototype.toHtml = function(){
    var template = Handlebars.compile($('.project-template').text());
    return template(this);
  };

  Project.loadAllProjects = function(dataPassedIn){
    dataPassedIn.sort(function(a,b){
      return (new Date(b.numericalDate)) - (new Date(a.numericalDate));
    });
    Project.all = dataPassedIn.map(function(ele){
      return new Project(ele);
    });
  };

  Project.getAllProjects = function(callBackFunction){
    $.getJSON('../data/projectContent.json', function(data){
      Project.loadAllProjects(data);
      localStorage.projectContent = JSON.stringify(data);
      callBackFunction();
    });
  };

  Project.fetchAllProjects = function(callBackFunction){
    if(localStorage.projectContent){
      $.ajax({
        type: 'HEAD',
        url: '../data/projectContent.json',
        success:function (data, message, xhr){
          var eTag = xhr.getResponseHeader('eTag');
          if (eTag === localStorage.eTag){
            Project.loadAllProjects(JSON.parse(localStorage.projectContent));
            callBackFunction();
          }else{
            localStorage.eTag = eTag;
            Project.getAllProjects(callBackFunction);
          }
        }
      });
    }else{
      Project.getAllProjects(callBackFunction);
    }
  };

  Project.allCategories = function() {
    return Project.all.map(function(project) {
      return project.class;
    })
    .reduce(function(prevCategory, currentCategory){
      if(prevCategory.indexOf(currentCategory) === -1){
        prevCategory.push(currentCategory);
      }
      return prevCategory;
    }, [] );
  };

  module.Project = Project;
})(window);
