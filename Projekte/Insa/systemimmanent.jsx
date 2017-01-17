// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

// BASICS
  //b.size( 100, 100);
  b.clear(b.doc());
  b.units(b.MM);
  b.colorMode(b.CMYK);
  b.canvasMode(b.FACING_PAGES);
  var w = b.width; // Seitenbreite
  var h = b.height; // Seitenhöhe
  var w2 = b.width/2; // Seitenbreite/2
  var h2 = b.height/2; // Seitenhöhe/2
  var x = b.round(b.random(b.width)); // Zufalls X
  var y = b.round(b.random(b.height)); // Zufalls Y
  var myW = 184.6; // Textframe Width
  var myH = 271.6; // Textframe
  var myT = 12.7; // Top Margin
  var myL = 12.7; // Left Margin

// anfangs seiten hinzufügen
  b.addPage();
  b.addPage();

// index datei laden
  var myIndex = b.loadString("0__indexOf_Semesterprojekt.txt");

// index-textframe erstellen
  var myIndexTf = b.text(myIndex, myT, myL, myW, myH);

// neue seite anfangen für inhalts-box
  b.addPage();
  b.addPage();

// inhalts dateien laden
  var myKurs = b.loadString("1__1_a_TEXT_Beschreibung_VLV.txt");
  var myPlakat = b.loadString("1__2_a_TEXT_Konzept_Plakataufgabe.txt");
  var myKonzeptGrob = b.loadString("1__2_b_TEXT_Konzept_Grob_Semesterprojekt.txt");

// inhalts-textframe erstellen
  var myContentTf = b.text(myKurs + "\n" + myPlakat + "\n" + myKonzeptGrob, myT, myL, myW, myH);

// solange der content tf überfließt, mache seiten
  while (myContentTf.overflows == true) {
    b.addPage();
  }

// sicherheitsbbruch
  counter++;
  if(counter == 20) {
    break;
  }

/*  var myTfHeight = b.itemHeight(myTf);

  while ( tf.overflows == true) {
  b.itemHeight(myTf, myTfHeight++); */


}
b.go();
