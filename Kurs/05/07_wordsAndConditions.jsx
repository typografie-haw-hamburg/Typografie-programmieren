// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var myString = loadString("cage.txt");
  var tf = text(myString, 50, 50, 100, 100);

  var myWords = words(tf);

  var red = color(255, 0, 0);

  for(var i = 0; i < myWords.length; i++) {

    // if(myWords[i].contents.length === 4) {

    //   typo(myWords[i], "underline", true);

    // }

    // if( startsWith(myWords[i].contents, "w") ) {

    //   typo(myWords[i], "underline", true);

    // }

    if(myWords[i].contents.length > 12) {

      typo(myWords[i], "fillColor", red);

    }

  }

}