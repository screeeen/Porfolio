
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


var index = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    let line = document.createElement("div");
    line.className = "line";
    line.style.top = index + "px";
    line.style.height = "2px";
    line.style.background = "black";
    // line.style.animationDelay = "." + index + "s";
    // line.style.animationDuration = index + "s";
    document.getElementById("container").appendChild(line);        //  your code here
    index+=6;                     //  increment the counter
      if (index < h) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 10)
}

myLoop();    


// for (let index = 0; index < h; index += 4) {
  
//   let line = document.createElement("div");
//   line.className = "line";
//   line.style.top = index + "px";
//   // line.style.height = "."index+"px";
//   // line.style.background = "blue";
//   // line.style.animationDelay = "." + index + "s";
//   line.style.animationDuration = index + "s";
//   document.getElementById("content").appendChild(line);
// }


// var id = setInterval(frame, 5);
// clearInterval(id);