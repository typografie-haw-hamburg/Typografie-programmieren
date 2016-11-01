//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js"; 
//Versucht mit eurem Wissen über das bisher Gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll Text bearbeitet/verändert werden

//Die Idee: An jeden "o" im Fließtext/Article soll das o überlagert werden mit einer rosa Ellipse

function draw() {
  b.clear(b.doc());

  //Texte laden
  var article = b.loadString ("Tiergeschichte.txt");


   //Schriftgröße Artikel
  b.textFont ("Helvetica", "Regular");
  b.textLeading (33);
  b.textSize (23);
  var article = b.text(article, b.width/10, 20, b.width - b.width/5, b.height-20);

  //Array aus Wörtern des Artikeltextes erstellen
  var words = b.words (article);


b.noStroke();

    //For-Loop 
    for (var i = 0; i < words.length; i++) {


     if( b.startsWith(words[i].contents, "Katze") ){
        var wordBounds = b.bounds ( words [i] );
        b.image("Katze1.jpg", wordBounds.left-0.5 , wordBounds.baseline-27, 60, 45);
      }

      if( b.startsWith(words[i].contents, "Maus") ){
        var wordBounds = b.bounds ( words [i] );
        b.image("Maus.jpg", wordBounds.left , wordBounds.baseline-25, 62, 40);
      }




      
    }



}
b.go();