// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.revert();
b.units(b.MM);
 b.size(210, 297);



b.fill(255,255,0);
b.rect(0, 0, b.width, b.height);
b.rectMode(b.CENTER);


{
    b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 20, b.width, b.height);


      b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 50, b.width, b.height);


      b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 80, b.width, b.height);


      b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 110, b.width, b.height);

     b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 140, b.width, b.height);

      b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 170, b.width, b.height);

      b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 200, b.width, b.height);

    b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE,", 0, 230, b.width, b.height);

        b.fill(0);
    b.textFont("favorit");
    b.textSize(90);
    b.textLeading(120);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("RECTACLE.", 0, 260, b.width, b.height);
  }


for(var i = 0; i < 20; i++){
var rotate = b.random(5,100);
var rndmpoint = b.random(100);

   var x = b.random(0, b.width);
   var y = b.random(0, b.height);


//Farbe der rechtecheke
b.fill(b.color(255,255,0));
b.rotate(rotate);
//100 = rect länge, 5 = rect höhe
b.rect(x, y, 100, 15);
b.stroke(0);

if(i < 10){
b.strokeWeight(0,5);




}

}
}

b.go();




