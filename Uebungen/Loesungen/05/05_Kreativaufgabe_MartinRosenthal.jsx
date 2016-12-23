//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  //b.rectMode(b.CENTER); 
  


  // Typo
  b.textFont("National","Light");
  b.textAlign(Justification.LEFT_JUSTIFIED);
  b.textTracking(100);
  b.textLeading(20)
  
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphabetChoice = b.round(b.random (0, alphabet.length-1));
  var circlePosX = b.width/2
  var circlePosY = (b.height/3*2) +80
  
  var text1 = ("Syntagma/syntagmatisch (gr. syntagma: Zusammengestelltes), im Rahmen des strukturalistischen Sprachmodells F. de Saussures, das der Sprache einen linearen Charakter zuweist, nimmt der Begriff S. einen wichtigen Platz ein. Er bezeichnet die Beziehung eines Wortes zu den anderen, mit denen es im gleichen Satzgefüge steht: Worte »reihen sich eins nach dem andern in der Kette des Sprechens an, und diese Kombination, deren Grundlage die Ausdehnung ist, können Anreihungen oder Syntagmen genannt werden« (Saussure 1967, S. 147). Die Beziehung eines Wortes zu all den Wörtern, die statt ihm an seiner Stelle hätten stehen können, wird hingegen paradigmatisch bzw. assoziativ genannt. Das Wortpaar S./Paradigma ist in der strukturalistischen Linguistik allerdings nicht nur auf der Ebene der Wörter und Sätze anwendbar, sondern genauso auf der Ebene von Lauten und Wörtern bzw. Sätzen und Texten. Auf allen diesen verschiedenen Ebenen gehören gleichartige Elemente der einen Ebene zu einem Paradigma, aus dem schließlich ein Element für die höhere Ebene ausgesucht wird, auf der es in eine syntagmatische Beziehung mit den anderen Elementen dieser höheren Ebene tritt. Auch in der Lit.- und Kulturwissenschaft ist die Dichotomie S./Paradigma auf verschiedene Weise angewandt worden. Auf die Einbindung eines Wortes in S. und Paradigma bezieht sich z.B. R. Jakobsons Klassifizierung von Sprachstörungen: manche Arten der Aphasie sind auf Schwierigkeiten auf der syntagmatischen und andere auf Probleme auf der paradigmatischen Ebene zurückzuführen. Laut Jakobson führt das im ersten Fall dazu, daß Patienten keine Metonymien bilden können; im zweiten Fall können die Patienten keine Metaphern bilden. D. Lodge überträgt Jakobsons Überlegungen auf die Lit. und unterscheidet zwischen Genres, die mehr auf metaphorischer Sprache beruhen, wie Lyrik und der Roman der literar. Modeme, und anderen Genres, die sich eher auf metonymische Sprache gründen, wie der traditionellrealistische Roman. Auch Cl. Levi-Strauss und J. Lacan haben sich in ihren Theorien der Dichotomie von S. und Paradigma bedient. Auch in der Lit.- und Kulturwissenschaft ist die Dichotomie S./Paradigma auf verschiedene Weise angewandt worden. Auf die Einbindung eines Wortes in S. und Paradigma bezieht sich z.B. R. Jakobsons Klassifizierung von Sprachstörungen: manche Arten der Aphasie sind auf Schwierigkeiten auf der syntagmatischen und andere auf Probleme auf der paradigmatischen Ebene zurückzuführen. Laut Jakobson führt das im ersten Fall dazu, daß Patienten keine Metonymien bilden können; im zweiten Fall können die Patienten keine Metaphern bilden. D. Lodge überträgt Jakobsons Überlegungen auf die Lit. und unterscheidet zwischen Genres, die mehr auf metaphorischer Sprache beruhen, wie Lyrik und der Roman der literar. Modeme, und anderen Genres, die sich eher auf metonymische Sprache gründen, wie der traditionellrealistische Roman. Auch Cl. Levi-Strauss und J. Lacan haben sich in ihren Theorien der Dichotomie von S. und Paradigma bedient. ")
  

 
  b.println("Arrayposition: " + alphabet[alphabetChoice]);

    b.fill(0);
    var Frame = b.text( text1, b.width/4, 5, b.width/2, b.height);
  


  
  var character = b.characters(Frame);


  var zaehler = 0;
  for (i = 0; i < text1.length - 1; i ++){
 
    if (alphabet[alphabetChoice] == text1.charAt(i)) {
      zaehler++;
    }; 
  };

  for ( var i = 0; i < character.length; i++) {


 
    if (character[i].contents[0] == alphabet[alphabetChoice] ) {
      
      var Wortposition = b.bounds ( character [i] );  
      b.strokeWeight(0.7);
      b.stroke(100);
      b.line( Wortposition.left, Wortposition.baseline, circlePosX, circlePosY);
      b.noStroke();
      
    }

  }

var outMin = 40
var outMax = 80

var diameter = b.map(zaehler, 0, text1.length/30, outMin, outMax)
b.println("Anzahl der Buchstaben: " + zaehler);
b.textSize(14);
b.textTracking(0);
b.textFont("National", "Medium");
b.textAlign(Justification.LEFT_ALIGN);
b.text( "Der Buchstabe " + alphabet[alphabetChoice] +  " \nkommt in diesem \nText " + zaehler + " Mal vor.", b.width/4*3 +10, circlePosY, b.width/4, 100);

b.ellipse( circlePosX, circlePosY, diameter, diameter);
b.rectMode(b.CENTER);
b.textSize(35);
b.fill(255);
b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
b.text(alphabet[alphabetChoice], circlePosX-(diameter/2), circlePosY-(diameter/2)-5, diameter, diameter)

}

b.go();
