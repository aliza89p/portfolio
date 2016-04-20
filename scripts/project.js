(function(module){
  function Project (obj){
    for (key in obj) this[key] = obj[key];
  };

  Project.all = [];

  Project.prototype.toHtml = function(){
    var template = Handlebars.compile($('#project-template').text());
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

  Project.getAllProjects = function(){
    $.getJSON('../data/projectContent.json', function(data){
      Project.loadAllProjects(data);
      localStorage.projectContent = JSON.stringify(data);
      projectView.initializeIndex();
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
            Project.getAllProjects();
          }
        }
      });
    }else{
      Article.getAllProjects();
    }
  };
  module.Project = Project;
})(window);
