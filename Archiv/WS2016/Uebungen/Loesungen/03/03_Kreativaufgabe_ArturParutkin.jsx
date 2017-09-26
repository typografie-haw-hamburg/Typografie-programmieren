#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


function draw() {

    b.clear(b.doc());
    b.units(b.MM);


  b.colorMode(b.CMYK);
  var white = b.color( 0 ),
      black = b.color( 100 );

  centerX = b.width/2;
  centerY = b.height/2;
  radius = b.min(centerX, centerY)*0.7;


  mandala ( centerX, centerY, radius, b.second());
  mandala ( centerX, centerY, radius*0.7, b.minute());
  mandala ( centerX, centerY, radius*0.5, b.hour());
  mandala ( centerX, centerY, radius*0.25, b.day());
  mandala ( centerX, centerY, radius*0.12, b.month());


    b.fill( black );
    b.textSize(b.width/20);
    b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);
    b.text(b.month()+':'+b.day()+':'+b.hour()+':'+b.minute()+':'+b.second() , b.width/2-30, b.height-60, b.width/2, 30);



}

b.go();


function mandala ( x, y, radius, sec) {
  if(sec < 1) return;
  a = (360/sec)*(b.floor((sec*0.1))+1);

  offset = 0.05;
  b.noFill();

  if( sec % b.ceil(sec*0.1) == 0 &&sec!=20&&sec!=30&&sec!=50&&sec!=60 ) {

    // konzentrische kreise
    rounds = a*sec/360;
    steps = sec/rounds;

    for( i=0; i<rounds; i++ ) {
      b.beginShape();
      for ( j=0; j<steps+1; j++ ) {
        if( j == steps ) e = 0;                                               // kreise schließen
        else e = j;
        pos = kreisPosition( x, y, radius+(radius*i*(offset*2)), a*e );
        b.vertex( pos.x, pos.y );
      }
      b.endShape();
    }

  } else {
    // spirale
    b.beginShape();
    for( i=0; i<=sec; i++ ) {
      if( i == sec ) e = 0;                                                   // kreis schließen
      else e = i;
      pos = kreisPosition( x, y, radius+(radius*e*(offset*0.1))+(e*offset), a*e );
      b.vertex( pos.x, pos.y );
    }
    b.endShape();
  }
}


function kreisPosition( x, y, r, grad) {
        var obj = {};
        obj.x = Math.cos( b.radians(grad) ) * r + x;
        obj.y = Math.sin( b.radians(grad) ) * r + y;
        return obj;
    }

