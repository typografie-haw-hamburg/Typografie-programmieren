// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc())

//-------------------------------------------
// ABSCHNITT 1
//-------------------------------------------

// sehr grosse Kreise - unten
// eigentlich: ( var i = 0; i < 100; i++) {
noStroke();
for ( var i = 0; i < 100; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
var h = random(-10,width+10);
var x = random(height-60,height-20);
var kreise = ellipse(h,x,20,20);
var h = random(20,60);
opacity(kreise,h);
}


noStroke();
for ( var i = 0; i < 120; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
var h = random(0+2.5,width-2.5);
var x = random(height/2+60,height-20);
var kreise = ellipse(h,x,2,2);
var r = random(50,70);
opacity(kreise,r);
}

//-------------------------------------------
//ABSCHNITT 2
//-------------------------------------------

// KREIS REIHE - MITTIG
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//Kreisgröße
var r=2;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=8;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);

// KREIS REIHE - UNTERER BEREICH
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//Kreisgröße
var r=1;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=6;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
ellipse(x-14*q,y+48/2,r,r);
ellipse(x-15*q,y+48/2,r,r);
ellipse(x-16*q,y+48/2,r,r);
ellipse(x-17*q,y+48/2,r,r);
ellipse(x-18*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);
ellipse(x+14*q,y+48/2,r,r);
ellipse(x+15*q,y+48/2,r,r);
ellipse(x+16*q,y+48/2,r,r);
ellipse(x+17*q,y+48/2,r,r);
ellipse(x+18*q,y+48/2,r,r);

// KREIS REIHE - UNTERER BEREICH
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//Kreisgröße
var r=5;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=7;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
ellipse(x-14*q,y+48/2,r,r);
ellipse(x-15*q,y+48/2,r,r);
ellipse(x-16*q,y+48/2,r,r);
ellipse(x-17*q,y+48/2,r,r);
ellipse(x-18*q,y+48/2,r,r);
ellipse(x-19*q,y+48/2,r,r);
ellipse(x-20*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);
ellipse(x+14*q,y+48/2,r,r);
ellipse(x+15*q,y+48/2,r,r);
ellipse(x+16*q,y+48/2,r,r);
ellipse(x+17*q,y+48/2,r,r);
ellipse(x+18*q,y+48/2,r,r);
ellipse(x+19*q,y+48/2,r,r);
ellipse(x+20*q,y+48/2,r,r);


// KREIS REIHE - UNTERER BEREICH
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//Kreisgröße
var r=2;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=3;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
ellipse(x-14*q,y+48/2,r,r);
ellipse(x-15*q,y+48/2,r,r);
ellipse(x-16*q,y+48/2,r,r);
ellipse(x-17*q,y+48/2,r,r);
ellipse(x-18*q,y+48/2,r,r);
ellipse(x-19*q,y+48/2,r,r);
ellipse(x-20*q,y+48/2,r,r);
ellipse(x-21*q,y+48/2,r,r);
ellipse(x-22*q,y+48/2,r,r);
ellipse(x-23*q,y+48/2,r,r);
ellipse(x-24*q,y+48/2,r,r);
ellipse(x-25*q,y+48/2,r,r);
ellipse(x-26*q,y+48/2,r,r);
ellipse(x-27*q,y+48/2,r,r);
ellipse(x-28*q,y+48/2,r,r);
ellipse(x-29*q,y+48/2,r,r);
ellipse(x-30*q,y+48/2,r,r);
ellipse(x-31*q,y+48/2,r,r);
ellipse(x-32*q,y+48/2,r,r);
ellipse(x-33*q,y+48/2,r,r);
ellipse(x-34*q,y+48/2,r,r);
ellipse(x-35*q,y+48/2,r,r);
ellipse(x-36*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);
ellipse(x+14*q,y+48/2,r,r);
ellipse(x+15*q,y+48/2,r,r);
ellipse(x+16*q,y+48/2,r,r);
ellipse(x+17*q,y+48/2,r,r);
ellipse(x+18*q,y+48/2,r,r);
ellipse(x+19*q,y+48/2,r,r);
ellipse(x+20*q,y+48/2,r,r);
ellipse(x+21*q,y+48/2,r,r);
ellipse(x+22*q,y+48/2,r,r);
ellipse(x+23*q,y+48/2,r,r);
ellipse(x+24*q,y+48/2,r,r);
ellipse(x+25*q,y+48/2,r,r);
ellipse(x+26*q,y+48/2,r,r);
ellipse(x+27*q,y+48/2,r,r);
ellipse(x+28*q,y+48/2,r,r);
ellipse(x+29*q,y+48/2,r,r);
ellipse(x+30*q,y+48/2,r,r);
ellipse(x+31*q,y+48/2,r,r);
ellipse(x+32*q,y+48/2,r,r);
ellipse(x+33*q,y+48/2,r,r);
ellipse(x+34*q,y+48/2,r,r);
ellipse(x+35*q,y+48/2,r,r);
ellipse(x+36*q,y+48/2,r,r);

