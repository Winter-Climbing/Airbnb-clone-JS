const $nav_filter = document.querySelector(".nav_filter");
const $filter_display = document.querySelector("#filter_display");

const nav_filter_toggle = () => {
  if ($filter_display.style.display == "none") {
    $filter_display.style.display = "block";
  } else {
    $filter_display.style.display = "none";
  }
};

// $nav_filter.addEventListener("click", nav_filter_toggle);
