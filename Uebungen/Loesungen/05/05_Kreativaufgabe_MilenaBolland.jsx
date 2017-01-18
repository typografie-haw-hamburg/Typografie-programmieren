//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.textSize(20);

var myText = b.loadString ("Alphabet.txt");

var textFrame = b.text(myText,10,10,b.width-30,b.height-10);

var words = b.words(textFrame);

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var red = b.color(200,12,24);
b.stroke(red);
b.fill(red)

for (var i = 0; i < words.length; i++) {

  var wordBounds = b.bounds(words[i]);

  for (var j = 0; j < letters.length; j++) {

    if (   words [i].contents [0] == letters[j] ) {
    b.line(wordBounds.left, wordBounds.baseline, 20+j*20, b.height-30);
    }

  }
 
}

for (var k = 0; k < letters.length; k++) {
  b.text(letters[k], 20+k*20, b.height-30, 30,30)
}


}

b.go();