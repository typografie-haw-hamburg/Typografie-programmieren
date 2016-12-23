//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.textFont('Helvetica\tBold');
  b.textSize(22);

  var lorem = "Lorem ipsum dolor sit amet, consectetuer\nadipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.\rAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient";

  var tf = b.text(lorem, 0, 0, 200, 200);

  var tfHeight = b.itemHeight(tf);

  while( tf.overflows == true ) {
    tfHeight++;
    b.itemHeight(tf, tfHeight);
  }

}

b.go();
