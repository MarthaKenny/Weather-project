function searchButton(event) {
  event.preventDefault()
    let citySearch = document.querySelector("#search-button");
    let heading = document.querySelector("h1")
    heading.innerHTML = citySearch.value
}
let searchIcon=document.querySelector("#search-form")
searchIcon.addEventListener("submit", searchButton);



let date = new Date
let hour = date.getHours();
let minutes= date.getMinutes()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
let time = document.querySelector("h2");
time.innerHTML = `${day}, ${hour}:${minutes}`

function changefahrenheit(event) {
  event.preventDefault();
  let changedTemp = document.querySelector("#actualtemp");
  let actualtemp = changedTemp.innerHTML;
  changedTemp.innerHTML = (actualtemp * 9) / 5 + 32;
}
let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", changefahrenheit);




function changeCelsius(event) {
  event.preventDefault();
  let changedTemp = document.querySelector("#actualtemp");
  let actualtemp = changedTemp.innerHTML;
  changedTemp.innerHTML = (changedTemp.innerHTML -32)* 5/9
}
let celsiusTemp = document.querySelector("#degree");
celsiusTemp.addEventListener("click", changeCelsius);
