$(document).ready(function () {
  // Показать текст в about
  $(".about__showmore").click(function (event) {
    event.preventDefault();
    $(this).hide();
    $(".about__text--hidden").addClass("active");
  });

  // Маска для инпута (телефон)
  $("#phone").mask("9 999 999 99 99");

  // Слайдер
  $("#sliderFunctions").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    asNavFor: "#navFunctions",
  });

  // Навигация для слайдера
  $("#navFunctions").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 4,
    asNavFor: "#sliderFunctions",
    focusOnSelect: true,
  });

  // Убирает маску и запустить видео
  $(".video__wrapper").click(function () {
    $(".vedio__mask").remove();
    $("#video").get(0).play();
    $("#video").attr("controls", "controls");
  });

  // Табуляция в тарифах
  $("#costBtn-1").click(function () {
    $(".cost__top__btn").removeClass("active");
    $(".cost__wrapper").removeClass("active");
    $(this).addClass("active");
    $("#costList-1").addClass("active");
  });

  $("#costBtn-2").click(function () {
    $(".cost__top__btn").removeClass("active");
    $(".cost__wrapper").removeClass("active");
    $(this).addClass("active");
    $("#costList-2").addClass("active");
  });
});
