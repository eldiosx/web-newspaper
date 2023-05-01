var button1 = document.getElementById("button1");
var audio1 = document.getElementById("test");

button1.addEventListener("mousedown", function () {
  audio1.currentTime = 0;
  audio1.play();
});
