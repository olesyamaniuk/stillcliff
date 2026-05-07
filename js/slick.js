$(function () {
  $(".o-c-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".o-c-gallery-list-left",
    nextArrow: ".o-c-gallery-list-right",
  });
});

$(function () {
  $(".o-c-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".o-c-reviews-list-left",
    nextArrow: ".o-c-reviews-list-right",
  });
});
