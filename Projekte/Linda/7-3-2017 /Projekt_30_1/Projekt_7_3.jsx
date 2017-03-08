// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// demonstrates how to load json files that might be exported from Processing

function draw()
{
  b.clear(b.doc());
  b.noFill();
  b.colorMode(b.RGB);
  b.units(b.MM);
  b.noStroke();

  // get data folder where the JSON files will be saved
  var projectFolder = b.projectFolder();
  var dataFolder = Folder(projectFolder + "/data");

  var edge = 25;



  // optional: delete all old .json files
  // if you want to keep them, just comment out the for loop

  var oldJsonFiles = dataFolder.getFiles("*.json");
  for (var i = 0; i < oldJsonFiles.length; i++)
  {
    oldJsonFiles[i].remove();
  }


  // count all JSON files that are in the folder
  var oldJsonCount = dataFolder.getFiles("*.json").length;

  while(b.millis() < 30000) {

    var jsonFiles = dataFolder.getFiles("*.json");
    var newJsonCount = jsonFiles.length;

    // a new JSON file was added
    if (newJsonCount > oldJsonCount)
    {


      // InDesign aktivieren
      File(app.fullName).execute();
      app.activate();

      b.clear(b.doc());
      b.resetMatrix();

      // the new file is the last of all JSON files
      var addedJsonFile = jsonFiles[newJsonCount - 1];

      var jsonString = b.loadString(addedJsonFile);
      var jsonData = b.JSON.decode(jsonString);

      //Leere Arrays für die Daten anlegen
      var corrXarray = [];
      var corrYarray = [];
      var absoluteArrayX = [];
      var absoluteArrayY = [];
      var superAbsoluteArray = [];

        for (var i = 0; i < jsonData.length; i++)
        {

          //alle X-Daten
          var corrX = b.map(jsonData[i].x, 0, 1440, -100, 100);
          corrXarray.push(corrX);

          //alle Y-Daten
          var corrY = b.map(jsonData[i].y, 0, 800 , -100, 100);
          corrYarray.push(corrY);

          //Absolutiert alle Nummern:

          var absX = b.abs(corrXarray[i]);
          absoluteArrayX.push(absX);

          var absY = b.abs(corrYarray[i]);
          absoluteArrayY.push(absY);

          //Addiert jeweils X und Y-Werte:
          var absolute = absoluteArrayX[i] + absoluteArrayY[i];
          superAbsoluteArray.push(absolute);
        }

      b.println ("corrX: " + corrX);
      b.println ("corrXarray: " + corrXarray);
      b.println ("corrYarray: " + corrYarray);
      b.println ("absoluteArrayX: "+ absoluteArrayX);
      b.println ("absoluteArrayY: "+ absoluteArrayY);
      b.println ("superAbsoluteArray: "+ superAbsoluteArray);


      //1. Coordinates
      var x1 = corrXarray[0];
      b.println("x1: "+ x1);
      var y1 = corrYarray[0];
      b.println("y1: "+ y1);

      //2. Coordinates
      var x2 = corrXarray[1];
      b.println("x2: "+ x2);
      var y2 = corrYarray[1];
      b.println("y2: "+ y2);

      //3. Coordinates
      var x3 = corrXarray[2];
      b.println("x3: "+ x3);
      var y3 = corrYarray[2];
      b.println("y3: "+ y3);

      //4. Coordinates
      var x4 = corrXarray[3];
      b.println("x4: "+ x4);
      var y4 = corrYarray[3];
      b.println("y4: "+ y4);

      //5. Coordinates
      var x5 = corrXarray[4];
      b.println("x5: "+ x5);
      var y5 = corrYarray[4];
      b.println("y5: "+ y5);

      // Mindest-Points für V1, V2, V3 und V4 festlegen
      var v1 = 8;
      var v2 = 6;
      var v3 = 3;
      var v4 = 1;

    // neutral colors
      var dominantColors = [ b.color(219,212,206), b.color (156,154,149), b.color(124,123,119), b.color(255,208,73) ];

      var neutralLight = b.color(219,212,206);
      var neutralMiddle = b.color (156,154,149);
      var neutralDark = b.color(124,123,119);
      var neutralHighlight = b.color(255,208,73);

      // ein Array mit allen Emotionsnamen
      // den brauchen wir später um durch alle Emotionen zu loopen
      var emotionNames = ["panic", "anger", "sorrow", "joy", "ecstasy", "trust", "disgust", "expectation"];





    //Colors
      //1: Panic
            var panicColors = [ b.color(118,119,113), b.color(67,64,60), b.color(60,58,59), b.color(233,78,36)];
      // var PanicLightGrey = b.color(118,119,113);
      // var PanicMiddleGrey = b.color(60,58,59);
      // var PanicDarkGrey = b.color(67,64,66),;
      // var PanicOrange = b.color(233,78,36);
      //2: Anger
      var angerColors = [ b.color(116,105,102), b.color(71,69,65), b.color(46,49,50), b.color(227,6,19)];
      /* var AngerLightGrey = b.color(116,105,102);
      var AngerMiddleGrey = b.color(71,69,65);
      var AngerDarkGrey = b.color(46,49,50);
      var AngerRed = b.color(227,6,19); */
      //3: Sorrow
      var sorrowColors = [ b.color(225,238,239), b.color(105,105,105), b.color(56,55,51), b.color(19,59,128)];
      /*var SorrowLightGrey = b.color(225,238,239);
      var SorrowMiddleGrey = b.color(105,105,105);
      var SorrowDarkGrey = b.color(56,55,51);
      var SorrowBlue = b.color(19,59,128); */
      //4: Joy
      var joyColors = [ b.color(255,254,178), b.color(255,35,141), b.color(11,165,67), b.color(250,118,175) ];
      /*var JoyYellow = b.color(255,254,178);
      var JoyRose = b.color(250,118,175);
      var JoyGreen = b.color(11,165,67);
      var JoyPink = b.color(255,35,141); */
      //5: Ecstasy
      var ecstasyColors = [  b.color(255,9,94) , b.color(255,255,43), b.color(19,191,213), b.color(227,6,19) ];
      /*var EcstasyPink =  b.color(255,9,94);
      var EcstasyYellow = b.color(255,255,43);
      var EcstasyBlue = b.color(19,191,213);
      var EcstasyRed = b.color(227,6,19); */
      //6: Trust
      var trustColors = [b.color(225,239,237), b.color(16,119,167), b.color(22,65,148), b.color(254,200,0)];
      /* var TrustGrey = b.color(225,239,237);
      var TrustLightBlue = b.color(16,119,167);
      var TrustDarkBlue = b.color(22,65,148);
      var TrustYellow = b.color(254,200,0); */
      //7: Disgust
      var disgustColors = [ b.color(179,191,187), b.color(110,128,46), b.color(106,84,60), b.color(215,179,5) ];
      /*var DisgustGrey = b.color(179,191,187);
      var DisgustGreen = b.color(110,128,46);
      var DisgustBrown = b.color(106,84,60);
      var DisgustYellow = b.color(215,179,5); */
      //8: Expectation
      var expectationColors = [b.color(241,237,234), b.color(11,165,67), b.color(20,185,252), b.color(225,228,18) ];
      /*var ExpectationGrey = b.color(241,237,234);
      var ExpectationGreen = b.color(11,165,67);
      var ExpectationBlue = b.color(20,185,252);
      var ExpectationYellow = b.color(225,228,18); */

      var allColorArrays = [panicColors, angerColors, sorrowColors, joyColors, ecstasyColors, trustColors, disgustColors, expectationColors ] ;

      var panicPoints = 0;
      var angerPoints = 0;
      var sorrowPoints = 0;
      var joyPoints = 0;
      var ecstasyPoints = 0;
      var trustPoints = 0;
      var disgustPoints = 0;
      var expectationPoints = 0;

    //**************************************//////////////////Frage 1////////////////
    //OBEN LINKS
      if(x1 < 0) {
        if(y1 < 0) {


        }
        if(y1 < - edge) {

        }
    }
    //OBEN RECHTS
      if(x1 > 0) {
        if(y1 < 0) {
        trustPoints++;

        }
        if(y1 < - edge) {
        trustPoints++;

        }
    }
    //UNTEN RECHTS
      if(x1 > 0) {
        if(y1 > 0) {
          panicPoints++;
          sorrowPoints++;
          disgustPoints++;

        }
        if(y1 > edge) {
          panicPoints++;
          sorrowPoints++;
          disgustPoints++;
        }
    }
    //UNTEN LINKS
      if(x1 < 0) {
        if(y1 > 0) {
          angerPoints++;

        }
        if(y1 > edge) {
          angerPoints++;
        }
    }
    //////////SPECIALS/////////////////////

    //OBEN MITTE
      if(x1 > - edge && x1 < edge) {
        if(y1 < 0) {
          joyPoints++;
        }
        if(y1 < - edge) {
          joyPoints++;
        }
    }
    //OBEN LINKS / -Edge
      if(x1 < -edge) {
        if(y1 < 0) {
          ecstasyPoints++;

        }
        if(y1 < - edge) {
          ecstasyPoints++;
        }
    }
    //OBEN RECHTS / -Edge
      if(x1 > -edge) {
        if(y1 < 0) {
        expectationPoints++;

        }
        if(y1 < - edge) {
        expectationPoints++;
        }
    }

    //**************************************//////////////////Frage 2////////////////
    //OBEN LINKS
      if(x2 < 0) {
        if(y2 < 0) {
          ecstasyPoints++;

        }
        if(y2 < - edge) {
          ecstasyPoints++;

        }
    }
    //OBEN RECHTS
      if(x2 > 0) {
        if(y2 < 0) {
          trustPoints++;
          expectationPoints++;
        }
        if(y2 < - edge) {
          trustPoints++;
          expectationPoints++;


        }
    }
    //UNTEN RECHTS
      if(x2 > 0) {
        if(y2 > 0) {
          panicPoints++;
          sorrowPoints++;
        }
        if(y2 > edge) {
          panicPoints++;
          sorrowPoints++;

        }
    }
    //UNTEN LINKS
      if(x2 < 0) {
        if(y2 > 0) {
          angerPoints++;
          disgustPoints++;
        }
        if(y2 > edge) {
          angerPoints++;
          disgustPoints++;
        }
    }

    //////////SPECIALS/////////////////////

    //OBEN MITTE
      if(x1 > - edge && x1 < edge) {
        if(y1 < 0) {
          joyPoints++;
        }
        if(y1 < - edge) {
          joyPoints++;
        }
    }

    //**************************************//////////////////Frage 3////////////////
    //OBEN LINKS
      if(x3 < 0) {
        if(y3 < 0) {
          panicPoints++;
          angerPoints++;
          disgustPoints++;
        }
        if(y3 < - edge) {
          panicPoints++;
          angerPoints++;
          disgustPoints++;

        }
    }
    //OBEN RECHTS
      if(x3 > 0) {
        if(y3 < 0) {
          sorrowPoints++;
        }
        if(y3 < - edge) {
          sorrowPoints++;


        }
    }
    //UNTEN RECHTS
      if(x3 > 0) {
        if(y3 > 0) {
          trustPoints++;
        }
        if(y3 > edge) {
          trustPoints++;

        }
    }
    //UNTEN LINKS
      if(x3 < 0) {
        if(y3 > 0) {
          ecstasyPoints++;
          expectationPoints++;

        }
        if(y3 > edge) {
          ecstasyPoints++;
          expectationPoints++;
        }
      }
    //////////SPECIALS/////////////////////

    //UNTEN MITTE
      if(x1 > - edge && x1 < edge) {
        if(y1 > 0) {
          joyPoints++;
        }
        if(y1 > edge) {
          joyPoints++;
        }
    }

    //**************************************//////////////////Frage 4////////////////
    //OBEN LINKS
      if(x4 < 0) {
        if(y4 < 0) {

        }
        if(y4 < - edge) {

        }
    }
    //OBEN RECHTS
      if(x4 > 0) {
        if(y4 < 0) {

        }
        if(y4 < - edge) {


        }
    }
    //UNTEN RECHTS
      if(x4 > 0) {
        if(y4 > 0) {
          sorrowPoints++;
          trustPoints++;
        }
        if(y4 > edge) {
          sorrowPoints++;
          trustPoints++;

        }
    }
    //UNTEN LINKS
      if(x4 < 0) {
        if(y4 > 0) {
          ecstasyPoints++;
          expectationPoints++;
        }
        if(y4 > edge) {
          ecstasyPoints++;
          expectationPoints++;
        }
      }
    //////////SPECIALS/////////////////////

    // MITTE LINKS Edge
      if(x4 < - edge) {
        if(y4 > -edge && y4 < edge) {
          panicPoints++;
        }
        if(y4 > -edge && y4 < 0) {
          panicPoints++;
        }
    }
    // MITTE LINKS
      if(x4 < 0) {
        if(y4 > -edge && y4 < edge) {
          disgustPoints++;
              }
        if(y4 > -edge && y4 < 0) {
          disgustPoints++;
           }
    }
    //OBEN ALLES
        if(y4 < 0) {
          angerPoints++;
        }
        if(y4 < -edge) {
          angerPoints++;
        }
    //UNTEN ALLES
        if(y4 > 0) {
           joyPoints++;
         }
        if(y4 > edge) {
           joyPoints++;
        }

    //**************************************//////////////////Frage 5////////////////
    //OBEN LINKS
      if(x5 < 0) {
        if(y5 < 0) {
          angerPoints++;
          disgustPoints++;
        }
        if(y5 < - edge) {
          angerPoints++;
          disgustPoints++;

        }
    }
    //OBEN RECHTS
      if(x5 > 0) {
        if(y5 < 0) {

        }
        if(y5 < - edge) {


        }
    }
    //UNTEN RECHTS
      if(x5 > 0) {
        if(y5 > 0) {
          joyPoints++;
          trustPoints++;
        }
        if(y5 > edge) {
          joyPoints++;
          trustPoints++;


        }
    }
    //UNTEN LINKS
      if(x5 < 0) {
        if(y5 > 0) {
          ecstasyPoints++;
          expectationPoints++;
        }
        if(y5 > edge) {
          ecstasyPoints++;
          expectationPoints++;
        }
      }
    //////////SPECIALS/////////////////////

    // MITTE LINKS Edge
      if(x5 < - edge) {
        if(y5 > -edge && y5 < edge) {
          panicPoints++;
        }
        if(y5 > -edge && y5 < 0) {
          panicPoints++;
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // AUSWERTUNG DER PUNKTE
  b.println("--------------");


  b.println("panic: " + panicPoints);
  b.println("anger: " + angerPoints);
  b.println("sorrow: " + sorrowPoints);
  b.println("joy: " + joyPoints);
  b.println("ecstasy: " + ecstasyPoints);
  b.println("trust: " + trustPoints);
  b.println("disgust: " + disgustPoints);
  b.println("expectation: " + expectationPoints);


// ein Haupt-Object, in dem alle Emotionen wiederum als Objects mit allen nötigen Werten gespeichert werden
      var emotions =
      {
        panic: {
          colors: [ b.color(118,119,113), b.color(67,64,60), b.color(60,58,59), b.color(233,78,36)],
          //Hellgrau, Mittelgrau, Dunkelgrau, Orange
          points: panicPoints, // erhält später 0-10 Punkte
          v: 0, // wird später zu 1-4 je nachdem, ob es V1, V2, V3 oder V4 ist.
        },
        anger: {
          colors: [ b.color(116,105,102), b.color(71,69,65), b.color(46,49,50), b.color(227,6,19)],
          //Hellgrau, Mittelgrau, Dunkelgrau, Rot
          points: angerPoints,
          v: 0,

        },
        sorrow: {
          colors: [ b.color(225,238,239), b.color(105,105,105) , b.color(56,55,51), b.color(19,59,128)],
          //Hellgrau, Mittelgrau, Dunkelgrau, Blau
          points: sorrowPoints,
          v: 0,

        },
        joy: {
          colors: [ b.color(255,254,178), b.color(255,35,141), b.color(11,165,67), b.color(250,118,175) ],
          //Gelb, Pink, Grün, Rosa
          points: joyPoints,
          v: 0,


        },
        ecstasy: {
          colors: [ b.color(255,255,43), b.color(255,9,94), b.color(19,191,213), b.color(227,6,19) ],
          //Gelb, Pink, Türkis, Rot
          points: ecstasyPoints,
          v: 0,

        },
        trust: {
          colors: [ b.color(225,239,237), b.color(16,119,167), b.color(22,65,148), b.color(254,200,0) ],
          //Grau, Hellblau, Dunkelblau, Gelb
          points: trustPoints,
          v: 0,

        },
        disgust: {
          colors: [ b.color(179,191,187), b.color(110,128,46), b.color(106,84,60), b.color(215,179,5) ],
          //Grau, Grün, Braun, Gelb
          points: disgustPoints,
          v: 0,

        },
        expectation: {
          colors: [ b.color(241,237,234), b.color(11,165,67), b.color(20,185,252), b.color(225,228,18) ],
          //Grau, Grün, Blau, Gelb
          points: expectationPoints,
          v: 0,

        }
      }

// Dominante Emotion herausfinden:

      var highestEmotionPoints = 0;
      var dominantEmotion;
      for (var i = 0; i < emotionNames.length; i++)
      {
        var currentEmotion = emotionNames[i];
        var currentEmotionPoints = emotions[currentEmotion].points; // da ist sie wieder, die bracket notation. ;)
        if(currentEmotionPoints > highestEmotionPoints)
        {
          highestEmotionPoints = currentEmotionPoints;
          dominantEmotion = currentEmotion;
        }
      }
  b.println("--------------");
  b.println("Dominant emotion: " + dominantEmotion);



// V1/V2/V3/V4 Zuordnung:

    for (var i = 0; i < emotionNames.length; i++)
    {
      var currentEmotion = emotionNames[i];
      var currentEmotionPoints = emotions[currentEmotion].points;
      if(currentEmotionPoints >= v1)
      {
        emotions[currentEmotion].v = 1;
      } else if (currentEmotionPoints >= v2)
      {
        emotions[currentEmotion].v = 2;
      } else if (currentEmotionPoints >= v3)
      {
        emotions[currentEmotion].v = 3;
      } else if (currentEmotionPoints >= v4)
      {
        emotions[currentEmotion].v = 4;
      }
    }
  b.println("--------------");

  for (var i = 0; i < emotionNames.length; i++)
  {
    var currentEmotion = emotionNames[i];
    b.println(currentEmotion + " is V" + emotions[currentEmotion].v);
  }

  // alle Emotionen mit der höchsten Punktzahl sammeln
  var topEmotions = [];

  for (var i = 0; i < emotionNames.length; i++) {
    var currentEmotionName = emotionNames[i];  // anger, disgust ...
    var currentEmotion = emotions[currentEmotionName];

    if(currentEmotion.points == highestEmotionPoints) {
      topEmotions.push(currentEmotionName);
    }
  }

  // dominante Emotion aus den höchstbewerteten Emotionen auswählen
  var randomNumber = b.floor(b.random(0, topEmotions.length));
  dominantEmotion = topEmotions[randomNumber];



// Bei V1 oder V2-Zuordnung, bestimmt die Emotion die Farbgebung:
  if(emotions[dominantEmotion].v == 1 || emotions[dominantEmotion].v == 2)
  {
    dominantColors = emotions[dominantEmotion].colors;
  }
  b.println("--------------");
  b.println("DominantColors: "+ emotions[dominantEmotion].colors + dominantEmotion);
  b.println("1.Farbe der DominantColor: " + dominantColors[0]);
  // wenn die dominante Emotion V1 oder V2 ist, dann die dominanten Farben in die der dominanten Emotion ändern
  // du musst auch noch überlegen, was passiert, wenn z.B. 2 Emotionen 9 Punkte haben.


//DOMINANT BACKGROUND:
  if (dominantEmotion == "panic") {

                  b.fill(dominantColors[2]);
                  b.rotate(b.radians(b.random(-20,50)));
                  var randomX = b.random (-20,b.width-100);
                  var randomY = b.random (- 50,b.height-200);
                  var randomWidth = b.random (80,250);
                  var randomHeight = b.random (180,300);
                  b.rect (randomX, randomY, randomWidth, randomHeight);
  }
  if (dominantEmotion == "anger") {
                    b.fill(dominantColors[2]);
                    random = b.random(6,200)
                  b.beginShape();
                          b.vertex(6,random);
                          b.vertex(b.width-6,random);
                          b.vertex(b.width/2,b.height-6);
                  b.endShape();
  }

  if (dominantEmotion == "sorrow") {
                  b.fill(dominantColors[1]);
                  randomWidth = b.random(100,b.width-3);
                  randomHeight = b.random(200, b.height-3);
                  b.rect(0,0,randomWidth,randomHeight);
  }

  if (dominantEmotion == "joy") {
                  b.fill(dominantColors[0]);
                  randomRadius = b.random(80,230);
                  randomY = b.random(0 + randomRadius, b.height - randomRadius);
                  b.ellipse(0, randomY, randomRadius, randomRadius);
                  b.ellipse(b.width, randomY, randomRadius, randomRadius);
  }

  if (dominantEmotion == "ecstasy") {
                  b.fill(dominantColors[2]);
                  randomWidth = b.random(b.width-100, b.width);
                  randomHeight = b.random(b.height-200, b.height);
                  var ecstasyellipse = b.ellipse(b.width/2, b.height/2, b.width-12, randomHeight);
                  ecstasyellipse.sendToBack();

  }

    if (dominantEmotion == "trust") {

                    var randomtrustback = b.round (b.random(0,5));
                    //
                    b.noStroke();

                    if(randomtrustback == 0){
                      var disgustBackground = b.image ("B_trust1.eps", 0, 0, b.width, b.height);
                    }
                    if(randomtrustback == 1){
                      var disgustBackground = b.image ("B_trust2.eps", 0, 0, b.width, b.height);
                    }
                    if(randomtrustback == 2){
                      var disgustBackground = b.image ("B_trust3.eps", 0, 0, b.width, b.height);
                    }
                    if(randomtrustback == 3){
                      var disgustBackground = b.image ("B_trust4.eps", 0, 0, b.width, b.height);
                    }
                    if(randomtrustback == 4){
                      var disgustBackground = b.image ("B_trust5.eps", 0, 0, b.width, b.height);
                    }
                    if(randomtrustback == 5){
                      var disgustBackground = b.image ("B_trust6.eps", 0, 0, b.width, b.height);
                    }
  }

   if (dominantEmotion == "disgust") {

                    var randomdisgustback = b.round (b.random(0,5));
                    //
                    b.noStroke();

                    if(randomdisgustback == 0){
                      var disgustBackground = b.image ("B_disgust1_brown.eps", 0, 0, b.width, b.height);
                    }
                    if(randomdisgustback == 1){
                      var disgustBackground = b.image ("B_disgust2_brown.eps", 0, 0, b.width, b.height);
                    }
                    if(randomdisgustback == 2){
                      var disgustBackground = b.image ("B_disgust3_brown.eps", 0, 0, b.width, b.height);
                    }
                    if(randomdisgustback == 3){
                      var disgustBackground = b.image ("B_disgust4_brown.eps", 0, 0, b.width, b.height);
                    }
                    if(randomdisgustback == 4){
                      var disgustBackground = b.image ("B_disgust5_brown.eps", 0, 0, b.width, b.height);
                    }
                    if(randomdisgustback == 5){
                      var disgustBackground = b.image ("B_disgust6_brown.eps", 0, 0, b.width, b.height);
                    }
}
      if (dominantEmotion == "expectation") {

                  b.fill(dominantColors[2]);
                  var prevCircles = [];
                  var circleCount = 2000;
                  maxRadius = 100;
                  minRadius = 50;
                  for(var i = 0; i < circleCount; i++) {

                  var x = b.random(0,b.width);
                  var y = b.random(0,b.height);
                  var radius = minRadius;
                  var collision = false;

                  // checks if circles collide
                  for(var j = 0; j < prevCircles.length; j++) {

                    var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y);
                    var radii = radius + prevCircles[j].radius;

                    if(distance < radii) {
                      collision = true;
                      break;
                    }
                  }

                  // find closest circle
                  var closest = maxRadius;

                  for(var j = 0; j < prevCircles.length; j++) {
                    var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y) - prevCircles[j].radius;
                    if(distance < closest) {
                      closest = distance;
                    }
                  }

                  radius = closest;

                  // draws a new circle
                  if(collision == false) {
                    var joyellipse = b.ellipse(x , y , radius *2, radius *2);
                    joyellipse.bringToFront();


                    var circle = {};
                    circle.x = x;
                    circle.y = y;
                    circle.radius = radius;

                    prevCircles.push(circle);
                  }

  }
  }


//++++++++++++++++++++++++++++++Emotion functions+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*
//PANIC//*****************************************************************************************************************************
//Farbgebung Panic: 0/Hellgrau, 1/Mittelgrau, 2/Dunkelgrau, 3/Orange
if(panicPoints >= v1)
{
  b.println("Panic V1");

  b.fill(dominantColors[3]);


        var itemDistanceY = 10;

        var itemHeight = b.height - 2 * ((((b.width - 24)/4)/4)/2) ;
        var itemsX = 8;
        var itemsX = 1;

  b.println("itemDistanceY 01: " + itemDistanceY);

    Panic ( 1, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors );

} else if (panicPoints >= v2) {
// ##Panic V2
  b.println("Panic V2");
  b.fill(dominantColors[3]);

        var itemDistanceY = (((b.width - 24)/4)/4)/2;

        b.println("itemDistanceY 01: " + itemDistanceY);

        var itemHeight = b.height/5 - 1.25 * ((((b.width - 24)/4)/4)/2);
        var itemsX = 8;
        var itemsY = 5;


    Panic ( 2, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors );
    //


} else if (panicPoints >= v3) {
  b.println("Panic V3");

  b.fill(dominantColors[0]);

        var itemDistanceY = 80;

        var itemHeight = b.height/5 - 4 * ((((b.width - 24)/4)/4)/2);
        var itemsX = 8;
        var itemsY = 5;


    Panic ( 3, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors);
    //( v, itemWidth, BeginX, BeginY, itemDistanceX, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors)

} else if (panicPoints >= v4)
{

    b.fill(dominantColors[0]);

        var itemDistanceY = 125;

        var itemHeight = b.height/5 - 6 * (( ((b.width - 24)/4)/4)/2);
        var itemsX = 8;
        var itemsY = 5;


    Panic ( 4, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors); //( v, itemWidth, BeginX, BeginY, itemDistanceX, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors)
}


//ANGER*********************************************************************************************************************************************************
//Farbgebung Anger: 0/Hellgrau, 1/Mittelgrau, 2/Dunkelgrau, 3/Rot


if(angerPoints >= 8)
{

            /* var a = 40;
               b.strokeWeight(20);
               var startingX = -3;
               var startingY = 0; */
  b.stroke(dominantColors[3]);
  Anger(1, 40, 0, 20, dominantColors); //(v, abstand, startingPoint, strokethick)

} else if (angerPoints > 6)
{
          /* var a = 40;
             b.strokeWeight(10);
             var startingX = 1;
             var startingY = 0; */
  b.stroke(dominantColors[3]);

  Anger(2, 40, 0, 10, dominantColors); //(v, abstand, startingPoint, strokethick)

} else if (angerPoints > 3)
{
     /* var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0; */

  b.stroke(dominantColors[3]);

  Anger(3, 40, 0, 2, dominantColors); //(v, abstand, startingPoint, strokethick)

} else if (angerPoints > 1)
{
  /* var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0; */
  b.stroke(dominantColors[3]);

  Anger(4, 40, 0, 2, dominantColors); //(v, abstand, startingPoint, strokethick)
}


//SORROW*********************************************************************************************************************************************************
//Farbgebung Panic: 0/Hellgrau, 1/Mittelgrau, 2/Dunkelgrau, 3/Blau

if(sorrowPoints > 8)
{
 /* var radius = 50;
  var distanceY = 90;
  var distanceX = 360;
  var startingX = 120;
  var startingY= -50;
  var step = 210;
  var multistep = 1;
  var zero = 0;
  var amount1 = 2;
  var amount2 = 1;
  var edit1 = 2;
  var edit2 = 60;
  var edit3 = 2;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4;
*/

  b.stroke(dominantColors[3]);
  b.fill(dominantColors[2]);


  Sorrow(1, 50, 90, 360, 120, -150, 210, 1, 0, 2, 1, 2, 60, 2, 2, 2.5, 3, 3.5, 4, dominantColors);
  //(v, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8)

} else if (sorrowPoints > 6)
{
            /*
  var radius = 5;
  var distanceY = 15;
  var distanceX = 25;
  var startingX = b.width/3-20;
  var startingY = b.height/30;
  var step = 80;
  var multistep = 1.6;
  var zero = 1;
  var amount1 = 17;
  var amount2 = 17;
  var edit1 = 1;
  var edit2 = 0;
  var edit3 = 1.5;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4;
  */


  b.stroke(dominantColors[3]);
  b.fill(dominantColors[2]);

  Sorrow(2, 5, 15, 25, b.width/30-20, b.height/30 - 100, 80, 1.6, 1, 17, 17, 1, 0, 1.5, 2, 2.5, 3, 3.5, 4, dominantColors);
  //(v, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8)

} else if (sorrowPoints > 3)
{
     /*    var radius = 5;
  var distanceY = 15;
  var distanceX = 25;
  var startingX = b.width/3-20;
  var startingY = b.height/30;
  var step = 80;
  var multistep = 1.6;
  var zero = 1;
  var amount1 = 17;
  var amount2 = 17;
  var edit1 = 1;
  var edit2 = 0;
  var edit3 = 1.5;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4; */

  b.stroke(dominantColors[3]);
  b.fill(dominantColors[0]);


  Sorrow(3, 5, 15,25, b.width/3-20, b.height/30 - 100, 80, 1.6, 1, 17, 17, 1, 0, 1.5, 2, 2.5, 3, 3.5, 4, dominantColors);
  //(v, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8)

} else if (sorrowPoints > 1)
{
  /*     var radius = 5;
  var distanceY = 15;
  var distanceX = 25;
  var startingX = b.width/3-20;
  var startingY = b.height/30;
  var step = 80;
  var multistep = 1.6;
  var zero = 1;
  var amount1 = 17;
  var amount2 = 17;
  var edit1 = 1;
  var edit2 = 0;
  var edit3 = 1.5;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4;*/

  b.stroke(dominantColors[3]);
  b.fill(dominantColors[0]);


  Sorrow(4, 5, 15, 25, b.width/3-20, b.height/30 -100, 80, 1.6, 1, 17,17,1, 0, 1.5, 2, 2.5, 3, 3.5, 4, dominantColors);
  //(v, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8)
}

//Joy*********************************************************************************************************************************************************
 //Farbreihenfolge: 0/Gelb, 1/Pink/, 2/Grün, 3/Rosa
 if(joyPoints > 8)
{

            /*
          var circleCount = 80000;
          var minRadius = 85;
          var maxRadius = 85;
          var multi = 1;
          var sub = 20;
          var multi2 = 2;*/


  b.fill(dominantColors[3]);

  Joy(1, 80000, 85, 85, 1, 20, 2, dominantColors ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

} else if (joyPoints > 6)
{
          /*
          var circleCount = 1500;
          var minRadius = 50;
          var maxRadius = 50;
          var multi = 2;
          var sub = 0;
          var multi2 = 3; */

  b.fill(dominantColors[0]);
  b.stroke(dominantColors[3]);

  Joy(2, 1500, 50, 50, 2, 0, 3, dominantColors ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

} else if (joyPoints > 3)
{
     /*  var circleCount = 100;
         var minRadius = 30;
         var maxRadius = 30;
         var multi = 2;
          var sub = 0;
          var multi2 = 3; */

  b.fill(dominantColors[0]);

  Joy(3, 100, 30, 30 , 2, 0, 3, dominantColors); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

} else if (joyPoints > 1)
{
  /*  var circleCount = 60;
      var minRadius = 10;
      var maxRadius = 10;
      var multi = 2;
      var sub = 0;
      var multi2 = 3;*/

  b.fill(dominantColors[0]);

  Joy(4, 60, 10, 10 , 2, 0, 3, dominantColors); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)
}




//Ecstasy*********************************************************************************************************************************************************
//Farbgebung Ecstasy: 0/Gelb, 1/Pink, 2/Blau, 3/Rot

 if(ecstasyPoints > 8)
{

            /*
          var zeilen = 9;
          var spalten = 7;
          var stepX = 70/2;
          var stepY = 70/2;
          var strichlaenge = 50;
          var strichstaerke = 15;
          var rotate = 0;
          var rotate2 = 0;
          var rotate3 = 0;
          var rotate4 = 0;
          var editStep1 = 20;
          var editStep2 = 20;
          var rotate 5 = 25;

          */

  b.stroke(dominantColors[3]);


  Ecstasy(1, 9, 7, 70/2, 70/2, 50, 15, 0, 0, 0, 0, 20, 20, 25, dominantColors); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)

} else if (ecstasyPoints > 6)
{
          /*
        var zeilen = 7;
        var spalten = 6;
        var stepX = 50;
        var stepY = 50;
        var strichlaenge = 45;
        var strichstaerke = 15;
          var rotate = 90;
          var rotate2 = 50;
          var rotate3 = 45;
          var rotate4 = 90;
          var editStep1 = -20;
          var editStep2 = -30;
          var rotate 5 = 0;*/

  b.stroke(dominantColors[3]);


  Ecstasy(2, 7,6, 50, 50, 45, 15, 70, 50, 45, 120, -20, -30, 50, dominantColors); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)

} else if (ecstasyPoints > 3)
{
     /*                                 var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;
                                        var rotate = 80;
                                        var rotate2 = 50;
                                        var rotate3 = 45;
                                        var rotate4 = 80;
                                        var editStep1 = -20;
                                        var editStep2 = -10;
                                        var rotate 5 = 0; */

  b.stroke(dominantColors[0]);

  Ecstasy(3, 7, 6, 50, 50, 30, 15, 80, 50, 45, 80, -20, -10, 5, dominantColors); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)

} else if (ecstasyPoints > 1)
{
  /*                                     var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;
                                        var rotate = 90;
                                        var rotate2 = 50;
                                        var rotate3 = 45;
                                        var rotate4 = 80;
                                        var editStep1 = -20;
                                        var editStep2 = -10;
                                        var rotate 5 = 0; */

  b.stroke(dominantColors[2]);

  Ecstasy(4, 7, 6, 50, 50, 20, 15, 80, 50, 45, 80, -20, -10, 1, dominantColors); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)
}


