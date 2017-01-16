// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// how to find a random word in a flowing text


function draw() {

  b.clear( b.doc() );


  // create two text frames, connect them and fill them with placeholder text
  var tf1 = b.text("", 0, 0, 200, 400);
  var tf2 = b.text("", 300, 100, 200, 400);

  b.linkTextFrames(tf1, tf2);
  b.placeholder(tf1);


  // save the entire text of the textframes (the "story") in a variable, split it into words and pick a random word
  var entireText = tf1.parentStory;
  var words = b.words(entireText);

  var randomIndex = b.floor( b.random(0, words.length));
  var randomWord = words[randomIndex];

  b.println("The random word is word no. " + (randomIndex + 1) + ": " + randomWord.contents);
}

b.go();
