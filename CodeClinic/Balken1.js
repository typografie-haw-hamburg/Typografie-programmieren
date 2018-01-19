// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

//  Beispielscript
//  Zählen von Wörtern eines Textrahmens und Ausgabe des Ergebnis

function draw() {

  // Dokument leeren und einrichten
  b.clear(b.doc());
  b.units(b.MM);
  b.size("A4");

  // Ausgangstext
  var text = "This is a talk about, something and naturally also a talk about nothing. About how something and nothing are not opposed to each other but need each other to keep on going. It is difficult to talk when you have something to say precisely because of the words which keep making us say in the way which the words need to stick to and not in the Way which we need for living. For instance: someone said, Art should come from within; then it is profound. But it seems to me Art goes within.";

  // Textrahmen im Dokument erstellen und in Worte zerlegen
  var tf = b.text(text, 100, 0, 100, 150);
  var allCharacters = b.characters(tf);

  // leeres Wörterbuch erstellen
  var dict = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  };

  // Loop über jedes Wort
  for (var i = 0; i < allCharacters.length; i++) {

    // String vom Wort – wird in lowercase umgewandelt, damit z.B. About und about beide als gleiches Wort gezählt werden
    var myChar = allCharacters[i].contents.toLowerCase();
    // Sonderzeichen werden vom Wort abgetrennt
   // myChar = b.trimWord(myChar);

    // wenn das Wort bereits gezählt wurde, wird sein Wert um eins erhöht
    if(dict[myChar] >= 0) {
      dict[myChar]++;
    }
  }


  var counter = 0;

  // Über alle gesammelten Wörter des Wörterbuchs loopen und beispielsweise in Textrahmen ausgeben
  // dazu wird ein spezieller "for-in"-Loop benötigt
  // da in diesem Loop keine Zählvariable i vorhanden ist, muss man gegebenenfalls eine eigene erstellen (hier: counter)
  for (var myChar in dict) {
    if ( dict.hasOwnProperty(myChar) ) {
      b.text(myChar + ": " + dict[myChar], 0, counter * 5, 80, 5);


    }
    counter++;}


  for(var i = 0; i < allCharacters.length; i++) {

    var myChar = allCharacters[i].contents.toLowerCase();

    if(dict[myChar] > 0) {

      var size = b.map( dict[myChar], 0, dict["e"], 0, 20 );

      b.rect(i*7, 10, 5, size);

    }}



}

b.go();