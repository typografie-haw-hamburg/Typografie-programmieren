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

  while(b.millis() < 60000) {


    var jsonFiles = dataFolder.getFiles("*.json");
    var newJsonCount = jsonFiles.length;

    // a new JSON file was added
    if (newJsonCount > oldJsonCount)
    {

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

      //Höchste X-Zahl finden
      var mostExtremeValue = 0;
      var mostExtremeAnswer = 0;

        for(var i = 0; i < superAbsoluteArray.length; i++)
        {

          if(superAbsoluteArray[i] > mostExtremeValue)
          {
            mostExtremeValue = superAbsoluteArray[i];
            mostExtremeAnswer = i;
          }
        }

      b.println ("Die höchste Zahl ist " + mostExtremeValue);
      b.println ("Die Antwort ist Nummer: " + mostExtremeAnswer);




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
      var dominantColors = [ b.color(219,212,206), b.color (156,154,149), b.color(124,123,119), b.color(255,208,73)  ];
      /*var neutralLight = b.color(219,212,206);
      var neutralMiddle = b.color (156,154,149);
      var neutralDark = b.color(124,123,119);
      var neutralHighlight = b.color(255,208,73); */


      var neutralLight = dominantColors[1];
      b.println("neutralLight: " + neutralLight);
      var neutralMiddle = dominantColors[2];
      var neutralDark = dominantColors[3];
      var neutralHighlight = dominantColors[4];


      // ein Array mit allen Emotionsnamen
      // den brauchen wir später um durch alle Emotionen zu loopen
      var emotionNames = ["panic", "anger", "sorrow", "joy", "ecstasy", "trust", "disgust", "expectation"];





    //Colors
      //1: Panic
      var panicColors = [ b.color(118,119,113), b.color(60,58,59), b.color(26,25,18), b.color(26,25,18)];
      // var PanicLightGrey = b.color(118,119,113);
      // var PanicMiddleGrey = b.color(60,58,59);
      // var PanicDarkGrey = b.color(26,25,18);
      // var PanicOrange = b.color(26,25,18);
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
      var joyColors = [ b.color(255,255,43), b.color(250,118,175), b.color(11,165,67), b.color(255,35,141) ];
      /*var JoyYellow = b.color(255,255,43);
      var JoyRose = b.color(250,118,175);
      var JoyGreen = b.color(11,165,67);
      var JoyPink = b.color(255,35,141); */
      //5: Ecstasy
      var ecstasyColors = [ b.color(255,35,141), b.color(255,255,43), b.color(19,191,213), b.color(227,6,19) ];
      /*var EcstasyPink = b.color(255,35,141);
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
          AngerPoints++;

        }
        if(y1 > edge) {
          AngerPoints++;
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
  // nach dem Zählen der Punkte hat jede Emotion einen Punktwert zwischen 0 und 10
  b.println("--------------");
 /* b.println("panic: " + emotions.panic.points);
  b.println("anger: " + emotions.anger.points);
  b.println("sorrow: " + emotions.sorrow.points);
  b.println("joy: " + emotions.joy.points);
  b.println("ecstasy: " + emotions.ecstasy.points);
  b.println("trust: " + emotions.trust.points);
  b.println("disgust: " + emotions.disgust.points);
  b.println("expectation: " + emotions.expectation.points); */

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
          colors: [ b.color(118,119,113), b.color(60,58,59), b.color(26,25,18), b.color(26,25,18)],
          points: panicPoints, // erhält später 0-10 Punkte
          v: 0 // wird später zu 1-4 je nachdem, ob es V1, V2, V3 oder V4 ist.
        },
        anger: {
          colors: [ b.color(116,105,102), b.color(71,69,65), b.color(46,49,50), b.color(227,6,19)],
          points: angerPoints,
          v: 0
        },
        sorrow: {
          colors: [ b.color(225,238,239), b.color(105,105,105), b.color(56,55,51), b.color(19,59,128)],
          points: sorrowPoints,
          v: 0
        },
        joy: {
          colors: [ b.color(255,255,43), b.color(250,118,175), b.color(11,165,67), b.color(255,35,141) ],
          points: joyPoints,
          v: 0
        },
        ecstasy: {
          colors: [ b.color(255,35,141), b.color(255,255,43), b.color(19,191,213), b.color(227,6,19) ],
          points: ecstasyPoints,
          v: 0
        },
        trust: {
          colors: [ b.color(225,239,237), b.color(16,119,167), b.color(22,65,148), b.color(254,200,0) ],
          points: trustPoints,
          v: 0
        },
        disgust: {
          colors: [ b.color(179,191,187), b.color(110,128,46), b.color(106,84,60), b.color(215,179,5) ],
          points: disgustPoints,
          v: 0
        },
        expectation: {
          colors: [ b.color(241,237,234), b.color(11,165,67), b.color(20,185,252), b.color(225,228,18) ],
          points: expectationPoints,
          v: 0
        }
      }

      // auf eine Eigenschaft einer Emotion kann man so zugreifen (z.B. Farben)
      b.println("PanicColor1: " + emotions.panic.colors[1] );
      b.println("PanicPoints: " + emotions.panic.points);
      b.println("PanicVersion: " + emotions.panic.v);

  // man kann übrigens über einen String auf eine bestimmte Emotion im Haupt emotions Object zugreifen, das wird gleich wichtig. Das nennt man Bracket notation, weil man dafür die eckigen Klammern braucht. Beispiel:
   b.println("--------------");
  b.println("Emotion points for panic: " + emotions["panic"].points);

    // genau so könnte man einen zufälligen Namen in einer Variablen abspeichern und dann auf den Punktwert von einer zufälligen Emotion zugreifen. Beispiel:
  var randomIndex = b.floor(b.random(emotionNames.length));
  var randomEmotionName = emotionNames[randomIndex];

  b.println("--------------");
  b.println("Random emotion: " + randomEmotionName);
  b.println("Points of this random emotion: " + emotions[randomEmotionName].points);


  // dominante Emotion herausfinden
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

    // jetzt wissen wir alle Emotion points und können den Emotionen Werte von V1-V4 zuordnen, wenn die Emotion noch unter V4 liegt bleibt der Wert bei 0. Der Wert wird in der Eigenschaft v von Haupt emotions Object gespeichert
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


  // wenn die dominante Emotion V1 oder V2 ist, dann die dominanten Farben in die der dominanten Emotion ändern
  // du musst auch noch überlegen, was passiert, wenn z.B. 2 Emotionen 9 Punkte haben.
  if(emotions[dominantEmotion].v == 1 || emotions[dominantEmotion].v == 2)
  {
    dominantColors = emotions[dominantEmotion].colors;
  }



