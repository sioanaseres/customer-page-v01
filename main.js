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
		image:"./images/clients/allianz.svg"
	 },
	  {
		name: "Deloitte",
		industry: "Audit & Advisory",
		country: "United Kingdom",
		relevance: 7,
		image:'./images/clients/deloitte.svg'
	  },
	  {
		name: "Cathay United Bank",
		industry: "Banking & Finance",
		country: "China",
		relevance: 1,
		image:"./images/clients/cathay.svg"
	
	  },
	  {
		name: "Intel",
		industry: "Technology & Telecom",
		country: "United States of America",
		relevance: 10,
		image:'./images/clients/intel.svg'
	  },
	  {
		name: "Yale University",
		industry: "Education",
		country: "United States of America",
		relevance: 10,
		image:"./images/clients/yale.svg"
	  },
	  {
		name: "Orange",
		industry: "Technology & Telecom",
		country: "France",
		relevance: 9,
		image:"./images/clients/orange.svg"
	  },
	  {
		name: "Johnson & Johnson",
		industry: "Healthcare",
		country: "United Kingdom",
		relevance: 8,
		image:'./images/clients/johnson.svg'
	  },
	  {
		name: "Vodafone",
		industry: "Technology & Telecom",
		country: "United Kingdom",
		relevance: 9,
		image:'./images/clients/vodafone.svg'
	  },
	  {
		name: "Accenture",
		industry: "Audit & Advisory",
		country: "United Kingdom",
		relevance: 7,
		image:"./images/clients/accenture.svg"
	  },
	  {
		name: "U.S. Department of Commerce",
		industry: "Gov & Public Sector",
		country: "United States of America",
		relevance: 10,
		image:'./images/clients/gov.svg'
	  },
	]
  }

  //displaying cards

  const cardContainer = document.querySelector(".CustomersItems");

  const displayCards = function(card, sort = false){
	cardContainer.innerHTML="";
	card.forEach(element=>{
		
	   const html= `
	   <li class="CustomersItem" itemscope itemtype="https://schema.org/Organization">
	   <img itemprop="image" src=${element.image} alt="${element.name} is a Pentest-Tools customer" class="CustomersImage" title="${element.name} is a Pentest-Tools customer" width="215" height="60" data-name="${element.name}" data-relevance="${element.relevance}">
   		</li>
	   `

	   cardContainer.insertAdjacentHTML("afterbegin", html)

  
	})}


  //sort

  const ascending = document.getElementById("ascending");
  const descending = document.getElementById("descending");


const customersSortedAscRelevance = [...customers.data].sort((a,b) => a.relevance-b.relevance);
const customersSortedDescRelevance = [...customers.data].sort((a,b) => b.relevance-a.relevance);

const customersSortedAscAlphabetical = [...customers.data].sort((a,b) => a.name < b.name ? -1 : 1);
const customersSortedDescAlphabetical = [...customers.data].sort((a,b) => a.name > b.name ? -1 : 1);

displayCards(customersSortedAscRelevance, false);

ascending.addEventListener("click", function(e){
	e.preventDefault();
	displayCards(customersSortedAscRelevance);
	ascending.style.display = "none";
	descending.style.display = "block";
	 
  })
  descending.addEventListener("click", function(e){
	e.preventDefault();
	displayCards(customersSortedDescRelevance);
	descending.style.display = "none";
	ascending.style.display = "block";
})
const sortSelect = document.querySelector(".Select");

sortSelect.addEventListener("change", function (event) {
	event.preventDefault();


  if(event.target.value === "relevance"){

		ascending.addEventListener("click", function(e){
		e.preventDefault();
		displayCards(customersSortedAscRelevance);
		ascending.style.display = "none";
		descending.style.display = "block";
		 
	  })
	  descending.addEventListener("click", function(e){
		e.preventDefault();
		displayCards(customersSortedDescRelevance);
		descending.style.display = "none";
		ascending.style.display = "block";
	})
 } 

 else if(event.target.value === "alphabetical"){
	ascending.addEventListener("click", function(e){
		e.preventDefault();
		displayCards(customersSortedAscAlphabetical);
		ascending.style.display = "none";
		descending.style.display = "block";
		 
	  })
	  descending.addEventListener("click", function(e){
		e.preventDefault();
		displayCards(customersSortedDescAlphabetical);
		descending.style.display = "none";
		ascending.style.display = "block";
	})
 }
})


// filter

const filterByCountry = (country) => {

	country = country.toLowerCase();
	if (country === "All countries") return customers.data;
  
	const filterResult = customers.data.filter(el => {
	  return el.country.toLowerCase().includes(country)
	  })
	return filterResult;
  
  }

  const selectCountry = document.querySelector("#actionFilterFirst");

	selectCountry.addEventListener("change", function (event) {

 	cardContainer.innerHTML = "";

  const results = filterByCountry(event.target.value);
 	displayCards(results);
})


const filterByIndustry = (industry) => {

	industry = industry.toLowerCase();
	if (industry === "All industries") return customers.data;
  
	const filterResult = customers.data.filter(el => {
	  return el.industry.toLowerCase().includes(industry)
	  })
	return filterResult;
  
  }

  const selectIndustry = document.querySelector("#actionFilterSecond");

	selectIndustry.addEventListener("change", function (event) {
 
 	cardContainer.innerHTML = "";

  const results = filterByIndustry(event.target.value);
	 displayCards(results);
})
// starting Service worker 
// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('service-worker.js');
// }

