// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noStroke();

  for (var i = 0; i < 60; i++) {

    //Zeile 1
    var w1 = 0;
    var x1 = 35.546-i*0.25;
    var y1 = 841.92;
    var z1 = 0.5;
    var hidden = b.image("Komposition_Zeile1.jpg", w1, x1, y1, z1);

    //Grafik im Rahmen verschieben
    b.itemX(hidden, w1);
    b.itemY(hidden, x1 - 7.2 + i*0.25);

    //Zeile 2
    var w2 = 0;
    var x2 = 117.162-i*0.25;
    var y2 = 841.92;
    var z2 = 0.5;
    var hidden = b.image("Komposition_Zeile2.jpg", w2, x2, y2, z2);

    //Grafik im Rahmen verschieben
    b.itemX(hidden, w2);
    b.itemY(hidden, x2 - 8.3 + i*0.25);

    //Zeile 3
    var w3 = 0;
    var x3 = 200.311-i*0.25;
    var y3 = 841.92;
    var z3 = 0.5;
    var hidden = b.image("Komposition_Zeile3.jpg", w3, x3, y3, z3);

    //Grafik im Rahmen verschieben
    b.itemX(hidden, w3);
    b.itemY(hidden, x3 - 8.3 + i*0.25);

    //Zeile 4
    var w4 = 0;
    var x4 = 281.562-i*0.25;
    var y4 = 841.92;
    var z4 = 0.5;
    var hidden = b.image("Komposition_Zeile4.jpg", w4, x4, y4, z4);

    //Grafik im Rahmen verschieben
    b.itemX(hidden, w4);
    b.itemY(hidden, x4 - 8.3 + i*0.25);

    //Zeile 5
    var w5 = 0;
    var x5 = 361.531-i*0.25;
    var y5 = 841.92;
    var z5 = 0.5;
    var hidden = b.image("Komposition_Zeile5.jpg", w5, x5, y5, z5);

    //Grafik im Rahmen verschieben
    b.itemX(hidden, w5);
    b.itemY(hidden, x5 - 7.2 + i*0.25);

    //Zeile 6
    var w6 = 0;
    var x6 = 444.091-i*0.25;
    var y6 = 841.92;
    var z6 = 0.5;
    var hidden = b.image("Komposition_Zeile6.jpg", w6, x6, y6, z6);

    //Grafik im Rahmen verschieben
    b.itemX(hidden, w6);
    b.itemY(hidden, x6 - 8.3 + i*0.25);

    //Zeile 7
    var w7 = 0;
    var x7 = 525.350-i*0.25;
    var y7 = 841.92;
    var z7 = 0.5;
    var hidden = b.image("Komposition_Zeile7.jpg", w7, x7, y7, z7);

    //Grafik im Rahmen verschieben
    b.itemX(hidden, w7);
    b.itemY(hidden, x7 - 7.2 + i*0.25);

    b.addPage();

  }

}

b.go();
