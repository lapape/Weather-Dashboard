//variable that is an empty array or parses data from local storage into an array
var searchedCities = JSON.parse(localStorage.getItem("cities")) || [];
var userInput = $(".userInput");
var citiesUl = $("#city-list");
var city;

//loop through array of searched cities and makes and appends a new li for each city in the array
for (var i = 0; i < searchedCities.length; i++) {
  var newLi = document.createElement("LI");

  newLi.textContent = searchedCities[i];
  citiesUl.append(newLi);
}

//function that checks if user response is already in the array, if not moves on to add that city to the array
$(".searchBtn").on("click", function () {
  $("img").show();
  city = userInput.val();
  if (city === "") {
    alert("Error, must enter a city!");
  } else {
    if (searchedCities.includes(city)) {
      alert("City already searched!");
    } else {
      $("#city-list").empty();
      searchedCities.push(city);
      localStorage.setItem("cities", JSON.stringify(searchedCities));
      for (var i = 0; i < searchedCities.length; i++) {
        var newLi = document.createElement("LI");

        newLi.textContent = searchedCities[i];
        citiesUl.append(newLi);

        //variable that is a specific URL for the current weather of the city the user searched
        var currentDayUrl =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid=0d0b2b0910b73328162f180c9a8a151c";
        //function that fetches weather data and plugs the data into the text content of the current day
        fetch(currentDayUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            var currentDate = moment.unix(data.dt).format("MM/DD/YYYY");
            $("#city-name").text(data.name + " " + currentDate);
            $("#current-temp").text("Temp: " + data.main.temp + "\u00B0 F");
            $("#current-wind").text("Wind: " + data.wind.speed + " MPH");
            $("#current-humidity").text(
              "Humidity: " + data.main.humidity + "%"
            );
          });

        //variable for the URL for the 5 day forecast of the city the user searched
        var fiveDayUrl =
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=imperial&appid=f1abc546bb5ca491ffa796b40d6c8ba4";

        //function that fetches the data for the 5 day forecast and parses it into an array of objects
        fetch(fiveDayUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            //plugs data from fetch into text content of the 5 weather cards
            $("#day-1")
              .children()
              .eq(0)
              .text(moment.unix(data.list[0].dt).format("MM/DD/YYYY"));
            $("#day-1")
              .children()
              .eq(1)
              .attr(
                "src",
                "http://openweathermap.org/img/wn/" +
                  data.list[0].weather[0].icon +
                  "@2x.png"
              );
            $("#day-1")
              .children()
              .eq(2)
              .text("Temp: " + data.list[0].main.temp + " \u00B0 F");
            $("#day-1")
              .children()
              .eq(3)
              .text("Wind: " + data.list[0].wind.speed + " MPH");
            $("#day-1")
              .children()
              .eq(4)
              .text("Humidity: " + data.list[0].main.humidity + "%");
            $("#day-2")
              .children()
              .eq(0)
              .text(moment.unix(data.list[1].dt).format("MM/DD/YYYY"));
            $("#day-2")
              .children()
              .eq(1)
              .attr(
                "src",
                "http://openweathermap.org/img/wn/" +
                  data.list[1].weather[0].icon +
                  "@2x.png"
              );
            $("#day-2")
              .children()
              .eq(2)
              .text("Temp: " + data.list[1].main.temp + " \u00B0 F");
            $("#day-2")
              .children()
              .eq(3)
              .text("Wind: " + data.list[1].wind.speed + " MPH");
            $("#day-2")
              .children()
              .eq(4)
              .text("Humidity: " + data.list[1].main.humidity + "%");
            $("#day-3")
              .children()
              .eq(0)
              .text(moment.unix(data.list[2].dt).format("MM/DD/YYYY"));
            $("#day-3")
              .children()
              .eq(1)
              .attr(
                "src",
                "http://openweathermap.org/img/wn/" +
                  data.list[2].weather[0].icon +
                  "@2x.png"
              );
            $("#day-3")
              .children()
              .eq(2)
              .text("Temp: " + data.list[2].main.temp + " \u00B0 F");
            $("#day-3")
              .children()
              .eq(3)
              .text("Wind: " + data.list[2].wind.speed + " MPH");
            $("#day-3")
              .children()
              .eq(4)
              .text("Humidity: " + data.list[2].main.humidity + "%");
            $("#day-4")
              .children()
              .eq(0)
              .text(moment.unix(data.list[3].dt).format("MM/DD/YYYY"));
            $("#day-4")
              .children()
              .eq(1)
              .attr(
                "src",
                "http://openweathermap.org/img/wn/" +
                  data.list[3].weather[0].icon +
                  "@2x.png"
              );
            $("#day-4")
              .children()
              .eq(2)
              .text("Temp: " + data.list[3].main.temp + " \u00B0 F");
            $("#day-4")
              .children()
              .eq(3)
              .text("Wind: " + data.list[3].wind.speed + " MPH");
            $("#day-4")
              .children()
              .eq(4)
              .text("Humidity: " + data.list[3].main.humidity + "%");
            $("#day-5")
              .children()
              .eq(0)
              .text(moment.unix(data.list[4].dt).format("MM/DD/YYYY"));
            $("#day-5")
              .children()
              .eq(1)
              .attr(
                "src",
                "http://openweathermap.org/img/wn/" +
                  data.list[4].weather[0].icon +
                  "@2x.png"
              );
            $("#day-5")
              .children()
              .eq(2)
              .text("Temp: " + data.list[4].main.temp + " \u00B0 F");
            $("#day-5")
              .children()
              .eq(3)
              .text("Wind: " + data.list[4].wind.speed + " MPH");
            $("#day-5")
              .children()
              .eq(4)
              .text("Humidity: " + data.list[4].main.humidity + "%");
          });
      }
    }
  }
});

