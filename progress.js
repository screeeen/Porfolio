var bar = document.getElementsByClassName("progress-bar")[0];
var theBody = document.querySelector("body");
let last_known_scroll_position = 0;

var progress = theBody.scrollTop;
bar.setAttribute("aria-valuemax", "window.innerHeight");
bar.setAttribute("aria-valuenow", "window.innerHeight");
let progressAmount;

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

                       window.addEventListener('scroll', function (e) {
  
  progressAmount = Math.round(window.scrollY*100 / document.body.scrollHeight);
  console.log("hola",window.scrollY , document.body.scrollHeight, progressAmount);
  bar.setAttribute("Style", "width:" + progressAmount + "%");

  document.getElementsByClassName("progress-bar")[0].setAttribute("aria-valuenow", progressAmount);
}
);