//++++++++++++++++++++++++++++++Emotion functions+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//PANIC//*****************************************************************************************************************************
if(panicPoints > 8)
{
     /* var lineNumberX = 12;
        var lineNumberY = 13;

        var lineDistance = 24.8/2;
        var StartingPositionX = b.width/3;
        var StartingPositionY = b.height/4;
        var lengthvertical = b.height - b.height/4;
        var strokeGrey = 8;
        var strokeHighlight = 2
        var startingEdit = 3.4 */

        var PanicBackground = b.image ("B_panic.eps", 0, 0, b.width, b.height);

    Panic ( 1, 12, 13, 24.8/2, b.width/3, b.height/4, b.height - b.height/4, 8, 2, 3.4); //( v, lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, strokeGrey, strokeHighlight, startingEdit)

} else if (panicPoints > 6)
{
  /*    var lineNumberX = 6;
        var lineNumberY = 7;

        var lineDistance = 24.8;
        var StartingPositionX = b.width/3;
        var StartingPositionY = b.height/4;
        var lengthvertical = b.height - b.height/4
        var strokeGrey = 8;
        var strokeHighlight = 2
        var startingEdit = 3.4
        */

        var PanicBackground = b.image ("B_panic.eps", 0, 0, b.width, b.height);

    Panic ( 2, 6, 7, 24.8, b.width/3, b.height/4, b.height - b.height/4, 8, 2, 3.4); //( v, lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, strokeGrey, strokeHighlight, startingEdit)
} else if (panicPoints > 3)
{
     /*                       var lineNumberX = 6;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4
                              var strokeGrey = 5;
                              var strokeHighlight = 2
                              var startingEdit = 3.4
      */
    Panic ( 3, 6, 7, 24.8, b.width/3, b.height/4, b.height - b.height/4, 5, 2, 3.4); //( v, lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, strokeGrey, strokeHighlight, startingEdit)

} else if (panicPoints > 1)
{
  /*
                                var lineNumberX = 7;
                                var lineNumberY = 7;

                                var lineDistance = 24.8;
                                var StartingPositionX = b.width/3;
                                var StartingPositionY = b.height/4;
                                var lengthvertical = b.height - b.height/4
                                var strokeGrey = 2;
                                var strokeHighlight = 2
                                var startingEdit = 1
                                */

    Panic ( 4, 7, 7, 24.8, b.width/3, b.height/4, b.height - b.height/4, 2, 2, 1); //( v, lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, strokeGrey, strokeHighlight, startingEdit)
}


