//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


  b.clear(b.doc());

  // three textfiles
  var text1 = b.loadString('Kant_1.txt');
  var text2 = b.loadString('Kant_2.txt');
  var text3 = b.loadString('Kant_3.txt');
  var textArray = [text1, text2, text3];

  // get random textfile
  var randomText = b.random(0, textArray.length);
  var randomRoundedText = b.floor(randomText);
  b.println(randomRoundedText);

  // textframe dimensions
  var frameWidth = b.width / 20 * 19;
  var frameHeight = b.height;
  var frameX = b.width / 20;
  var frameY = b.height / 45;
  
  // create textframe
  b.textSize(100);
  b.textFont("Helvetica");
  b.textLeading(65);
  var textFrame= b.text(textArray[randomRoundedText], frameX, frameY, frameWidth, frameHeight);
  
  // get characters
  var character = b.characters(textFrame);

  // define scale parameters
  var inMin = frameX;
  var inMax = frameX + frameWidth;
  var outMin = 9;
  var outMax = 56;

  var inMin2 = frameX;
  var inMax2 = frameX + frameWidth;
  var outMin2 = 5;
  var outMax2 = 90;

  // map parameters
  for(var i = 0 ; i < character.length; i++ ){
    var bounds = b.bounds(character[i]);
    var characterX = bounds.left;
    var scale = b.map(characterX, inMin2, inMax2, outMin2, outMax2);
    var scaleInv = b.map(characterX, inMax, inMin, outMin, outMax);

    // apply mapped parameters
    //b.typo(character[i], 'baselineShift', scale);
    b.typo(character[i], 'pointSize', scaleInv);
    b.typo(character[i], 'underline', true);
    b.typo(character[i], 'underlineWeight', scale);
    b.typo(character[i], 'underlineOffset', scaleInv);
  }
}

b.go();