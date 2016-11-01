//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear (b.doc());


  b.textFont('Franziska Pro', 'Book');
  b.textSize(14);

  var myText = b.loadString ("cageNeu.txt");
  var tf = b.text(myText, 35, 35, b.width-72, b.height-72);
  var words = b.words(tf);
  var bounds = b.bounds( words[0] );




 for (var i = 0; i < words.length; i++){
  

  if (b.startsWith (words[i].contents, "e") ){
    words[i].contents = "_______________"


    
      }
    }
  
for (var i = 0; i < words.length; i++){


  if ( words[i].contents[0] == "A", "E", "I", "O", "U") {

  b.noFill();
  b.stroke(b.color(255, 0, 0));
  var bounds = b.bounds (words[i]);
  b.ellipse (bounds.left + bounds.width / 2, bounds.baseline - 3, bounds.width * 1.2, bounds.width * 1.2);


}


}
}
b.go();