let boxes = document.querySelectorAll(".box");
let span = document.querySelector("#rgbSpan");
let colors = generateRandomColor(6);
let pickedColor = colors[Math.floor(Math.random() * 6)];
span.textContent = pickedColor;
let playBtn = document.querySelector(".playAgain");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let boxCount = 6;
let statusText = document.querySelector(".status");
statusText.textContent = "Let's Play!!";

easyBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "#f88989";
  statusText.textContent = "Let's Play!!";
  boxCount = 3;
  this.style.background = "#f88989";
  this.style.color = "white";
  hardBtn.style.background = "white";
  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 3)];
  span.textContent = pickedColor;

  for (var i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
    } else {
      boxes[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "#f88989";
  statusText.textContent = "Let's Play!!";
  this.style.background = "#f88989";
  this.style.color = "white";
  easyBtn.style.background = "white";
  boxCount = 6;
  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 6)];

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].style.display = "block";
  }
});

playBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "#f88989";
  statusText.textContent = "Let's Play!!";
  playBtn.textContent = "SHUFFLE";
  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * boxCount)];
  span.textContent = pickedColor;
  for (var i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
    }
  }
});

for (var i = 0; i < colors.length; i++) {
  boxes[i].style.background = colors[i];
  boxes[i].addEventListener("click", function () {
    var selectedColor = this.style.background;
    if (selectedColor === pickedColor) {
      win();
    } else {
      loose(this);
    }
  });
}

function win() {
  for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = pickedColor;
  }
  document.querySelector("h1").style.background = pickedColor;
  statusText.textContent = "Correct!!";
  playBtn.textContent = "NEXT";
}

function loose(a) {
  a.style.background = "aquamarine";
  statusText.textContent = "Try Again";
}
function generateRandomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var a = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
  ("rgb(r,g,b)");
}
