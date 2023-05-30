function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes =`0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=(response.data.name);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML=(response.data.weather[0].description);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = (response.data.main.humidity);
    let windElement = document.querySelector("#wind");
    windElement.innerHTML=(response.data.wind.speed);
    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "667d9f573c8af4c33457be5d561a9148";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);