// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  revert();

  var myFile = file("~/Desktop/zitruspflanzen.txt");
  var myString = loadString( myFile );
  var tfA = text(myString, 50, 50, 100, 200);

  while(tfA.overflows === true) {

    addPage();
    var tfB = text("", 50, 50, 100, 200);
    linkTextFrames(tfA, tfB);

    // der aktuelle Textrahmen B wird in tfA gespeichert, damit er
    // im nächsten Durchlauf vom neuen Textrahmen aus verkettet werden kann
    tfA = tfB;

  }

}