//ANGER*********************************************************************************************************************************************************


if(angerPoints > 8)
{

            /* var a = 40;
               b.strokeWeight(20);
               var startingX = -3;
               var startingY = 0; */

  var AngerBackground = b.image ("B_anger.eps", 0, 0, b.width, b.height);

  Anger(1, 40, 0, 20); //(v, abstand, startingPoint, strokethick)

} else if (angerPoints > 6)
{
          /* var a = 40;
             b.strokeWeight(10);
             var startingX = 1;
             var startingY = 0; */

  var AngerBackground = b.image ("B_anger.eps", 0, 0, b.width, b.height);

  Anger(2, 40, 0, 10); //(v, abstand, startingPoint, strokethick)

} else if (angerPoints > 3)
{
     /* var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0; */

  Anger(3, 40, 0, 2); //(v, abstand, startingPoint, strokethick)

} else if (angerPoints > 1)
{
  /* var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0; */

  Anger(4, 40, 0, 2); //(v, abstand, startingPoint, strokethick)
}


//SORROW*********************************************************************************************************************************************************

//Joy*********************************************************************************************************************************************************
 if(joyPoints > 8)
{

            /*
          var circleCount = 80000;
          var minRadius = 85;
          var maxRadius = 85;
          var multi = 1;
          var sub = 20;
          var multi2 = 2;*/


        var JoyBackground = b.image ("B_joy.eps", 0, 0, b.width, b.height);

  Joy(1, 80000, 85, 85, 1, 20, 2 ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

} else if (joyPoints > 6)
{
          /*
          var circleCount = 1500;
          var minRadius = 50;
          var maxRadius = 50;
          var multi = 2;
          var sub = 0;
          var multi2 = 3; */

        var JoyBackground = b.image ("B_joy.eps", 0, 0, b.width, b.height);

  Joy(2, 1500, 50, 50, 2, 0, 3 ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

} else if (joyPoints > 3)
{
     /*  var circleCount = 100;
         var minRadius = 30;
         var maxRadius = 30;
         var multi = 2;
          var sub = 0;
          var multi2 = 3; */

  Joy(3, 100, 30, 30 , 2, 0, 3); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

} else if (joyPoints > 1)
{
  /*  var circleCount = 60;
      var minRadius = 10;
      var maxRadius = 10;
      var multi = 2;
      var sub = 0;
      var multi2 = 3;*/

  Joy(4, 60, 10, 10 , 2, 0, 3); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)
}




//Ecstasy*********************************************************************************************************************************************************
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


        var EcstasyBackground = b.image ("B_ecstasy.eps", 0, 0, b.width, b.height);

  Ecstasy(1, 9, 7, 70/2, 70/2, 50, 15, 0, 0, 0, 0, 20, 20, 25 ); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)

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

        var EcstasyBackground = b.image ("B_ecstasy.eps", 0, 0, b.width, b.height);

  Ecstasy(2, 7,6, 50, 50, 45, 15, 90, 50, 45, 90, -20, -30, 0); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)

} else if (ecstasyPoints > 3)
{
     /*                                 var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;
                                        var rotate = 90;
                                        var rotate2 = 50;
                                        var rotate3 = 45;
                                        var rotate4 = 80;
                                        var editStep1 = -20;
                                        var editStep2 = -10;
                                        var rotate 5 = 0; */

  Ecstasy(3, 7, 6, 50, 50, 30, 15, 90, 50, 45, 80, -20, -10, 0); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)

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

  Ecstasy(4, 7, 6, 50, 50, 20, 15, 90, 50, 45, 80, -20, -10, 0); //(v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5)
}


