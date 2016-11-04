//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  var counter = 0;

  while(counter < 20) {
    counter++;
    b.println(counter);
  }

}

b.go();