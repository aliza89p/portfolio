page('/', homeController.index);
page('/projects', projectController.index);
page('projects/:category', projectController.displayByCategory, projectController.index);
page('/about', aboutController.index);

page();
