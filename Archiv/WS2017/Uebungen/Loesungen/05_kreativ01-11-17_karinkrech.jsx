// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.revert(b.doc());
  b.units(b.MM);
  b.size(200,200);

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var anzahlKreise = 20;


  for(var ix = 0; ix < anzahlKreise; ix++) {
    for(var iy = 0; iy < anzahlKreise; iy++) {
      var randomIx = b.random(0, alphabet.length);
      var character = alphabet[b.floor(randomIx)];
      var x = 5 + 10*ix;
      var y = 5 + 10*iy;
      var color = b.color(0,iy*10 , ix*10);
      b.fill(color);
      b.noStroke();
      b.ellipse(x, y, 8, 8);
      b.fill(255,255,255);
      b.text(character, x-2, y-2, 4, 4);
    }
  }
}

b.go();