//clear button that deletes local storage and reloads the page so the list items are not displayed
$(".clearBtn").on("click", function () {
  localStorage.clear();
  location.reload();
});

//function that allows users to click on previous searches with the same functionality of the "search" button

$("#city-list").on("click", "li", function () {
  $("img").show();
  var city = this.textContent;
  console.log(this.textContent);
  var currentDayUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=0d0b2b0910b73328162f180c9a8a151c";
  fetch(currentDayUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var currentDate = moment.unix(data.dt).format("MM/DD/YYYY");
      $("#city-name").text(data.name + " " + currentDate);
      $("#current-temp").text("Temp: " + data.main.temp + "\u00B0 F");
      $("#current-wind").text("Wind: " + data.wind.speed + " MPH");
      $("#current-humidity").text("Humidity: " + data.main.humidity + "%");
    });

  var fiveDayUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=f1abc546bb5ca491ffa796b40d6c8ba4";
  fetch(fiveDayUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      $("#day-1")
        .children()
        .eq(0)
        .text(moment.unix(data.list[0].dt).format("MM/DD/YYYY"));
      $("#day-1")
        .children()
        .eq(1)
        .attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[0].weather[0].icon +
            "@2x.png"
        );
      $("#day-1")
        .children()
        .eq(2)
        .text("Temp: " + data.list[0].main.temp + " \u00B0 F");
      $("#day-1")
        .children()
        .eq(3)
        .text("Wind: " + data.list[0].wind.speed + " MPH");
      $("#day-1")
        .children()
        .eq(4)
        .text("Humidity: " + data.list[0].main.humidity + "%");
      $("#day-2")
        .children()
        .eq(0)
        .text(moment.unix(data.list[1].dt).format("MM/DD/YYYY"));
      $("#day-2")
        .children()
        .eq(1)
        .attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[1].weather[0].icon +
            "@2x.png"
        );
      $("#day-2")
        .children()
        .eq(2)
        .text("Temp: " + data.list[1].main.temp + " \u00B0 F");
      $("#day-2")
        .children()
        .eq(3)
        .text("Wind: " + data.list[1].wind.speed + " MPH");
      $("#day-2")
        .children()
        .eq(4)
        .text("Humidity: " + data.list[1].main.humidity + "%");
      $("#day-3")
        .children()
        .eq(0)
        .text(moment.unix(data.list[2].dt).format("MM/DD/YYYY"));
      $("#day-3")
        .children()
        .eq(1)
        .attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[2].weather[0].icon +
            "@2x.png"
        );
      $("#day-3")
        .children()
        .eq(2)
        .text("Temp: " + data.list[2].main.temp + " \u00B0 F");
      $("#day-3")
        .children()
        .eq(3)
        .text("Wind: " + data.list[2].wind.speed + " MPH");
      $("#day-3")
        .children()
        .eq(4)
        .text("Humidity: " + data.list[2].main.humidity + "%");
      $("#day-4")
        .children()
        .eq(0)
        .text(moment.unix(data.list[3].dt).format("MM/DD/YYYY"));
      $("#day-4")
        .children()
        .eq(1)
        .attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[3].weather[0].icon +
            "@2x.png"
        );
      $("#day-4")
        .children()
        .eq(2)
        .text("Temp: " + data.list[3].main.temp + " \u00B0 F");
      $("#day-4")
        .children()
        .eq(3)
        .text("Wind: " + data.list[3].wind.speed + " MPH");
      $("#day-4")
        .children()
        .eq(4)
        .text("Humidity: " + data.list[3].main.humidity + "%");
      $("#day-5")
        .children()
        .eq(0)
        .text(moment.unix(data.list[4].dt).format("MM/DD/YYYY"));
      $("#day-5")
        .children()
        .eq(1)
        .attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[4].weather[0].icon +
            "@2x.png"
        );
      $("#day-5")
        .children()
        .eq(2)
        .text("Temp: " + data.list[4].main.temp + " \u00B0 F");
      $("#day-5")
        .children()
        .eq(3)
        .text("Wind: " + data.list[4].wind.speed + " MPH");
      $("#day-5")
        .children()
        .eq(4)
        .text("Humidity: " + data.list[4].main.humidity + "%");
    });
});
