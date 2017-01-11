'use strict';

Article.all = [];
// tracks all articles directly in constructor function, see lab notes for info

function Article (options) {
  this.body = options.body;
  this.title = options.title;
  this.client = options.client;
  this.completed = options.completed;
  this.image = options.image;
}

Article.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

Article.loadProjects = function (parsedData) {
  parsedData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  });
}

Article.fetchAll = function() {
  if (localStorage.rawData) {
    var parsedData = JSON.parse(localStorage.rawData);
    Article.loadProjects(parsedData);
    projectView.initIndexPage();
  } else {
    $.getJSON('data/projectArticles.json')
     .done(function(data, message, xhr) { //eslint-disable-line
        localStorage.setItem('rawData', JSON.stringify(data)); //eslint-disable-line
        Article.loadProjects(data); //eslint-disable-line
        projectView.initIndexPage(); //eslint-disable-line
      }) //eslint-disable-line
     .fail(function(err){ //eslint-disable-line
        console.error(err); //eslint-disable-line
      }) //eslint-disable-line
  }
}
