// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// 1. Eine Eigenschaft allen Wörtern zufällig zuordnen
// 2. Alle Wörter, die mit a beginnen, umstylen
// 3. Alle Wörter, mit i durch "Hallo" ersetzen
// 4. Alle Wörter, die länger als 5 Buchstaben sind, werden unterstrichen

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.size(100, 100);

  var tf = b.text(b.LOREM, 0, 0, 100, 100);


  // Liste von Wortobjekten
  var myWords = b.words( tf );

  for(var i = 0; i < myWords.length; i++) {

    // 1.
    var myRandomScale = b.random(50, 200);
    b.typo(myWords[i], "verticalScale", myRandomScale);

    // 2.
    if( b.startsWith( myWords[i].contents, "a"  ) ) {
      b.typo(myWords[i], "pointSize", 30);
    }

    // 3.
    if( b.startsWith( myWords[i].contents, "i"  ) ) {

      b.typo(  myWords[i] ,  "contents" ,  "Hallo"  );

    }

    // 4.
    if(  myWords[i].length  > 5  ) {
      b.typo(  myWords[i],  "underline",  true );
    }

  }






}

b.go();