//Trust*********************************************************************************************************************************************************
//Farbgebung Trust: 0/Grau, 1/Hellblau, 2/Dunkelblau, 3/Gelb

//Trust V1
 if(trustPoints > 8)
{

            /*


          var zeilen = b.random(3,5);
          var spalten = b.random(2,4);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius = b.random(5,30);
          var rectsize = radius + b.random(2,15);
    */

  b.fill(dominantColors[0]);

  Trust(1,
    b.random(3,5),
    b.random(2,3),
    b.random(-80,40),
    b.random(-40, 20) ,
    b.random(50,70),
    b.random(20,30),
    dominantColors

    );
 //(v, zeilen, spalten, StartingX, StartingY, distanceX, radius, rectsize, dominantColors)

} else if (trustPoints > 6)
{

  b.fill(dominantColors[0]);

            /*

          var zeilen = b.random(3,5);
          var spalten = b.random(2,4);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius = b.random(5,30);
          var rectsize = radius + b.random(2,15);
    */



  Trust(2,
    b.random(3,5),
    b.random(2,3),
    b.random(-80,40),
    b.random(-40, 20) ,
    b.random(50,70),
    b.random(15,25),
    dominantColors

    );  //(v,strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance )

} else if (trustPoints > 3)
{

  b.fill(dominantColors[2]);

         /*

          var zeilen = b.random(3,5);
          var spalten = b.random(2,4);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius = b.random(5,30);
          var rectsize = radius + b.random(2,15);
    */


  Trust(3,
    b.random(3,6),
    b.random(2,4),
    b.random(-80,40),
    b.random(-40, 20) ,
    b.random(50,70),
    b.random(10,20),
    dominantColors

    );  //(v,strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance )

} else if (trustPoints > 1)
{

  b.fill(dominantColors[0]);

            /*

          var zeilen = b.random(3,5);
          var spalten = b.random(2,4);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius = b.random(5,30);
          var rectsize = radius + b.random(2,15);
    */


  Trust(4,
    b.random(3,6),
    b.random(2,4),
    b.random(-80,40),
    b.random(-40, 20) ,
    b.random(50,70),
    b.random(5,15),
    dominantColors

    );  //(v,strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance )
}



