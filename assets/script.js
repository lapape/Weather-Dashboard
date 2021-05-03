var searchedCities = JSON.parse(localStorage.getItem("cities")) || [];
var userInput = $(".userInput");
var citiesUl = $("#city-list");

$(".searchBtn").on("click", function () {
  searchedCities.push(userInput.val());
  localStorage.setItem("cities", JSON.stringify(searchedCities));

  for (var i = 0; i < searchedCities.length; i++) {
    var newLi = document.createElement("LI");
    newLi.textContent = searchedCities[i];
    citiesUl.appendChild(newLi);
  }
});

$(".clearBtn").on("click", function () {
  searchedCities = [];
});
