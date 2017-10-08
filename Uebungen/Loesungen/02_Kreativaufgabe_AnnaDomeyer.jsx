// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
// Hier kommt der Code hin
b.clear(b.doc());
//leeres dokument

b.units(b.MM);
//einheit in mm

b.noStroke();

var re= b.random(0,255);
var ge= b.random(0,255);
var be= b.random(0,255);
var size= b.random(0,100);



var count= prompt("Wie viele Linien?");

for (var i = 0; i <count; i++) {
var ax=b.random(0,b.width);
var ay=b.random(0,b.height);
var ex=b.random(0,b.width);
var ey=b.random(0,b.height);
var y=b.random(0,b.width);
var x=b.random(0,b.height);
var y1=b.random(0,b.width);
var x1=b.random(0,b.height);

var re= b.random(0,255);
var ge= b.random(0,255);
var bl= b.random(0,255);
var size= b.random(10,100);


b.fill(re,ge,bl);

b.ellipse(ex,ey,size,size);

b.fill(255,255,255);
b.rotate(60);
  var circle = b.rect(ex,ey,size,size);

  b.blendMode(circle, BlendMode.OVERLAY);


}

}

b.go();
