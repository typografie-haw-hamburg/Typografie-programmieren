// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

textFont("Sneak", "Bold");
textSize(120);
textAlign(Justification.CENTER_ALIGN);

var r = 240;
var g = 90;
var b = 100;

fill(r, g, b);
rect(0, 0, width, height);


var x = random(-24, 24);
var y = random(height-50);
  for (var i=0; i<10; i++){
    var versatz = i*1.4;
    if (x<10){
      fill(r-i*20,g+i*4,b+i*2);
    } else {
      fill(r-i*20,g-i*10,b);
    }

    if (y<150){
      text("merk", x+versatz, y+versatz, 200, 50);
    } else {
      text("würdig", x+versatz, y+versatz, 200, 50);
    }
  }



var x = random(-24, 24);
var y = random(height-50);
  for (var i=0; i<10; i++){
    var versatz = i*1.4;
    if (x<10){
      fill(r-i*20,g+i*4,b+i*2);
    } else {
      fill(r-i*20,g-i*10,b);
    }

    if (y<150){
      text("merk", x+versatz, y+versatz, 200, 50);
    } else {
      text("würdig", x+versatz, y+versatz, 200, 50);
    }
  }



var x = random(-24, 24);
var y = random(height-50);
  for (var i=0; i<10; i++){
    var versatz = i*1.4;
    if (x<10){
      fill(r-i*20,g+i*4,b+i*2);
    } else {
      fill(r-i*20,g-i*10,b);
    }

    if (y<150){
      text("merk", x+versatz, y+versatz, 200, 50);
    } else {
      text("würdig", x+versatz, y+versatz, 200, 50);
    }
  }



var x = random(-24, 24);
var y = random(height-50);
  for (var i=0; i<10; i++){
    var versatz = i*1.4;
    if (x<10){
      fill(r-i*20,g+i*4,b+i*2);
    } else {
      fill(r-i*20,g-i*10,b);
    }

    if (y<150){
      text("merk", x+versatz, y+versatz, 200, 50);
    } else {
      text("würdig", x+versatz, y+versatz, 200, 50);
    }
  }



var x = random(-24, 24);
var y = random(height-50);
  for (var i=0; i<10; i++){
    var versatz = i*1.4;
    if (x<10){
      fill(r-i*20,g+i*4,b+i*2);
    } else {
      fill(r-i*20,g-i*10,b);
    }

    if (y<150){
      text("merk", x+versatz, y+versatz, 200, 50);
    } else {
      text("würdig", x+versatz, y+versatz, 200, 50);
    }
  }



var x = random(-24, 24);
var y = random(height-50);
  for (var i=0; i<10; i++){
    var versatz = i*1.4;
    if (x<10){
      fill(r-i*20,g+i*4,b+i*2);
    } else {
      fill(r-i*20,g-i*10,b);
    }

    if (y<150){
      text("merk", x+versatz, y+versatz, 200, 50);
    } else {
      text("würdig", x+versatz, y+versatz, 200, 50);
    }
  }






}