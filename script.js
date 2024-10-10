/* 
   Task List:
   - Grab HTML element into JS using getElementbyId, save it in variable
   - When we click search button, using .addEventListener 
       - Grab  the .value of search bar
       - Place the search bar .value in an alert()

*/


const searchBar =  document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");




// Send alert to search query; use arrowhead function



// searchButton.addEventListener("click", () => {
//     if (searchBar.value !== ''){
//         alert(searchBar.value);
//     }
//     });


// Search Google

// searchBar.value Gets text entered into input field using template literals

searchButton.addEventListener("click", () => {
   let query = searchBar.value;
   let URL = `https://www.google.com/search?q=${query}`;

   if (!query) {
       alert("Must enter a query to begin searching."); // If query is empty it'll trigger this alert
   } else {
       window.location.href = URL;  // If query is valid, it'll be redirectedd to Google using the search URL
   }
});