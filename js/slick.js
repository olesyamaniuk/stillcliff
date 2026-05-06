$(function () {
  $(".o-l-gallery-list").slick({
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
    prevArrow: ".o-l-gallery-list-left",
    nextArrow: ".o-l-gallery-list-right",
  });
});

$(function () {
  $(".o-l-reviews-list").slick({
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
    prevArrow: ".o-l-reviews-list-left",
    nextArrow: ".o-l-reviews-list-right",
  });
});
