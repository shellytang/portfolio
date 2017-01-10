'use strict';

var projectView = {};

projectView.handleMainNav = function () {
  projectView.toggleArticleBody();
  $('.main-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    $('#'+$(this).attr('data-content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
}
projectView.toggleArticleBody = function () {
  $('.article-body').hide();
  $('#articles h2, #articles h3').hide();
  $('.image').on('click', function (){
    $(this).siblings('h2, h3, .article-body').toggle();
  });
}

projectView.initIndexPage = function () {
  Article.all.forEach(function(article) {
    $('#articles').append(article.toHtml());
  });
  projectView.handleMainNav();
}

// ++++ desktop view: hide images and show description of clicked on image. will need to uncomment div .show and in css desktopView if testing. this also broke the reload of portfolio page ++++++
// function toggleArticleBody () {
//   $('.article-body').hide();
//   $('#articles h2, #articles h3').hide();
//   $('.image').on('click', function (){
//     $('.image, article h1').hide();
//     $(this).siblings().addClass('desktopView').children().fadeIn();
//   });
// }
