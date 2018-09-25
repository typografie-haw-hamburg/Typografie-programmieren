// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  // Objekt mit Eigenschaften festlegen
  var car = {
    color: "red",
    brand: "Renault",
    topSpeed: 150,
    currentSpeed: 120
  }

  // Eigenschaften verändern
  car.currentSpeed = 28;

  // Eigenschaften auslesen
  if(car.currentSpeed > 30) {
    alert("Du fährst ja viel zu schnell!")
  } else {
    alert("Vielen Dank. :-)")
  }

  var rect = b.rect(0, 0, 200, 200);

  // Objekt inspizieren und alle Eigenschaften auflisten
  b.inspect(rect);

  // einzelne Eigenschaft auslesen
  alert(rect.absoluteRotationAngle);

  // einzelne Eigenschaften verändern
  rect.absoluteRotationAngle = 20;
  rect.verticalScale = 200;
}

b.go();
