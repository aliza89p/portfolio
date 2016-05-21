page('/', homeController.index);
page('/projects', projectController.index);
page('/projects/:category', projectController.index, projectController.displayByCategory);
page('/about', aboutController.index);

page();
