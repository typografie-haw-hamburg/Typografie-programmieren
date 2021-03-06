﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());


b.textFont("Droid Serif");    //  font
var textWiederholung = 10;    //  wie oft wird die Schleife wiederholt?

b.fill(b.color(242, 234, 226));
var hintergrund = b.rect(0,0,b.width,b.height);

b.fill(0);

for(var i = 0; i < textWiederholung; i++) {

  var x = (b.random(0, b.width-245));
  var y = (b.random(0, b.height-202));

  var text = b.text("Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken.", x, y, 245, 202);
  var words = b.words(text); 
  b.noFill();
  b.strokeWeight(0.1);

  for(var j = 0; j < words.length; j++) {
    if( b.startsWith(words[j].contents, "Ich") || b.startsWith(words[j].contents, "ich") ) {
      //var x2 = b.random(0, b.width);
      //var y2 = b.random(0, b.height);
      b.typo(words[j], 'fillColor', b.color(62, 86, 93)); 
      var bounds = b.bounds( words[j] );
      b.ellipse(bounds.left + bounds.width/2, bounds.baseline-6, bounds.width*1.2, bounds.width*1.2);
      b.line(bounds.left, bounds.baseline, b.width, b.height); 
    }//if
  }//for1

  for(var k = 0; k < words.length; k++) {
    if( b.startsWith(words[k].contents, "Ich") || b.startsWith(words[k].contents, "ich") ) {
      var bounds = b.bounds( words[k] );
      b.line(bounds.left, bounds.baseline, 0, 0); 
    }//if
  }//for1

}//for2



} //draw

b.go();
