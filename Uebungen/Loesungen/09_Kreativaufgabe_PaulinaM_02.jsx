// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var color1 = color(255, 255, 0);
  var color2 = color(0, 0, 255);

  fill(gradient(color1, color2));

  var bg = rect(width, 0, height, width);

  transform(bg, "rotate", 90);

  textSize(764)
  text("Q", 5, 28, width, height);

  textSize(22);
  textFont("TSTAR CE","Bold Italic")

  stroke(255, 83, 32);
  line(width/2, 0, width/2, height);




  var tempMin = 7.5
  var tempMax = 12.8
  fill(255, 83, 32);

  var cities = ["Quakenbrück", "Quarnbek", "Quaschwitz", "Queidersbach"];

  var tag = 3

  for(var i = 0; i < cities.length; i++) {

    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cities[i]+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

    var encodedData = loadString(url);

    var data = JSON.decode(encodedData);

    var temperatur = data.list[tag].temp.day
    var myTemp = map(temperatur, tempMin, tempMax, height, 0);

    ellipse(width/2,myTemp, 2);
    textFont("TSTAR CE","Bold Italic")
    text(cities[i], width/2+5, myTemp-2, 80, 20);
    text(temperatur, width/2-25, myTemp-2, 20, 10);
  }


}
