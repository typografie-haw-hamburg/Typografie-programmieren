// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var start = 7;
  var end = 38;

  textSize(36);

  for(var i = start; i < end + 1; i++) {

    var x = random(width);
    var y = random(height);

    text(i, x, y, 20, 20);

  }

}