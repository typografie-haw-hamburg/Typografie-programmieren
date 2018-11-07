// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var myString = loadString("cage.txt");
  var tf = text(myString, 50, 50, 100, 100);

  var myWords = words(tf);

  for(var i = 0; i < myWords.length; i++) {

    var mySkew = random(-5, 5);

    typo(myWords[i], "baselineShift", mySkew);

  }

}