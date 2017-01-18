'use strict';

(function(module){

  function Article (options) {
    this.body = options.body;
    this.title = options.title;
    this.client = options.client;
    this.completed = options.completed;
    this.image = options.image;
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var source = $('#project-template').text();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

//+++++++ use map() to produce array of project titles/catgory
  Article.listCategory = function() {
    return Article.all.map(function(article){
      return article.title;
    }).join(', ');
  }
//+++++++++ use reduce to produce array of unique clients +++++++++

Article.allClients = function(){
  return Article.all.map(function(article){
    return article.client
  }).reduce(function(names, name){
    if (names.indexOf(name) === -1) {
      names.push(name);
    }
    return names;
  }, []).join(', ');
}

//++++++++++++++++++++++++

  Article.loadProjects = function (parsedData) {
    parsedData.forEach(function(ele) {
      Article.all.push(new Article(ele));
    });
  }
  Article.fetchAll = function(callback) {
    if (localStorage.rawData) {
      var parsedData = JSON.parse(localStorage.rawData);
      Article.loadProjects(parsedData);
      callback();
      // projectView.initIndexPage();
    } else {
      $.getJSON('data/projectArticles.json')
       .done(function(data, message, xhr) {
         localStorage.setItem('rawData', JSON.stringify(data));
          // Article.loadProjects(data);
          Article.fetchAll(callback);
          // projectView.initIndexPage()
       })
       .fail(function(err){
         console.error(err);
       })
    }
  }
  module.Article = Article;
}(window));