//Trust*********************************************************************************************************************************************************

//Trust V1
 if(trustPoints > 8)
{

            /*


    var strokeAmount = 15;
    var parallelx = b.random(0,b.width-b.width/3);
    var endingY2 = b.random (b.height/1.5, b.height-b.height/4);
    var linelength = b.random(0,b.height/3);
    var PY2edit = 0;
    var bigstroke = 7;
    var thinstroke = 2.5;
    var linelength = b.random(0,b.height/3);
    var whiteline = b.height/2.5;
    var PY2lineLength = b.random (b.height/1.5, b.height-b.height/4);
    var PY2negLength = b.height/2.5 +80;
    var distance = 15;
    */



        var TrustBackground = b.image ("B_trust.eps", 0, 0, b.width, b.height);

  Trust(1,
    15,
    b.random(0 , b.width-b.width/3),
    b.random (b.height/1.5, b.height-b.height/4),
    b.random(0,b.height/3) ,
    0,
    7,
    2.5,
    b.random(0,b.height/3),
    b.height/2.5,
    b.random (b.height/1.5, b.height-b.height/4),
    b.height/2.5 +80,
    15

    );
  //(v,strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance )

} else if (trustPoints > 6)
{
            /*

    var strokeAmount = 6;
    var parallelx = b.width - b.random(100,400);
    var endingY2 = b.height;
    var linelength = b.random(0,b.height/3);
    var PY2edit = b.height/2.5;
    var bigstroke = 7;
    var thinstroke = 2.5;
    var linelength = 0;
    var whiteline = b.height/2.5;
    var PY2lineLength = b.height - b.height/2.5;
    var PY2negLength = b.height - b.height/2.5;
    var distance = 15;
    */

        var TrustBackground = b.image ("B_trust.eps", 0, 0, b.width, b.height);

  Trust(2,
    6,
    b.width - b.random(100,400),
    b.height,
    b.random(0,b.height/3) ,
    b.height/2.5,
    7,
    2.5,
    0,
    b.height/2.5,
    b.height - b.height/2.5,
    b.height - b.height/2.5,
    15

    );  //(v,strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance )

} else if (trustPoints > 3)
{
            /*

    var strokeAmount = 6;
    var parallelx = b.width - b.random(100,400);
    var endingY2 = b.height;
    var linelength = b.random(0,b.height/3);
    var PY2edit = 0;
    var bigstroke = 7;
    var thinstroke = 2.5;
    var linelength = b.random(0 , b.height/3);
    var whiteline = b.height/2.5;
    var PY2lineLength = b.height - b.height/2.5;
    var PY2negLength = b.height - b.height/2.5;
    var distance = 15;
    */

  Trust(3,
    6,
    b.width - b.random(100,400),
    b.height,
    b.random(0,b.height/3) ,
    0,
    7,
    2.5,
    b.random(0 , b.height/3),
    b.height/2.5,
    b.height - b.height/2.5,
    b.height - b.height/2.5,
    15

    );  //(v,strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance )

} else if (trustPoints > 1)
{
            /*

    var strokeAmount = 2;
    var parallelx = b.width - b.random(50,200);
    var endingY2 = b.random(b.height/1.5, b.height - b.height/4);
    var linelength = b.random(0,b.height/3);
    var PY2edit = 0;
    var bigstroke = 7;
    var thinstroke = 2.5;
    var linelength = b.random(0 , b.height/3);
    var whiteline = b.height/4;
    var PY2lineLength = b.height - b.height/2.5;
    var PY2negLength = b.height - b.height/2.5;
    var distance = 15;
    */

  Trust(4,
    2,
    b.width - b.random(50,200),
    b.random(b.height/1.5, b.height - b.height/4),
    b.random(0,b.height/3) ,
    0,
    7,
    2.5,
    b.random(0 , b.height/3),
    b.height/4,
    b.height - b.height/2.5,
    b.height - b.height/2.5,
    15

    );  //(v,strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance )
}



