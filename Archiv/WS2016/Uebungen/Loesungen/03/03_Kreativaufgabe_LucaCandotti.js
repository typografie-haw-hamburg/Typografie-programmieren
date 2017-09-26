//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM ); 

  var blue = b.color( 0, 0, 255 );
  var violett = b.color( 255, 0, 255 );
  var green = b.color( 0, 210, 255 );

  b.noFill();

  b.beginShape();

  for ( i = 0; i < 250; i++ ) {

    var x = b.random( 0, b.width );
    var y = b.random( 0, b.height );

    if ( x <= 70 ) {

      var size1 = b.random( 3, 6 ); 

      b.stroke ( green );
      b.strokeWeight( 0.5 );
      b.ellipse( x, y, size1, size1 ); 

      b.vertex( x, y );  
      b.endShape();
      b.beginShape();
      
    } else if ( x <= 140 ) {

      var size2 = b.random( 5, 10 ); 

      b.stroke ( violett );
      b.strokeWeight( 0.5 );
      b.ellipse( x, y, size2, size2 );
      
      b.vertex( x, y );
      b.endShape();
      b.beginShape();
      
    } else if ( x <= 210 ) {

      var size3 = b.random( 10, 15 ); 

      b.stroke ( blue );
      b.strokeWeight( 0.5 );
      b.ellipse( x, y, size3, size3 );
      
      b.vertex( x, y );

      }

  }

  b.endShape();
}

b.go();