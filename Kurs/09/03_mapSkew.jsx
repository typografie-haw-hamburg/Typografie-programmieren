// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var tf = b.text(b.LOREM, 50, 50, 100, 100);
  var words = b.words(tf);

  for(var i = 0; i < words.length; i++) {

    var skew = b.map( i, 0, words.length - 1, -40, 40);

    b.typo(words[i], "skew" , skew);

  }

}

b.go();
