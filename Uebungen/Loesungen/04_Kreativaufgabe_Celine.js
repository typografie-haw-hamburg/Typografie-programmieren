// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

// Farben definieren
   var color1 = b.color (255, 180 , 0);
   var color2 = b.color (229 , 0 , 100);
   var color3 = b.color (255, 255, 255);
   var color4 = b.color (229, 239, 100);

// Hintergrund
  b.gradientMode(b.RADIAL);
  b.fill (b.gradient(color3, color4));
  b.rect (0, 0, b.width , b.height)

  b.noFill();

  b.beginShape();

  for(var i = 0; i < 20; i++) {

// Linie
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    b.stroke (b.gradient (color1, color2));
    b.strokeWeight (2);
    b.vertex(x, y);


// Textdefinition
  var size = b.random(100, 200);
  b.textSize( size );
  b.textFont("Rosewood Std ");



// Hallo

   if (i < 10 ) {
   b.fill(b.gradient(color1 , color2));
   b.text ("Hallo" , x , y , 200, 100);


//DU DA
    } else {
   b.fill(b.gradient(color1 , color2));
   b.text ("DU DA", x , y , 200, 100);




}


  }

  b.noFill();

  b.endShape();

}

b.go();