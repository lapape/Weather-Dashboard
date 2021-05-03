var searchedCities = JSON.parse(localStorage.getItem("cities")) || [];
var userInput = $(".userInput");
var citiesUl = $("#city-list");

for (var i = 0; i < searchedCities.length; i++) {
  var newLi = document.createElement("LI");

  newLi.textContent = searchedCities[i];
  citiesUl.append(newLi);
}
$(".searchBtn").on("click", function () {
  if (userInput.val() === "") {
    alert("Error, must enter a city!");
  } else {
    if (searchedCities.includes(userInput.val())) {
      alert("City already searched!");
    } else {
      $("#city-list").empty();
      searchedCities.push(userInput.val());
      localStorage.setItem("cities", JSON.stringify(searchedCities));
      for (var i = 0; i < searchedCities.length; i++) {
        var newLi = document.createElement("LI");

        newLi.textContent = searchedCities[i];
        citiesUl.append(newLi);
      }
    }
  }
});

$(".clearBtn").on("click", function () {
  localStorage.clear();
  location.reload();
});
