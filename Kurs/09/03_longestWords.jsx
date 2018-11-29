// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myFile = file("~/Desktop/zitruspflanzen.txt");
  var myString = loadString( myFile );
  var tf = text(myString, 0, 0, width, height);

  var myWords = words( tf );

  var mostCharacters = 0;
  var longestWords = [];

  for(var i = 0; i < myWords.length; i++) {

    var currentWordCharacters = myWords[i].length;

    if(currentWordCharacters > mostCharacters) {
      // wenn ein Wort gefunden wird, das länger als alle bisherigen ist
      // lege eine neue Liste mit dem neuen Wort an

      mostCharacters = currentWordCharacters;
      longestWords = [ myWords[i].contents ];
    } else if (currentWordCharacters === mostCharacters) {
      // wenn ein Wort die gleiche Länge hat, wie das bislang längste Wort
      // fügen wir das Wort der Liste hinzu

      longestWords.push( myWords[i].contents );
    }

  }

  alert( "Die längsten Wörter sind: " + longestWords );

}