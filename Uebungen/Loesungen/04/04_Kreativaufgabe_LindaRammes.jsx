//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear (b.doc());
b.color (10,0,10);
b.stroke (10,111,228);
  //Loop1: Reihe von Links nach Rechts
  for (var i = 0; i < 54; i++ ){
    //Seiteneinteilungen
    var HalbeBreite = b.width/2;
    var HalbeHoehe = b.Height/2;

    //Farben
    var color2 = b.color(255,0,0);
    var color3 = b.color(0,255,0);
    var color4 = b.color(0,0,255);
    var color5 = b.color(0,255,255);

    var myColors = [ color2, color3, color4, color5 ];
    //Zufallsfarbe
    var randomColor = b.round(b.random(0, myColors.length-1));
    


     if 
       (x < HalbeBreite ) {
        b.fill(myColors[randomColor]);
        }
    else {
        b.fill(color4);
      }
  //Loop2: Reihe von Oben nach Unten
    for (var j = 0; j<16;j++){

    //X und Y Koordinaten der Ellipsen
    var x= 40+ i*10;
    var y= 40+ j*50;




    b.ellipse(x,y, 20,20);
    //b.ellipse(30(Beginn auf der X-Achse)+ i(54-so oft wird die Ellipse wiederholt)*10(So weit wird die nächste Ellipse immer versetzt),30(Beginn auf der Y-Achse)+j(10-so oft wird in y-Richtung der vorherige Loop wiederholt)*20(So weit wird die nächste Reihe nach Unten versetzt)
  
    }
  }

}


b.go();
