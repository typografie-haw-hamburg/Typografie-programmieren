// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear( b.doc() );
b.units(b.MM);

b.noFill();

b.fill(150);

//Körper
b.ellipse(b.width / 2, b.height / 2 + 64, 160, 160); // Unterer Körper
b.ellipse(b.width / 2, b.height / 2 - 20, 120, 120); //mittlerer Körper
b.ellipse(b.width / 2, b.height / 2 - 90, 80, 80); //Kopf

b.fill(50);
//Gesicht
b.ellipse(b.width / 2, b. height / 2 - 65, 5, 5); //Mund Punkt Mitte
b.ellipse(b.width / 2 - 8, b. height / 2 - 67, 5, 5); //Mund Punkt neben Mitte links
b.ellipse(b.width / 2 + 8, b. height / 2 - 67, 5, 5); //Mund Punkt neben Mitte rechts
b.ellipse(b.width / 2 - 15, b. height / 2 - 71, 5, 5); //Mund Punkt neben Mitte links 2
b.ellipse(b.width / 2 + 15, b. height / 2 - 71, 5, 5); //Mund Punkt neben Mitte rechts 2

b.fill(50)
//hut

b.ellipse(b.width / 2, b.height / 2 - 127, 66, 30); // ellipse
b.rect(b.width / 2 - 22, b.height / 2 - 168, 42, 42);
b.fill(300)
b.rect(b.width / 2 - 22, b.height / 2 - 136, 42, 10);

b.fill(300);
b.ellipse(b.width / 2 - 10, b.height / 2 - 102, 14, 14); // Auge 1
b.ellipse(b.width / 2 + 15, b.height / 2 - 102, 14, 14); // Auge 2
b.fill(50)
b.ellipse(b.width / 2 - 10, b.height / 2 - 102, 7, 7); // Pupille Auge 1
b.ellipse(b.width / 2 + 15, b.height / 2 - 102, 7, 7); // Pupille Auge 2

b.fill(50);
//Knöpfe mittlerer Körper
b.ellipse(b.width / 2, b.height / 2 - 38, 12, 12);
b.ellipse(b.width / 2, b.height / 2 - 20, 12, 12); // Knöpfe
b.ellipse(b.width / 2, b.height /2 - 2, 12, 12);

b.beginShape(b.CLOSE); //Nase
  b.vertex(b.width / 2 , b.height / 2 - 75);
  b.vertex(b.width / 2 + 30, b.height /2 - 85);
  b.vertex(b.width /2, b.height / 2 - 95);
b.endShape();

}

b.go();
