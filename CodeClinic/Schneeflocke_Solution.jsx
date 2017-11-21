// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


function draw() {
    b.clear(b.doc());
    b.units(b.MM);

    b.size(200, 200);
    b.noStroke();

    b.rect(0, 0, b.width, b.height);

    b.fill(255);

    // Anzahl der Punkte pro Kreis
    var pointCount = b.floor( b.random(5, 30) );
    var rotationStep = 360 / pointCount;

    // Abstand der Punkte vom Mittelpunkt
    var pointDist = b.random(30, 80);
    var pointSize = b.random(2, 8);

    for (var i = 0; i < pointCount; i++) {

        var line = b.line(b.width / 2 - pointDist, b.height / 2, b.width / 2 + pointDist, b.height / 2);
        var ellipse = b.ellipse(b.width / 2 + pointDist, b.height / 2, pointSize, pointSize)

        var group = b.group([line, ellipse]);

        group.absoluteRotationAngle = i * rotationStep;
    }

}

b.go();
