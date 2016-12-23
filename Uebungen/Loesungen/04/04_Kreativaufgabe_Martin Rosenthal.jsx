//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.units ( b.MM);

b.clear (document);



//Grundfarbe
  var color = b.color(b.random(20,50), 0, b.random(80,100));
  b.fill(color);
  b.rect(0, 0, b.width, b.height);



// Textrahmen
for ( var k = 0; k < 15; k ++) {

  var textPosition = b.random (70, 120)
  
  // Textstyle
  b.fill(255, 255, 255);
  b.textFont("DINPro");
  b.textSize(75);
  b.textAlign(Justification.CENTER_JUSTIFIED)
  b.textTracking(150 - k *5);
  
  var textFrame = b.text("P H Y S I C S", 0, textPosition, b.width, b.height);
  var words = b.words(textFrame); 
  
  b.opacity(textFrame, 20 + k*2);

  // Grundlinienversatz
  for ( var j = 0; j < 7; j ++){

    b.typo(words[j], "baselineShift", b.random(-100, 100));
 
    b.noFill();
  
  }
}

// Startpunkte der Linien über der Seite
  var x0 = b. random (-b.width, b.width*2)
  var y0 = b.random(-150, -20);
// Endpunkte der Linien unter der Seite  
  var x3 = b.random (-50, b.width+50);
  var y3 = b.random (b.height+50, b.height + 100);
// kreisgröße weißer Kreis
  
  var radius1 = b.random (25, 45);
 
for ( var i = 0; i < 15; i ++) {

  
  
  // mögliche Pfadpunkte

  var strokeTint = b.random ( 50, 100);
  var x1 = b.random (0, b.width);
  var y1 = b.random (0, b.height/3*2);
  var x2 = b.random (0, b.width);
  var y2 = b.random (y1, b.height/6*4);



  

  b.stroke(255, 20, 147);
  b.strokeTint( strokeTint);
  b.line(x0, y0, x1, y1);
  b.line(x1, y1, x2, y2);
  b.line(x2, y2, x3 + b.random (-10, 10), y3);

  // Geradengleichung, um Kreise auf Pfadpunkt zu legen
  var m = (y2 - y1)/(x2-x1);
  var f = y1 - m * x1;

    var mitteX = b.random(x1, x2);
    var mitteY = m * mitteX + f;

    // Geradengleichung 2 für weißen Kreis
  var m1 = (y3 - y2)/(x3-x2);
  var f1 = y2 - m1 * x2;

    var mitteX1 = b.random(x2, x3);
    var mitteY1 = 0

    
    mitteY1 = m1 * mitteX1 + f1;
    
  
  // Kreisgroessen 

  var radius = b.random (10, 40);


  //Kreise

  b.ellipse (mitteX, mitteY, radius, radius);



}
mitteY1 < b.height && mitteY1 > b.height / 2
// weißer Kreis
b.fill(255, 255, 255)
b.noStroke();
b.opacity(b.ellipse (mitteX1, mitteY1, radius1, radius1), 50)

//Timestamp
b.textFont("DINPro");
b.textSize(15)
b.textAlign ( Justification.LEFT_ALIGN);
b.textKerning(80);
b.text(b.year() + ":" + b.month() + ":" + b.day() + "; " + b.hour() + ":" + b.minute() + ":" + b.second() + ":" + b.millisecond() , mitteX1 + radius/5, mitteY1 - 2, 100, 20); 

// lesbarer Schriftzug
b.fill(255, 255, 255);
  b.textFont("DINPro");
  b.textSize(75);
  b.textAlign(Justification.CENTER_JUSTIFIED)
  b.textTracking(100);
  b.text("P H Y S I C S", 0, 100, b.width, b.height);


}
b.go();
