// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.clear( b.doc() );
b.units( b.MM );

//Farbverlauf rot blau

    b.colorMode(b.RGB);
      var red = b.color(255, 0, 0);
      var blue = b.color (b.random (0,100), b.random (100,255), b.random (100,255));

      b.fill(blue);
      //var rect = b.rect(b.width / 2, 0, b.width / 2, b.height);

      b.gradientMode(b.LINEAR)
      b.fill (b.gradient (red, blue, "redblue"));
      b.rect (0, 0, b.width, b.height)

//Text Informationen festlegen
for (var i = 0; i < 14; i++){

  var color2 = b.random (0, 255);
  var color3 = b.random (0,255);

  b.fill (0, color2, color3);

  b.textSize (20 + i* 10);
  b.textAlign(Justification.LEFT_ALIGN);
  b.textFont ("Futura", "Bold");
  b.text ("TYPE TEST", 0, i * 20, 400, 400);

  var textFramesCount = 10;
  var fonts = app.fonts;

  }

  //Random Fonts

  for (var i = 0; i < textFramesCount; i++) {
    var posX = b.random(0, 200);
    var posY = b.random(0, 350);
    var randomFontSize = b.round(b.random(2, 20));
    var randomIndex = b.floor(b.random(app.fonts.length));
    var fontName = fonts[randomIndex].fullName;
    b.println(fontName);

    b.textSize(randomFontSize);
    b.textFont(fonts[randomIndex]);
    var textFrame = b.text(fontName + " " + randomFontSize, posX, posY, 300, 20);
  }


}


b.go();