//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(  b.doc()  );

  var tf = b.text("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", 100, 100, 400, 400);

  var _characters = b.characters( tf );

  for(var i = 0; i < _characters.length; i++) {

    var _vertScale = b.map(i , 0, _characters.length - 1, 50, 600);
    b.typo(_characters[i], "verticalScale", _vertScale);

  }



}

b.go();
