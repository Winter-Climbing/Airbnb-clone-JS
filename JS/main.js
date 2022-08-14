const $nav_filter = document.querySelector(".nav_filter");
const $filter_display = document.querySelector("#filter_display");

$nav_filter.addEventListener("click", () => {
  if ($filter_display.style.display == "none") {
    $filter_display.style.display = "block";
  } else {
    $filter_display.style.display = "none";
  }
});
