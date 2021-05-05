var searchedCities = JSON.parse(localStorage.getItem("cities")) || [];
var userInput = $(".userInput");
var citiesUl = $("#city-list");
var city;

for (var i = 0; i < searchedCities.length; i++) {
  var newLi = document.createElement("LI");

  newLi.textContent = searchedCities[i];
  citiesUl.append(newLi);
}
$(".searchBtn").on("click", function () {
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
            $("#current-humidity").text(
              "Humidity: " + data.main.humidity + "%"
            );
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
      }
    }
  }
});

$(".clearBtn").on("click", function () {
  localStorage.clear();
  location.reload();
});

$("#city-list").on("click", "li", function () {
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
