// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());


strokeWeight(5);
stroke (255,255,255);

 for (var j = 0; j < 2; j++) {

  startX = 20
  startY = 20

for (var i = 0; i < 3; i++) {
ellipse (100 + startY *j,(200 + 5 *i) + startX * j ,300,100)
}
 }

image("bild1.jpg", 10,80,100,150);
image("bild2.jpg", 60,140,50,80);
image("bild3.jpg", 180,10,100,200);

textSize(40);

for (var i = 0; i < 10; i++) {

text("MODE TWINS", 100,10 * i,100,100)

}



}