//-------------------------------------------
//ABSCHNITT 3
//-------------------------------------------

// KREIS REIHE - UNTERER BEREICH
var r=random(200);
var g=random(200);
var b=random(200);
fill(r,g,b);
//Kreisgröße
var r=2;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=8;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);

// KREIS REIHE - UNTERER BEREICH
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//Kreisgröße
var r=2;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=6;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
ellipse(x-14*q,y+48/2,r,r);
ellipse(x-15*q,y+48/2,r,r);
ellipse(x-16*q,y+48/2,r,r);
ellipse(x-17*q,y+48/2,r,r);
ellipse(x-18*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);
ellipse(x+14*q,y+48/2,r,r);
ellipse(x+15*q,y+48/2,r,r);
ellipse(x+16*q,y+48/2,r,r);
ellipse(x+17*q,y+48/2,r,r);
ellipse(x+18*q,y+48/2,r,r);

// KREIS REIHE - UNTERER BEREICH
var r=random(100);
var g=random(100);
var b=random(100);
fill(r,g,b);
//Kreisgröße
var r=5;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=6;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
ellipse(x-14*q,y+48/2,r,r);
ellipse(x-15*q,y+48/2,r,r);
ellipse(x-16*q,y+48/2,r,r);
ellipse(x-17*q,y+48/2,r,r);
ellipse(x-18*q,y+48/2,r,r);
ellipse(x-19*q,y+48/2,r,r);
ellipse(x-20*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);
ellipse(x+14*q,y+48/2,r,r);
ellipse(x+15*q,y+48/2,r,r);
ellipse(x+16*q,y+48/2,r,r);
ellipse(x+17*q,y+48/2,r,r);
ellipse(x+18*q,y+48/2,r,r);
ellipse(x+19*q,y+48/2,r,r);
ellipse(x+20*q,y+48/2,r,r);


// KREIS REIHE - UNTERER BEREICH
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//Kreisgröße
var r=2;
// x-höhe,y-höhe
var x=width/2;
var y=random(height/2+50,height/2+100);
//Abstandsschritte
var q=3;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
ellipse(x-14*q,y+48/2,r,r);
ellipse(x-15*q,y+48/2,r,r);
ellipse(x-16*q,y+48/2,r,r);
ellipse(x-17*q,y+48/2,r,r);
ellipse(x-18*q,y+48/2,r,r);
ellipse(x-19*q,y+48/2,r,r);
ellipse(x-20*q,y+48/2,r,r);
ellipse(x-21*q,y+48/2,r,r);
ellipse(x-22*q,y+48/2,r,r);
ellipse(x-23*q,y+48/2,r,r);
ellipse(x-24*q,y+48/2,r,r);
ellipse(x-25*q,y+48/2,r,r);
ellipse(x-26*q,y+48/2,r,r);
ellipse(x-27*q,y+48/2,r,r);
ellipse(x-28*q,y+48/2,r,r);
ellipse(x-29*q,y+48/2,r,r);
ellipse(x-30*q,y+48/2,r,r);
ellipse(x-31*q,y+48/2,r,r);
ellipse(x-32*q,y+48/2,r,r);
ellipse(x-33*q,y+48/2,r,r);
ellipse(x-34*q,y+48/2,r,r);
ellipse(x-35*q,y+48/2,r,r);
ellipse(x-36*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);
ellipse(x+14*q,y+48/2,r,r);
ellipse(x+15*q,y+48/2,r,r);
ellipse(x+16*q,y+48/2,r,r);
ellipse(x+17*q,y+48/2,r,r);
ellipse(x+18*q,y+48/2,r,r);
ellipse(x+19*q,y+48/2,r,r);
ellipse(x+20*q,y+48/2,r,r);
ellipse(x+21*q,y+48/2,r,r);
ellipse(x+22*q,y+48/2,r,r);
ellipse(x+23*q,y+48/2,r,r);
ellipse(x+24*q,y+48/2,r,r);
ellipse(x+25*q,y+48/2,r,r);
ellipse(x+26*q,y+48/2,r,r);
ellipse(x+27*q,y+48/2,r,r);
ellipse(x+28*q,y+48/2,r,r);
ellipse(x+29*q,y+48/2,r,r);
ellipse(x+30*q,y+48/2,r,r);
ellipse(x+31*q,y+48/2,r,r);
ellipse(x+32*q,y+48/2,r,r);
ellipse(x+33*q,y+48/2,r,r);
ellipse(x+34*q,y+48/2,r,r);
ellipse(x+35*q,y+48/2,r,r);
ellipse(x+36*q,y+48/2,r,r);


