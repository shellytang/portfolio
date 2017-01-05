'use strict';
//code taken from day 2 and refactored slightly
var articles = [];

function Article (options) {
  this.body = options.body;
  this.title = options.title;
  this.client = options.client;
  this.completed = options.completed;
}
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('p').text(this.completed);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('h2').text(this.client);
  $newArticle.removeClass('template');
  return $newArticle;
};
blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});
articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
