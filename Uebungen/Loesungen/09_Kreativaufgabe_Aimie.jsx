// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

var city = "Hamburg";

  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Hamburg&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9";

  var encodedData = loadString(url);
  var data = JSON.decode( encodedData );

  var date  = new Date(data.list[2].dt * 1000);
  var year  = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day   = ("0" + date.getDate()).slice(-2);

  // alert(day + "." + month + "." + year);

textFont("Futura","Medium");
textSize(10);

  text(day + "." + month + "." + year,width-100,20,100,40);
  text(city,width-100,30,100,40)
  text("DAS WETTER VON HEUTE \tIN",width/2+40,20,130,40)


textFont("Futura","Bold");


// rectMode(CENTER);

// API = Programierschnittstelle

var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9"

var encodeData = loadString(url);

//Datensalat in ein Objekt umverwandeln
var data = JSON.decode(encodeData);

    // data = alle Daten abgespeichert
    // list ist noch ein Unterpunkt
    inspect(data.list[0].speed);

for (var i = 0; i < data.list.length; i++) {

  var Geschwindigkeit = data.list[i].speed;
  var Windrichtung = data.list[i].deg;
  var Druck = data.list[i].pressure;

  println(Geschwindigkeit);
  println(Windrichtung);

  var dia = map(Geschwindigkeit,0,100,0.1,20);
  var dia2 = map(Windrichtung,0,100,0.1,20);
  var dia3 = map(Druck,0,100,0.1,20);

  //Geschwindigkeit
  ellipse(50,50 + 110 *i,dia*20);
  text(Geschwindigkeit + " km/h",80,50+110*i,100,50);

  //Windrichtung
  var rect1 = rect(230,50 + 110 *i,dia2,dia2);
  transform(rect1,"rotation",(data.list[i].deg*5));
  text(Windrichtung + " °",320,50+110*i,100,50);

  //Druck
  strokeWeight(3);
  line(370,50 + 110 *i,Druck/2,50 + 110 *i);
  text(Druck,528,50+110*i,100,50);

}






}
