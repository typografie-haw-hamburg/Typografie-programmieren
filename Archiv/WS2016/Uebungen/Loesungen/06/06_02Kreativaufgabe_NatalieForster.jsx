//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  // Script, das über mehrere Seiten läuft

  b.clear(b.doc());

  b.noFill();

  var pageCount = 3;
  var circleCount = 10;

  for (var j = 0; j < pageCount; j++) {

    // in der ersten Runde müssen wir keine neue Seite hinzufügen, denn die erste Seite ist schon vorhanden
    if(j > 0) {
      b.addPage();
    }


    for(var i = 0; i < circleCount; i++) {

      var x = b.random(0, b.width);
      var y = b.random(0, b.height);
      var size = b.random(10, 10);

      b.ellipse(x, y, size, size);

    }

    var circleCount = 50;
  var xPos = 25;
  var diameter = 20;


  for(var i = 0; i < circleCount; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    var red = b.map(y , 0, b.height, 0, 255);
    b.fill(255, 96, 58);

    b.ellipse(x, y, diameter, diameter);


  }
 for(var i = 0; i < circleCount; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    var yellow = b.map(y , 0, b.height, 0, 255);
    b.fill(255, 215, 108);

    b.ellipse(x, y, diameter, diameter);

}
  
  for(var i = 0; i < circleCount; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    var Blue = b.map(y , 0, b.height, 0, 255);
    b.fill(108, 139, 255);

    b.ellipse(x, y, diameter, diameter);

}

var step = 8;
  var blue = b.color(108, 139, 255);
  var yellow = b.color(255, 215, 108);

  for(var i = 0; i < 50; i++) {

    if(i % 2 == 0) {
      // wenn i gerade ist
      b.stroke(blue);
      b.strokeWeight(0.8);
    } else {
      b.stroke(yellow);
      b.strokeWeight(0.6);
    }

    b.line(0, i * step, b.width, b.height - (i * step) );

  }

  var step = 8;
  var blue = b.color(108, 139, 255);
  var yellow = b.color(255, 215, 108);

  for(var i = 0; i < 200; i++) {

    if(i % 4 == 0) {
      // wenn i gerade ist
      b.stroke(blue);
      b.strokeWeight(0.8);
    } else {
      b.stroke(yellow);
      b.strokeWeight(0.6);
    }

    b.line(0, i * step, b.width, b.height - (i * step) );

  }
  }


}

b.go();