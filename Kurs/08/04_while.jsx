// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var blueCount = 0;

  // loop läuft so lange, bis 20 blaue Kreise erstellt wurden
  while(blueCount < 20) {

    var x = random(width);
    var y = random(height);

    if(x < width / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 0, 255);
      blueCount++;
    }

    ellipse(x, y, 30);

  }

}