// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {


  clear( doc() );
fill(130, 50, 90);
noStroke();

//Hintergrund
var bg = rect(0, 0, width, height);

//string laden (ist im data Ordner)
var myString = loadString("Organhandel.txt");

//herzbildchen
for (var i = 0; i < 15; i++) {

  var xHeartImage = random(0, width);
  var yHeartImage = random(0, height);
  var heartRotate = random(0,360);

  var heartImage = image("220px-CG_Heart.gif", xHeartImage, yHeartImage, 60, 60);
  transform(heartImage, "rotation", heartRotate);
}
//geldbildchen
for (var j = 0; j < 40; j++) {
  var xMoneyImage = random(0, width);
  var yMoneyImage = random(0, height);

  var moneyImage = image("geld.jpg",xMoneyImage + 10, yMoneyImage + 10, 10, 15);
}

//text
rectMode(CENTER);
stroke(0);
strokeWeight(4);
textFont("National", "Bold");
textSize(80);
fill(255);
rect(width /2, height/2, 100, 81);
fill(0);
rectMode(CORNER);
text("BITTE", 27.4, 105, 200, 50);
text("SPENDEN", 27.4, 129, 200, 50);

textSize(6);
textFont("National", "Book");
text(myString, 59.7, 156.76, 91.9, 51.2);
text("by frid höft", 2, height - 3, 20, 10);

}