// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.size("A4", b.PORTRAIT);


  // Nutzereingabe Stadt
  var city = prompt("Für welche Stadt sollen die Temperaturen abgerufen werden?", "Hamburg");


  b.textSize(16);
  b.text("Temperaturen für " + city + ", 5-Tage-Vorhersage", 15, 15, 160, 50);
  b.textAlign( Justification.CENTER_ALIGN );

  b.textSize(12);

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9";

  var jsonData = b.loadString(url);

  var data = b.JSON.decode(jsonData);

  for(var i = 0; i < data.list.length; i++) {

    var temp = data.list[i].temp.day;

    var size = b.map( temp, 0, 10, 5, 30);
    b.ellipse(i * 28 + 20, 50, size, size);
    b.text(temp + " °C", i * 28 + 5, 80, 30, 20);

    var weather = data.list[i].weather[0].description;
    b.text(weather, i * 28 + 5, 90, 30, 20);

  }

}

b.go();
