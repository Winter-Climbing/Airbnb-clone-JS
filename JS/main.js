const $filter_display = document.querySelector("#filter_display");
const $filter_contents = document.querySelector(".filter_contents");
const $filter = document.querySelector("#filter");

// filter 선택시 filter 보이기

const nav_filter_toggle = () => {
  let filter_boolean = false;

  if ($filter_display.style.display === "none") {
    $filter_display.style.display = "block";
    filter_boolean = true;
    // 요소 밖 선택시 filter 지우기
    if (filter_boolean === true) {
      $filter_display.addEventListener("click", (e) => {
        if (e.target === $filter) {
          $filter_contents.style.animation =
            "filter-appear 0.3s linear reverse;";
          setTimeout(() => {
            $filter_display.style.display = "none";
            filter_boolean = false;
          }, 300);
        }
      });
    }
  } else {
    $filter_display.style.display = "none";
    filter_boolean = false;
  }
};
