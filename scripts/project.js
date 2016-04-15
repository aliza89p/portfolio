var projects = [];

function Project (obj){
  for (key in obj) this[key] = obj[key];
};

Project.prototype.toHtml = function(){
  var $newProject = $('#project-template').html();
  var template = Handlebars.compile($newProject);

  // $newProject.attr('class', this.class);
  // $newProject.attr('id', this.id);
  // $newProject.find('.title').html(this.title);
  // $newProject.find('.date').html(this.when);
  // $newProject.find('.body').html(this.about);

  // $newProject.removeClass('template');
  // return $newProject;
  return template(this);
};

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
