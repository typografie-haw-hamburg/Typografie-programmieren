// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var largeDia = 150;

  ellipse(width / 2, height / 2, largeDia, largeDia);

  fill(255);

  for(var i = 0; i < 50; i++) {

    var x = random(width / 2 - largeDia / 2, width / 2 + largeDia / 2);
    var y = random(height / 2 - largeDia / 2, height / 2 + largeDia / 2);

    var dia = random(10, 20);
    var distance = dist(width / 2, height / 2, x, y);

    if(distance +  dia / 2 < largeDia / 2 ) {
      ellipse(x, y, dia, dia);
    }

  }

}