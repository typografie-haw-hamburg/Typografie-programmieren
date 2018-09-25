//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(  b.doc()  );

  b.text("Umbruch\n mit \\n:\nNeue Zeile", 100, 100, 100, 100);

  b.text("Umbruch\r mit \\r:\rNeuer Absatz", 200, 200, 100, 100);

}

b.go();
