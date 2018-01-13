window.onload = function () { //網頁開始load才執行函數之類的

  var n1; //宣告變數n
  var n2; //宣告變數n1


  document.getElementById("money").onkeyup = function () { //在input有打字時才執行

    n2 = document.getElementById("money").value; //把第一個input的數字放到n裡
    if (isNaN(this.value.valueOf()) || this.value == "" || this.value < 0 || this.value.indexOf(" ") != -1) { //大概是一些判斷數字不是負的或是空白或是文字

      return false;
    }
    if (!isNaN(this.value) && this.value != "") { //這也是判斷ㄉ
      document.getElementById("answer").innerHTML = (parseInt(this.value, 10) * n1 + 45) + "萬元"; //在total1那邊顯示apple1乘以n的值

    } else {
      document.getElementById("answer").innerHTML = ""; //如果打進去的不是數字就顯示空白
    }
  };




  document.getElementById("rate").onkeyup = function () { //在input有打字時才執行

    n1 = document.getElementById("rate").value; //把第一個input的數字放到n裡
    if (isNaN(this.value.valueOf()) || this.value == "" || this.value < 0 || this.value.indexOf(" ") != -1) { //大概是一些判斷數字不是負的或是空白或是文字

      return false;
    }
    if (!isNaN(this.value) && this.value != "") { //這也是判斷ㄉ
      document.getElementById("answer").innerHTML = (parseInt(this.value, 10) * n2 + 45) + "萬元"; //在total1那邊顯示apple1乘以n的值

    } else {
      document.getElementById("answer").innerHTML = ""; //如果打進去的不是數字就顯示空白
    }
  };
}
