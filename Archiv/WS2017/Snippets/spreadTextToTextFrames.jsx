// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.textSize(36);
  var tf1 = b.text("This is my spectacular headline", 0, 0, 100, 20);

  // wichtig! Wenn der erste Textrahmen gestyled werden soll,
  // dann sollte das spätestens hier passieren, damit auch final
  // festgelegt ist, wo der Text umbricht, damit sich das später
  // nicht noch mal ändert

  if(tf1.overflows === true) {
    var tf2 = b.text("", 0, 40, 100, 20);
    b.linkTextFrames(tf1, tf2);
  }

  // hier kann dann der zweite Textrahmen anders gestyled werden
  // b.applyParagraphStyle(tf2, "meinAbsatzformat");
  // b.typo(tf2, "skew", 48);
  // etc.

}

b.go();
