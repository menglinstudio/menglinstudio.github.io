window.onload = function () {

  var n1; //宣告變數
  var n2; //宣告變數
  var b1;
  var b2;
  var c1;
  var c2;


  document.getElementById("money").onkeyup = function () { //打字時執行

    n2 = document.getElementById("money").value; //input的數字放到n裡
    b2 = new Big(n2);
    if (isNaN(this.value.valueOf()) || this.value == "" || this.value < 0 || this.value.indexOf(" ") != -1 || isNaN(n1.valueOf()) || n1 == "" || n1 < 0 || n1.indexOf(" ") != -1) { //判斷數字不是負的或是空白或是文字
      return false;
    }
    if (!isNaN(this.value) && this.value != "") { //判斷用
      var a1 = this.value;
      c1 = new Big(a1);
      var d1 = c1 * b1;
      document.getElementById("answer").innerHTML = d1.toFixed(1) + "萬元";
    }
  };

  document.getElementById("rate").onkeyup = function () {

    n1 = document.getElementById("rate").value;
    b1 = new Big(n1);
    if (isNaN(this.value.valueOf()) || this.value == "" || this.value < 0 || this.value.indexOf(" ") != -1 || isNaN(n2.valueOf()) || n2 == "" || n2 < 0 || n2.indexOf(" ") != -1) {
      return false;
    }
    if (!isNaN(this.value) && this.value != "") {
      var a2 = this.value;
      c2 = new Big(a2);
      var d2 = c2 * b2;
      document.getElementById("answer").innerHTML = d2.toFixed(1) + "萬元";
    }
  };

  document.getElementById("rate").onkeydown = function () { //打字時執行

    n1 = document.getElementById("rate").value;
    if (isNaN(n1.valueOf()) || n1 == "" || n1 < 0 || n1.indexOf(" ") != -1) {
      document.getElementById("answer").innerHTML = "請輸入數字";
    }
  };

  document.getElementById("money").onkeydown = function () { //打字時執行

    n2 = document.getElementById("money").value;
    if (isNaN(n2.valueOf()) || n2 == "" || n2 < 0 || n2.indexOf(" ") != -1) {
      document.getElementById("answer").innerHTML = "請輸入數字";
    }
  };

}