//-------------------------------------------
// ABSCHNITT 4
//-------------------------------------------


// KREIS REIHE - OBERER BEREICH
//var r=random(200);
//var g=random(200);
//var b=random(200);
//fill(r,g,b);
//Kreisgröße
//var r=2;
// x-höhe,y-höhe
//var x=width/2;
//var y=random(10,40);
//Abstandsschritte
//var q=8;
//Punkte nach links
//ellipse(x-q,y+48/2,r,r);
//ellipse(x-2*q,y+48/2,r,r);
//ellipse(x-3*q,y+48/2,r,r);
//ellipse(x-4*q,y+48/2,r,r);
//ellipse(x-5*q,y+48/2,r,r);
//ellipse(x-6*q,y+48/2,r,r);
//ellipse(x-7*q,y+48/2,r,r);
//ellipse(x-8*q,y+48/2,r,r);
//ellipse(x-9*q,y+48/2,r,r);
//ellipse(x-10*q,y+48/2,r,r);
//ellipse(x-11*q,y+48/2,r,r);
//ellipse(x-12*q,y+48/2,r,r);
//ellipse(x-13*q,y+48/2,r,r);
//Punkt in der Mitte
//ellipse(x,y+48/2,r,r);
//Punkte nach rechts
//ellipse(x+q,y+48/2,r,r);
//ellipse(x+2*q,y+48/2,r,r);
//ellipse(x+3*q,y+48/2,r,r);
//ellipse(x+4*q,y+48/2,r,r);
//ellipse(x+5*q,y+48/2,r,r);
//ellipse(x+6*q,y+48/2,r,r);
//ellipse(x+7*q,y+48/2,r,r);
//ellipse(x+8*q,y+48/2,r,r);
//ellipse(x+9*q,y+48/2,r,r);
//ellipse(x+10*q,y+48/2,r,r);
//ellipse(x+11*q,y+48/2,r,r);
//ellipse(x+12*q,y+48/2,r,r);
//ellipse(x+13*q,y+48/2,r,r);

// KREIS REIHE - OBEN
//var r=random(255);
//var g=random(255);
//var b=random(255);
//fill(r,g,b);
//Kreisgröße
//var r=2;
// x-höhe,y-höhe
//var x=width/2;
//var y=random(10,40);
//Abstandsschritte
//var q=6;
//Punkte nach links
//ellipse(x-q,y+48/2,r,r);
//ellipse(x-2*q,y+48/2,r,r);
//ellipse(x-3*q,y+48/2,r,r);
//ellipse(x-4*q,y+48/2,r,r);
//ellipse(x-5*q,y+48/2,r,r);
//ellipse(x-6*q,y+48/2,r,r);
//ellipse(x-7*q,y+48/2,r,r);
//ellipse(x-8*q,y+48/2,r,r);
//ellipse(x-9*q,y+48/2,r,r);
//ellipse(x-10*q,y+48/2,r,r);
//ellipse(x-11*q,y+48/2,r,r);
//ellipse(x-12*q,y+48/2,r,r);
//ellipse(x-13*q,y+48/2,r,r);
//ellipse(x-14*q,y+48/2,r,r);
//ellipse(x-15*q,y+48/2,r,r);
//ellipse(x-16*q,y+48/2,r,r);
//ellipse(x-17*q,y+48/2,r,r);
//ellipse(x-18*q,y+48/2,r,r);
//Punkt in der Mitte
//ellipse(x,y+48/2,r,r);
//Punkte nach rechts
//ellipse(x+q,y+48/2,r,r);
//ellipse(x+2*q,y+48/2,r,r);
//ellipse(x+3*q,y+48/2,r,r);
//ellipse(x+4*q,y+48/2,r,r);
//ellipse(x+5*q,y+48/2,r,r);
//ellipse(x+6*q,y+48/2,r,r);
//ellipse(x+7*q,y+48/2,r,r);
//ellipse(x+8*q,y+48/2,r,r);
//ellipse(x+9*q,y+48/2,r,r);
//ellipse(x+10*q,y+48/2,r,r);
//ellipse(x+11*q,y+48/2,r,r);
//ellipse(x+12*q,y+48/2,r,r);
//ellipse(x+13*q,y+48/2,r,r);
//ellipse(x+14*q,y+48/2,r,r);
//ellipse(x+15*q,y+48/2,r,r);
//ellipse(x+16*q,y+48/2,r,r);
//ellipse(x+17*q,y+48/2,r,r);
//ellipse(x+18*q,y+48/2,r,r);

