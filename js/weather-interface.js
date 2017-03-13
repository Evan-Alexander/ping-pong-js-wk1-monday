var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The weather in " + city + " is " + (response.main.temp * 9/5 - 459.67).toFixed(2) + ".");
      console.log("Notice: The GET request has been made.");
    });

  });
});
