//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


function draw() {

  b.clear(  b.doc()  );
  b.textFont("LinotypeUnivers", "ExtdRegular");
  b.textSize(79);
  b.textLeading(95.5);
  b.textAlign(Justification.CENTER_ALIGN);


  var textFrame = b.text("K\no\nm\np\no\ns\ni\nt\ni\no\nn\n \ni\nm\n \nR\nü\nc\nk\nb\nl\ni\nc\nk", b.width/2-57, b.height/2-1150, 114, 2300);

  var characters = b.characters(textFrame);
  var yOffset = 298;

  for(var i = 0; i < characters.length; i += 2) {

      if(characters[i].contents == " ") continue;

      var charBounds = b.bounds(characters[i])
      var linienbreite = b.map(charBounds.width, 0, 200, 0, 2000);
      var linienhoehe = b.map(linienbreite, 0, 2000, 0, 150);

      b.strokeWeight(linienhoehe);
      b.line(b.width/2 - linienbreite , charBounds.baseline - charBounds.height / 2 + 15, b.width/2 + linienbreite , charBounds.baseline - charBounds.height / 2 + 15);
  }
 
 b.noStroke();
 b.fill(b.color(255));
 b.rect(b.width/2-57, b.height/2-1150, 114, 2300);
 b.fill(b.color(0));
 b.text("K\no\nm\np\no\ns\ni\nt\ni\no\nn\n \ni\nm\n \nR\nü\nc\nk\nb\nl\ni\nc\nk", b.width/2-57, b.height/2-1150, 114, 2300);

}//draw


b.go();
