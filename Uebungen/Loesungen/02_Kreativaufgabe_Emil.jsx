// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;



function draw() {
clear(doc());

rect(0,0,width, height)


for (var i = 0;  i < 100;  i++) {
  noStroke();
  var kreisSize = random(5,30)

  var r=random(0, 200);
  var g=random(0, 255);
  var b=random(200, 255);


  var r2=random(0, 255);
  var g2=random(0, 255);
  var b2=random(0, 255);

  var a = color (r, g, b);
  var b = color (r2, g2, b2);

  fill(gradient(a,b));

  var x=random(width);
  var y=random(0, height);
  ellipse(x, y, kreisSize, kreisSize);
  stroke(0);
  strokeWeight(kreisSize/1.5)
  line(x,y,x+kreisSize/2.8,y+kreisSize/2.8)
}


}
