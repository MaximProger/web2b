$(document).ready(function () {
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

  // Убирает маску и запускает видео
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

  $(window).resize(function () {
    if ($(window).width() <= "766") {
      // Слайдер Тарифы
      $("#tarifsSlider").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: false,
        asNavFor: "#navTarifs",
      });

      // Навигация для слайдера
      $("#navTarifs").not(".slick-initialized").slick({
        arrows: false,
        slidesToShow: 2,
        asNavFor: "#tarifsSlider",
        focusOnSelect: true,
      });

      // Слайдер стоимость 1
      $("#costList-1").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: false,
        asNavFor: "#costList1",
      });

      // Навигация для слайдера
      $("#costList1").not(".slick-initialized").slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: "#costList-1",
        focusOnSelect: true,
      });

      // Слайдер стоимость 2
      $("#costList-2").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: false,
        asNavFor: "#costList2",
      });

      // Навигация для слайдера
      $("#costList2").not(".slick-initialized").slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: "#costList-2",
        focusOnSelect: true,
      });
    }
  });

  // вызовем событие resize
  $(window).resize();
});
