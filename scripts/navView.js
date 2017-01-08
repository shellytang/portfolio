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
  $('.image').on('click', function (){
    $(this).siblings('.article-body').toggle();
  });
}
