// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  rectMode(CORNER);
  strokeWeight(25); //die kontur brint den eigentichen effect
  fill(255, 255, 0);
  var bg = rect(0, 0, width, height);
  opacity(bg, 70);
// der erste loop ist nur dazu da um zwei variablen zu haben um x und y achse zu verschieben und für den farbverlauf
  for (var i = 0; i < 10; i++) {

    fill(50 * i, 50, 130);
    //der eigentliche loop
    for (var j = 0; j < 8; j++) {
      fill(50*i/2 , 30 * j/2, 130);
      var myRect = rect(j*30 - 5, i*30 - 10, 30, 30);
      fill(255);
      transform(myRect, "rotation", 45);
    }

  }
  //text
  textSize(70);
  textFont("Gill Sans", "Bold");
  text("the\rnext\rpacman", 3, 210, width, 76.21);
  textSize(13);
  text("by frida höft",179, 2.6, 31, 3.15);
}