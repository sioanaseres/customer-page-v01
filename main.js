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


//Show/Hide Read More

const readMore = document.querySelector(".ReadMore");
const moreDetails = document.querySelector(".MoreDetails");
const readLess = document.querySelector(".ReadLess");

readMore.addEventListener("click", function(e){
	e.preventDefault();
	moreDetails.classList.add("Active");
	readMore.style.display = "none";
})
readLess.addEventListener("click", function(e){
	e.preventDefault();
	moreDetails.classList.remove("Active");
	readMore.style.display = "inline-block";
})

// customers

const customers = {
	data:[
	  {
		name: "Allianz",
		industry: "Banking & Finance",
		country: "Germany",
		relevance: 7,
	 },
	  {
		name: "Deloitte",
		industry: "Audit & Advisory",
		country: "United Kingdom",
		relevance: 7,
	  },
	  {
		name: "Cathay United Bank",
		industry: "Banking & Finance",
		country: "China",
		relevance: 1,
	
	  },
	  {
		name: "Intel",
		industry: "Technology & Telecom",
		country: "United States of America",
		relevance: 10,
	
	  },
	  {
		name: "Yale University",
		industry: "Education",
		country: "United States of America",
		relevance: 10,
	
	  },
	  {
		name: "Orange",
		industry: "Technology & Telecom",
		country: "France",
		relevance: 9,
	
	  },
	  {
		name: "Johnson & Johnson",
		industry: "Healthcare",
		country: "United Kingdom",
		relevance: 8,
	
	  },
	  {
		name: "Vodafone",
		industry: "Technology & Telecom",
		country: "United Kingdom",
		relevance: 9,
	
	  },
	  {
		name: "Accenture",
		industry: "Audit & Advisory",
		country: "United Kingdom",
		relevance: 7,
	
	  },
	  {
		name: "U.S. Department of Commerce",
		industry: "Gov & Public Sector",
		country: "United States of America",
		relevance: 10,
		
	  },
	]
  }

  //sort
  const sortSelect = document.querySelector(".Select");
  const ascending = document.getElementById("ascending");
  const descending = document.getElementById("descending");


  const customersSortedAsc = [...customers.data].sort((a,b) => a.relevance-b.relevance);
  const customersSortedDesc = [...customers.data].sort((a,b) => b.relevance-a.relevance);
  console.log(customersSortedAsc);
  console.log(customersSortedDesc);

  ascending.addEventListener("click", function(e){
	  e.preventDefault();
  })
  descending.addEventListener("click", function(e){
	e.preventDefault();
	
})

sortSelect.addEventListener("change", function(e){
	console.log(e.currentTarget);
})

// filter

const filteredCustomers = [...customers.data].filter(value => console.log(value.industry) );


// starting Service worker 
// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('service-worker.js');
// }

