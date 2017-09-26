//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());

  for(var i = 0; i < 20; i++) {

    b.noStroke();
    
    b.fill(b.color(175, 255, b.random(0,240)));

    var randomWidth = b.random(10, 700);
    var randomHeight = b.random(10, 100);
    var posX = b.random(0, b.width - randomWidth);
    var posY = b.random(0, b.height - randomHeight);

    b.ellipse(posX, posY, 300, 300);
  }

  b.noFill();

  for  (var i=0; i<10; i++){
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var x2 = b.random(0, b.width);
    var y2 = b.random(0, b.height);
    var random = b.round(b.random(1,20));

    b.noFill();
    b.stroke(b.color(0, 0, 0));
    b.strokeWeight(1);
    b.ellipse(x, y, 150, 150);


  if (random <50) 
    {
      b.fill(0, 0, 0);
      b.ellipse(x2, y2, 20, 20);
    }


}

  b.textFont('DINPro', 'Bold');


  var list1 = ["frugal","twin","santorum","detritus","entrepreneurial","pronounciation","moisture","peculiarly","crepuscular","ubiquitous","malarkey","bubbles","dude","torque","google","visualization","cliche","floccinaucinihilipipification",]

  for (var i = 0; i < list1.length; i++) {

    var x = b.random (b.width);
    var y = b.random (b.height);
    var randomFontSize = b.random (3, 8);

    b.fill(0, 0, 0);
    b.textSize(randomFontSize);
    b.text(list1[i], x, y, 100, 100);
  }

  b.textFont('Gill Sans Shadow MT Pro', 'Regular');
  b.textSize(36);

  var list2 = ["supercalifragilisticexpialidocious","flabergasted","sphygmomanometer","Kardashian","hubbub","visualization","cliche","floccinaucinihilipipification"]

  for (var i = 0; i < list2.length; i++) {

    var x = b.random (b.width);
    var y = b.random (b.height);
    var randomFontSize = b.random (33, 86);

    b.textSize(randomFontSize);
    b.text(list2[i], x, y, 500, 500);
  }

}

b.go();