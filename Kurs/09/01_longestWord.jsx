// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myFile = file("~/Desktop/zitruspflanzen.txt");
  var myString = loadString( myFile );
  var tf = text(myString, 0, 0, width, height);

  var myWords = words( tf );

  inspect(myWords);

  var mostCharacters = 0;
  var longestWord = "";

  for(var i = 0; i < myWords.length; i++) {
    var currentWordCharacters = myWords[i].length;

    if(currentWordCharacters > mostCharacters) {
      longestWord = myWords[i].contents;
      mostCharacters = currentWordCharacters;
    }
  }

  alert("Das längste Wort ist " + longestWord + " und hat " + mostCharacters + " Buchstaben.");

}