// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var city = "Hamburg";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9";

  var encodedData = loadString(url);
  var data = JSON.decode( encodedData );

  inspect(data.list[0].temp);

  for(var i = 0; i < data.list.length; i++) {

    var clouds = data.list[i].clouds;
    var temp = data.list[i].temp.day;

    var dia = map(clouds, 0, 100, 0.1, 20);
    var tempLength = map(temp, 0, 50, 0, 100);

    ellipse(50, 50 + 30 * i, dia);
    rect(100, 50 + 30 * i - 10, temp, 20);

    text(temp + " °C", 80, 50 + 30 * i - 10, 50, 20);

  }

}