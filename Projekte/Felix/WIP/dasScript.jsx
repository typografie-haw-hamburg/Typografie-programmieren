//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear (b.doc());
b.units (b.MM);
b.noStroke ();

var minStrokeWeight = 0.3; 
var maxStrokeWeight = 8;

var minOpacity = 2; 
var maxOpacity = 95; 

var minColorGrey = 50;
var maxColorGrey = 255;


//---------------------------------------------------------------------------------------------------------------------------------------------------------Rechtecke Frage
var questionRect = confirm ("Magst du Rechtecke?")
  if (questionRect == true) { 
    var questionColorfullRect = confirm ("Magst du es besonders Bunt?")
      if (questionColorfullRect == false ) { var questionColorRect = confirm ("Oder willst du dann vielleicht nur eine Farbe?") }
    var questionRectOutline = confirm ("Magst du Outlines?")
    var questionRectRotate = confirm ("Magst du Drehung?")
    var questionRectTrans = confirm ("Magst du Transparenz?")
    var rectNumber = prompt ("Wie viele Rechtecke willst du zeichnen?" ,"Gibt hier eine Zahl ein")
    var rectSize = prompt ("Wie groß sollen die Rechtecke maximal sein?" ,"Gib hier eine Zahl (Millimeter) ein")
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe 
    if (questionColorRect == true) { var color1 = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (color1); }
      // Sorgt dafür das es nur ein Grau gibt
      // else { var colorGreyNumberRect = b.random (minColorGrey, maxColorGrey); var colorGreyRect = b.color (colorGreyNumberRect, colorGreyNumberRect, colorGreyNumberRect );
      //        b.fill (colorGreyRect); 
      //        }
//----------------------------------------------------------------------------------------------------------------------------------------------Outline bunt Zahl
    if (questionRectOutline == true && questionColorfullRect == true) { var colorfullRandomNumberRect = b.random (0,2); }
//---------------------------------------------------------------------------------------------------------------------------------------------------- Outline eine Farbe
    if (questionRectOutline == true && questionColorfullRect == false) { b.stroke (b.random (255), b.random (255), b.random (255) ); }    
//---------------------------------------------------------------------------------------------------------------------------------------------------- For Schleife Start
         for (var i = 0; i < rectNumber; i ++) {
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe Grau
    if (questionColorRect == false) { var colorGreyNumberRect = b.random (minColorGrey, maxColorGrey); var colorGreyRect = b.color (colorGreyNumberRect, colorGreyNumberRect, colorGreyNumberRect );
             b.fill (colorGreyRect); 
             }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe bunt
         if (questionColorfullRect == true) { var colorfullColorRect = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (colorfullColorRect); }
//------------------------------------------------------------------------------------------------------------------------------------------------Outline Farbe, Bunt, Grau
         if (questionRectOutline == true) { b.strokeWeight (b.random (minStrokeWeight, maxStrokeWeight) ); }
         if (questionRectOutline == true && questionColorfullRect == true) {  
              if (colorfullRandomNumberRect > 1) { b.stroke (255, 255, 255); }
                  else { b.stroke (0, 0, 0); }
         }
         if (questionColorRect == false && questionRectOutline == true) { var outlineGreyNumberRect = b.random (255); 
         b.stroke (outlineGreyNumberRect, outlineGreyNumberRect, outlineGreyNumberRect);
         }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Rotation
         if (questionRectRotate == true) { b.rotate (b.random () ); }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Rechtecke 
         var rect = b.rect (b.random (0, b.width), b.random(0, b.height), b.random(1, rectSize), b.random(1, rectSize) );
//---------------------------------------------------------------------------------------------------------------------------------------------------------Transparenz
         if (questionRectTrans == true) { b.opacity (rect, b.random (minOpacity, maxOpacity) ); }
         }
   }







//---------------------------------------------------------------------------------------------------------------------------------------------------------Kreise Frage

