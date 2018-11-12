// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var myCar = {
    // properties
    brand: "Renault",
    speed: 120,
    owners: ["Manni", "Josef", "Marina"],
    color: color(234, 51, 0),
    diesel: true
  }

  // add properties
  myCar.gears = 6;

  // change existing properties
  myCar.color = color(23, 200, 44);

  fill(myCar.color);
  rect(50, 50, 50, 50);

}