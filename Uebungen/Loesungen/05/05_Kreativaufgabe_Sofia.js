//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


var auswahl= b.selection();
var buchstaben = b.characters(auswahl);
var red = b.color(255,0,0);
var aCount = 1;


// forloop geht den ausgewählten Text Buchstabe für Buchstabe durch und sucht nach "a" oder "A"
for(var i = 0 ; i<buchstaben.length; i++){
    if(buchstaben[i].contents == "a" || buchstaben[i].contents ==  "A"){
      
      var randomShift = b.random(20,120);
      var bounds = b.bounds(buchstaben[i]);
      var left = bounds.left;
      var baseline = b.bounds(buchstaben[i]).baseline;
      var baselineShift = baseline - randomShift;
      
      

      //jedes A wird um zufälligen Wert nach oben versetzt
      b.typo(buchstaben[i],'baselineShift',baselineShift);
      b.typo(buchstaben[i],'pointSize',18);
      b.typo(buchstaben[i],'fillColor',red);

      // zeiht eine Line von der linken unteren Ecke des Buchstabens zur linken oberen Ecke der neuen Position
      b.stroke(red);
      b.strokeWeight(2);
      b.line(left,baseline,left,baseline-baselineShift);

      aCount++ // zählt die Anzahl der A's
      b.println(aCount);
    }// if Condition

}// Forloop

// Text mit Anzahl der As wird zufällig auf der Seite platziert
var width = 300;
var height = 200;
var x = b.random(b.width-width);
var y = b.random(b.height-height);
textInhat = "Der Buchstabe A kommt " + aCount + " Mal in diesem Text vor.";
// b.textFont("DIN");
text = b.text(textInhat,x,y,width,height);
b.typo(text,'fillColor',red);
b.typo(text,'pointSize',15);





}

b.go();