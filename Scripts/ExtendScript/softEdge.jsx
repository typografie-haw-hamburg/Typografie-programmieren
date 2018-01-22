// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var rect = b.rect(20, 20, 80, 40);

  rect.transparencySettings.featherSettings.mode = FeatherMode.STANDARD;
  rect.transparencySettings.featherSettings.cornerType = FeatherCornerType.DIFFUSION;
  rect.transparencySettings.featherSettings.width = 10;

}

b.go();
