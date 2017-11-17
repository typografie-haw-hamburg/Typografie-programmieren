// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";




function draw() {
b.clear(b.doc());
b.units(b.MM);

b.fill(0);
b.rect(0,0,b.width,b.height);



b.noFill();

//angle sagt in welchem Winkel Drehung beginnen soll.
var angle = 0;


var size0 = b.random(0.4,2);

var loop = 8;

for(var j=0; j<loop;j++){

//////////////////////////////////////////////////////
//Orientierungskreis, unsichtbar, wird sichtbar mit w
//////////////////////////////////////////////////////
var rKreis = b.random(20);
var xKreis = b.width/2;
var yKreis = b.height/2;
b.noStroke();
b.noFill();
b.ellipse(xKreis, yKreis, rKreis*2, rKreis*2);

//////////////////////////////////////////////////////
//VARIABLE
//////////////////////////////////////////////////////
  var dotAnzahl = b.random(3,20);
//////////////////////////////////////////////////////



          for(var i=0; i<dotAnzahl; i++){

            //Start kleine Kreise

                    //var sizeBlau = b.random(0.5,2);
                    var sizeDot = 1;
                    var rDot = (rKreis * size0);

                    // rsum bezweck, dass die dots sich um den mittelpunkt des Hauptkreises legen. sonst würden sie um x=0 und y=0 gehen.
                    var rsum = rKreis  + rDot;

            //var angle steht ganz oben
            var xDot = xKreis + (rsum * b.cos(angle));
            var yDot = yKreis + (rsum * b.sin(angle));


            b.fill(255,255,255);

            b.ellipse(xDot,yDot,sizeDot,sizeDot);

            angle += 1;



          }



}

}

b.go();
