// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
clear(doc());

noFill();

for (var i = 0; i <80; i++){

  var form = random(1,3);
  var groesse = random(width*2);
  strokeWeight(0.5*600/groesse);

  if (form > 2) {
    ellipse(width/2,height/2,groesse,groesse);
  }

  else {
    rect(width/2-groesse/2,height/2-groesse/2,groesse,groesse);
  }


}

}
