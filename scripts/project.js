(function(module){
  function Project (obj){
    for (key in obj) this[key] = obj[key];
  };

  Project.all = [];

  Project.prototype.toHtml = function(){
    var template = Handlebars.compile($('#project-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.when))/60/60/24/1000);
    this.dateStatus = this.when ? 'published' + this.daysAgo + 'days ago' : '(draft)';

    return template(this);
  };

  Project.loadAllProjects = function(dataPassedIn){
    dataPassedIn.sort(function(a,b){
      return (new Date(b.when)) - (new Date(a.when));
    });
    Project.all = dataPassedIn.map(function(ele){
      return new Project(ele);
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
