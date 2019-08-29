var bar = document.getElementsByClassName("progress-bar")[0];
var theBody = document.querySelector("body");
let last_known_scroll_position = 0;

var progress = theBody.scrollTop;
bar.setAttribute("aria-valuemax", "window.innerHeight");
bar.setAttribute("aria-valuenow", "window.innerHeight");
let progressAmount;

var body = document.body, html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

// var menu = document.getElementsByClassName("menu")[0];
// var sticky = menu.offsetTop - (menu.offsetHeight);

// window.addEventListener('onprogress', (event) => {
//   if (pe.lengthComputable) {
//     // document.body.style.opacity = pe.total;
//     // document.body.style.opacity = pe.loaded;
//     // document.body.style.opacity = pe;
//     console.log(pe);
//   }
//   });


// window.addEventListener('progress', (event) => {
//   console.log('DOM fully loaded and parsed', document.body);
//   document.body.style.opacity = ".1";
// });

window.addEventListener('scroll', function (e) {
  progressAmount = Math.round((window.scrollY) * 100 / (document.documentElement.scrollHeight - window.innerHeight));
  bar.setAttribute("Style", "width:" + progressAmount + "%");
  document.getElementsByClassName("progress-bar")[0].setAttribute("aria-valuenow", progressAmount);




  // if (window.pageYOffset >= sticky) {
  //   console.log(window.pageYOffset, sticky);

  //   menu.classList.add("sticky-top")
  // } else {
  //   menu.classList.remove("sticky-top");
  // }
}
);


