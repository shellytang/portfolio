'use strict';

(function(module){

  var projectView = {};

  projectView.toggleArticleBody = function () {
    $('.article-body').hide();
    $('#articles h2, #articles h3').hide();
    $('.image').on('click', function (){
      $(this).siblings('h2, h3, .article-body').toggle();
    });
  }

  //+++++project title/category & clients from array using map and reduce and append to about section ++++++
  projectView.insertAboutWorkSection = function(){
    $('.projectSummary').append((Article.listCategory()));
    $('.clientSummary').append((Article.allClients()));
  }
  //++++++++++++++

  projectView.initIndexPage = function () {
    Article.all.forEach(function(article) {
      $('#articles').append(article.toHtml());
    });
    projectView.toggleArticleBody();
    projectView.insertAboutWorkSection();
  }
//moved Article.fetchAll from index page and called it here
  Article.fetchAll(projectView.initIndexPage);

  module.projectView = projectView;
})(window);
