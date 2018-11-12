// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var myFile = file("~/Desktop/data/cage.txt");
  var myString = loadString( myFile );
  var tf = text(myString, 20, 20, 80, 100);
  var myWords = words( tf );

  // get measurements of the first word
  var firstWordBounds = bounds( myWords[0] );
  // log results to the console, so we can see what properties the object has
  inspect( firstWordBounds );

  fill(255, 0, 0);

  for(var i = 0; i < myWords.length; i++) {

      var myBounds = bounds( myWords[i] );

      stroke(0);
      strokeWeight(0.5);
      line(myBounds.left, myBounds.baseline, width, height);

      noStroke();
      ellipse(myBounds.left, myBounds.baseline, 3, 3);

  }

}