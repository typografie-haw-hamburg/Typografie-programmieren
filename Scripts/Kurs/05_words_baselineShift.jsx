//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  // 1. Textrahmen erstellen
  var tf = b.text("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", 50, 50, 400, 400);

  // 2. Array aus Wörtern erstellen
  var words = b.words(tf);

  // 3. for loop über den Array
  for(var i = 0; i < words.length; i++) {

    if(  b.startsWith(words[i].contents, "a")  ) {
      b.typo(   words[i], "baselineShift", 20 );
    }

  }



}

b.go();
