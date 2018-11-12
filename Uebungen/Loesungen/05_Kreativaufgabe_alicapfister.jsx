// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());
  noStroke();

  //Foto Formular
  var picSizeX = 215;
  var picSizeY = 296;

  var x = 210;
  var y = 297;

  var formular = image("schengen1.jpg", x, y, picSizeX, picSizeY);
  opacity(formular, 80);
  transform(formular, "rotate", 180);


// Kreise Uhr
var mySeconds = second();
  var myMinutes = minute();
  var myHours = hour();

  var mySecondsX = map(mySeconds, 0, 59, width/2, height-50);
  var myMinutesX = map(myMinutes, 0, 59, width/2, height-50);
  var myHoursX = map(myHours, 0, 23, width/2, height-50);

  fill(252, 54, 68);
  ellipse(width / 2, myHoursX, 120, 120);

  fill(255, 98, 0);
  var circle = ellipse(width / 2, myMinutesX, 90, 90);
  blendMode(circle, BlendMode.MULTIPLY);


  fill (251, 176, 183);
  var circle2 = ellipse( width / 2, mySecondsX, 60, 60);
  blendMode(circle2, BlendMode.MULTIPLY);


// text

textFont("Helvetica", "Regular");
textSize(30);
fill(0, 0, 0);

var myTextFile1 = file("/Users/alica/Documents/basiljs/user/181106_Hausaufgabe_5/data/karel_martens_1");
var myString = loadString(myTextFile1);
var tf = text(myString, 10, 50, 100, 300);


textSize(15);

var myTextFile2 = file ("/Users/alica/Documents/basiljs/user/181106_Hausaufgabe_5/data/karel_martens_2");
var myString = loadString(myTextFile2);
var tf = text(myString, 100, 150, 100, 300);





}
