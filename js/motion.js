function filter(param) {
  if (param == 2) {
    $(".port-link").hide();
    $(".filter-product").show();

  } else if (param == 3) {
    $(".port-link").hide();
    $(".filter-graphic").show();

  } else if (param == 4) {
    $(".port-link").hide();
    $(".filter-ui").show();

  } else {
    $(".port-link").show();
  }
}
