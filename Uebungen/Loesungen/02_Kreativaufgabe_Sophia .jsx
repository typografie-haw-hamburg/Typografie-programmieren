// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  clear(doc());
  noStroke();

  // create array with 10 random colors
  var randomColors = [];
  for (var i = 0; i < 5; i++) {
    randomColors.push(color(random(0, 255), random(0, 255), random(0, 255)));
  }

 var color1 = color(255,40,20);
 var color2 = color(0,130,50);

 fill(gradient(color1,color2));

  ellipse(width/2,height-40,width,80);
  ellipse(width/2,height-135,width,30);

fill(gradient(color2,color1));
  ellipse(width/2,height-100,width,40);


   fill(gradient(randomColors));
  rect (0,0,width/ 2 , height/2);
  var rechtsoben = rect (105,148.5, 148.5, 105);
  transform(rechtsoben, "rotate", -90);



}
