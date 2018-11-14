// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myCar = {
    brand: "Renault",
    color: color(214, 30, 50),
    speed: 180,
    currentSpeed: 100
  };

  fill( myCar.color );
  rect(50, 50, 50, 50);

  // erste Geschwindigkeitsmessung
  if(myCar.currentSpeed < 30) {
    alert("Vielen Dank! 😊");
  } else {
    alert("Bitte langsamer fahren. 😢");
  }

  // Geschwindigkeit wird verringert
  myCar.currentSpeed = 28;

  // zweite Geschwindigkeitsmessung
  if(myCar.currentSpeed < 30) {
    alert("Vielen Dank! 😊");
  } else {
    alert("Bitte langsamer fahren. 😢");
  }

}