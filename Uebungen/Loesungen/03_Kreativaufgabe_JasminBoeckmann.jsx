// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());


  var count = 300;
  var gap = count - 10;
  var step = height / gap;


  for(var i = 0; i <count; i++) {

line(0,height-i * step,width,i  * step);
line (0,height,width,i)
line (100,height,i,i)
}





}


