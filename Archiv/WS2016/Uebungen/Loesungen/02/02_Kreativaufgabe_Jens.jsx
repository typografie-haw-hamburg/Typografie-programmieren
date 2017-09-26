//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear(b.doc()); // clears previous output, helpful during this tutorial
  
  //General Settings
    b.units(b.MM);
    b.colorMode(b.RGB);
    b.doc().documentPreferences.facingPages = false;
    //Page
      b.bleeds(2);
      b.margins(10);
    //Stroke
      b.stroke(0);
      b.strokeWeight(0.5);
      //b.noStroke();
    //Fill
      b.fill(0);
      //b.noFill();
    //Modes
      b.rectMode(b.CORNER);
      b.ellipseMode(b.CENTER);
    //Text
      b.textFont("Helvetica", "Bold"); 
      b.textTracking(0);
      b.textSize(20);
      b.textAlign(Justification.LEFT_ALIGN);

  //General Variables
    var halfX = b.width/2;
    var halfY = b.height/2;
    var myCounter = 10;
    var myColor = b.color(b.random(255), b.random(255), b.random(255));


  //Additional Variables
  var x1 = halfX;
  var y1 = 0;
  var x2 = b.height;
  var y2 = 0;
  var myEllipseSize = 10;


  for (var i = 0; i < myCounter; i++) { //for(var i = 0; i < 20; i = i + 5)
    //daw line
    b.stroke(0);
    b.strokeWeight(0.5);
    b.noFill();
    x2 = b.random(10, b.width-10); // find new random end points
    y2 = b.random(10, b.height-10);
    b.line(x1, y1, x2, y2); // draw line from start to end points

    //find random gradient colors
    var color1 = b.color(255, 0, 0);
    var color2 = b.color(b.random(255), 0, 0);
    b.gradientMode( b.RADIAL );
    b.fill( b.gradient(color1, color2, "Gradient" + i) );

    //draw gradient ellipse at end of line
    b.noStroke();
    myEllipseSize = b.random(7,17);
    b.ellipse(x2, y2, myEllipseSize, myEllipseSize);

    //draw a small black ellipse on top of the last ellipse
    b.fill(0);
    b.ellipse(x2, y2, 1, 1);

    //write x-coordinate and iteration
    b.textSize(9);
    b.fill(0);
    b.text(b.round(x2) + "–" + i, x2 + 2, y2 + 2, 12, 5)

    //set the end points as the new start points
    x1 = x2;
    y1 = y2;
  }; //Loop End

  

  
};

b.go();
