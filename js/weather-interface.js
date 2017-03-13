var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').weatherModule;

var displayTemp = function(city, tempData) {
  $('.showWeather').text("The temperature in " + city + " is " + tempData + ".");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var temperature = currentWeatherObject.getWeather(city, displayTemp);
  });
});
