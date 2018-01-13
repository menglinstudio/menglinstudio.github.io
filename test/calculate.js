window.onload = function () {
  document.getElementById("money").onkeyup = function () {
    if (!isNaN(this.value) && this.value != "") {
      var _x = parseInt(this.value, 10);
      var _y = 30;
      var _z = _x * _y / 10;
      document.getElementById("answer").innerHTML = (Math.round(_z)) + "萬元";
    }
  };
};
