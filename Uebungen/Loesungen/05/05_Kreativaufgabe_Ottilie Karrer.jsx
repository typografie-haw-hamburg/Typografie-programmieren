//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";



function draw() {

  //Eigenschaften Textrahmen
  
  b.clear( b.doc() );
  b.textSize(100);
  b.textFont ("Helvetica","Bold");
  b.textKerning(70);
  b.fill(0,0,0);
  b.strokeWeight(5);
  
//Textrahmen
  var tf = b.text("stil system methode stil system methode stil system methode stil system methode", 10, 10, 600, 900);

//Rechtecke an Wörtern mit m oder s beginnend
var words = b.words(tf);

  b.fill(255,255,255);
  b.strokeWeight(15);

  for(var i = 0; i < words.length; i++) {

    if(    words[i].contents[0] == "m","s"  ) {

      var wordBounds = b.bounds(   words[i]   );

      var x =  b.random(10, 300);
      var y = b.random(10, 300);

      b.rect(wordBounds.left +  (wordBounds.height/4) , wordBounds.baseline + 2, x, y);

}


   }



 
}






b.go();










 








b.go();
