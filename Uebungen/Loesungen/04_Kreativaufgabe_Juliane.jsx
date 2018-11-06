// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;




function draw() {

clear(doc());


fill(50, 30, 255);
rect(0,0,210, 297);



var blau = color(50, 30, 255);
var lila = color(200, 60, 200);
  noStroke();
  fill(gradient(blau, lila, "gradient"));

var sizeSonne = 180;
var xSonne = width/2;
var ySonne = height/2;


ellipse(xSonne, ySonne, sizeSonne, sizeSonne);

image('mond_70.png', 4, 40, sizeSonne, sizeSonne);


fill(255);

// Drei große Sterne
for (var i=0; i<3; i++){

  var sizeStars = random(2.5, 4);
  var x = random(8, width-8);
  var y = random(8, height-8);

  ellipse(x, y, sizeStars, sizeStars);

  stroke(255);
  strokeWeight(1);
  line(x, y-6, x, y+6);
  line(x-6, y, x+6, y);
  line(x-3, y-3, x+3, y+3);

}



// kleine Sterne

noStroke();

for (var i=0; i<60; i++){

  var sizeStars = random(1, 2.5);
  var x = random(3, width-3);
  var y = random(3, height-3);

  ellipse(x, y, sizeStars, sizeStars);

}


// Sternschnuppen
for (var i=0; i<6; i++){

  var sizeStars = random(1, 2);

  var x = random(3, width-3);
  var y = random(3, height-3);

  var xDirection = random(-2, 2);
  var yDirection = random(-2, 2);


  for(var j=0; j<20; j++) {
    ellipse(x+xDirection*j+2, y+yDirection*j+2, sizeStars*j/12, sizeStars*j/12);

  }
}





// Text uni

var x = random(8, width-50);
var y = random(8, height/2);

for (var i=0; i<8; i++){

  textSize(30);
  textFont("Sneak", "Bold");
  var text1 = text("uni", x+4*i, y+4*i, 178, 80);
  opacity(text1, 10*i);
}


// Text verse

var x = random(8, width-50);
var y = random(height/2, height-40);

for (var i=0; i<8; i++){

  textSize(30);
  textFont("Sneak", "Bold");
  var text1 = text("verse", x+4*i, y+4*i, 178, 80);
  opacity(text1, 10*i);
}






}

