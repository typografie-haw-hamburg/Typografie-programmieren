// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Hamburg&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9";

  var encodedData = loadString(url);
  var data = JSON.decode( encodedData );

  var date  = new Date(data.list[2].dt * 1000);
  var year  = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day   = ("0" + date.getDate()).slice(-2);

  alert(day + "." + month + "." + year);

}