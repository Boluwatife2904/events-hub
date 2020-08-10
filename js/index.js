$(document).ready(function () {
  $(".our-partners").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

var buttons = document.querySelectorAll(".like__button i");
Array.from(buttons).forEach(function (item) {
  item.addEventListener("click", function () {
    if (this.classList.contains("far")) {
      this.classList = "fa fa-heart";
    } else {
      this.classList = "far fa-heart";
    }
  });
});
