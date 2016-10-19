//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
var auswahl = b.selection();
var characters = b.characters(auswahl);
var red = b.color(255,0,0);

var buchstaben= b.characters(auswahl);
var anzahlBuchstaben = buchstaben.length;
b.println("der Text hat " + anzahlBuchstaben + " Buchstaben.");

for(var i=0; i<anzahlBuchstaben; i++ ){
    
    var size= b.random(5,30);
    var buchstabe = buchstaben[i];
    var shift = b.random(-5,50);
    var skew = b.random(-10,10);
    var rotate = b.random(-10,10);
    
    b.typo(buchstabe,'pointSize',size);
    b.typo(buchstabe,'baselineShift',shift);
    b.typo(buchstabe,'skew',skew);
    b.typo(buchstabe,'characterRotation',rotate);
    b.typo(buchstabe,'appliedFont',"Fugue (OTF)");
    

  
    
  if(characters[i].contents == "e"){
      b.typo(characters[i], 'fillColor', red);
      }
 }
    
}

b.go();
