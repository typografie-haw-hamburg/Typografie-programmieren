﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


function draw() {

  b.clear(b.doc());
  b.noStroke();

  b.fill(b.color(255));
  b.rect(0, 0, b.width, b.height);
  
  var gridwidth = b.width / 3;
  var gridheight = b.height / 5;

  var posX = [0, gridwidth, gridwidth * 2, gridwidth * 3];
  var posY = [0, gridheight, gridheight * 2, gridheight * 3, gridheight * 4, gridheight * 5];

  var sizeX = [gridwidth, gridwidth / 2];
  var sizeY = [gridheight, gridheight / 2];

  var color = [b.color(255, 255, 0), b.color(0)];

  for(i = 0; i < 50; i++){
    var randomX = b.random(0, posX.length);
    var randomRoundedX = b.floor(randomX);
    var randomY = b.random(0, posY.length);
    var randomRoundedY = b.floor(randomY);

    var randomSizeX = b.random(0, sizeX.length);
    var randomRoundedSizeX = b.floor(randomSizeX);
    var randomSizeY = b.random(0, sizeY.length);
    var randomRoundedSizeY = b.floor(randomSizeY);


    if(posX[randomRoundedX] < b.width && posY[randomRoundedY] < b.height){
      var randomColor = b.random(0, color.length);
      var randomRoundedColor = b.floor(randomColor);
      b.noStroke();
      b.fill(color[randomRoundedColor]);
      b.rect(posX[randomRoundedX], posY[randomRoundedY], sizeX[randomRoundedSizeX], sizeY[randomRoundedSizeY]);
      
      if(randomColor < 1){
        b.noFill();
        b.stroke(b.color(0));
        b.strokeWeight(2);
        b.ellipse(posX[randomRoundedX], posY[randomRoundedY], sizeX[randomRoundedSizeX], sizeY[randomRoundedSizeY]);
      }
      else {
        b.noFill();
        b.stroke(b.color(255));
        b.strokeWeight(2);
        b.ellipse(posX[randomRoundedX] + sizeX[randomRoundedSizeX] / 2, posY[randomRoundedY] +sizeY[randomRoundedSizeY] / 2, sizeX[randomRoundedSizeX], sizeY[randomRoundedSizeY]);

      }
    }  
  }

}


b.go();