// KREIS REIHE 3
//var r=random(100);
//var g=random(100);
//var b=random(100);
//fill(r,g,b);
//Kreisgröße
//var r=5;
// x-höhe,y-höhe
//var x=width/2;
//var y=random(10,40);
//Abstandsschritte
//var q=6;
//Punkte nach links
//ellipse(x-q,y+48/2,r,r);
//ellipse(x-2*q,y+48/2,r,r);
//ellipse(x-3*q,y+48/2,r,r);
//ellipse(x-4*q,y+48/2,r,r);
//ellipse(x-5*q,y+48/2,r,r);
//ellipse(x-6*q,y+48/2,r,r);
//ellipse(x-7*q,y+48/2,r,r);
//ellipse(x-8*q,y+48/2,r,r);
//ellipse(x-9*q,y+48/2,r,r);
//ellipse(x-10*q,y+48/2,r,r);
//ellipse(x-11*q,y+48/2,r,r);
//ellipse(x-12*q,y+48/2,r,r);
//ellipse(x-13*q,y+48/2,r,r);
//ellipse(x-14*q,y+48/2,r,r);
//ellipse(x-15*q,y+48/2,r,r);
//ellipse(x-16*q,y+48/2,r,r);
//ellipse(x-17*q,y+48/2,r,r);
//ellipse(x-18*q,y+48/2,r,r);
//ellipse(x-19*q,y+48/2,r,r);
//ellipse(x-20*q,y+48/2,r,r);
//Punkt in der Mitte
//ellipse(x,y+48/2,r,r);
//Punkte nach rechts
//ellipse(x+q,y+48/2,r,r);
//ellipse(x+2*q,y+48/2,r,r);
//ellipse(x+3*q,y+48/2,r,r);
//ellipse(x+4*q,y+48/2,r,r);
//ellipse(x+5*q,y+48/2,r,r);
//ellipse(x+6*q,y+48/2,r,r);
//ellipse(x+7*q,y+48/2,r,r);
//ellipse(x+8*q,y+48/2,r,r);
//ellipse(x+9*q,y+48/2,r,r);
//ellipse(x+10*q,y+48/2,r,r);
//ellipse(x+11*q,y+48/2,r,r);
//ellipse(x+12*q,y+48/2,r,r);
//ellipse(x+13*q,y+48/2,r,r);
//ellipse(x+14*q,y+48/2,r,r);
//ellipse(x+15*q,y+48/2,r,r);
//ellipse(x+16*q,y+48/2,r,r);
//ellipse(x+17*q,y+48/2,r,r);
//ellipse(x+18*q,y+48/2,r,r);
//ellipse(x+19*q,y+48/2,r,r);
//ellipse(x+20*q,y+48/2,r,r);