//Disgust*********************************************************************************************************************************************************

 if(disgustPoints > 8)
{

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


                var DisgustBackground = b.image ("B_disgust2_green.eps", 0, 0, b.width, b.height);

  Disgust(1,
    50,
    300,
    b.height /100,
    80,
    120,
    20,
    80,
    10,
    10,
    3,
    500,
    50,
    50,
    15 );
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


} else if (disgustPoints > 6)
{
                  var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
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
                var multi = 5;

                var DisgustBackground = b.image ("B_disgust2_green.eps", 0, 0, b.width, b.height);

  Disgust(2,
    100,
    100,
    b.height / 100,
    10 / 100,
    100,
    100,
    100,
    8,
    10,
    3,
    400,
    50,
    200,
    5 );
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


} else if (disgustPoints > 3)
{
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
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
                var multi = 5;

                var DisgustBackground = b.image ("B_disgust2_green.eps", 0, 0, b.width, b.height);

  Disgust(3,
    100,
    100,
    b.height / 100,
    10 / 100,
    100,
    100,
    100,
    6,
    10,
    3,
    200,
    50,
    200,
    5 );
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


} else if (disgustPoints > 1)
{
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
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
                var multi = 5;


  Disgust(4,
    100,
    100,
    (b.height/100),
    10/100,
    100,
    100,
    100,
    4,
    10,
    3,
    150,
    50,
    200,
    5 );
  //( v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3 sub1, sub2, multi)


}

//Expectation*********************************************************************************************************************************************************
   if(expectationPoints > 8)
  {

                    var circleCount = 200;
                    var minRadius = 90;
                    var maxRadius = 200;
                    var random1 = 0;
                    var random2 = 0;
                    var random3 = b.height;



                  var ExpectationBackground = b.image ("B_expectation.eps", 0, 0, b.width, b.height);

    Expectation (1, 200, 90, 200, 0, 0, b.height); //(v, circleCount, minRadius, maxRadius, random1, random2, random3)
  } else if (expectationPoints > 6)
  {
                  var circleCount = 20;
                  var minRadius = 20;
                  var maxRadius = 80;
                  var random1 = 80;
                  var random2 = 40;
                  var random3 = b.height - 160;

                  var ExpectationBackground = b.image ("B_expectation.eps", 0, 0, b.width, b.height);

    Expectation (2, 20, 20, 80, 80, 40, b.height - 160 ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

  } else if (expectationPoints > 3)
  {
                    var circleCount = 10;
                    var minRadius = 20;
                    var maxRadius = 60;
                    var random1 = 60;
                    var random2 = 30;
                    var random3 = b.height - 120;

    Expectation (3, 10, 20, 60, 60, 30, b.height - 120 ); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)

  } else if (expectationPoints > 1)
  {
                    var circleCount = 6;
                    var minRadius = 20;
                    var maxRadius = 40;
                    var random1 = 40;
                    var random2 = 20;
                    var random3 = b.height - 80;

     Expectation (4, 6, 20, 40, 40, 20, b.height - 80); //(v, circleCount, minRadius, maxRadius, multi, sub, multi2)
  }

}

      // export the file and reset the document
      b.savePDF("/export/Poster_" + newJsonCount +  ".pdf", false);
      //b.clear(b.doc());

      // new count becomes the new old count
      oldJsonCount = newJsonCount;

    }



    b.delay(1000);
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

