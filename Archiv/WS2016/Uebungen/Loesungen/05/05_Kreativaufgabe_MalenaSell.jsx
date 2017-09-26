//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


  //load text
  var text = b.loadString("Hegels-Enzyklopädie1.txt");

  b.rotate(b.radians(90));

  var txt = b.text(text, 354.528, 36, 502.583, 318.528);

  var words = b.characters(txt);


  //word changes
  for (var i = 0; i < words.length; i++){
  
    var word = words[i];

    b.typo(word, "baselineShift", b.random(5, 25));
    b.typo(word, "pointSize", b.random(5, 20));
    b.typo(word, "characterRotation", 90);

  }

  //question
  var question = b.text("Can you read this text?",  354.528, 36, 502.583, 354.528);
  b.typo(question, "characterRotation", 0);
  b.typo(question, "pointSize", b.random(50, 80));



}

b.go();
