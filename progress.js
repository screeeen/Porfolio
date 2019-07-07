var bar = document.getElementsByClassName("progress-bar")[0];
var theBody = document.querySelector("body");
var total = theBody.scrollTop; // window.innerHeight;
let last_known_scroll_position = 0;

var progress = theBody.scrollTop;
bar.setAttribute("aria-valuemax", "window.innerHeight");
bar.setAttribute("aria-valuenow", "window.innerHeight");
let progressAmount;
window.addEventListener('scroll', function (e) {
  progressAmount = window.scrollY / total;
  console.log("hola", window.innerHeight, progressAmount);
  bar.setAttribute("Style", "width:" + progressAmount + "%");

  document.getElementsByClassName("progress-bar")[0].setAttribute("aria-valuenow", progressAmount);
}
);


