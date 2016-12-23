#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


function draw() {

    b.clear(b.doc());
    b.units(b.MM);


  b.colorMode(b.CMYK);
  var white = b.color( 0 ),
      black = b.color( 100 );



  var x = b.width/2,
      y = b.height/2,
      d = 5,
      s = 5,          // size
      maxS = 30,
      minS = 1;       // max traveling distance

  for(i=0;i<1000;i++){
    if( i % 2 == 0 ) b.fill( white );
    else b.fill( black );
    b.rect( x-s*0.5, y-s*0.5 , s, s );
    x = x + b.random(-d,d);
    y = y + b.random(-d,d);
    s = s + b.random(-d,d);
    if(x>b.width) x = 0;
    if(y>b.height) y = 0;
    if(x<0) x = b.width;
    if(y<0) y = b.height;
    if(s>maxS) s = 0;
    if(s<minS) s = 30;
  }


}

b.go();

