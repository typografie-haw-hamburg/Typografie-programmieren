//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);


var heightBox = 11.48;
var boxMax = b.width/7.5;
var all = heightBox;
//heightBox = min. breite

  for (k = 0; k < 9; k++){    // nach unten

      for (j = 0; j < 6; j++){    // zur Seite

          for(i = 0; i < heightBox*8; i = i + heightBox) {    // sieben Balken
          var maxRange = 3.5; 

          var newEndX = endX;      //speichert endX aus vorheriger Schleife
          var newPosX = posX;     //speichert posX aus vorheriger Schleife

          var startX = 3*b.width/30;    //Start X 1. Balken
          var startY = b.height/20;     // Start Y 1. Balken
          var posX = b.random( startX, boxMax/2 - all/2 + startX );    // X-Werte Balken
          var endX = b.random( startX + boxMax/2 + all/2, startX + boxMax );
          var width = endX - posX;    // Breite Balken
          
          var diff = newEndX - endX;    //Differenz zwischen rechten X-Werten zweier Schleifen
          var absoluteDiff = Math.abs(diff);    //Betrag der Differenz

          var diffLeft = newPosX - posX;
          var absoluteDiffLeft = Math.abs(diffLeft);
          

          if(i > 0) {     //ab zweiter Schleife

            if (absoluteDiff >= maxRange){
              var endX = endX;
            } else { 
                  while (absoluteDiff < maxRange){
                  var endXTwo = b.random( startX + boxMax/2 + all/2, startX + boxMax );
                  // neuen Balkenbreite auswürfeln
                   var diff = newEndX - endXTwo;
                  // differenz messen
                   var absoluteDiff = Math.abs(diff);
                  }
              var endX = endXTwo; 
            }


            if (absoluteDiffLeft >= maxRange){
              var posX = posX;
            } else {
               while (absoluteDiffLeft < maxRange) {
                    var posXTwo = b.random( startX, boxMax/2 - all/2 + startX );
                    var diffLeft = newPosX - posXTwo;
                    var absoluteDiffLeft = Math.abs(diffLeft);
                }
              var posX = posXTwo;
              }
            


          var widthTwo = endX - posX; // breite ab 2. block errechnen 

          var block = b.rect(posX + j * 1.53*startX, startY + i + k * 9.2*heightBox, widthTwo, heightBox);
            // neuen Balken zeichnen

           } 

      

        } // Klammer for i
        
      } // Klammer for j
    
  } // Klammer for k


} // Klammer function

b.go();


















 // while ( absoluteDiff < 5 ) {
 //              var endXTwo = b.random( startX + boxMax/2 + all/2, startX + boxMax );
 //              // neuen Balkenbreite auswürfeln
 //               var diff = newEndX - endXTwo;
 //              // differenz messen
 //               var absoluteDiff = Math.abs(diff);
 //            }
 //          b.println(absoluteDiff);


