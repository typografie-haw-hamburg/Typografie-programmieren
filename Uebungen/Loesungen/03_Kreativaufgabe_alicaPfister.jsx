// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {



  clear(doc());

  noStroke();
  fill (250, 208, 201);
  rect(0, 0, width, height/2);

  fill (255, 162, 61);
  rect(0, height/2, width, height/ 2);

  beginShape();

  for(var i = 0; i < 10; i++) {

    var x = random(width);
    var y = random(height);
    var dia = random(5, 40);


     if(y > 150) {

    fill(255, 0, 0);
    dia = random(5, 40);
    rect(x - dia/2, y - dia / 2, dia, dia);


} else {

    fill(0, 0, 255);
    dia = random(5, 40);
    ellipse(x, y, dia, dia);

    }

    fill(255, 255, 255);
    vertex(x, y);

  }

  endShape();


}
