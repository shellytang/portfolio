'use strict';
//code taken from day 2 and refactored slightly
var articles = [];

function Article (options) {
  this.author = options.author;
  this.body = options.body;
  this.title = options.title;
  this.client = options.client;
  this.completed = options.completed;
}
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('address a').attr('href', this.client);
  $newArticle.find('p').text(this.completed);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('h2').text(this.client);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.removeClass('template');
  return $newArticle;
};
blogArticles.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});
blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});
articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
