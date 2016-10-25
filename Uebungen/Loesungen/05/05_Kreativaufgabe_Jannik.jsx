//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear (b.doc());

  //define grid
  var gridUnitSize = 10

  //define parameters for rectangle
  var xPos = b.width /2
  var yPos = b.height /2
  b.rectMode (b.CENTER);
  b.strokeWeight(3);

  //choose color scheme
      //array colors
      var colors1 = [b.color(255,239,117), b.color(255, 227, 8) , b.color(255,241, 76), b.color(255,255,41), b.color(255,204,10)]
      //choose color from array
      var randomColor = b.round(b.random (0,colors1.length-1))
      b.println ("randomColor: " + randomColor);

      

  //b.textFont("Work Sans","Medium");
  //b.textSize ( 30);
  //b.textAlign(Justification.CENTER_JUSTIFIED );
  //b.text ("XMR", b.width /2, b.height /2 + b.height /18, 100, 30);
  

  b.noFill();


  //triangle / random for either generating triangle or not, random for strokeWeight

  var nTriangle = b.round (b.random (0,4));
  b.println ("nTriangle: " + nTriangle)
  var randomNumberColor = b.round(b.random (0,1));

  if (randomNumberColor == 0 ) {
          b.stroke (colors1[randomColor])
        }   else (b.stroke (b.color (0,0,0))); {

        }

  if (nTriangle == 0 ) {
     //donoth

  } else if (nTriangle <3) {
    

    

    b.strokeWeight (b.random (2,4));
    var triangle = b.beginShape (b.CLOSE, b.CENTER)
    b.vertex (b.width /2,b.height /2 - b.height /13)
    b.vertex (b.width/2 - b.width /10, b.height /2 + b.height /24)
    b.vertex (b.width /2+ b.width /10, b.height /2 + b.height /24)
    b.endShape();

  } else if (nTriangle == 3 ) {

    b.strokeWeight (6);
    var triangle = b.beginShape (b.CLOSE, b.CENTER)
    b.vertex (b.width /2,b.height /2 - b.height /13)
    b.vertex (b.width/2 - b.width /10, b.height /2 + b.height /24)
    b.vertex (b.width /2+ b.width /10, b.height /2 + b.height /24)
    b.endShape();

  } else if (nTriangle == 4 ) {

    b.strokeWeight (10);
    var triangle = b.beginShape (b.CLOSE, b.CENTER)
    b.vertex (b.width /2,b.height /2 - b.height /13)
    b.vertex (b.width/2 - b.width /10, b.height /2 + b.height /24)
    b.vertex (b.width /2+ b.width /10, b.height /2 + b.height /24)
    b.endShape();

  } else if (nTriangle == 0) {

    b.strokeWeight (b.random (3,8));
    var triangle = b.beginShape (b.CLOSE, b.CENTER)
    b.vertex (b.width /2,b.height /2 - b.height /13)
    b.vertex (b.width/2 - b.width /10, b.height /2 + b.height /24)
    b.vertex (b.width /2+ b.width /10, b.height /2 + b.height /24)
    b.endShape();


    b.strokeWeight (b.random (5,10));
    triangle = b.beginShape (b.CLOSE, b.CENTER)
    b.vertex (b.width /2 - b.width / 10 *2,b.height /2 - b.height /13)
    b.vertex (b.width/2 , b.height /2 + b.height /24 *3.6)
    b.vertex (b.width /2+ b.width /10 *2, b.height /2 - b.height /13)
    b.endShape();

  }
  
      
  


  //loop amount
  var loops = b.round (b.random(1,6));
  b.println ()

    //for loop for rectangle
    for (var i = 0 ; i < loops; i++) {

      

      //shapes
      


      //array for shapes
      
      

      //randomly generated size
      var size = b.random (70)

      //randomNumer for either rectangle or ellipse
      var n = b.round(b.random (0,1));
      b.println (n);



        if (n == 0) {

          randomNumberColor = b.round(b.random (0,1));
          if (randomNumberColor == 0 ) {
          b.stroke (colors1[randomColor])
        }   else (b.stroke (b.color (0,0,0))); {

        }

        //draw rectangle(s)
        b.rect (xPos, yPos, size, size);

        } else {



         b.ellipse(xPos,yPos,size,size)
        }

      //define rotation
      var rotation = b.radians(b.random(360));
      b.rotate(rotation);

      b.strokeWeight(3);
      
    

    }



   if (n == 0) {
        var sizeObj = b.round (b.random (0,100))

        //draw rectangle(s)
        b.strokeWeight(b.random (2,8));
        b.rect (xPos, yPos, sizeObj, sizeObj);

        } else {

        var sizeObj = b.round (b.random (0,100))

         //draw ellipse(s)? 

         b.strokeWeight(b.random (2,10));
         b.ellipse(xPos,yPos,sizeObj,sizeObj)
        
    }

    
  


    


}

b.go(); 