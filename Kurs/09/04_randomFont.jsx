// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var tf = text(LOREM, 50, 50, 100, 100);
  var myWords = words(tf);

  var allFonts = app.fonts;

  for(var i = 0; i < myWords.length; i++) {

    var randomFontIndex = floor( random(0, allFonts.length) );
    typo(myWords[i], "appliedFont", allFonts[ randomFontIndex ]);

  }

}