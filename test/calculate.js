window.onload = function () {
  document.getElementById("money").onkeyup = function () {
    if (!isNaN(this.value) && this.value != "") {
      var _x = parseInt(this.value, 10);
      var _y = (_x * 0.5567 + 45.2);
      document.getElementById("answer").innerHTML = (Math.round(_y)) + "元";
    }
  };
};
