'use strict';

var articles = [];
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
blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});
articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
