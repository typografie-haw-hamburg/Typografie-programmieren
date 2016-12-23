//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.noFill();


  for(var i = 0; i < 20; i++) {
    var x = b.random(b.width);
    var y = b.random(b.height);
    var size = b.random(20, 300);

    nikolaus(x, y, size);
  }

}

b.go();


function nikolaus (x, y, size) {
  // base
  b.rect(x, y, size, size);
  b.line(x, y, x + size, y + size);
  b.line(x, y + size, x + size, y);

  // roof
  b.line(x, y, x + size / 2, y - size / 2);
  b.line(x + size / 2, y - size / 2, x + size, y);
}
