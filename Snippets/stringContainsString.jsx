// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myText = "REM-Schlaf scheint für die Entwicklung des Gehirns von entscheidender Bedeutung zu sein. Bei Neugeborenen – die an sich schon viel schlafen – macht er den größten Teil des Schlafes aus. Vergleicht man verschiedene Tierarten, so ist die Tiefschlafphase von Neugeborenen umso länger, je weniger entwickelt das Baby geboren wird. Es wurde vermutet, dass während des REM-Schlafes die Muskeln deshalb teilweise gelähmt würden, um die Aktivierung und Entwicklung des Gehirns voranzutreiben, ohne dass die dadurch entstehenden Nervenimpulse zu Bewegungen führen, die besonders ein Neugeborenes in Schwierigkeiten bringen könnten. REM-Mangel von Kleinkindern führt später zu Entwicklungsproblemen.";

  var tf = text(myText, 0, 0, width, height);
  var myWords = words(tf);

  // eventuell die Worttrennungen ausschalten, weil man sonst Probleme bekommt Wörter einzurahmen, die in der Zeile umbrechen
  typo(tf, "hyphenation", false);

  noFill();
  strokeWeight(0.5);

  // für die Rotationen muss der Ankerpunkt in die Mitte gesetzt werden, sonst dreht sich alles um die linke obere Ecke
  referencePoint(CENTER);

  for (var i = 0; i < myWords.length; i++) {

    if(myWords[i].contents.toLowerCase().indexOf("schlaf") !== -1) {
      // Wort beinhaltet Schlaf

      var wordBounds = bounds(myWords[i]);
      var myRect = rect(wordBounds.left, wordBounds.top, wordBounds.width, wordBounds.height);
      transform(myRect, "rotate", random(0, 360));

    }

  }

}