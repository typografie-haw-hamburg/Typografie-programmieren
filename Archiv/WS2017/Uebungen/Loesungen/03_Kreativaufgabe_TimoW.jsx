// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.revert();
b.units(b.MM);
b.size(210, 297);
//ACHTUNG: Dokument richtet sich automatisch als Din-A1 ein!




//Skript für zufällige Auswahl aus gewählten Farben -> start

  var grey = b.color(150, 150, 150);
  var green = b.color(70, 90, 70);
  var yellow = b.color(255, 255, 0);
  var red = b.color(255, 0, 0);

  var colors = [grey, green, yellow, red];

  var random1 = b.floor(b.random(0, colors.length));

  var color1 = colors[random1];

//Skript für zufällige Auswahl aus gewählten Farben -> Ende (durch das einfügen von "[random1]", wird die ausgewürfelte Farbe eingesetzt.)




///Hintergrundfarbe -> Start
b.fill(color1);
b.rect(0, 0, b.width, b.height);
b.rectMode(b.CENTER);

///Hintergrundfarbe -> Ende




///Anzahl der loops -> Start
var loops = 11;
///Anzahl der loops -> Ende




//Optionale variable in den "fliegenden Stäbchen":

///var thickness = b.random(1, 5);

//Optionale variable -> Ende




///Variable 1 -> Start
for(var i=0; i < loops; i++) {
    b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);

if(i > loops - 2) {
    b.text("RANDOM!!!w", 0, 13 + i * 25, b.width, b.height);
  } else {
b.text("SCRIPTED,", 0, 12 + i * 25, b.width, b.height);
}
}

var myNumber = 23;



for(var i = 0; i < 100; i++){
var rotate = b.random(5,100);
var rndmpoint = b.random(100);

   var x = b.random(0, b.width);
   var y = b.random(0, b.height);

  
  
//Farbe der rechtecheke
b.fill(color1);
b.rotate(rotate);
//100 = rect länge, 5 = rect höhe
b.rect(x, y, 100, 2.5);
b.stroke(0);
  
  
if(i < 10){
b.strokeWeight(0,5);
  
  
  
}
}
}
b.go();
