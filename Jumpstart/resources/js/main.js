$(document).ready(function() {
  // JQuery Slick slideshow on jumbotron
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  // hide navigation as user scrolls
  var hideNavBar = 0;
  //target the window
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop - hideNavBar > 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      hideNavBar = scrollTop;
    }
    else if (hideNavBar - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      hideNavBar = scrollTop;
    }
  });

});