// KLEINE KREIS REIHE - MITTIG
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//Kreisgröße
var r=2;
// x-höhe,y-höhe
var x=width/2;
var y=random(80,110);
//Abstandsschritte
var q=3;
//Punkte nach links
ellipse(x-q,y+48/2,r,r);
ellipse(x-2*q,y+48/2,r,r);
ellipse(x-3*q,y+48/2,r,r);
ellipse(x-4*q,y+48/2,r,r);
ellipse(x-5*q,y+48/2,r,r);
ellipse(x-6*q,y+48/2,r,r);
ellipse(x-7*q,y+48/2,r,r);
ellipse(x-8*q,y+48/2,r,r);
ellipse(x-9*q,y+48/2,r,r);
ellipse(x-10*q,y+48/2,r,r);
ellipse(x-11*q,y+48/2,r,r);
ellipse(x-12*q,y+48/2,r,r);
ellipse(x-13*q,y+48/2,r,r);
ellipse(x-14*q,y+48/2,r,r);
ellipse(x-15*q,y+48/2,r,r);
ellipse(x-16*q,y+48/2,r,r);
ellipse(x-17*q,y+48/2,r,r);
ellipse(x-18*q,y+48/2,r,r);
ellipse(x-19*q,y+48/2,r,r);
ellipse(x-20*q,y+48/2,r,r);
ellipse(x-21*q,y+48/2,r,r);
ellipse(x-22*q,y+48/2,r,r);
ellipse(x-23*q,y+48/2,r,r);
ellipse(x-24*q,y+48/2,r,r);
ellipse(x-25*q,y+48/2,r,r);
ellipse(x-26*q,y+48/2,r,r);
ellipse(x-27*q,y+48/2,r,r);
ellipse(x-28*q,y+48/2,r,r);
ellipse(x-29*q,y+48/2,r,r);
ellipse(x-30*q,y+48/2,r,r);
ellipse(x-31*q,y+48/2,r,r);
ellipse(x-32*q,y+48/2,r,r);
ellipse(x-33*q,y+48/2,r,r);
ellipse(x-34*q,y+48/2,r,r);
ellipse(x-35*q,y+48/2,r,r);
ellipse(x-36*q,y+48/2,r,r);
//Punkt in der Mitte
ellipse(x,y+48/2,r,r);
//Punkte nach rechts
ellipse(x+q,y+48/2,r,r);
ellipse(x+2*q,y+48/2,r,r);
ellipse(x+3*q,y+48/2,r,r);
ellipse(x+4*q,y+48/2,r,r);
ellipse(x+5*q,y+48/2,r,r);
ellipse(x+6*q,y+48/2,r,r);
ellipse(x+7*q,y+48/2,r,r);
ellipse(x+8*q,y+48/2,r,r);
ellipse(x+9*q,y+48/2,r,r);
ellipse(x+10*q,y+48/2,r,r);
ellipse(x+11*q,y+48/2,r,r);
ellipse(x+12*q,y+48/2,r,r);
ellipse(x+13*q,y+48/2,r,r);
ellipse(x+14*q,y+48/2,r,r);
ellipse(x+15*q,y+48/2,r,r);
ellipse(x+16*q,y+48/2,r,r);
ellipse(x+17*q,y+48/2,r,r);
ellipse(x+18*q,y+48/2,r,r);
ellipse(x+19*q,y+48/2,r,r);
ellipse(x+20*q,y+48/2,r,r);
ellipse(x+21*q,y+48/2,r,r);
ellipse(x+22*q,y+48/2,r,r);
ellipse(x+23*q,y+48/2,r,r);
ellipse(x+24*q,y+48/2,r,r);
ellipse(x+25*q,y+48/2,r,r);
ellipse(x+26*q,y+48/2,r,r);
ellipse(x+27*q,y+48/2,r,r);
ellipse(x+28*q,y+48/2,r,r);
ellipse(x+29*q,y+48/2,r,r);
ellipse(x+30*q,y+48/2,r,r);
ellipse(x+31*q,y+48/2,r,r);
ellipse(x+32*q,y+48/2,r,r);
ellipse(x+33*q,y+48/2,r,r);
ellipse(x+34*q,y+48/2,r,r);
ellipse(x+35*q,y+48/2,r,r);
ellipse(x+36*q,y+48/2,r,r);


//-------------------------------------------
// ABSCHNITT 5
//-------------------------------------------


//Linien
stroke(0);
fill(255);

var y1 = random(8,20);
var y2 = random(100,150);
for ( var i = 0; i < 100; i++) {
strokeWeight(0.3);
var x = random(4,width-4);
var striche = line(x,y1,x,y2);
opacity(striche,80);
}



//-------------------------------------------
// ABSCHNITT 6
//-------------------------------------------
//Breite Rechteck
noStroke();
var n = random(20,50);
//Position Rechteck
var x = random(20,width-(20+n));
var y = random(20,height-(20+n));
strokeWeight(0.2);
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
rect(x,y,n,n);
}

