'use strict';
function navView () {
  toggleArticleBody();
  $('.main-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    $('#'+$(this).attr('data-content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
}
navView();


function toggleArticleBody () {
  $('.article-body').hide();
  $('#articles h2, #articles h3').hide();
  $('.image').on('click', function (){
    $(this).siblings('h2, h3, .article-body').toggle();
  });
}
