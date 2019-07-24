'use strict'

// TODO: refactor this

var menuOptions = document.getElementById("menu-options");
var miguel = document.getElementsByClassName("menu-miguel")[0];
var interaction = document.getElementsByClassName("menu-interaction")[0];
var game = document.getElementsByClassName("menu-game")[0];
var virtual = document.getElementsByClassName("menu-virtual")[0];
var animation = document.getElementsByClassName("menu-animation")[0];

miguel.addEventListener("click",function(e){
  clearAll();
this.classList.add("active");
});

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
  
  menuOptions.childNodes.forEach(function(menuItem){
  if (menuItem.nodeType != 3){
    if ( menuItem.classList.contains("active")){
      menuItem.classList.remove("active")
    }
  }
})
}






