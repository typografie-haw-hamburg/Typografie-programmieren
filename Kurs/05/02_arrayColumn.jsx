// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  // Array        0       1         2         3       4        5
  var names = ["Timo", "Peter", "Johanna", "Karl", "Jana", "Eduard"];

  for (var i = 0; i < names.length; i++) {
    text(names[i], 0, i * 20, 100, 100);
  }

}