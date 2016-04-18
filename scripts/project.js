var projects = [];

function Project (obj){
  for (key in obj) this[key] = obj[key];
};

Project.prototype.toHtml = function(){
  var $newProject = $('#project-template').html();
  var template = Handlebars.compile($newProject);

  return template(this);
};

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
