// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);



  //Array         blau       rot         türkis        grau       lila
  var farben = [[0,0,153],[255,102,102],[0,204,204],[192,192,192],[51,0,102]];

  var buchstaben= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  b.println(roundedIndex)


  var size= b.random (5,40);

  for (var i=0; i<10; i++){


  for (var j=0; j<10; j++){
    var myRandomIndex = b.random (0,farben.length);
    var roundedIndex = b.floor(myRandomIndex);

    var MeineFarbe= farben[roundedIndex];
    var myRotation = b.radians(b.random (0,10));

    var myRandomIndex = b.random (0,buchstaben.length);
    var roundedIndex = b.floor(myRandomIndex);
    var MeinBuchstabe= buchstaben[roundedIndex];

    var myRotation = b.radians(j*30);

      b.fill(MeineFarbe[0],MeineFarbe[1],MeineFarbe[2],);


      b.rotate(myRotation);
      b.textSize(2*size);
      b.textFont("Favorit","Bold");
      b.text(MeinBuchstabe,j*30 ,i*40 ,size ,size);
      b.resetMatrix();

      b.noFill();
      b.strokeWeight(3);
      b.stroke(MeineFarbe[0],MeineFarbe[1],MeineFarbe[2]);


      b.rotate(myRotation);
      b.rect(j*30 ,i*40 ,size ,size);
      b.resetMatrix();

      // b.rotate(-myRotation);
      // b.rect(j*40 ,i*40 ,size ,size);
      // b.resetMatrix();


  }

}

}

b.go();