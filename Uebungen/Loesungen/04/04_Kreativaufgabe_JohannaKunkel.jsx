//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

var goethe = ["Ich sehe dich, wenn auf dem fernen Wege,", "Der Staub sich hebt;", "In tiefer Nacht, wenn auf dem schmalen Stege", "Der Wandrer bebt.", "Ich höre dich, wenn dort mit dumpfem Rauschen", "Die Welle steigt.", "Im stillen Haine geh' ich oft zu lauschen,", "Wenn alles schweigt.", "Ich bin bei dir; du seist auch noch so ferne,", "Du bist mir nah!", "Die Sonne sinkt, bald leuchten mir die Sterne.", "O, wärst du da!"];

for (var l = 0; l < 300; l++) {

b.strokeWeight(0.2);

b.line(b.width, 0, 0 + l*2, b.height);
b.line(b.width, b.height, 0 + l*2, 0);
}


for (var j = 0; j < 15; j++) {

      for (var i = 0; i < goethe.length; i++) {

        var x = b.width;
        var y = 50;

        var goetheX = 0;
        var goetheY = b.random(0, b.height);


        b.text(goethe[i] , goetheX, goetheY, x, y);
        
          if (goetheY < 20 && goetheY > 5) {
            b.fill(b.color(23, 134, 212));
          }

      }


}

}

b.go();
