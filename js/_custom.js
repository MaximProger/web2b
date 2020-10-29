$(document).ready(function () {
  // Показать текст в about
  $(".about__showmore").click(function (event) {
    event.preventDefault();
    $(this).hide();
    $(".about__text--hidden").addClass("active");
  });

  // Маска для инпута (телефон)
  $("#phone").mask("9 999 999 99 99");
});
