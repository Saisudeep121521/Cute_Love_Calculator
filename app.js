/*=============================
    Made With ♥ By Al Nahian
  ============================*/
// Start Code
// 05 Sep July 2020
// Al Nahian | https://alnahian2003.github.io

// global variables
var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

//capitalize input values
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Love Score Counter
function love(value) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
      document.getElementById("score").innerHTML = value + "%";
    }
  })();
  alert(compute());
}

// Add eventlistener to button
calcBtn.addEventListener(
  "click",
  function (e) {
    e.preventDefault();

    // Get values
    var yourname = getInputVal("yourname");
    var theirname = getInputVal("theirname");

    var num1 = 0;
    var num2 = 0;
    for (var i = 0; i < yourname.length; i++) {
      num1 = num1 + yourname.charCodeAt(i);
    }
    for (var j = 0; j < theirname.length; j++) {
      num2 = num2 + theirname.charCodeAt(j);
    }
    var result = num1 * num2 * 273;
    var strRes = result.toString();

    console.log(strRes.substring(0, 2) + "%");

    saveMessage(yourname, theirname);
    loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
    e.preventDefault();
    if (yourName.value == "" && theirName.value == "") {
      alert("You can't leave fields empty");
    }
    if (yourName.value == "") {
      alert("Please Enter Your Name");
    }
    if (theirName.value == "") {
      alert("Please Enter His/Her Name");
    }
    love(strRes.substring(0, 2));
  },

  function compute() {
    var name1 = document.getElementById("yourname").value;
    var name2 = document.getElementById("theirname").value;

    for (var i = 0; i < name1.length; i++) {
      num1 = num1 + name1.charCodeAt(i);
    }
    for (var j = 0; j < name2.length; j++) {
      num2 = num2 + name2.charCodeAt(j);
    }
    var result = num1 * num2 * 273;
    var strRes = result.toString();

    return strRes.substring(0, 2) + "%";
  }
);
