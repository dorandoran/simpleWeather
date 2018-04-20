"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    loadingText.style.display = 'block';
    weatherDiv.style.display = 'none';
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
    var http = new XMLHttpRequest();
    var apiKey = '5470e7e2602158ab2b327acc5b884ceb';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
        + cityName + '&units=metric&appid=' + apiKey;
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updatePage(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong! Please try again.')
        }
    };
    http.send();
}

function updatePage(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescripton.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display = 'none';
    weatherDiv.style.display = 'block';
}