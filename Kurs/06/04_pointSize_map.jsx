// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myTextFile = file("~/Desktop/data/cage.txt");
  var myString = loadString(myTextFile);
  var tf = text(myString, 20, 20, 150, 200);

  var myWords = words(tf);
  println(myWords.length);

  for(var i = 0; i < myWords.length; i++) {

    var myPointSize = map(i, 0, myWords.length - 1, 4, 40);
    typo(myWords[i], "pointSize", myPointSize);

  }

}