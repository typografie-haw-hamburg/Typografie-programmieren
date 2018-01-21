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
  var text = "This is a talk about something and naturally also a talk about nothing. About how something and nothing are not opposed to each other but need each other to keep on going. It is difficult to talk when you have something to say precisely because of the words which keep making us say in the way which the words need to stick to and not in the Way which we need for living. For instance: someone said, Art should come from within; then it is profound. But it seems to me Art goes within, and I don’t see the need for should or then or it or profound. When Art comes from within, which is what it was for so long doing, it became a thing which seemed to elevate the man who made it above those who observed it or heard it and the artist was considered a genius or given a rating: First, Second, No Good, until finally riding in a bus or subway: so proudly he signs his work like a manufacturer. But since everything’s changing, art’s now going in and it is of the utmost importance not to make a thing but rather to make nothing. And how is this done? Done by making something which then goes in and reminds us of nothing. It is important that this something be just something, finitely something; then very simply it goes in and becomes infinitely nothing.";

  // Textrahmen im Dokument erstellen und in Worte zerlegen
  var tf = b.text(text, 100, 0, 100, 150);
  var myWords = b.words(tf);

  // leeres Wörterbuch erstellen
  var dict = {};

  // Loop über jedes Wort
  for (var i = 0; i < myWords.length; i++) {

    // String vom Wort – wird in lowercase umgewandelt, damit z.B. About und about beide als gleiches Wort gezählt werden
    var word = myWords[i].contents.toLowerCase();
    // Sonderzeichen werden vom Wort abgetrennt
    word = b.trimWord(word);

    // wenn das Wort bereits gezählt wurde, wird sein Wert um eins erhöht
    if(dict[word] >= 1) {
      dict[word]++;
    } else {
      // wenn es noch nicht gezählt wurde, wird sein Wert auf 1 gesetzt (da es jetzt ein mal vorkam)
      dict[word] = 1;
    }
  }



  // dict ist jetzt ein Objekt, bei dem alle Wörter als Eigenschaften angespeichert sind, mit der Häufigkeit als Wert, z.B.
  //
  // dict = {
  //   a: 8,
  //   about: 3,
  //   above: 1,
  //   also: 1,
  //   and: 9
  //   ...
  // };


  var allWords = [];

  // Über alle gesammelten Wörter des Wörterbuchs loopen und beispielsweise in Textrahmen ausgeben
  // dazu wird ein spezieller "for-in"-Loop benötigt
  // alle Wörter werden in einem Objekt gespeichert, zusammen mit ihrem ausgezählen Wert
  // dieses Objekt wird dann in einen Array gespeichert, um ihn nachher sortieren zu können

  for (var word in dict) {
    if ( dict.hasOwnProperty(word) ) {

      var myWord = {
        theWord: word + "",
        theCount: dict[word]
      }

      allWords.push(myWord);
    }
  }

  // Array nach Häufigkeit der Wörter sortieren
  allWords.sort(function(a, b) {return (a.theCount > b.theCount) ? -1 : ((b.theCount > a.theCount) ? 1 : 0)});

  // erste 10 Wörter ausgeben
  for (var i = 0; i < 10; i++) {
    b.text(allWords[i].theWord + ": " + allWords[i].theCount, 0, i * 10, 50, 10);
  }

}

b.go();
