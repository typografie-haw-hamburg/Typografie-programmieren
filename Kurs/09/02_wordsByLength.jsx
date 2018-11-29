// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  // word length to search
  var searchLength = 9;

  clear(doc());

  var myFile = file("~/Desktop/zitruspflanzen.txt");
  var myString = loadString( myFile );
  var tf = text(myString, 0, 0, width, height);

  var myWords = words( tf );

  var mostCharacters = 0;
  var wordsOfLength = [];

  for(var i = 0; i < myWords.length; i++) {

    var trimmedWord = trimWord( myWords[i].contents );

    if( trimmedWord.length === searchLength ) {
      wordsOfLength.push( trimmedWord );
    }

  }

  alert( "Alle Wörter mit " + searchLength + " Buchstaben: " + wordsOfLength );

}