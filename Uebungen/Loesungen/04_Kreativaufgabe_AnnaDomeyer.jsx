// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );
b.strokeWeight(1);
 b.noFill();


  var menge= b.random(50,150);

  var zahl=b.random(5,30);
var re=b.random(40,255);
var bl=b.random(40,255);

b.stroke(re,0,bl);

for (var j = 0; j <40; j++) {
 var size= b.random(50,100);

for(var i = 0; i < 30; i++) {
            b.ellipse(-50+j+10*i, -20+j*zahl, size, size);
          }


}
 var textFrameWidth = b.width;
  var textFrameHeight = b.height;

  b.textAlign(Justification.CENTER_ALIGN);
b.fill(255,255,255);

    var x = 0;
    var y = 30;
    var tgr = b.random(40,60);


    b.textSize(98);
    b.textFont ("Arial", "Bold");
    var tex =b.text("I THOUGHT I WAS GOING NOWHERE. NOW I CAN SEE A     PATTERN.", x, y, textFrameWidth, textFrameHeight);

}

b.go();