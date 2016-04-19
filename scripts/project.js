function Project (obj){
  for (key in obj) this[key] = obj[key];
};

Project.all = [];

Project.prototype.toHtml = function(){
  var $newProject = $('#project-template').html();
  var template = Handlebars.compile($newProject);

  return template(this);
};

Project.loadAllProjects = function (data){
  projectData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAllProjects = function(){
  if(localStorage.projectContent){
    $.ajax({
      type: 'HEAD',
      url: '../data/projectContent.json',
      success:function (data, message, xhr){
        var eTag = xhr.getResponseHeader('eTag');
        if (eTag === localStorage.eTag){
          projectView.initializeIndex();
        }else{
          localStorage.eTag = eTag;
          $.getJSON('../data/projectContent.json', function(data){
            Project.loadAllProjects(data);
            localStorage.projectContent = JSON.stringify(data);
            projectView.initializeIndex();
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