function Panic ( v, lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, strokeGrey, strokeHighlight, startingEdit)
{

        b.colorMode(b.RGB);
        b.units(b.MM);

            b.colorMode(b.RGB);

                var PanicLightGrey = b.color(118,119,113);
                var PanicMiddleGrey = b.color(60,58,59);
                var PanicDarkGrey = b.color(26,25,18);
                var PanicOrange = b.color(233,78,36);

                var neutralLight = PanicLightGrey;
                var neutralMiddle = PanicMiddleGrey ;
                var neutralDark = PanicDarkGrey;
                var neutralHighlight = PanicOrange;

      // Big Lines
        for ( var k = 0; k < lineNumberX; k++) {
          b.stroke(PanicDarkGrey);
          b.strokeWeight(strokeGrey);

          b.line(StartingPositionX + k * lineDistance, StartingPositionY, StartingPositionX + k * lineDistance, lengthvertical );




      //Thin Lines
          for( var l = 0; l < lineNumberY; l++)
          {
              b.stroke(PanicOrange);
              b.strokeWeight(strokeHighlight);

            b.line(StartingPositionX - startingEdit, StartingPositionY + l * lineDistance, b.width, StartingPositionY + l * lineDistance );


          }

        }
      b.resetMatrix();

}

//ANGER*********************************************************************************************************************************
//ANGER*********************************************************************************************************************************
//ANGER*********************************************************************************************************************************
function Anger (v, abstand, startingPoint, strokethick) {

        b.colorMode(b.RGB);
        b.units(b.MM);

                var AngerRed = b.color(227,6,19);
                var AngerDarkGrey = b.color(46,49,50);
                var AngerMiddleGrey = b.color(71,69,65);
                var AngerLightGrey = b.color(116,105,102);

                var neutralLight = AngerLightGrey;
                var neutralMiddle = AngerMiddleGrey ;
                var neutralDark = AngerDarkGrey;
                var neutralHighlight = AngerRed;

        b.noFill();
    //    b.stroke(angerColors[v - 1]);
      b.stroke(AngerRed);
        b.strokeWeight(strokethick);

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
b.resetMatrix();

}


//SORROW*********************************************************************************************************************************
//SORROW*********************************************************************************************************************************
//SORROW*********************************************************************************************************************************





//JOY*********************************************************************************************************************************

function Joy (v, circleCount, minRadius, maxRadius, multi, sub, multi2) {


        b.colorMode(b.RGB);
        b.units(b.MM);

                var JoyYellow = b.color(255,255,43);
                var JoyRose = b.color(250,118,175);
                var JoyPink = b.color(255,35,141);
                var JoyGreen = b.color(11,165,67);

                var neutralLight = JoyGreen;
                var neutralMiddle = JoyRose;
                var neutralDark = JoyYellow;
                var neutralHighlight = JoyPink;

  b.fill(neutralHighlight);

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {

    var x = b.random(maxRadius * multi ,b.width - sub);
    var y = b.random(0,b.height - maxRadius * multi2);
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
      b.ellipse(x , y , radius, radius);

      var circle = {};
      circle.x = x;
      circle.y = y;
      circle.radius = radius;

      prevCircles.push(circle);
    }
  }
  b.resetMatrix();

}
//Ecstasy*********************************************************************************************************************************
//Ecstasy*********************************************************************************************************************************
//Ecstasy*********************************************************************************************************************************

