//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.units ( b.MM);

b.clear (document);



  var gridUnitSize = 21;
 

  for (var y = 0; y < 14; y++) {
    for (var x = 1; x < 10; x++) {
      
      var diameter = b.random(2, 20)
      var dia = b.random(1,diameter-2)
      var dia1 = b.random (1, diameter-2);
      var n = b.random (20);

      if ( y > 0) {
      var posX = x*gridUnitSize;
      var posY = y*gridUnitSize;
      

      b.noFill();
      b.ellipse(posX, posY, diameter, diameter);

      if (n < 2) {
        b.ellipse(posX, posY, dia, dia);
      }
      if (n  > 17) { 
        var rotation = b.radians (b.random(0,180));


b.rotate (rotation);
        b.line(posX , posY + diameter/2, posX, posY - diameter/2);
      }

      if (n > 13) {
          b.fill(0,0,0);

     b.opacity(b.ellipse(posX, posY, dia1, dia1), 100 - y*5);
      }
      


    





}




}
}
}
b.go();
