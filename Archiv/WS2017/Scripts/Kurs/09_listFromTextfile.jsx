//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  var names = b.loadStrings("Namensliste.txt");

  var random = b.floor( b.random(0, names.length) );
  var randomName = names[random];

  alert(randomName);

}

b.go();
