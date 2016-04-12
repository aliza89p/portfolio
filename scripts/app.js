var projects = [];

function Project (ops){
  this.title = ops.title;
  this.when = ops.when;
  this.about = ops.about;
  this.infoUrl = ops.infoUrl;
};

Project.prototype.toHtml = function(){
  var $newProject = $('projects.template').clone();
  $newProject.find('h1').html(this.title);
  $newProject.find('p').html(this.when);
  $newProject.find('p').html(this.about);
  $newProject.find('a').attr('href', this.infoUrl);

  // $newProject.append('<article>');
  //
  // $newProject.removeClass('template');
  return $newProject;
};
