// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var highestNumber = 0;

  for (var i = 0; i < 10; i++) {
    var randomNumber = b.floor(b.random(0, 101));

    // print all numbers to console, so we can quickly check for ourselves which one is the highest number
    b.println(randomNumber);

    if(randomNumber > highestNumber) {
      highestNumber = randomNumber;
    }

  }

  alert("Die höchste zufällige Nummer war " + highestNumber + ".");

}

b.go();
