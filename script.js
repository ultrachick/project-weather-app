
    function formatDate(date) {
        let hours = date.getHours();
            if (hours < 10) {
                hours = `0${hours}`
            }
        let minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
        let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        let dayIndex = date.getDay();
        let day = days[dayIndex];

            return `${day}, at ${hours}:${minutes}`;
        }

        function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
       
function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "c113b6dd33e31601e32997fb0eb67bad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

        function displayWeather (response){
            document.querySelector("#city").innerHTML = response.data.name;
            document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
            document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
            document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
        
            celsiusTemperature = response.data.main.temp ;

            let iconElement = document.querySelector("#sun");

            iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

        getForecast(response.data.coord);

}

function searchCity(city) {
  let apiKey = "c113b6dd33e31601e32997fb0eb67bad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

        function searchSubmit (event) {
            event.preventDefault();
            let city = document.querySelector("#city-input").value;
            searchCity(city);
        }


    let dateElement = document.querySelector("#date");
    let time = new Date();  
    dateElement.innerHTML = formatDate(time);

    let searchForm = document.querySelector("#search-city");
    searchForm.addEventListener("submit", searchSubmit);

    function searchLocation(position){

    let apiKey = "c113b6dd33e31601e32997fb0eb67bad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
    }

 
searchCity("Guadalajara");
