// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b. clear (b.doc () );
b. units (b. MM);
b. noFill();

//Kugeln
b.fill (255, 255, 255)
//markiert die weiße Farbe in RGB Wert

var x = 105
var y = 100

b. ellipse (x, y, 40, 40);
b. ellipse (x, y+50, 60, 60);
b. ellipse (x, y+120, 80, 80);
//Addierungen, weil wir von der Mitte der Kugeln ausgehen und von da die Entfernung bzw. Anzahl der Einheiten zum Rand der nächsten Kugel errechenn müssen

//Nase
b.fill (180, 90, 0)

b.beginShape (b.CLOSE);
b.vertex (x, 100);
b.vertex (130, x);
b.vertex (x, x+5);
b.endShape ();

//Knöpfe oben
b.fill (0)

b.ellipse (x, 135, 5, 5);
b.ellipse (x, 150, 5, 5);
b.ellipse (x, 165, 5, 5);

//Knböpfe unten

b.ellipse (x, 205, 5, 5);
b.ellipse (x, 220, 5, 5);
b.ellipse (x, 235, 5, 5);

//Augen
b.ellipse(98, 95, 3, 3);
b.ellipse(115, 95, 3, 3);

//Hut
b.fill(155, 10, 10)

b.rect (90, 85, 40, 2);
b.rect (90, 70, 30, 15);

}

b.go();
