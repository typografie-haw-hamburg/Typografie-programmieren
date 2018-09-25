//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(  b.doc()  );


  for(var i = 0; i < 20; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    if(  x > b.width / 3      &&    x < b.width / 3 * 2   ) {
      var text = "mitte";
    } else if (x < b.width / 3) {
      var text = "links";
    } else {
      var text = "rechts";
    }

    b.text(text, x, y, 100, 100);
  }




}

b.go();
