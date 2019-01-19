//When user scroll
window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
    document.getElementById("navigation").classList.add("white-bg");
    document.getElementById("navigation").style.color = '#000';
    for(var i = 0; i < document.getElementsByClassName("nav-link").length; i++){
      document.getElementsByClassName("nav-link")[i].style.color = '#000';
      document.getElementsByClassName("nav-link")[i].style.opacity = '0.7';
    }
  } else {
    document.getElementById("navigation").classList.remove("white-bg");
    document.getElementById("navigation").style.color = '#fff';
    for(var i = 0; i < document.getElementsByClassName("nav-link").length; i++){
      document.getElementsByClassName("nav-link")[i].style.color = '#fff';
      document.getElementsByClassName("nav-link")[i].style.opacity = '1';
    }
  }
}

var main = function(){
  $('.icon-menu').click(function(){
    $('.menu').animate({
      right: '0px'
    }, 200);
  });

  $('.icon-close').click(function(){
    $('.menu').animate({
      right: '-250px'
    }, 200);
  });
};

$(document).ready(main);
