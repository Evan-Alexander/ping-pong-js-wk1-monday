var apiKey = require('./../.env').apiKey;

function Weather(){

}

Weather.prototype.getWeather = function(city, displayTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTemp(city, (response.main.temp * 9/5 - 459.67).toFixed(2));
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
