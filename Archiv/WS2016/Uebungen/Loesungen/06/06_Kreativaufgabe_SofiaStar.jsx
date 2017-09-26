
//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.page());

var zeilen = 15;  
var spalten = 20;
var stepX = b.width/spalten-1;
var stepY = b.height/zeilen-1;
var strichlaenge = 50;
var strichstaerke = 0.5;


//Zeichnet Raster aus kleinen Strichen,die rotiert werden, bei Änderung des rotationGrad kommen sehr unterschiedliche Ergebnisse raus
for (var y = 1; y < zeilen; y++) {

    for (var x = 1; x < spalten; x++) {
      
      
      var posX = x*stepX;
      var posY = y*stepY;
    
      var rotationGrad = b.radians(20);
      var rotation = b.rotate(rotationGrad);
      b.strokeWeight(strichstaerke);
      var lines = b.line(posX, posY, posX, posY-strichlaenge);

    }//SpaltenLoop
  }//ZeilenLoop




}
b.go();
