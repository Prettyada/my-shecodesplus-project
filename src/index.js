function refreshWeather(response) {
  let temperatureElement = document.querySelector(
    "#weather-app-temperature-value"
  );
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "dab41bf0ae0cb164587f31o31483a6et";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("Paris");
