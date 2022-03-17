const favourites=[]
const weather = {
  apiKey: "9b1f679911ac53cd9b7ab5c58e255fce",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
    document.querySelector(".country").innerText = " Country Code " + country;
    document.querySelector(".city").innerText = "Weather In " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/2000x1000/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector("#favouritesButton").addEventListener("click", function () {
   console.log(document.querySelector(".search-bar").value);
   favourites.push(document.querySelector(".search-bar").value)
   let txt = "";
   favourites.forEach(myFunction);
   document.querySelector(".cities").innerHTML = txt;
  function myFunction(value)
  {
    txt +="<h4>"+ value + "</h4>"; 
  }
  

})

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Melbourne, Au");


