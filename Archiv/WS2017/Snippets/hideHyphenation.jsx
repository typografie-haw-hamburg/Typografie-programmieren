// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// how to find hyphenated words in a text

function draw() {

  b.clear( b.doc() );

  // create a text frame and fill it with placeholder text
  var tf = b.text("", 0, 0, 300, 300);
  b.placeholder(tf);

  var words = b.words(tf);
  var hyphCounter = 0;

  // check for each word if there is more than one (parent) line, if so, it's hyphenated
  for (var i = 0; i < words.length; i++) {
    if(words[i].lines.length > 1) {
      hyphCounter++;
      b.println("The word " + words[i].contents + " is hyphenated.");

      // search the last insertion point of each hyphenated line and insert a discretionary line break
      words[i].lines[0].insertionPoints[-1].contents = SpecialCharacters.DISCRETIONARY_LINE_BREAK;
    }
  }

  if(hyphCounter === 0) {
    alert("There were no hyphenated words.");
  }

}

b.go();
