//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  var car = { };

  car.color = "red";
  car.brand = "Renault";
  car.doors = 5;
  car.km = 100000;
  car.winterreifen = false;

  alert("Der Kilometerstand beträgt " + car.km + " km.");

  var tripLength = b.round(b.random(1, 500));

  b.println("We take a " + tripLength + " km trip.")


  car.km = car.km + tripLength;


  alert("Der Kilometerstand beträgt jetzt " + car.km + " km.");

  b.inspect(car);



}

b.go();
