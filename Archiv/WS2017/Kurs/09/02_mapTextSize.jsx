// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  // erstes Wort pointSize 3
  // letzes Wort pointSize 30

  var tf = b.text(b.LOREM, 50, 50, 100, 100);
  var words = b.words(tf);

  for(var i = 0; i < words.length; i++) {

    var pointSize = b.map( i, 0, words.length - 1, 3, 30);

    b.typo(words[i], "pointSize" , pointSize);

  }


}

b.go();