function Ecstasy (v, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5) {


        b.colorMode(b.RGB);
        b.units(b.MM);

           /*     var EcstasyPink = b.color(255,35,141);
                var EcstasyYellow = b.color(255,255,43);
                var EcstasyRed = b.color(227,6,19);
                var EcstasyBlue = b.color(19,191,213);

                var neutralLight = EcstasyBlue;
                var neutralMiddle = EcstasyPink;
                var neutralDark = EcstasyYellow;
                var neutralHighlight = EcstasyRed;

  b.stroke(neutralMiddle); */


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

      }
  }
  b.resetMatrix();

}

//Trust*********************************************************************************************************************************
//Trust*********************************************************************************************************************************
//Trust*********************************************************************************************************************************

function Trust (v, strokeAmount, parallelx, endingY2, linelength, PY2edit, bigStroke, thinStroke, linelength, whiteline, PY2lineLength, PY2negLength, distance ) {

        b.colorMode(b.RGB);
        b.units(b.MM);

//  b.stroke(neutralDark);

                var TrustDarkBlue = b.color(22,65,148);
                var TrustLightBlue = b.color(16,119,167);
                var TrustGrey = b.color(225,239,237);
                var TrustYellow = b.color(254,200,0);

                var neutralLight = TrustGrey;
                var neutralMiddle = TrustLightBlue;
                var neutralDark = TrustDarkBlue;
                var neutralHighlight = TrustYellow;


      b.stroke(0);//Edit Color
      b.strokeWeight(bigStroke);


  //Big lines
  for( var j = 0; j < strokeAmount; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(bigStroke);

    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = linelength; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = endingY2; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

// Thin lines
  for( var j = 0; j < strokeAmount-1; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(thinStroke);

    //  1. Point:
      var Px1 = parallelx + distance/2; //Verschiebung von links nach rechts
      var Py1 = whiteline; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx+ distance/2;
      var Py2 = PY2lineLength; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

//Thin negative Lines
    for( var j = 0; j < strokeAmount; j++) {

    b.stroke(255);//Edit Color
    b.strokeWeight(thinStroke);

    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = whiteline; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = PY2negLength; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }
b.resetMatrix();

}

//Disgust*********************************************************************************************************************************
//Disgust*********************************************************************************************************************************
//Disgust*********************************************************************************************************************************


function Disgust (v, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3, sub1, sub2, multi )

{



        b.colorMode(b.RGB);
        b.units(b.MM);

                var DisgustGrey = b.color(179,191,187);
                var DisgustYellow = b.color(215,179,5);
                var DisgustGreen = b.color(110,128,46);
                var DisgustBrown = b.color(106,84,60);

                var neutralLight = DisgustGrey;
                var neutralMiddle = DisgustGreen;
                var neutralDark = DisgustBrown;
                var neutralHighlight = DisgustYellow;

             //   b.stroke(neutralMiddle);


  b.noFill(); // do not fill
  b.strokeWeight(stroke); // thin strokes
  b.stroke(0);

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
  b.resetMatrix();

}

//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************

function Expectation (v, circleCount, minRadius, maxRadius, random1, random2, random3) {



        b.colorMode(b.RGB);
        b.units(b.MM);

                var ExpectationBlue = b.color(20,185,252);
                var ExpectationGreen = b.color(11,165,67);
                var ExpectationGrey = b.color(241,237,234);
                var ExpectationYellow = b.color(225,228,18);

                var neutralLight = ExpectationGrey;
                var neutralMiddle = ExpectationGreen;
                var neutralDark = ExpectationBlue;
                var neutralHighlight = ExpectationYellow;

 // b.fill(neutralLight);

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
      b.ellipse(x, y, radius * 2, radius * 2);

      var circle = {};
      circle.x = x;
      circle.y = y;
      circle.radius = radius;

      prevCircles.push(circle);
    }
  }
  b.resetMatrix();

}


