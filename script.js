
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

        function displayWeather (response){
            document.querySelector("#city").innerHTML = response.data.name;
            document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
            document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
            document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
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

        function convertToFarenheith (event){
            event.preventDefault();
            let tempElement = document.querySelector("#temp");
            let temp = tempElement.innerHTML;
            temp = Number(temp);
            tempElement.innerHTML = 66;
        }

        function convertToCelsius(event) {
                event.preventDefault();
                let tempElement = document.querySelector("#temp");
                tempElement.innerHTML = 19;
            }

    let dateElement = document.querySelector("#date");
    let time = new Date();  
    dateElement.innerHTML = formatDate(time);

    let searchForm = document.querySelector("#search-city");
    searchForm.addEventListener("submit", searchSubmit);

    
    let farenheith = document.querySelector ("#farenheith");
    farenheith.addEventListener ("click",convertToFarenheith);

    let celsius = document.querySelector("#centigrados");
    celsius.addEventListener("click", convertToCelsius);

    function searchLocation(position){

    let apiKey = "c113b6dd33e31601e32997fb0eb67bad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
    }


function getCurrentCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentCity(searchLocation);
}
    

    
    
searchCity("Guadalajara");