//Disgust*********************************************************************************************************************************************************
//Farbgebung: 0/Hellgrau, 1/Grün, 2/Blau, 3/Gelb

 if(disgustPoints > 8)
{
                /*
                var xCells = 50; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 300; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells; // step sizes (Abstand zwischen den Linien)
                var xStep = 80; // Länge der Linie in der Breite

                var distance = 120;
                var startingPosX = 20;
                var startingPosY = 80;

                var stroke = 10;
                var amount1 = 10;
                var amount2 = 3;
                var amount3 = 500;

                var sub1 = 50;
                var sub2 = 50;
                var multi = 15;
                */


  b.stroke(dominantColors[1]);

  Disgust(1,
    50,
    300,
    b.height /100,
    80,
    120,
    20,
    20,
    10,
    10,
    3,
    300,
    50,
    50,
    15,
    dominantColors);
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


} else if (disgustPoints > 6)
{
              /*    var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                  var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                  var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                  var xStep = 10 / xCells; // Länge der Linie in der Breite

                  var distance = 100;
                  var startingPosX = 100;
                  var startingPosY = 100;

                var stroke = 8;
                var amount1 = 10;
                var amount2 = 3;
                var amount3 = 400;

                var sub1 = 50;
                var sub2 = 200;
                var multi = 5; */

  b.stroke(dominantColors[1]);//

  Disgust(2,
    100,
    100,
    b.height / 100,
    10 / 100,
    100,
    100,
    20,
    8,
    10,
    3,
    200,
    50,
    200,
    5,
   dominantColors );
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


} else if (disgustPoints > 3)
{
             /*   var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite

                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                var stroke = 6;
                var amount1 = 10;
                var amount2 = 3;
                var amount3 = 200;

                var sub1 = 50;
                var sub2 = 200;
                var multi = 5; */

  b.stroke(dominantColors[1]);



  Disgust(3,
    100,
    100,
    b.height / 100,
    10 / 100,
    100,
    100,
    20,
    6,
    10,
    3,
    200,
    50,
    200,
    5,
   dominantColors );
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


} else if (disgustPoints > 1)
{
             /*   var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                var stroke = 4;
                var amount1 = 10;
                var amount2 = 3;
                var amount3 = 150;

                var sub1 = 50;
                var sub2 = 200;
                var multi = 5; */
  b.stroke(dominantColors[0]);

  Disgust(4,
    100,
    100,
    (b.height/100),
    10/100,
    100,
    100,
    20,
    4,
    10,
    3,
    150,
    50,
    200,
    5,
    dominantColors );
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


}

