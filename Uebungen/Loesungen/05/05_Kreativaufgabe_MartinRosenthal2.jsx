//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );


  

  
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphabetChoice = b.round(b.random (0, alphabet.length-1));

  var farbe = [b.color(255, 73, 125), b.color(123, 255, 184), b.color(98, 255, 171), b.color(178, 46, 33), b.color(255, 179, 171), b.color(85, 55, 187)]
  b.println(farbe.length);

  var text1 = ("Syntagma/syntagmatisch (gr. syntagma: Zusammengestelltes), im Rahmen des strukturalistischen Sprachmodells F. de Saussures, das der Sprache einen linearen Charakter zuweist, nimmt der Begriff S. einen wichtigen Platz ein. Er bezeichnet die Beziehung eines Wortes zu den anderen, mit denen es im gleichen Satzgefüge steht: Worte »reihen sich eins nach dem andern in der Kette des Sprechens an, und diese Kombination, deren Grundlage die Ausdehnung ist, können Anreihungen oder Syntagmen genannt werden« (Saussure 1967, S. 147). Die Beziehung eines Wortes zu all den Wörtern, die statt ihm an seiner Stelle hätten stehen können, wird hingegen paradigmatisch bzw. assoziativ genannt. Das Wortpaar S./Paradigma ist in der strukturalistischen Linguistik allerdings nicht nur auf der Ebene der Wörter und Sätze anwendbar, sondern genauso auf der Ebene von Lauten und Wörtern bzw. Sätzen und Texten. Auf allen diesen verschiedenen Ebenen gehören gleichartige Elemente der einen Ebene zu einem Paradigma, aus dem schließlich ein Element für die höhere Ebene ausgesucht wird, auf der es in eine syntagmatische Beziehung mit den anderen Elementen dieser höheren Ebene tritt. Auch in der Lit.- und Kulturwissenschaft ist die Dichotomie S./Paradigma auf verschiedene Weise angewandt worden. Auf die Einbindung eines Wortes in S. und Paradigma bezieht sich z.B. R. Jakobsons Klassifizierung von Sprachstörungen: manche Arten der Aphasie sind auf Schwierigkeiten auf der syntagmatischen und andere auf Probleme auf der paradigmatischen Ebene zurückzuführen. Laut Jakobson führt das im ersten Fall dazu, daß Patienten keine Metonymien bilden können; im zweiten Fall können die Patienten keine Metaphern bilden. D. Lodge überträgt Jakobsons Überlegungen auf die Lit. und unterscheidet zwischen Genres, die mehr auf metaphorischer Sprache beruhen, wie Lyrik und der Roman der literar. Modeme, und anderen Genres, die sich eher auf metonymische Sprache gründen, wie der traditionellrealistische Roman. Auch Cl. Levi-Strauss und J. Lacan haben sich in ihren Theorien der Dichotomie von S. und Paradigma bedient. Auch in der Lit.- und Kulturwissenschaft ist die Dichotomie S./Paradigma auf verschiedene Weise angewandt worden. Auf die Einbindung eines Wortes in S. und Paradigma bezieht sich z.B. R. Jakobsons Klassifizierung von Sprachstörungen: manche Arten der Aphasie sind auf Schwierigkeiten auf der syntagmatischen und andere auf Probleme auf der paradigmatischen Ebene zurückzuführen. Laut Jakobson führt das im ersten Fall dazu, daß Patienten keine Metonymien bilden können; im zweiten Fall können die Patienten keine Metaphern bilden. D. Lodge überträgt Jakobsons Überlegungen auf die Lit. und unterscheidet zwischen Genres, die mehr auf metaphorischer Sprache beruhen, wie Lyrik und der Roman der literar. Modeme, und anderen Genres, die sich eher auf metonymische Sprache gründen, wie der traditionellrealistische Roman. Auch Cl. Levi-Strauss und J. Lacan haben sich in ihren Theorien der Dichotomie von S. und Paradigma bedient. ")
  

  var farbeRandom = b.floor(b.random(0, farbe.length));
  var color = farbe[farbeRandom];

  b.fill(color);
  b.rect(0, 0, b.width, b.height);
  
  b.fill(0)
    // Typo
  b.textFont("National","Thin");
  b.textSize(15);
  b.textAlign(Justification.FULLY_JUSTIFIED);
  b.textTracking(320);
  b.textLeading(20);

  // oberer Textrahmen
  var Frame = b.text( text1, 20, 30, b.width - 40, (b.height/2)-60);
  var character = b.characters(Frame);

  // unterer Textrahmen
  var Frame2 = b.text( text1, 20, b.height/2 +30, b.width - 40, (b.height/2)-60);
  var character2 = b.characters(Frame2);
  
  // Textrahmen verbinden
  b.linkTextFrames(Frame, Frame2);

  // Buchstabenzaehler
  var counter = 0;
  // Rechteckfarbe aus Array löschen
  farbe.splice(farbeRandom, 1);

  // neue Farbe asuwaehlen
  var farbeRandom = b.floor(b.random(0, farbe.length));
  var color = farbe[farbeRandom];
  b.println(farbe.length);

  for ( var i = 0; i < character.length; i++) {

    if (alphabet[alphabetChoice] == text1.charAt(i)) {
      counter++;
    }; 

     if (character[i].contents[0] == alphabet[alphabetChoice] ) {
      
      b.typo (character[i], "fontStyle", "Black");
    };
  };

  //Buchstabenanzahl 1
  b.textSize(200);
  b.textTracking(0);
  b.textFont("DINPro", "Bold");
  b.fill(color);
  b.textAlign(Justification.CENTER_JUSTIFIED, VerticalJustification.CENTER_ALIGN);
  b.opacity(b.text(counter + " " + alphabet[alphabetChoice], 20, 30, b.width - 40, (b.height/2)-60), 75);

  // Zaehler zuruecksetzen
  counter = 0;

  // 2. Buchstabe
  var alphabetChoice2 = b.round(b.random (0, alphabet.length-1));

  for ( var i = 0; i < character2.length; i++) {

    if (alphabet[alphabetChoice2] == text1.charAt(i)) {
      counter++;
    }; 

     if (character2[i].contents[0] == alphabet[alphabetChoice2] ) {
      
      b.typo (character2[i], "fontStyle", "Black");
    };
  };
  
  // Buchstabenanzahl 2 & Trennstrich
  b.opacity(b.text(counter + " " + alphabet[alphabetChoice2], 20, (b.height/2) +30, b.width - 40, (b.height/2)-60), 75);
  b.noStroke();
  b.opacity(b.rect( 50, b.height/2-10, b.width - 100, 15), 75);


  }

b.go();
