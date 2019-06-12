var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var index = 1;

function myLoop() {

  setTimeout(function () {
    let line = document.createElement("div");
    line.className = "line";
    line.style.height = "2px";
    line.style.background = "#00000055";

    let elementHeight = document.getElementById("all").offsetHeight;
    console.log(elementHeight);
    document.getElementById("all").appendChild(line);
    index += 2;
    if (index < elementHeight) {
      myLoop();
    }
  }, 10)
}

myLoop();
