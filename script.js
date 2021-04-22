
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
        
            celsiusTemperature = response.data.main.temp ;

            let iconElement = document.querySelector("#sun");

            iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  

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
            let farenheithTemp = tempElement.innerHTML;
            farenheithTemp = Number(temp);
            tempElement.innerHTML = Math.round(celsiusTemperature * 9 / 5 + 32);
        }

        function convertToCentigrados (event){
            event.preventDefault();
            let tempElement = document.querySelector("#temp");
            tempElement.innerHTML = Math.round(celsiusTemperature);
        }

    
    let celsiusTemperature = null;

    let dateElement = document.querySelector("#date");
    let time = new Date();  
    dateElement.innerHTML = formatDate(time);

    let searchForm = document.querySelector("#search-city");
    searchForm.addEventListener("submit", searchSubmit);

    
    let farenheith = document.querySelector ("#farenheith");
    farenheith.addEventListener ("click",convertToFarenheith);

    let centigrados = document.querySelector ("#centigrados");
    centigrados.addEventListener ("click",convertToCentigrados);


    function searchLocation(position){

    let apiKey = "c113b6dd33e31601e32997fb0eb67bad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
    }

 
searchCity("Guadalajara");