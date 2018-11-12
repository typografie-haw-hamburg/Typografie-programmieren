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

  var yourCar = {
    brand: "Peugot",
    speed: 140,
    owners: ["Manuela", "Josefine", "Marius"],
    color: color(56, 23, 201),
    diesel: false
  }

  if(myCar.speed > yourCar.speed) {
    fill( myCar.color );
  } else {
    fill( yourCar.color);
  }

  rect(50, 50, 50, 50);

}