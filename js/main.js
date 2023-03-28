$(function () {

  $(".menu a, .logo").on("click", function (e) {

    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    if (id == '#works') {
      $('body,html').animate({
        scrollTop: top - 140
      }, 1500);
    } else {
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    }
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });
  var menuBtn = document.querySelector(".menu__btn");
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("menu__btn--active")
  });


  $(window).scroll(function () {
    var box1 = $('.menu__inner').offset().top;
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (box1 > 100) {
      $('.menu__inner').addClass('menu__scroll');
    } else {
      /*Если меньше 100px удаляем класс для header*/
      $('.menu__inner').removeClass('menu__scroll');
    }
  });

  $(window).scroll(function () {
    var box1 = $('.menu').offset().top;
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (box1 > 100) {
      $('.menu').addClass('menu__bgc--active');
    } else {
      /*Если меньше 100px удаляем класс для header*/
      $('.menu').removeClass('menu__bgc--active');
    }
  });


  // window.addEventListener("orientationchange", function() {
  // // Выводим числовое значение ориентации
  // alert(window.orientation);
  // }, false);


  var mixer = mixitup('.works__content');


});