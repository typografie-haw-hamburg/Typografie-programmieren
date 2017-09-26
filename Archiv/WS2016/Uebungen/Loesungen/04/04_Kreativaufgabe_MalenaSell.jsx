//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


  var flowers = ["anemone", "amaryllis", "amaranth", "aster", "azalea", "babys breath", "begonia", "bellflower", "bergamot", "bird of paradise", "bluebell", "bottlebrush", "buttercup", "camellias", "carnation", "chrysantemum", "columbine", "clover", "crocus", "daisy", "dahlia", "daffodil", "delphinium", "edelweiss", "primrose", "forget me not", "foxglove", "freesia", "gerbera daisy", "gladiolus", "hibiscus", "heather", "hyacinth", "holly", "iris", "jasmine", "ladys slipper", "lavender", "lilac", "lily", "lotus flower", "marigold", "marjoram", "mimosa", "narcissus", "orange blossom", "orchid", "peach blossom", "peony", "petunia", "rhododendron", "rosemary", "roses", "sage", "snapdragon", "sunflower", "tansy", "thistle", "thyme", "tulip", "violet", "water lily", "zinnia"];

  var size = 98;
  var divisionWidth = b.width/5;
  var divisionHeight = b.height/7;

  var red = b.color(255, 0, 0);

  var randomRed = flowers[b.round(b.random(0,flowers.length-1))];

  alert ("The selected flower is the " + randomRed + ".");


  for (var i = 0; i < 7; i++) {

    for (var j = 0; j < 5; j++) {

      var randomWord1 = flowers[b.round(b.random(0,flowers.length-1))];
      var randomWord2 = flowers[b.round(b.random(0,flowers.length-1))];
      var randomWord3 = flowers[b.round(b.random(0,flowers.length-1))];
      var randomWord4 = flowers[b.round(b.random(0,flowers.length-1))];
      var randomWord5 = flowers[b.round(b.random(0,flowers.length-1))];
      var randomWord6 = flowers[b.round(b.random(0,flowers.length-1))];
      var randomWord7 = flowers[b.round(b.random(0,flowers.length-1))];
      
      if (randomWord1 == randomRed) {
        b.fill(red);
      } else if (randomWord2 == randomRed) {
        b.fill(red);
      } else if (randomWord3 == randomRed) {
        b.fill(red);
      } else if (randomWord4 == randomRed) {
        b.fill(red);
      } else if (randomWord5 == randomRed) {
        b.fill(red);
      } else if (randomWord6 == randomRed) {
        b.fill(red);
      } else if (randomWord7 == randomRed) {
        b.fill(red);
      } else {
        b.fill(b.color(0));
      }


      var text = randomWord1 + "\r" + randomWord2 + "\r" + randomWord3 + "\r" + randomWord4 + "\r" + randomWord5 + "\r" + randomWord6 + "\r" + randomWord7;

      
      b.textFont("Helvetica");
      b.textAlign(Justification.FULLY_JUSTIFIED);

      var spotX = j*(divisionWidth) + ((divisionWidth)/2) - size/2;
      var spotY = i*(divisionHeight) + ((divisionHeight) / 2) - size/2;

      b.text(text, spotX, spotY, size, size);
        
    }

  }
  for (var k = 0; k < flowers.length; k++) {

    b.textSize(50);
    b.fill(b.color(0));
    b.textAlign(Justification.LEFT_ALIGN);

    var boxWidth = 350;
    var boxHeight = 40;

    b.text(randomRed, b.random(b.width - boxWidth), b.random(b.height - boxHeight), boxWidth, boxHeight);
  }

}

b.go();
