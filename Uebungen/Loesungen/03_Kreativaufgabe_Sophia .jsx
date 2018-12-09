// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  fill(255,255,255);

 var dia =  25

 for (var j = 0; j < 8; j++) {

  var startX = 26.5

  rotation = 5




 for (var i = 0; i < 5; i++) {

  var StartY = 26.5;

  var myRect = rect (0 + startX *j ,70 + StartY * i,dia,dia);

  var myRotation = random(0,4)

  transform(myRect, "rotate", myRotation);
   }

 }


fill(0,0,0)

 beginShape();

  for(var i = 0; i < 200; i++) {

    var x = random(0,width);
    var y = random(180,height);

    vertex(x, y);
  }

  endShape();

for (var i = 0; i < 8; i++) {
   ellipse(100*i,-30,100,100)

}

textSize(30)
text("ES IST RANDOM", 30,100,400,400)
text("ES IST RANDOM", 80,125,400,400)
text("ES IST RANDOM", 120,150,400,400)
 }


