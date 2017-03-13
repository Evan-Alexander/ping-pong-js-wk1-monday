var apiKey = "f96901d2ce6723952ba93cceb4fc0e1c";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The weather in " + city + " is " + (response.main.temp * 9/5 - 459.67).toFixed(2) + ".");
    });
  });
});
