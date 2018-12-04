// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

  var grauwert = 230
  fill(grauwert,grauwert,grauwert)
  rect(0,0,width,height)

  var rahmen = 10

  noStroke();
  var myFile = file("~/Documents/basiljs/user/09/data/germanyumriss.png");
  image(myFile,rahmen,rahmen,width-rahmen*2,height-rahmen*2);



      var myList = loadString("stadtnamen.tsv");
    CSV.delimiter("\t");
    var listArr = CSV.decode(myList);

  var myCity = listArr[0];


for(i=0; i<80; i++){

  var city = myCity[i+1]
  println(city)


  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +city + "&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9";

  var encodedData = loadString(url);
  var data = JSON.decode( encodedData );


  var date  = new Date(data.list[2].dt * 1000);
  var year  = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day   = ("0" + date.getDate()).slice(-2);
  var latCoord = data.city.coord.lat
  var lonCoord = data.city.coord.lon

inspect(data.city.coord.lat)
inspect(data.city.coord.lon)
inspect(data.city.population)
inspect(data.list[0].weather[0].main)

  var heightCoord = map(latCoord,54.78,47.65,30,260)
  var widthCoord = map(lonCoord,6,13.4,15,165)
  var citySize = map(data.city.population,1000000,100000,30,5)
  var myWeather = data.list[0].weather[0].main

if(myWeather === "Clear"){
  r=230
  g=250
  b=255
}
if(myWeather === "Clouds") {
  r=220
  g=220
  b=230
}
if(myWeather === "Rain"){
  r=100
  g=140
  b=255


}

fill(0);
var schatten = ellipse(widthCoord+1.5,heightCoord+1.5,citySize)
fill(r,g,b);
var cityCircle = ellipse(widthCoord,heightCoord,citySize)

println(i);

}

// transform(myShape, "rotation", 45)

}