//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

var backgroundcolor = b.color( b.random (255));
b.fill ( backgroundcolor);
b.rect ( 0, 0, b.width, b.height);

var count = prompt( "Wie viele Formen möchtest du zeichnen?", 30);

if (b.isNumber(count))
    
    var circles = confirm( "Willst du Kreise erstellen?");

    for(var i = 0; i < count; i++) {
        

      var x = b.random( 0, b.width);
      var y = b.random( 0, b.height);
    
        
      b.stroke( b.color( b.random (255), b.random (255), b.random (255) ) );
      b.strokeWeight( 2);

      b.fill( b.color ( b.random (255), b.random (255), b.random (255)));
            
      if(circles == true) {
        b.ellipse( x, y, x, y);
            
      } else {
        b.rect( x, y, x, y);
      }

  }

}

b.go();