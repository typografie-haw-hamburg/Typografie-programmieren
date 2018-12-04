// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

noStroke();
rectMode(CENTER);

var myCity = "Hamburg"
// var myCity = prompt( "Wählen Sie Ihre bevorzugte Stadt:");

var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + myCity + "&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

var encodedData = loadString( url );
var data = JSON.decode( encodedData );
// inspect(data.list[0]);

for(var i = 0; i < data.list.length; i++) {

  var clouds = data.list[i].clouds;
  var temp = data.list[i].temp.day;

  var speed = data.list[i].speed;
  var degree = data.list[i].deg;

  var windSpeed = map(speed, 0, 10, 0, 100);

// BACKGROUND (FARBE)
  var tempRed = map(temp, 0, 50, 0, 255);
  var tempBlue = map(temp, 0, 50, 255, 0);

    fill(tempRed, 0, tempBlue);
    myBack = rect(width / 2, height / 2, width, height);
    opacity(myBack, 40);


// WOLKEN
  var dia = map(clouds, 0, 100, 0.1, 20);

    fill(180, 200, 250);
    ellipse(random(50, 100), random(50, 100), dia * 2, dia * 2);
    ellipse(random(200, 250), random(200, 250), dia * 2, dia * 2);
    ellipse(random(100, 150), random(300, 350), dia * 2, dia * 2);


  // text(temp + "°C", 80, 50 + 30 * i - 10, 50, 20);


}


  for(var j = 0; j < 50; j++) {

// WINDGESCHWINDIGKEIT / RICHTUNG
    fill(160, 210, 255);
    var myRect = rect(random(width - windSpeed), random(height - windSpeed), 2, windSpeed);
    opacity(myRect, 30);
    transform(myRect, "rotation", degree)

  }



}