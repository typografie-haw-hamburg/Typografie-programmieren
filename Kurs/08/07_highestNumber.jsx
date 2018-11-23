// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var highestNumber = 1;

  for(var i = 0; i < 10; i++) {

    var newNumber = floor( random(1, 101) );
    alert(newNumber);

    if(newNumber > highestNumber) {
      highestNumber = newNumber;
    }

  }

  textSize(24);
  text("Die höchste Nummer war: " + highestNumber, 50, 50, 120, 50);

}