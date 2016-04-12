var projects = [];

function Project (obj){
  this.title = obj.title;
  this.when = obj.when;
  this.about = obj.about;
  this.infoUrl = obj.infoUrl;
  this.class = obj.class;
  this.id = obj.id;
};

Project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newProject.attr('class', this.class);
  $newProject.attr('id', this.id);
  $newProject.find('h1').html(this.title);
  $newProject.find('p').html(this.when);
  $newProject.find('p').html(this.about);
  $newProject.find('a').attr('href', this.infoUrl);

  $newProject.removeClass('template');
  return $newProject;
};

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
