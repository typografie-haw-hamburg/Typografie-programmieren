// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  // Rundungsbefehle:
  // runden: round()
  // abrunden: floor()
  // aufrunden: ceil()

  for(var i = 0; i < 10; i++) {

    var value = floor( random(1, 11) );
    println(value);

    var x = random(width);
    var y = random(height);

    if(value === 5) {
      fill(0, 0, 255);
    } else {
      fill(255, 0, 0);
    }

    ellipse(x, y, value * 10, value * 10);
  }

}