b.noStroke ();
b.fill (b.color (0,0,0) );
var questionCirc = confirm ("Magst du Kreise?")
 if (questionCirc == true) { 
    var questionColorfullCirc = confirm ("Magst du es besonders Bunt?")
      if (questionColorfullCirc == false ) { var questionColorCirc = confirm ("Willst du dann vielleicht nur eine Farbe?") }
    var questionCircOutline = confirm ("Magst du Outlines?")
    var questionCircTrans = confirm ("Magst du Transparenz?")
    var circNumber = prompt ("Wie viele Kreise willst du zeichnen?" ,"Gib hier eine Zahl ein")
    var circSize = prompt ("Wie groß sollen die Kreise maximal sein?" ,"Gibt hier eine Zahl (Millimeter) ein")
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe 
    if (questionColorCirc == true) { var colorCirc = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (colorCirc); }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe Grau
      else { var colorGreyNumberCirc = b.random (minColorGrey, maxColorGrey); var colorGreyCirc = b.color (colorGreyNumberCirc, colorGreyNumberCirc, colorGreyNumberCirc );
             b.fill (colorGreyCirc); 
             }
//-----------------------------------------------------------------------------------------------------------------------------------------------Outline bunt Zahl
    if (questionCircOutline == true && questionColorfullCirc == true) { var colorfullRandomNumberCirc = b.random (0,2); }
//---------------------------------------------------------------------------------------------------------------------------------------------------- Outline eine Farbe
    if (questionCircOutline == true && questionColorfullCirc == false) { b.stroke (b.random (255), b.random (255), b.random (255) ); }    
//---------------------------------------------------------------------------------------------------------------------------------------------------- For Schleife Start
         for (var i = 0; i < circNumber; i ++) {
         var ellipseDiameter = b.random (1, circSize);
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe bunt
         if (questionColorfullCirc == true) { var colorfullColorCirc = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (colorfullColorCirc); }
//------------------------------------------------------------------------------------------------------------------------------------------------Outline Farbe, Bunt, Grau
         if (questionCircOutline == true) { b.strokeWeight (b.random (minStrokeWeight, maxStrokeWeight) ); }
         if (questionCircOutline == true && questionColorfullCirc == true) {  
              if (colorfullRandomNumberCirc > 1) { b.stroke (255, 255, 255); }
                  else { b.stroke (0, 0, 0); }
         }
         if (questionColorCirc == false && questionCircOutline == true) { var outlineGreyNumberCirc = b.random (255); 
         b.stroke (outlineGreyNumberCirc, outlineGreyNumberCirc, outlineGreyNumberCirc);
         }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Kreise
         var ellipse = b.ellipse (b.random (0, b.width), b.random(0, b.height), ellipseDiameter, ellipseDiameter );
//---------------------------------------------------------------------------------------------------------------------------------------------------------Transparenz
         if (questionCircTrans == true) { b.opacity (ellipse, b.random (minOpacity, maxOpacity) ); }
         }
  }








//---------------------------------------------------------------------------------------------------------------------------------------------------------Linien Frage

b.noStroke ();
b.fill (b.color (0,0,0) );
var questionLine = confirm ("Magst du Linien?")
 if (questionLine == true) { 
    var questionColorfullLine = confirm ("Magst du es besonders Bunt?")
      if (questionColorfullLine == false ) { var questionColorLine = confirm ("Willst du dann vielleicht nur eine Farbe?") }
    var questionLineTrans = confirm ("Magst du Transparenz?")
    var lineNumber = prompt ("Wie viele Linien willst du zeichnen?" ,"Gib hier eine Zahl ein")
    var lineSize = prompt ("Wie breit sollen die Linien maximal sein?" ,"Gibt hier eine Zahl (Millimeter) ein")
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe 
    if (questionColorLine == true) { b.stroke (b.random (0,255), b.random (0,255), b.random (0,255) ); }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe Grau
      // Sorgt dafür, das es nur eine Farbe gibt
      // else { var colorGreyNumberLine = b.random (minColorGrey, maxColorGrey); b.stroke (colorGreyNumberLine, colorGreyNumberLine, colorGreyNumberLine ); 
      //        }
    var randomLineNumber = b.random (0,2);
//---------------------------------------------------------------------------------------------------------------------------------------------------- For Schleife Start
         for (var i = 0; i < lineNumber; i ++) {
         if (questionColorLine == false) { var colorGreyNumberLine = b.random (minColorGrey, maxColorGrey); b.stroke (colorGreyNumberLine, colorGreyNumberLine, colorGreyNumberLine ); }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe bunt
         if (questionColorfullLine == true) { b.stroke (b.random (0,255), b.random (0,255), b.random (0,255) ); }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Linien
         b.strokeWeight (lineSize);
         if (randomLineNumber > 1) {var line = b.line (b.random (-50, b.width+50), b.random(-50, b.height+50), b.random (-50, b.width+50), b.random(-50, b.height+50) ); }
            else  {var line = b.line (-50, b.random(0, b.height), b.width +50 , b.random(0, b.height) ); }
//---------------------------------------------------------------------------------------------------------------------------------------------------------Transparenz
         if (questionLineTrans == true) { b.opacity (line, b.random (minOpacity, maxOpacity) ); }
         }
  }





}

b.go();
