// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

fill (255, 210, 177);
rect(0, 0, width, height);


  fill(184, 168, 192)
  for (var i=0; i< 30; i++){

  var xSize = random(60, 100)

    var x = random(width);
    var y = random(height);

ellipse(x, y, xSize, xSize)

}
textFont("Theinhardt", "Regular");
textSize(80);

for (i=0; i<10; i++){

fill(150+i*40, 70+i*20, 0);
text("PROGRAMMIEREN", i*1-5, 50-i*1, 400, 50);
}
textFont("Theinhardt", "Regular");
textSize(150);

for (j=0; j<10; j++){

fill(150+j*40, 70+j*20, 0);
text("IST", 90+j*1, 120-j*1, 200, 50);

}
textFont("Theinhardt", "Regular");
textSize(230);

for (j=0; j<10; j++){

fill(150+j*40, 70+j*20, 0);
text("SUPER", j*1-18, 180-j*1, 400, 500);
}
}