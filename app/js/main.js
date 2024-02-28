$(function () {
  $(".slider-block__inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });

  $(".reviews-slider__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.reviews-slider__arrows',
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const headerSerch = document.querySelector(".header-bottom__search");
  const headerSearchOpen = document.querySelector(".header-bottom__box-img");
  const headerSearchClose = document.querySelector(
    ".header-bottom__form-close"
  );

  headerSearchOpen.addEventListener("click", () => {
    headerSerch.classList.add("searh-hidden");
  });

  headerSearchClose.addEventListener("click", () => {
    headerSerch.classList.remove("searh-hidden");
  });

  const text = document.querySelector(".text p");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) =>
        ` <span style="transform: rotate(${i * 13.9}deg);">${char}</span>`
    )
    .join("");
});
