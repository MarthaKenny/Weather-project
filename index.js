let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let time = document.querySelector("h2");
time.innerHTML = `${day},${hour}:${minutes}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.name;

  let temperatureElement = document.querySelector("#actualtemp");
  temperatureElement.innerHTML = temperature;
}

function search(city) {
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
function searchLocation(position) {
  let long = position.coords.longitude;
  let lati = position.coords.latitude;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentPosition(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(searchLocation);
}

function handleSearchButton(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#search-button");
  let city = citySearch.value;
  search(city);
}

let searchIcon = document.querySelector("#search-form");
searchIcon.addEventListener("submit", handleSearchButton);
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentPosition);
search("abuja");
