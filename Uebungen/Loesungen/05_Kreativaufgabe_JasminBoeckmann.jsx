// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var count = 5;

  noStroke();




for(var i = 0; i < 4; i++) {

  var x = random(width /2)
  var y = random(height)




    var gaps = count - 1;
    var gapHeight = height / gaps;

    rect(x,i * gapHeight,170,50);
  }

fill(200);
noStroke();



  rect(0,50,210,25)
  rect(0,124,210,25)
  rect(0,198,210,25)
  rect(0,272,210,25)



fill(0);
textFont("Avenir", "Light");
textSize(70);
textAlign(Justification.CENTER_ALIGN);

myText = ("TYPOGRAPHIE");
text(myText,0,47,210,25);

textSize(40);
myText2 = ("programmieren");
text(myText2,0,127,210,25);

textSize(20);
myText3 = ("macht");
text(myText3,0,205,210,25);

textSize(70);
myText4 = ("SPASS");
text(myText4,0,269,210,25);
}
