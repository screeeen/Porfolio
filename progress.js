var bar = document.getElementsByClassName("progress-bar");
// var valueNow = document.getElementsByClassName("progress-bar")[0].getAttribute("aria-valuenow");
console.log("hola");

let progressAmount;
changeBar = () => {
  progressAmount +=1;
  console.log("value",progressAmount);

  document.getElementsByClassName("progress-bar")[0].setAttribute("aria-valuenow",progressAmount);
}





