// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  textSize(48);

  // Array-Position  0       1        2        3        4
  var nameList = ["Timo", "Peter", "Lisa", "Robert", "Katja"];

  // über den Array loopen
  for (var i = 0; i < nameList.length; i++) {

    fill(255, 0, 0);

    var x = random(width);
    var y = random(height);

    // wenn der Text einem bestimmten Text entspricht
    // if (nameList[i] === "Lisa") {
    //   fill(0, 0, 255);
    // }

    // wenn der Text länger als 4 Buchstaben ist
    // if(nameList[i].length > 4) {
    //   fill(0, 0, 255);
    // }

    // wenn der Text mit R beginnt
    if( startsWith(nameList[i], "R")) {
      fill(0, 0, 255);
    }

    text(nameList[i], x, y, 100, 100);

  }


}
