//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear(b.doc()); // clear the current document
  
  //General 
  b.units(b.MM);
  var myWidth = 176;
  var myHeight = 250; 
  b.colorMode(b.RGB);
  var doc = b.doc(); // the current document
  doc.documentPreferences.properties = {
    facingPages: false,
    pageWidth: myWidth,
    pageHeight: myHeight
  }; 
  //Page
   b.bleeds(0);
   b.margins(0);
  //Modes
   b.rectMode(b.CORNER);
   b.ellipseMode(b.CENTER);
  //Text
   b.textFont("Suisse Int'l", "Book"); 
   b.textTracking(-5);
   b.textSize(11);
   b.textLeading(22.5);
   b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);

  // gesamten Text der .csv-Datei auslesen
  var mortString = b.loadString("mortality-2.csv");

  // ausgelesenen Text in einen Daten-Array umwandeln
  b.CSV.delimiter(";");
  var data = b.CSV.decode(mortString);

  // zum Testen wird die Eigenschaft Luftfeuchtigkeit des ersten Datensets in die Konsole geschrieben
  b.println(data[0].Todesursache);

  // Finde den höchsten Wert
  var sortArray = [];
  for(var i = 0; i < data.length; i++) {
    sortArray[i] = data[i].Anzahl;
    b.println("#" + sortArray[i]);
  }
  sortArray.sort(function(a, b){return b-a});
  b.println("##" + sortArray[0]);

  var iSizeStart = 0;
  var iSizeStop = sortArray[0];
  var oSizeStart = 8;
  var oSizeStop = 30;

  var iYStart = 0;
  var iYStop = data.length;
  var oYStart = b.height / 5;
  var oYStop = b.height - b.height / 5;
  
  b.text( "Todesursachen, Deutschland, 2014, Alter 25 – 30 ", 0, 0, b.width, b.height / 6); // Titel: 2014, Deutschland, 25–30-Jährige, Todesursache

  for(var i = 0; i < data.length; i++) {
    var myValue = data[i].Anzahl;
    var myPointSize = b.map( myValue, iSizeStart, iSizeStop, oSizeStart, oSizeStop );
    var y = b.map( i, iYStart, iYStop, oYStart, oYStop );
    var newText = b.text(data[i].Todesursache, 0, y, b.width, myPointSize);    
    b.typo(newText, 'pointSize', myPointSize );

  }
   

};

b.go();