//Expectation*********************************************************************************************************************************************************
//Farbgebung Expectation: 0/Grau, 1/Grün, 2/Blau, 3/Gelb

   if(expectationPoints > 8)
  {
    /*
                    var circleCount = 200;
                    var minRadius = 90;
                    var maxRadius = 200;
                    var random1 = 0;
                    var random2 = 0;
                    var random3 = b.height;
                    */

  b.fill(dominantColors[3]);



    Expectation (1, 200, 90, 200, 0, 0, b.height, dominantColors); //(v, circleCount, minRadius, maxRadius, random1, random2, random3)
  } else if (expectationPoints > 6)
  {
             /*   var circleCount = 20;
                  var minRadius = 20;
                  var maxRadius = 80;
                  var random1 = 80;
                  var random2 = 40;
                  var random3 = b.height - 160; */


  b.fill(dominantColors[3]);

    Expectation (2, 20, 20, 80, 80, 40, b.height - 160, dominantColors ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

  } else if (expectationPoints > 3)
  {
    /*
                    var circleCount = 10;
                    var minRadius = 20;
                    var maxRadius = 60;
                    var random1 = 60;
                    var random2 = 30;
                    var random3 = b.height - 120; */

  b.fill(dominantColors[1]);


    Expectation (3, 10, 20, 60, 60, 30, b.height - 120, dominantColors ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

  } else if (expectationPoints > 1)
  {
    /*
                    var circleCount = 6;
                    var minRadius = 20;
                    var maxRadius = 40;
                    var random1 = 40;
                    var random2 = 20;
                    var random3 = b.height - 80; */


  b.fill(dominantColors[1]);


     Expectation (4, 6, 20, 40, 40, 20, b.height - 80, dominantColors); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)
  }

//END OF IF/ELSE-FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//END OF IF/ELSE-FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


b.resetMatrix();

///White Rect: right side
  b.fill(255);
  b.noStroke();
  b.rect(b.width-24, 0, 24, b.height);
  b.noFill();
  b.stroke(255);
  b.strokeWeight(6);
  b.rect(3, 3, b.width-6, b.height-6);


//////TYPO–SAYINGS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var distanceMargin = 9;
  var PointsizeAdvice = 18;

//TYPO PANIC

if (dominantEmotion == "panic") {
        //Texte laden
        var Panic1 = b.loadString ("Panic1.txt");
        var Panic2 = b.loadString ("Panic2.txt");
        var Panic3 = b.loadString ("Panic3.txt");
        var Panic4 = b.loadString ("Panic4.txt");
        var Panic5 = b.loadString ("Panic5.txt");
        var Panic6 = b.loadString ("Panic6.txt");
        var Panic7 = b.loadString ("Panic7.txt");
        var Panic8 = b.loadString ("Panic8.txt");
        var Panic9 = b.loadString ("Panic9.txt");

        var textArrayPanic = [Panic1,Panic2,Panic4,Panic5, Panic6, Panic7, Panic8, Panic9];
        var randomtextPanic = b.round (b.random(0,textArrayPanic.length-1));
        b.fill (0);
        var pointSizetext = PointsizeAdvice;
        var textLeadingtext = 24;
        //


        if(randomtextPanic == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextPanic == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextPanic == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 8){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic9, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Panic9, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }

  }
//TYPO ANGER

if (dominantEmotion == "anger") {
        //Texte laden
        var Anger1 = b.loadString ("Anger1.txt");
        var Anger2 = b.loadString ("Anger2.txt");
        var Anger3 = b.loadString ("Anger3.txt");
        var Anger4 = b.loadString ("Anger4.txt");
        var Anger5 = b.loadString ("Anger5.txt");
        var Anger6 = b.loadString ("Anger6.txt");
        var Anger7 = b.loadString ("Anger7.txt");
        var Anger8 = b.loadString ("Anger8.txt");
        var Anger9 = b.loadString ("Anger9.txt");
        var Anger10 = b.loadString ("Anger10.txt");
        var Anger11 = b.loadString ("Anger11.txt");
        var Anger12 = b.loadString ("Anger12.txt");
        //Array
        var textArrayAnger = [Anger1,Anger2,Anger3,Anger4, Anger5, Anger6, Anger7, Anger8, Anger9, Anger10, Anger11, Anger12];
        //Zufall
        var randomtextAnger = b.round (b.random(0,textArrayAnger.length-1));
        //
        b.fill (0);
        var pointSizetext = PointsizeAdvice;
        var textLeadingtext = 24;



        if(randomtextAnger == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextAnger == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


       if (randomtextAnger == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


       if (randomtextAnger == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 8){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger9, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger9, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 9){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger10, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger10, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 10){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger11, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger11, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 11){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger12, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Anger12, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }
      }


//TYPO SORROW

  if (dominantEmotion == "sorrow") {
          var Sorrow1 = b.loadString ("Sorrow1.txt");
          var Sorrow2 = b.loadString ("Sorrow2.txt");
          var Sorrow3 = b.loadString ("Sorrow3.txt");
          var Sorrow4 = b.loadString ("Sorrow4.txt");
          var Sorrow5 = b.loadString ("Sorrow5.txt");
          //Array
          var textArraySorrow = [Sorrow1,Sorrow2,Sorrow3, Sorrow4, Sorrow5];
          //Zufall
          var randomtextSorrow = b.round (b.random(0,textArraySorrow.length-1));
          //
          b.fill (0);
          var pointSizetext = PointsizeAdvice;
          var textLeadingtext = 24;

        if(randomtextSorrow == 0){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow1, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
          //Textrahmen-Höhe ermitteln
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
          //Textrahmen unten am Seitenrand positionieren
                  var textrahmenNew = b.text(Sorrow1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


        if(randomtextSorrow == 1){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow2, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
          //Textrahmen-Höhe ermitteln
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
          //Textrahmen unten am Seitenrand positionieren
                  var textrahmenNew = b.text(Sorrow2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


        if (randomtextSorrow == 2){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow3, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
          //Textrahmen-Höhe ermitteln
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
          //Textrahmen unten am Seitenrand positionieren
                  var textrahmenNew = b.text(Sorrow3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


          if (randomtextSorrow == 3){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow4, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
          //Textrahmen-Höhe ermitteln
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
          //Textrahmen unten am Seitenrand positionieren
                  var textrahmenNew = b.text(Sorrow4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


          if (randomtextSorrow == 4){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow5, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
          //Textrahmen-Höhe ermitteln
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
          //Textrahmen unten am Seitenrand positionieren
                  var textrahmenNew = b.text(Sorrow5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }
  }
//TYPO JOY

    if (dominantEmotion == "joy") {
                var Joy1 = b.loadString ("Joy1.txt");
                var Joy2 = b.loadString ("Joy2.txt");
                var Joy3 = b.loadString ("Joy3.txt");
                var Joy4 = b.loadString ("Joy4.txt");
                var Joy5 = b.loadString ("Joy5.txt");
                var Joy6 = b.loadString ("Joy6.txt");
                var Joy7 = b.loadString ("Joy7.txt");
                var Joy8 = b.loadString ("Joy8.txt");
                //Array
                var textArrayJoy = [Joy1,Joy2,Joy3, Joy4, Joy5, Joy6, Joy7, Joy8];
                //Zufall
                var randomtextJoy = b.round (b.random(0,textArrayJoy.length-1));
                //
                b.fill (0);
                var pointSizetext = PointsizeAdvice;
                var textLeadingtext = 24;

        if(randomtextJoy == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextJoy == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);



        }
        if (randomtextJoy == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Joy8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }
  }
//TYPO ECSTASY

  if (dominantEmotion == "ecstasy") {
                var Ecstasy1 = b.loadString ("Ecstasy1.txt");
                var Ecstasy2 = b.loadString ("Ecstasy2.txt");
                var Ecstasy3 = b.loadString ("Ecstasy3.txt");
                var Ecstasy4 = b.loadString ("Ecstasy4.txt");
                var Ecstasy5 = b.loadString ("Ecstasy5.txt");
                var Ecstasy6 = b.loadString ("Ecstasy6.txt");
                var Ecstasy7 = b.loadString ("Ecstasy7.txt");
                var Ecstasy8 = b.loadString ("Ecstasy8.txt");
                //Array
                var textArrayEcstasy = [Ecstasy1,Ecstasy2,Ecstasy3,Ecstasy4, Ecstasy5, Ecstasy6, Ecstasy7, Ecstasy8];
                //Zufall
                var randomtextEcstasy = b.round (b.random(0,textArrayEcstasy.length-1));
                //
                b.fill (0);
                var pointSizetext = PointsizeAdvice;
                var textLeadingtext = 24;

        if(randomtextEcstasy == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextEcstasy == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Ecstasy8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }
      }

//TYPO TRUST

    if (dominantEmotion == "trust") {
                var Trust1 = b.loadString ("Trust1.txt");
                var Trust2 = b.loadString ("Trust2.txt");
                var Trust3 = b.loadString ("Trust3.txt");
                var Trust4 = b.loadString ("Trust4.txt");
                var Trust5 = b.loadString ("Trust5.txt");
                var Trust6 = b.loadString ("Trust6.txt");
                var Trust7 = b.loadString ("Trust7.txt");
                var Trust8 = b.loadString ("Trust8.txt");
                var Trust9 = b.loadString ("Trust9.txt");
                //Array
                var textArrayTrust = [Trust1,Trust2,Trust3, Trust4, Trust5, Trust6, Trust7, Trust8, Trust9];
                //Zufall
                var randomtextTrust = b.round (b.random(0,textArrayTrust.length-1));
                //
                b.fill (0);
                var pointSizetext = PointsizeAdvice;
                var textLeadingtext = 24;

        if(randomtextTrust == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextTrust == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


       if (randomtextTrust == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 8){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust9, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Trust9, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }
      }
//TYPO DISGUST

   if (dominantEmotion == "disgust") {
        var Disgust1 = b.loadString ("Disgust1.txt");
        var Disgust2 = b.loadString ("Disgust2.txt");
        var Disgust3 = b.loadString ("Disgust3.txt");
        var Disgust4 = b.loadString ("Disgust4.txt");
        var Disgust5 = b.loadString ("Disgust5.txt");
        var Disgust6 = b.loadString ("Disgust6.txt");
        var Disgust7 = b.loadString ("Disgust7.txt");
        //Array
        var textArrayDisgust = [Disgust1,Disgust2,Disgust3, Disgust4, Disgust5, Disgust6, Disgust7];
        //Zufall
        var randomtextDisgust = b.round (b.random(0,textArrayDisgust.length-1));
        //
        b.fill (0);
        var pointSizetext = PointsizeAdvice;
        var textLeadingtext = 24;

        if(randomtextDisgust == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Disgust1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextDisgust == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Disgust2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Disgust3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Disgust4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Disgust5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Disgust6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Disgust7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }
  }

//TYPO EXPECTATION
  if (dominantEmotion == "expectation") {
                var Expectation1 = b.loadString ("Expectation1.txt");
                var Expectation2 = b.loadString ("Expectation2.txt");
                var Expectation3 = b.loadString ("Expectation3.txt");
                var Expectation4 = b.loadString ("Expectation4.txt");
                var Expectation5 = b.loadString ("Expectation5.txt");
                //Array
                var textArrayExpectation = [Expectation1,Expectation2,Expectation3,Expectation4, Expectation5];
                //Zufall
                var randomtextExpectation = b.round (b.random(0,textArrayExpectation.length-1));
                //
                b.fill (0);
                var pointSizetext = PointsizeAdvice;
                var textLeadingtext = 24;

        if(randomtextExpectation == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Expectation1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextExpectation == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Expectation2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextExpectation == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Expectation3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextExpectation == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Expectation4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextExpectation == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //Textrahmen-Höhe ermitteln
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //Textrahmen unten am Seitenrand positionieren
                var textrahmenNew = b.text(Expectation5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "Druk Wide\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }
 }
//END TYPO_SAYINGS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TYPO_INFOS_RIGHT BOTTOM///////

    b.rotate (b.radians(270));

              b.fill(0);
              var  text1 =  b.text( "NOW: " + b.nf(b.day(),2)+"."
              + b.nf(b.month(),2)+"."
              + b.year()+", "
              + b.nf(b.hour(),2)+":"
              + b.nf(b.minute(),2) +" UHR",
              b.width-21, b.height-6, 250, 12);


              var  text2 =  b.text( "Das ist deine aktuelle Stimmung übersetzt",
              b.width-15, b.height-6, 250, 12);


              var  text3 =  b.text( "in ein grafisches Muster durch ein 'basil.js'-Script.",
              b.width-11, b.height-6, 250, 12);

              var  text4 =  b.text( "* Ein guter Rat des chinesischen Orakels 'I GING'." ,
              b.width-7, b.height- 7.5, 250, 12);

              var  text5 =  b.text( "*" ,
              b.width-7, b.height-6, 6, 12);

    b.typo (text1, "appliedFont", "SuisseBPIntl-Regular\tRegular");
    b.typo (text1, "pointSize", 14);
    b.typo (text1, "tracking", 40);


    b.typo (text2, "appliedFont", "SuisseBPIntl-Regular\tRegular");
    b.typo (text2, "pointSize", 9);
    b.typo (text2, "tracking", 20);

    b.typo (text3, "appliedFont", "SuisseBPIntl-Regular\tRegular");
    b.typo (text3, "pointSize", 9);
    b.typo (text3, "tracking", 20);

    b.typo (text4, "appliedFont", "SuisseBPIntl-Regular\tRegular");
    b.typo (text4, "pointSize", 9);
    b.typo (text4, "tracking", 20);

    b.typo (text5, "appliedFont", "Helvetica\tRegular");
    b.typo (text5, "pointSize", 9);

//EMOTION NOW - LOGO

              b.textAlign(Justification.RIGHT_ALIGN);
              var  text5 =  b.text( "EMOTION",
              b.width-20, 85, 80, 30);

              b.typo (text5, "appliedFont", "Druk Wide\tMedium");
              b.typo (text5, "pointSize", 26);

              var  text5 =  b.text( "NOW",
              b.width-10, 85, 80, 30);

              b.typo (text5, "appliedFont", "Druk Wide\tMedium");
              b.typo (text5, "pointSize", 26);

              b.textAlign(Justification.LEFT_ALIGN);

//SAVE-PDF SETUPS

      // export the file and reset the document
      b.savePDF("/export/Poster_" + newJsonCount + ".pdf", false);

      //b.doc().print(false);

      // Druckdelay
      //b.delay(30000);

      // new count becomes the new old count
      oldJsonCount = newJsonCount;

}// PosterProzess-Ende




      b.delay(1000);
    }// while loop



}

b.go();


//++++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************************
////++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++********************************
//++++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************************
//++++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************************
//++++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************************
//++++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************************
//++++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************************
//++++++++++++++++++++++++++++++++++functions++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************************

//PANIC************************************************************************************************************************************

function Panic ( v, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors) {
b.resetMatrix();

  var itemWidth = ((b.width - 24)/4)/4;
  var BeginX = ( ((b.width - 24)/4)/4)/2;
  var BeginY = ( ((b.width - 24)/4)/4)/2;
  var itemDistanceX = ( ((b.width - 24)/4)/4)/2;


b.println("itemDistanceY: " + itemDistanceY);
  for (var i = 0; i < itemsX; i++) {

    for (var j = 0; j < itemsY; j++) {
      b.rect (BeginX + i * 4 * itemDistanceX, BeginY + j  * (itemHeight + itemDistanceY) , itemWidth, itemHeight );
    }
  }



}
//ANGER*********************************************************************************************************************************
function Anger (v, abstand, startingPoint, strokethick, dominantColors) {

  b.strokeWeight(strokethick);


    b.noFill();

    b.beginShape();
         // b.vertex(startingX,a);
          b.vertex(-abstand,startingPoint);
          b.vertex(startingPoint,abstand);
          b.vertex(abstand,startingPoint);
          b.vertex(2*abstand,abstand);
          b.vertex(3*abstand,startingPoint);
          b.vertex(4*abstand,abstand);
          b.vertex(5*abstand,startingPoint);
          b.vertex(6*abstand, abstand);
  b.endShape();

  b.beginShape();
          b.vertex(-abstand,abstand);
          b.vertex(startingPoint,2*abstand);
          b.vertex(abstand,abstand);
          b.vertex(2*abstand,2*abstand);
          b.vertex(3*abstand,abstand);
          b.vertex(4*abstand,2*abstand);
          b.vertex(5*abstand,abstand);
          b.vertex(6*abstand,2*abstand);
  b.endShape();

  b.beginShape();
          b.vertex(-abstand,2*abstand);
          b.vertex(startingPoint,3*abstand);
          b.vertex(abstand,2*abstand);
          b.vertex(2*abstand,3*abstand);
          b.vertex(3*abstand,2*abstand);
          b.vertex(4*abstand,3*abstand);
          b.vertex(5*abstand,2*abstand);
          b.vertex(6*abstand,3*abstand);
  b.endShape();

  if(v === 4) {
    return;
  }

  b.beginShape();
          b.vertex(-abstand,3*abstand);
          b.vertex(startingPoint,4*abstand);
          b.vertex(abstand,3*abstand);
          b.vertex(2*abstand,4*abstand);
          b.vertex(3*abstand,3*abstand);
          b.vertex(4*abstand,4*abstand);
          b.vertex(5*abstand,3*abstand);
          b.vertex(6*abstand,4*abstand);
  b.endShape();

    b.beginShape();
          b.vertex(-abstand,4*abstand);
          b.vertex(startingPoint,5*abstand);
          b.vertex(abstand,4*abstand);
          b.vertex(2*abstand,5*abstand);
          b.vertex(3*abstand,4*abstand);
          b.vertex(4*abstand,5*abstand);
          b.vertex(5*abstand,4*abstand);
          b.vertex(6*abstand,5*abstand);
  b.endShape();

}


//SORROW*********************************************************************************************************************************
function Sorrow (v, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8, dominantColors) {


  b.strokeWeight(1);

  for (var j = 0; j < amount1; j++) {

     for(var i = 0; i < 5; i++) {
        var x = startingX + j * distanceX;
        var y = startingY + zero * (multistep/2) * step + i * distanceY;

        b.ellipse( x, y, radius * i , radius * i );
      }
  }

  for (var j = 0; j < amount2; j++) {

     for(var i = 0; i < 5; i++) {
        var x = edit1 * startingX + edit2 + j * distanceX;
        var y = startingY + multistep * step + i*distanceY; // +160

        b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < amount1; j++) {

     for(var i = 0; i < 5; i++) {
        var x = startingX + j * distanceX;
        var y = startingY+ (multistep * edit3) *step + i*distanceY;

        b.ellipse( x, y, radius * i, radius * i);
    }
  }

    if(v === 1) {
    return;
  }

  for (var j = 0; j < amount1; j++) {

     for(var i = 0; i < 5; i++) {
        var x = startingX + j * distanceX;
        var y = startingY + (multistep * edit4) *step + i*distanceY; // +160

        b.ellipse( x, y, radius * i, radius * i);
     }
  }

}




//JOY*********************************************************************************************************************************

function Joy (v, circleCount, minRadius, maxRadius, multi, sub, multi2, dominantColors) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.noStroke();
  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {

      var x = b.random(maxRadius * multi ,b.width - sub);
      var y = b.random(50,b.height);
      var radius = minRadius;
      var collision = false;

    // checks if circles collide
    for(var j = 0; j < prevCircles.length; j++) {

      var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y);
      var radii = radius + prevCircles[j].radius;

      if(distance < radii) {
        collision = true;
        break;
      }
    }

    // find closest circle
    var closest = maxRadius;

    for(var j = 0; j < prevCircles.length; j++) {
      var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y) - prevCircles[j].radius;
      if(distance < closest) {
        closest = distance;
      }
    }

    radius = closest;

    // draws a new circle
    if(collision == false) {
      var joyellipse = b.ellipse(x , y , radius, radius);
      joyellipse.bringToFront();


      var circle = {};
      circle.x = x;
      circle.y = y;
      circle.radius = radius;

      prevCircles.push(circle);
    }
  }

}
//Ecstasy*********************************************************************************************************************************
//Ecstasy*********************************************************************************************************************************
//Ecstasy*********************************************************************************************************************************

function Ecstasy (v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5, dominantColors) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  for (var y = 1; y < zeilen; y++) {
        var rotationGrad = b.radians(b.random(0,rotate));

      for (var x = 1; x < spalten; x++) {
        var rotationGrad = b.radians(b.random(0,rotate2));
        var rotationGrad = b.radians(b.random(rotate3,rotate4));

        var posX = editStep1 +x*stepX;
        var posY = editStep2 +y*stepY;

        var rotationGrad = b.radians(rotate5);
        var rotation = b.rotate(rotationGrad);
        b.strokeWeight(strichstaerke);
        var lines = b.line(posX, posY, posX, posY-strichlaenge);
        lines.sendBackward();

      }
  }

}

//Trust*********************************************************************************************************************************
//Trust*********************************************************************************************************************************
//Trust*********************************************************************************************************************************

function Trust (v, zeilen, spalten, StartingX, StartingY, distanceX, radius, dominantColors) {

        b.colorMode(b.RGB);
        b.units(b.MM);


 b.noStroke();

        var rotationGrad = b.radians(45);
        b.rotate(rotationGrad);
        var rectsize = radius + b.random(2,15);

    //Rects:

    for (var i = 1; i < zeilen; i++) {

      for (var j = 1; j < spalten; j++) {

        var rect1 = b.rect(StartingX + i * distanceX, StartingY - rectsize/1.4 + j * (1.25 * distanceX), rectsize, rectsize  )
          rect1.sendBackward();
          rect1.sendBackward();
          rect1.sendBackward();

        var rect2 = b.rect(StartingX + distanceX/2  + i * distanceX, StartingY/2 - rectsize/1.4 + distanceX/1.5 + j * (1.25 * distanceX), rectsize, rectsize  )
            rect2.sendBackward();
            rect2.sendBackward();
            rect2.sendBackward();
      }
    }

  //Ellipses:

  b.fill(dominantColors[3]);

  for (var i = 1; i < zeilen; i++) {

      for (var j = 1; j < spalten; j++) {

        var ell1 = b.ellipse(StartingX + i * distanceX, StartingY + j * (1.25 * distanceX), radius, radius  )
            ell1.sendBackward();
            ell1.sendBackward();
            ell1.sendBackward();

        var ell2 = b.ellipse(StartingX + distanceX/2  + i * distanceX, StartingY/2 + distanceX/1.5 + j * (1.25 * distanceX), radius, radius  )
            ell2.sendBackward();
            ell2.sendBackward();
            ell2.sendBackward();
      }
  }
}

//Disgust*********************************************************************************************************************************
//Disgust*********************************************************************************************************************************
//Disgust*********************************************************************************************************************************


function Disgust (v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3, sub1, sub2, multi, dominantColors)

{
  b.noFill(); // do not fill
  b.strokeWeight(stroke); // thin strokes

  var allSnakes = [];

  for( var y = 0; y <= amount1; y++) {  // for each row

        var randomX = b.random(0, b.width- sub1);
        var randomY = b.random(0, b.height- sub2);


    for( var i = 0; i < amount2; i++) {
          var randomxStep = b.random(70,90) / xCells; // Länge der Linie in der Breite

      b.beginShape();

          for( var x = 0; x <= amount3; x++) {

            var rotationGrad = b.radians(b.random(0,50));
            var rotation = b.rotate(rotationGrad);

              b.vertex( startingPosX + y * distance + (x * randomxStep),
                        startingPosY + i * distance + (b.sin( b.PI * 5 / xCells * x ) * multi ));
          }

      b.endShape(); // close the shape, adds it to the layers
    }
  }

}

//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************

function Expectation (v, circleCount, minRadius, maxRadius, random1, random2, random3, dominantColors) {

        b.colorMode(b.RGB);
        b.units(b.MM);



  b.noStroke();

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
    var x = b.random(random1, b.width);
    var y = b.random(random2, random3);
    var radius = minRadius;

    var collision = false;

    // checks if circles collide
    for(var j = 0; j < prevCircles.length; j++) {
      var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y);
      var radii = radius + prevCircles[j].radius;

      if(distance < radii) {
        collision = true;
        break;
      }
    }

    // find closest circle
    var closest = maxRadius;
    for(var j = 0; j < prevCircles.length; j++) {
      var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y) - prevCircles[j].radius;
      if(distance < closest) {
        closest = distance;
      }
    }

    radius = closest;

    // draws a new circle
    if(collision == false) {
     var ellipse = b.ellipse(x, y, radius * 2, radius * 2);
     ellipse.sendToBack();
     ellipse.bringForward();




      var circle = {};
      circle.x = x;
      circle.y = y;
      circle.radius = radius;

      prevCircles.push(circle);
    }
  }
  b.resetMatrix();

}


