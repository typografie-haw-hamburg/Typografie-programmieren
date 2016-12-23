//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/bundle/basil.js";
//@include "basiljs/lib/polyfills.js";
//@include "basiljs/lib/rita-full.js";

// style words based on their parts of speech with RiTa.js
// requires a modified rita-full.js file, including a splitWords() method
// (see: https://github.com/dhowe/RiTa/issues/391)

function draw() {

  var s = "It was a dark and stormy and rainy night.";

  var tf = b.text(s, 50, 50, 200, 100);

  var r = RiString(s);
  var words = r.splitWords();

  for (var i = 0; i < words.length; i++) {
    if(words[i].pos() == "jj") {

      var startIndex = words[i].get("charIndex");
      var endIndex = startIndex + words[i]._text.length - 1;

      b.typo(tf.characters.itemByRange(startIndex, endIndex), "fillColor", b.color(255, 0, 0));

    }
  }

}

b.go();
