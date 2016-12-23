#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

var pages = 3;                                      // seiten anzahl definieren

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.noFill();
  b.strokeWeight('2pt');

  var distance = 2,                                             // schrittlänge
      angle = 180,                                               // startwinkel 
      maxAngle = 50,                         // maximaler winkel für die kurven
      x = 0,
      y = 0;                                               // startposition x y

  for(var i=0;i<pages;i++){b.addPage();}                    // seiten erstellen
  b.page( 1 );
  b.beginShape();

  for(var i=0; i<100000; i++) {
    b.vertex(x,y);
    angle += b.random(-maxAngle,maxAngle) ;
    var pos = kreisPosition( x, y, distance, angle);
    x = pos.x;
    y = pos.y;

    if(x>b.width)        {               // schauen ob die seite verlassen wird
      x = 0;                               // wenn ja auf eine zufällige andere
      nextPage();     }                    // seite gehen und auf der gegenüber
    else if (x<0)        {                    // liegenden seite weiter zeichen
      x = b.width;
     nextPage();      }
   else if(y>b.height)   {
      y = 0;
      nextPage();     }
    else if(y<0)         {
      y = b.height;
      nextPage();     }
  }
  b.endShape();
}

b.go();

function kreisPosition( x, y, r, grad) {
      var obj = {};
      obj.x = Math.cos( b.radians(grad) ) * r + x;
      obj.y = Math.sin( b.radians(grad) ) * r + y;
      return obj;
    }

function nextPage() {
      b.endShape();
      b.page( b.floor(b.random(pages+1)) );
      b.beginShape();
    }

