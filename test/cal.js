var n;
window.onload = function () {

  document.getElementById("money").onkeyup = function () {
    n = document.getElementById("money").value;
  };

  document.getElementById("rate").onkeyup = function () {
    if (isNaN(this.value.valueOf()) || this.value == "" || this.value < 0 || this.value.indexOf(" ") != -1) {

      return false;
    }
    if (!isNaN(this.value) && this.value != "") {
      document.getElementById("answer").innerHTML = (parseInt(this.value, 10) * n + 45) + "萬元";

    } else {
      document.getElementById("answer").innerHTML = "";
    }
  };
};
