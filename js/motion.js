function filter(param) {
  if (param == 2) {
    $(".port-link").hide();
    $(".filter-pr").show();

  } else if (param == 3) {
    $(".port-link").hide();
    $(".filter-gr").show();

  } else if (param == 4) {
    $(".port-link").hide();
    $(".filter-wa").show();

  } else {
    $(".port-link").show();
  }
}
