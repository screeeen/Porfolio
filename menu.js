var bar = document.getElementById("menu-options");
var interaction = document.getElementById("menu-interaction");
var game = document.getElementById("menu-game");
var virtual = document.getElementById("menu-virtual");
var animation = document.getElementById("menu-animation");
console.log(game);


interaction.addEventListener("click",function(e){
  clearAll();
this.classList.add("active");
});

game.addEventListener("click",function(e){
    clearAll();
  this.classList.add("active");
});


virtual.addEventListener("click",function(e){
  clearAll();
this.classList.add("active");
});


animation.addEventListener("click",function(e){
  clearAll();
this.classList.add("active");
});

function clearAll() {
  console.log(bar.childNodes);
  
bar.childNodes.forEach(function(menuItem){
  if (menuItem.nodeType != 3){
    console.log(menuItem.classList);
    if ( menuItem.classList.contains("active")){
      menuItem.classList.remove("active")
    }
  }
})
}






