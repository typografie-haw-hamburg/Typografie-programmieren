// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);

  b.noStroke();
  b.rectMode( b.CENTER );


  var rotation= b.random(0,3);

  for(var i = 0; i < 100; i++) {

  var randomNumber = b.random(0, 10);

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    if( y < b.height / 2) {

      b.noStroke();
      b.fill(b.random(220,250),b.random(40,50),b.random(40,50));
      b.rotate(rotation);

    } else {

      b.rotate(-rotation);
      b.fill(b.random(10,20),b.random(10,20),b.random(210,250));

    }

    if( randomNumber < 5 ) {


      b.rect(x,y,15,2);
      b.rect(x,y,20,10);

    } else {
      b.rect(x, y, 400, 2);

    }

    if( y < b.height / 2) {

      b.rotate(-rotation);

    } else {

      b.rotate(rotation);

    }

  }

}

b.go();