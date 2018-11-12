// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var myRect = rect(50, 50, 50, 50);

  myRect.name = "Klaus";
  myRect.verticalScale = 50;
  myRect.fillColor = color( 255, 0, 0 );

  // inspect object properties in console
  inspect( myRect );

}