$(function (){
   $('body > header .nav_bar .nav_bar_item').mouseover(function (){
      $('body > header .nav_bar .nav_bar_item > div > .sub_menu:visible').hide(); 
      $(this).find('> div > .sub_menu').show(); 
   });
   
   $('body > header .nav_bar .nav_bar_item .sub_menu_item').mouseover(function (){
      $('body > header .nav_bar .nav_bar_item .sub_menu_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show(); 
   });
   
});