let weather = { 
    "apiKey": "9b1f679911ac53cd9b7ab5c58e255fce",
fetchWeather: function (city) {
    fetch (
    "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey
    )

.then((response) => response.json())
.then((data) => this.displayWeather(data))      
},
displayWeather: function(data) {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innertext = "weather in" + name
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector(".description").innertext = description
    document.querySelector(".temp").innertext = temp + "°C"
    document.querySelector(".humidity").innertext = "humidity" + humidity + "%"
    document.querySelector(".wind").innertext = "wind speed:" + speed + "km/ph"


}
}