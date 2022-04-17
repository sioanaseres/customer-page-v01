"use strict"
const menuToggle = document.querySelector('.ToggleMenu');
const mainMenuParent = document.querySelector('.MainMenu');

menuToggle.addEventListener('click', () => {

	mainMenuParent.classList.toggle('Active');
});

// Active class removal 
const mediaQuery = window.matchMedia('(min-width:850px)');
mediaQuery.onchange = e => { if (e.matches) { document.querySelector('.MainMenu').classList.remove('Active'); } }

// Show/Hide filters 

const filterOptions = document.querySelector(".FilterOptions");
const btnShowFilters = document.querySelector(".BtnShowFilters");

btnShowFilters.addEventListener("click", function(e){
e.preventDefault();
filterOptions.classList.toggle("ShowFilters");
})
// starting Service worker 
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}