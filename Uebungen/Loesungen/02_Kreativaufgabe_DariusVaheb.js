//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.noFill();
b.textSize(150);



var colorOrNo = confirm(" Colors? ");
var rectOrEllipse = confirm(" Circles? ");

alert("This may take a while...");

 
var newRandomColor = b.color( b.random(0,255), b.random(0,255), b.random(0,255) );




for(var i = 0; i < 100; i++) {

    var magenta = b.color(255, 34, 52);
    var blue = b.color(20, 33, 150);
    var black = b.color(28, 0, 0);
    var spectrumRGB = ( b.random(70, 255), b.random (0, 30), b.random(0, 50));


        if(colorOrNo == true) {
  
        b.stroke(magenta);
        

        } else {
        b.stroke(black);

        }

        b.ellipse(i + 55, b.width/ 2, 100, 100);
        b.ellipse(i + 55, b.width/ 2, 100, 100);
        b.ellipse(i + 55, b.width/ 2+ 50, 100, 100);
        b.ellipse(i + 55, b.width/ 2+ 100, 100, 100);
}

  

  if(colorOrNo == false) {
  
        b.fill(black);
        

        } else {
        b.fill(newRandomColor);

        }

  /////////////////////      

var text = b.text("BASIL", 200, 400, b.width, b.height - b.height/2);

        b.textFont("Trade Gothic LT Std", "Bold");
        b.textAlign(Justification.CENTER_ALIGN);
        b.text("BASIL", 0, b.height - b.height/6, b.width, b.height/ 6);
  

if(colorOrNo == false) {
  
        b.fill(black);
        

        } else {
        b.fill(b.color(255,255,255));

        }
 


 //b.rotate(1.5708);
b.text("BASIL", 0, 45, b.width, b.height/ 6);



for(var i = 0; i < 150; i++) {


if(rectOrEllipse == true) {
  
        b.noStroke();
        b.fill(newRandomColor);
        b.ellipse(b.random(0, b.width), b.random(0, 100), 8, 8);
        b.ellipse(b.random(0, b.width), b.random(0, b.height), 8, 8);
        

        } else {
                
                // RANDOM RECTANGLES ON THE PAGE

                // b.noStroke();
                // b.fill(newRandomColor);
                // b.rect(b.random(0, b.width), b.random(0, 100), 8, 8);
                // b.rect(b.random(0, b.width), b.random(0, b.height), 8, 8);

                // RANDOM LINES

                //b.line(0, b.random(0, b.width), b.width, b.random(0, b.width));
                //b.line(b.random(0, b.width),0 ,b.random(0, b.width), b.height );
                b.strokeWeight(2);
                b.line(0, i*2, b.width, i*2);
                //b.line(0, i*3, b.width, i*3);

        }

}


//END
}

b.go();