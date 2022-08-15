const $images = document.querySelector("#images");
const images_height = $images.getBoundingClientRect().bottom;
const $pop = document.querySelector("#pop");
const $calender_detail = document.querySelector(".calender_detail");
const calender_detail_height = $calender_detail.getBoundingClientRect().top;
const $pop_up_priceBtn = document.querySelector(".pop_up_priceBtn");

const pop_scroll = () => {
  window.scrollY > images_height
    ? ($pop.style.display = "block")
    : ($pop.style.display = "none");

  window.scrollY < calender_detail_height
    ? ($pop_up_priceBtn.style.display = "none")
    : ($pop_up_priceBtn.style.display = "flex");
};

document.addEventListener("scroll", pop_scroll);
