"use strict";

var toggleMenuBtn = document.querySelector(".menu-menubtn");
var navMenu = document.querySelector(".menu-section");

toggleMenuBtn.addEventListener('click', function(){
	navMenu.classList.toggle("visible");
});


var navListItem = document.querySelector(".dropdown");
var dropMenu = document.querySelector(".dropdown_menu");

navListItem.addEventListener('click', function(){
	dropMenu.classList.toggle("visible");
});