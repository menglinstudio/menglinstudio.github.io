$(window).load(function () {
  $('#wait').hide();
});

$(function () {
  $(window).load(function () {
    $(window).scroll(function () {
      var $this = $(this);
      var $thisTop = $this.scrollTop();

      if ($thisTop > 100) {
        $('#top-button').show();
      } else {
        $('#top-button').hide();　　　
      }　　
    })　
  });
});



function filter(param) {
  if (param == 2) {
    $(".portButton").hide();
    $(".filterOther").show();

  } else if (param == 3) {
    $(".portButton").hide();
    $(".filterApp").show();

  } else if (param == 4) {
    $(".portButton").hide();
    $(".filterWeb").show();

  } else {
    $(".portButton").show();
  }
}
