// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );


  // Index:       0       1          2          3         4
  var names = ["Timo", "Klaus", "Marianne", "Rosalie", "Hans"];

  // 2. Listeneintrag ausgeben
  alert( "2. Listeneintrag: " + names[1] );

  // Länge der Liste ausgeben
  alert( "Länge des Arrays: " + names.length );


  // über Liste loopen
  for(var i = 0; i < names.length; i++) {

    alert( "Hi, my name is " + names[i] + ".");

  }

}

b.go();
