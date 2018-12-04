// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

var color1 = color(0, 0, 255);
var color2 = color(255, 255, 0);

fill(gradient(color1, color2));

rect(0, 0, width, height);
textSize(764)
text("Q", 5, 28, width, height);

textSize(22);
textFont("TSTAR CE","Bold Italic")

stroke(255, 83, 32);
line(width/2, 0, width/2, height);
var y1= 7.5
var y2= 12.8
fill(255, 83, 32);

var tag = 3
var stadt = "Quakenbrück";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  textFont("TSTAR CE","Bold Italic")
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quarnbek";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);

  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quarnstedt";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1,y2, 0, height);

  ellipse(width/2,myTemp, 2);

  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quaschwitz";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quedlinburg";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Queidersbach";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quendorf";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Querenhorst";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Querfurt";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quernheim";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quickborn";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quiddelbach";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quierschied";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quirla";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);


var stadt = "Quirnbach";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);



var stadt = "Quirnheim";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);

var stadt = "Quitzdorf";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+stadt+"&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

  var encodedData = loadString(url);

  var data = JSON.decode(encodedData);

  var temperatur = data.list[tag].temp.day
  var myTemp = map(temperatur,y1, y2, 0, height);

  ellipse(width/2,myTemp, 2);
  text(stadt, width/2+5, myTemp-2, 80, 20);
  text(temperatur, width/2-25, myTemp-2, 20, 10);
}
