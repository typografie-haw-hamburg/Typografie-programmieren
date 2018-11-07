// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());
noStroke()
fill(245,255,250)
rect(0,0,width, height)


var Menge = 20
var x = 0
var y = 0
//Farbe
  for (var j = 0; j < Menge; j++) {
    fill(0, 0, 0 + j * 5);
    // ellipse(x + j * 10, y, 8, 8);
//Posotion
      for (var i = 0; i < Menge; i++) {
      fill(0 + i * 20, 0 + i * 50, 0 + j * 20);
        rect(x +j/2 * 10, y + i * 10, 8, 8);
        }

        for (var i = 0; i < Menge; i++) {
      fill(0 + i * 40, 0 + i * 70, 0 + j * 20);
        rect(x +j+10 * 10, y + i * 10, 8, 8);


       }
       for (var i = 0; i < Menge; i++) {
      fill(0 + i * 40, 0 + i * 70, 0 + j * 20);
        rect(x+j+width * 10, y + i * 10, 8, 8);


      }
      }

            var Menge = 30

        for (var i=1; i<Menge;i++){

          var x= 0
          var y= 200

          textSize(5*i);
          fill(230,255,40)
          text("GREEN",x + 2*i , y+ 2*i    ,150,150);
          }
          for (var j=1; j<50;j++){
          var x1= 170
          var y2= 0

          textSize(5*j);
          fill(70,130,180)
          text("B",x1  , y2 + 5*j ,150,150);
          }
}