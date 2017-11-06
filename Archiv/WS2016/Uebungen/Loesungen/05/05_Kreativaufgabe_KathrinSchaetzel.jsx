// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );



b.noStroke();


b.fill(0, 0, 0);
b.rect(0, 0, b.width, b.height);


for( i=0; i<60; i++){
  var red1 = b.random(255);
  var red2 = b.random(255);
  var blue1 = b.random(255);
  var blue2 = b.random(255);

  var green = b.random(255);

  var color1 = b.color(red1, 0, blue1);
  var color2 = b.color(red2, 0, blue2);

  var x = b.random(50, b.width - 70);
  var y = b.random(5, b.height - 5);

 // b.gradientMode(b.LINEAR);
//  b.gradient(color1, color2, "gradient1")
  b.textFont("Helvetica Neue", "Bold Italic");
  b.textSize(60);

  if ( x > b.width - b.width / 2){

    b.fill( color1 );
    b.text("dann", x, y, 80, 50);

  } else{
    b.fill( color2 );
    b.text("wenn", x, y, 80, 50);


  }
}

for( j=0; j<15; j++){

    var x1 = b.random(50, b.width - 70);
    var y1 = b.random(5, b.height - 5);
    b.fill(0, 0, 0);
    b.text("wenn", x1, y1, 80, 50);



  }
b.fill(255, 255, 255);
b.textSize(65);
b.textFont("Helvetica Neue", "Bold");
b.text("ODER GAR NICHT", 7, 210, 250, 50);
}



b.go();