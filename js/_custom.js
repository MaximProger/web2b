$(document).ready(function () {
  // Показать текст в about
  $(".about__showmore").click(function (event) {
    event.preventDefault();
    $(this).hide();
    $(".about__text--hidden").addClass("active");
  });

  // Маска для инпута (телефон)
  $("#phone").mask("9 999 999 99 99");

  // Burger Menu
  $("#burger").on("click", function () {
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $("#mask").toggleClass("active");
  });

  $(window).resize(function () {
    if ($(window).width() <= "766") {
      // Слайдер
      $("#newsSlider").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: true,
        autoplay: false,
        arrows: false,
        asNavFor: "#navNews",
      });

      // Навигация для слайдера
      $("#navNews").not(".slick-initialized").slick({
        arrows: false,
        slidesToShow: 2,
        asNavFor: "#newsSlider",
        focusOnSelect: true,
      });

      $(".nav__link").click(function () {
        $("#burger").removeClass("active");
        $("#nav").removeClass("active");
        $("#mask").removeClass("active");
      });

      // Меняем placeholder в форме
      $("#name").attr("placeholder", "Ваше имя");
      $("#phone").attr("placeholder", "Ваш телефон");
    }
  });

  // вызовем событие resize
  $(window).resize();
});
