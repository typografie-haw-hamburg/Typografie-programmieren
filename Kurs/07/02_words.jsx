// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  textSize(20);
  strokeWeight(0.5);

  var myFile = file("~/Desktop/data/cage.txt");
  var myString = loadString( myFile );
  var tf = text(myString, 20, 20, 150, 200);
  tf.parentStory.hyphenation = false;
  var myWords = words(tf);

  var fwb = bounds( myWords[0] );
  inspect(fwb);

  noFill();

  beginShape();

  for(var i = 0; i < myWords.length; i++) {

    if(myWords[i].length === 3) {

      var wb = bounds( myWords[i] );
      ellipse( wb.left + wb.width / 2 , (wb.baseline + wb.xHeight) / 2, wb.width + 2, wb.width + 2 );

      vertex(wb.left + wb.width / 2, (wb.baseline + wb.xHeight) / 2);
    }

  }

  endShape();


}