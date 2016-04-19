(function(module){
  function Project (obj){
    for (key in obj) this[key] = obj[key];
  };

  Project.all = [];

  Project.prototype.toHtml = function(){
    var template = Handlebars.compile($('#project-template').html());

    return template(this);
  };

  Project.loadAllProjects = function(dataPassedIn){
    dataPassedIn.forEach(function(ele) {
      Project.all.push(new Project(ele));
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
            $.getJSON('../data/projectContent.json', function(data){
              Project.loadAllProjects(data);
              localStorage.projectContent = JSON.stringify(data);
              callBackFunction();
            });
          }
        }
      });
    }else{
      $.getJSON('../data/projectContent.json', function(data){
        Project.loadAllProjects(data);
        localStorage.projectContent = JSON.stringify(data);
        projectView.initializeIndex();
      });
    }
  };
  module.Project = Project;
})(window);
