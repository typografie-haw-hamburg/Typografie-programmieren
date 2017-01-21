// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

// BASICS
                      //b.size( 100, 100);
                      b.clear(b.doc());
                      b.units(b.MM);
                      // b.colorMode(b.CMYK);
                      var w = b.width; // Seitenbreite
                      var h = b.height; // Seitenhöhe
                      var w2 = b.width/2; // Seitenbreite/2
                      var h2 = b.height/2; // Seitenhöhe/2
                      var x = b.round(b.random(b.width)); // Zufalls X
                      var y = b.round(b.random(b.height)); // Zufalls Y


// You can change this to your liking!
          var myFont = 'Helvetica\tBold'; // Font Choice
          var myFontSize = 12; // Font Size Choice (pt)
          var myW = 184.6; // Textframe Width (mm)
          var myH = 271.6; // Textframe (mm)
          var myT = 12.7; // Top Margin (mm)
          var myL = 12.7; // Left Margin (mm)


// schrift fürs ganze dokument setzen
  /* b.textFont(myFont);
  b.textSize(myFontSize);*/

// anfangs seiten hinzufügen
  b.addPage();
  b.addPage();

// auf seite 3 anfangen
  b.page(3);

// index datei laden
  var myIndex = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/0__indexOf_Semesterprojekt.txt");

// index-textframe erstellen
  var myIndexTf = b.text(myIndex, myT, myL, myW, myH);

// neue seite anfangen für inhalts-box
  b.addPage();
  b.addPage();

// inhalts dateien laden
  var myKurs = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__1_a_TEXT_Beschreibung_VLV.txt");
  var myPlakat = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_a_TEXT_Konzept_Plakataufgabe.txt");
  var myKonzeptGrob = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_b_TEXT_Konzept_Grob_Semesterprojekt.txt");
  var myExpose = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_c_TEXT_Expose_Systembegriff.txt");
  var myKonzeptFein = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_d_TEXT_Konzept_Fein_Semesterprojekt.txt");
  var myQuotes = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__3_*_QUOTES_CageFullerTypespaces.txt");

// inhalts-textframe erstellen
  var myOldTf = b.text(myKurs + "\n" + myPlakat + "\n" + myKonzeptGrob + "\n" + myExpose + "\n" + myKonzeptFein + "\n" + myQuotes, myT, myL, myW, myH);

// variablen werden kreirt mit style-eigenschaften
    var myDefaultProps = {
      pointSize: myFontSize,
      fillColor: b.color(255, 0, 0),
      appliedFont: myFont,
  };

    var myH1Props = {
      fillColor: b.color(0, 255, 0),
  };

// "myDefaultProps" wird mit der funktion in die variable "myDefaultStyle" gespeichert und in ID als paragraphStyle gespeichert
  var myDefaultStyle = b.paragraphStyle("¶ Default Text", myDefaultProps);
  var myH1Style = b.paragraphStyle("# h1", myH1Props);

  b.applyParagraphStyle(myOldTf, "¶ Default Text");

// solange der content tf überfließt, füge seiten hinzu
  while (myOldTf.overflows == true) {
    b.addPage();
    var myNewTf = b.text("", myT, myL, myW, myH);
    b.linkTextFrames(myOldTf, myNewTf);
    myOldTf = myNewTf;
  }

  b.page(4);

// paragraphStyle "default" wird auf den neuen TF angewendet
  b.applyParagraphStyle(myNewTf, "¶ Default Text");
  b.applyParagraphStyle(myOldTf, "¶ Default Text");

// zieht die absätze aus "myTF" und speichert die in die var "myParas"
  var myParas = b.paragraphs(myNewTf) + b.paragraphs(myOldTf);


 // wenn du eine # h1 findest, appliziere den entsprechenden style
/*for(var i = 0; i < myParas.length; i++) {
  if (b.startsWith(myParas.contents, "#") == true) {
    b.println("Hat funktioniert");
    // b.typo(   myParas, "baselineShift", 20 );
    // b.applyParagraphStyle(myOldTf, "# h1");
    // b.applyParagraphStyle(myNewTf, "# h1");
  }
}*/
/*// sicherheitsbbruch
  counter++;
  if(counter == 20) {
    return;
  }*/


}
b.go();
