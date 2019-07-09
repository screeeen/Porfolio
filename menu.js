var bar = document.getElementById("menu-options");
var interaction = document.getElementById("menu-interaction");
var game = document.getElementById("menu-game");
var virtual = document.getElementById("menu-virtual");
var animation = document.getElementById("menu-animation");
console.log(game);

game.addEventListener("click",function(e){
  console.log(this);
  this.classList.add("active");
  clearAll();
});

function clearAll() {
  console.log(bar.childNodes);
bar.childNodes.forEach(function(menuItem, index){
  console.log(menuItem);
  
menuItem.classList.remove("active");
})
}






