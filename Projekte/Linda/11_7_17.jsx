// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


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
  var oldJsonFiles = dataFolder.getFiles("*.json");
  for (var i = 0; i < oldJsonFiles.length; i++)
  {
    oldJsonFiles[i].remove();
  }



  // count all JSON files that are in the folder
  var oldJsonCount = dataFolder.getFiles("*.json").length;

 while(b.millis() < 60000000) {
    //while(b.millis() < 30000) {

    var jsonFiles = dataFolder.getFiles("*.json");
    var newJsonCount = jsonFiles.length;

    // a new JSON file was added
    if (newJsonCount > oldJsonCount)
    {


      // activate InDesign
     // File(app.fullName).execute();
     // app.activate();

      b.clear(b.doc());
      b.resetMatrix();

      // the new file is the last of all JSON files
      var addedJsonFile = jsonFiles[newJsonCount - 1];

      var jsonString = b.loadString(addedJsonFile);
      var jsonData = b.JSON.decode(jsonString);

      //create empty arrays for data
      var corrXarray = [];
      var corrYarray = [];
      var absoluteArrayX = [];
      var absoluteArrayY = [];
      var superAbsoluteArray = [];

        for (var i = 0; i < jsonData.length; i++)
        {

          //all X-Data, x-Format: iMac 27''
          var corrX = b.map(jsonData[i].x, 0, 2560, -100, 100);
          corrXarray.push(corrX);

          //all Y-Data, y-FormT: iMac 27''
          var corrY = b.map(jsonData[i].y, 0, 1440 , -100, 100);
          corrYarray.push(corrY);

          //absolute Value
          var absX = b.abs(corrXarray[i]);
          absoluteArrayX.push(absX);

          var absY = b.abs(corrYarray[i]);
          absoluteArrayY.push(absY);

          //adds X und Y-data:
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

      // create minimum points for V1, V2, V3 and V4
      var v1 = 8;
      var v2 = 6;
      var v3 = 3;
      var v4 = 1;

    // neutral colors
      var dominantColors = [ b.color(210,210,206), b.color (170,170,170), b.color(150,150,150), b.color(255,208,73) ];

      var neutralLight = b.color(210,210,206);
      var neutralMiddle = b.color (170,170,170);
      var neutralDark = b.color(150,150,150);
      var neutralHighlight = b.color(255,208,73);

      // array with all emotion categories
      // we need this one later to loop through all emotions
      var emotionNames = ["panic", "anger", "sorrow", "joy", "ecstasy", "trust", "disgust", "expectation"];

    //Colors
      //1: Panic
      var panicColors = [ b.color(118,119,113), b.color(67,64,60), b.color(60,58,59), b.color(233,78,36)];
      /* var PanicLightGrey = b.color(118,119,113);
      var PanicMiddleGrey = b.color(60,58,59);
      var PanicDarkGrey = b.color(67,64,66),;
      /var PanicOrange = b.color(233,78,36); */
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

    //**************************************//////////////////Question 1////////////////
    //Top left
      if(x1 < 0) {
        if(y1 < 0) {


        }
        if(y1 < - edge) {

        }
    }
    //top right
      if(x1 > 0) {
        if(y1 < 0) {
        trustPoints++;

        }
        if(y1 < - edge) {
        trustPoints++;

        }
    }
    //bottom right
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
    //bottom links
      if(x1 < 0) {
        if(y1 > 0) {
          angerPoints++;

        }
        if(y1 > edge) {
          angerPoints++;
        }
    }
    //////////SPECIALS/////////////////////

    //top right
      if(x1 > - edge && x1 < edge) {
        if(y1 < 0) {
          joyPoints++;
        }
        if(y1 < - edge) {
          joyPoints++;
        }
    }
    //top right / -Edge
      if(x1 < -edge) {
        if(y1 < 0) {
          ecstasyPoints++;

        }
        if(y1 < - edge) {
          ecstasyPoints++;
        }
    }
    //top right / -Edge
      if(x1 > -edge) {
        if(y1 < 0) {
        expectationPoints++;

        }
        if(y1 < - edge) {
        expectationPoints++;
        }
    }

    //**************************************//////////////////Question 2////////////////
    //top left
      if(x2 < 0) {
        if(y2 < 0) {
          ecstasyPoints++;

        }
        if(y2 < - edge) {
          ecstasyPoints++;

        }
    }
    //top right
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
    //bottom right
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
    //bottom left
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

    //top middle
      if(x1 > - edge && x1 < edge) {
        if(y1 < 0) {
          joyPoints++;
        }
        if(y1 < - edge) {
          joyPoints++;
        }
    }

    //**************************************//////////////////Question 3////////////////
    //top left
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
    //top right
      if(x3 > 0) {
        if(y3 < 0) {
          sorrowPoints++;
        }
        if(y3 < - edge) {
          sorrowPoints++;


        }
    }
    //bottom right
      if(x3 > 0) {
        if(y3 > 0) {
          trustPoints++;
        }
        if(y3 > edge) {
          trustPoints++;

        }
    }
    //bottom left
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

    //bottom middle
      if(x1 > - edge && x1 < edge) {
        if(y1 > 0) {
          joyPoints++;
        }
        if(y1 > edge) {
          joyPoints++;
        }
    }

    //**************************************//////////////////Question 4////////////////
    //Top left
      if(x4 < 0) {
        if(y4 < 0) {

        }
        if(y4 < - edge) {

        }
    }
    //Top right
      if(x4 > 0) {
        if(y4 < 0) {

        }
        if(y4 < - edge) {


        }
    }
    //bottom right
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
    //bottom left
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

    // middle left Edge
      if(x4 < - edge) {
        if(y4 > -edge && y4 < edge) {
          panicPoints++;
        }
        if(y4 > -edge && y4 < 0) {
          panicPoints++;
        }
    }
    // middle left
      if(x4 < 0) {
        if(y4 > -edge && y4 < edge) {
          disgustPoints++;
              }
        if(y4 > -edge && y4 < 0) {
          disgustPoints++;
           }
    }
    //top everything
        if(y4 < 0) {
          angerPoints++;
        }
        if(y4 < -edge) {
          angerPoints++;
        }
    //bottom everything
        if(y4 > 0) {
           joyPoints++;
         }
        if(y4 > edge) {
           joyPoints++;
        }

    //**************************************//////////////////Question 5////////////////
    //top left
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
    //top right
      if(x5 > 0) {
        if(y5 < 0) {

        }
        if(y5 < - edge) {


        }
    }
    //bottom right
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
    //bottom left
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

    // left middle Edge
      if(x5 < - edge) {
        if(y5 > -edge && y5 < edge) {
          panicPoints++;
        }
        if(y5 > -edge && y5 < 0) {
          panicPoints++;
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Evaluation of the points
  b.println("--------------");


  b.println("panic: " + panicPoints);
  b.println("anger: " + angerPoints);
  b.println("sorrow: " + sorrowPoints);
  b.println("joy: " + joyPoints);
  b.println("ecstasy: " + ecstasyPoints);
  b.println("trust: " + trustPoints);
  b.println("disgust: " + disgustPoints);
  b.println("expectation: " + expectationPoints);

// One main object, in which every emotions are saved as objects with all importants values
      var emotions =
      {
        panic: {
          colors: [ b.color(200,190,190), b.color(145,135,135), b.color(115,105,105), b.color(233,78,36)],
          //light grey, middle grey, dark grey, orange
          points: panicPoints, // gets later 1-10 points
          v: 0, // becomes later to the value of 1-4, depending on being V1, V2, V3 or V4.
        },
        anger: {
          colors: [ b.color(150,150,150), b.color(135,135,135), b.color(105,105,105), b.color(227,6,19)],
          //light grey, middle grey, dark grey, red
          points: angerPoints,
          v: 0,

        },
        sorrow: {
          colors: [ b.color(225,238,239), b.color(120,135,160) , b.color(90,105,130), b.color(30,80,160)],
          //light grey, middle grey, dark grey, blue
          points: sorrowPoints,
          v: 0,

        },
        joy: {
          colors: [ b.color(255,255,43), b.color(255,35,141), b.color(240,240,240), b.color(255,22,224) ],
          //yellow, pink, green, rose
          points: joyPoints,
          v: 0,


        },
        ecstasy: {
          colors: [ b.color(250,255,100), b.color(227,6,19), b.color(19,191,213), b.color(255,9,94) ],
          //yellow, pink, turquoise, red
          points: ecstasyPoints,
          v: 0,

        },
        trust: {
          colors: [ b.color(255,239,237), b.color(16,140,196), b.color(60,100,220), b.color(255,252,52) ],
          //grey, light blue, dark blue, yellow
          points: trustPoints,
          v: 0,

        },
        disgust: {
          colors: [ b.color(179,191,187), b.color(110,128,46), b.color(135,110,90), b.color(215,179,5) ],
          //grey, green, brown, yellow
          points: disgustPoints,
          v: 0,

        },
        expectation: {
          colors: [ b.color(241,237,234), b.color(11,165,67), b.color(20,185,252), b.color(225,228,18) ],
          //grey, green, blue, yellow
          points: expectationPoints,
          v: 0,

        }
      }

// Figuring out the dominant emotion

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



// V1/V2/V3/V4 assign:

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

  // collecting all emotions with highest points
  var topEmotions = [];

  for (var i = 0; i < emotionNames.length; i++) {
    var currentEmotionName = emotionNames[i];  // anger, disgust ...
    var currentEmotion = emotions[currentEmotionName];

    if(currentEmotion.points == highestEmotionPoints) {
      topEmotions.push(currentEmotionName);
    }
  }

  // select the dominat emotion as the emotion with the highest points
  var randomNumber = b.floor(b.random(0, topEmotions.length));
  dominantEmotion = topEmotions[randomNumber];



// If assignment of V1 or V2, the emotion defines the colors
  if(emotions[dominantEmotion].v == 1 || emotions[dominantEmotion].v == 2)
  {
    dominantColors = emotions[dominantEmotion].colors;
  }
  b.println("--------------");
  b.println("DominantColors: "+ emotions[dominantEmotion].colors + dominantEmotion);
  b.println("1.Farbe der DominantColor: " + dominantColors[0]);


  b.println("--------------");
  b.println("Dominant emotion: " + dominantEmotion);


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
//Colors Panic: 0/light grey, 1/middle grey, 2/dark grey, 3/orange
if(panicPoints >= v1)
{
  b.println("Panic V1");

  b.fill(dominantColors[0]);

  var seitenAbstand = 11.5/2;
        var BeginX = (((b.width - 24)/4)/4)/2 + seitenAbstand;
        var itemDistanceY = 10;

        var itemHeight = b.height - 2 * ((((b.width - 24)/4)/4)/2) ;
        var itemsX = 8;
        var itemsY = 1;


    Panic ( 1, BeginX, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors );

} else if (panicPoints >= v2) {
// ##Panic V2
  b.println("Panic V2");
  b.fill(dominantColors[0]);

  var seitenAbstand = 11.5/2;

        var BeginX = (((b.width - 24)/4)/4)/2 + seitenAbstand;
        var itemDistanceY = (((b.width - 24)/4)/4)/2;

        var itemHeight = b.height/5 - 1.25 * ((((b.width - 24)/4)/4)/2);
        var itemsX = 8;
        var itemsY = 4;


    Panic ( 2, BeginX, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors );
    //


} else if (panicPoints >= v3) {
  b.println("Panic V3");

  b.fill(dominantColors[0]);

  var seitenAbstand = 11.5/2;
        var BeginX = (((b.width - 24)/4)/4)/2 + seitenAbstand;

        var itemDistanceY = 26;

        var itemHeight = b.height/5 - 4 * ((((b.width - 24)/4)/4)/2);
        var itemsX = 8;
        var itemsY = 4;


    Panic ( 3, BeginX, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors);

} else if (panicPoints >= v4)
{

    b.fill(dominantColors[2]);

  var seitenAbstand = 11.5;
  var BeginX = ( ((b.width - 24)/4)/4)/2 + seitenAbstand/2;
        var itemDistanceY = 40.5;

        var itemHeight = b.height/5 - 6 * (( ((b.width - 24)/4)/4)/2);
        var itemsX = 8;
        var itemsY = 4;


    Panic ( 4, BeginX, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors);
}


//ANGER*********************************************************************************************************************************************************
//colors anger: 0/light grey, 1/middle grey, 2/dark grey, 3/red


if(angerPoints >= v1)
{

               var abstand = 41;
               var startingPoint = 0;
               var strokethick = 15;

  b.stroke(dominantColors[3]);

  Anger(1, abstand, startingPoint, strokethick, dominantColors);

} else if (angerPoints >= v2)
{
               var abstand = 41;
               var startingPoint = 0;
               var strokethick = 8;

  b.stroke(dominantColors[3]);

  Anger(2, abstand, startingPoint, strokethick, dominantColors);

} else if (angerPoints >= v3)
{
               var abstand = 41;
               var startingPoint = 0;
               var strokethick = 4;

  b.stroke(dominantColors[3]);

  Anger(3, abstand, startingPoint, strokethick, dominantColors);

} else if (angerPoints >= v4)
{
               var abstand = 41;
               var startingPoint = 3;
               var strokethick = 2;
  b.stroke(dominantColors[3]);

  Anger(4, abstand, startingPoint, strokethick, dominantColors);
}


//SORROW*********************************************************************************************************************************************************
//colors Panic: 0/light grey, 1/middle grey, 2/dark grey, 3/blue

if(sorrowPoints >= v1)
{
  var radius = 15;
  var distanceY = 30;
  var distanceX = 104.75;
  var startingX = 45;
  var startingY= - 10;
  var step = 210;
  var multistep = 0.313;
  var zero = 0;
  var amount1 = 2;
  var amount2 = 1;
  var edit1 = 0.75;
  var edit2 = 63;
  var edit3 = 2.2;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4;

  b.strokeWeight(2);

  b.stroke(dominantColors[3]);
  b.fill(dominantColors[2]);


  Sorrow(1, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8, dominantColors);


} else if (sorrowPoints >= v2)
{
  b.strokeWeight(1);

  var seitenAbstand = 4.1;

  var radius = 5;
  var distanceY = 15;
  var distanceX = 23.25;
  var startingX = 17.375;
  var startingY = b.random(-70,-15);
  var step = b.random(80,95);
  var multistep = 1.6;
  var zero = 1;
  var amount1 = 7;
  var amount2 = 7;
  var edit1 = 1;
  var edit2 = 0;
  var edit3 = 1.5;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4;



  b.stroke(dominantColors[1]);
  b.fill(dominantColors[3]);

  Sorrow(2, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8, dominantColors);

} else if (sorrowPoints >= v3)
{
  var seitenAbstand = 4.1;
  b.strokeWeight(1);

  var radius = 4;
  var distanceY = 8;
  var distanceX = 23.25;
  var startingX = 17.375;
  var startingY = b.random(-45,-15);
  var step = 60;
  var multistep = 1.5;
  var zero = 1;
  var amount1 = 7;
  var amount2 = 7;
  var edit1 = 1;
  var edit2 = 0;
  var edit3 = 1.5;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4;

  b.stroke(dominantColors[3]);
  b.fill(dominantColors[1]);


  Sorrow(3, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8, dominantColors);

} else if (sorrowPoints >= v4)
{
  var seitenAbstand = 4.1;
  b.strokeWeight(1);

  var radius = 4;
  var distanceY = 8;
  var distanceX = 23.25;
  var startingX = 17.375;
  var startingY = b.random(-45,-15);
  var step = b.random(50,100);
  var multistep = 1.5;
  var zero = 1;
  var amount1 = 7;
  var amount2 = 7;
  var edit1 = 1;
  var edit2 = 0;
  var edit3 = 1.5;
  var edit4 = 2;
  var edit5 = 2.5;
  var edit6 = 3;
  var edit7 = 3.5;
  var edit8 = 4;

  b.stroke(255);
  b.fill(dominantColors[1]);


  Sorrow(4, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8, dominantColors);
}

//Joy*********************************************************************************************************************************************************
 //Colors Joy: 0/yellow, 1/Pink/, 2/green, 3/rose
 if(joyPoints >= v1)
{


          var circleCount = 80000;
          var minRadius = 85;
          var maxRadius = 85;
          var multi = 1;
          var sub = 20;
          var multi2 = 2;


  b.fill(dominantColors[3]);

  Joy(1, circleCount, minRadius, maxRadius, multi, sub, multi2, dominantColors );

} else if (joyPoints >= v2)
{

          var circleCount = 1500;
          var minRadius = 50;
          var maxRadius = 50;
          var multi = 2;
          var sub = 0;
          var multi2 = 3;

  b.fill(dominantColors[0]);
  b.stroke(dominantColors[3]);

  Joy(2, circleCount, minRadius, maxRadius, multi, sub, multi2, dominantColors );

} else if (joyPoints >= v3)
{
        var circleCount = 200;
         var minRadius = 40;
         var maxRadius = 40;
         var multi = 2;
          var sub = 0;
          var multi2 = 3;

  b.fill(dominantColors[3]);

  Joy(3, circleCount, minRadius, maxRadius, multi, sub, multi2, dominantColors);

} else if (joyPoints >= v4)
{
    var circleCount = 100;
      var minRadius = 20;
      var maxRadius = 20;
      var multi = 2;
      var sub = 0;
      var multi2 = 3;

  b.fill(dominantColors[2]);

  Joy(4, circleCount, minRadius, maxRadius, multi, sub, multi2, dominantColors);
}




//Ecstasy*********************************************************************************************************************************************************
//Colors Ecstasy: 0/yellow, 1/Pink, 2/blue, 3/red

 if(ecstasyPoints >= v1)
{

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
          var editStep1 = 25;
          var editStep2 = 25;
          var rotate5 = 25;


  b.stroke(dominantColors[3]);


  Ecstasy(1, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5, dominantColors);

} else if (ecstasyPoints >= v2)
{

        var zeilen = 7;
        var spalten = 6;
        var stepX = 50;
        var stepY = 50;
        var strichlaenge = 45;
        var strichstaerke = 15;
          var rotate = 90;
          var rotate2 = 50;
          var rotate3 = 45;
          var rotate4 = 120;
          var editStep1 = -15;
          var editStep2 = -25;
          var rotate5 = 50;

  b.stroke(dominantColors[3]);


  Ecstasy(2, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5, dominantColors);

} else if (ecstasyPoints >= v3)
{
                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;
                                        var rotate = 80;
                                        var rotate2 = 50;
                                        var rotate3 = 45;
                                        var rotate4 = 80;
                                        var editStep1 = -15;
                                        var editStep2 = -5;
                                        var rotate5 = 5;

  b.stroke(dominantColors[1]);

  Ecstasy(3, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5, dominantColors);

} else if (ecstasyPoints >= v4)
{
                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;
                                        var rotate = 90;
                                        var rotate2 = 50;
                                        var rotate3 = 45;
                                        var rotate4 = 80;
                                        var editStep1 = -15;
                                        var editStep2 = -5;
                                        var rotate5 = 0;

  b.stroke(dominantColors[1]);

  Ecstasy(4, zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, rotate, rotate2, rotate3, rotate4, editStep1, editStep2, rotate5, dominantColors);
}


//Trust*********************************************************************************************************************************************************
//Colors Trust: 0/grey, 1/light blue, 2/dark blue, 3/yellow

//Trust V1
 if(trustPoints >= v1)
{

          var zeilen = b.random(3,5);
          var spalten = b.random(2,3);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius =  b.random(20,30);


  b.fill(dominantColors[0]);

  Trust(1,zeilen, spalten, StartingX, StartingY, distanceX, radius, dominantColors);

} else if (trustPoints >= v2)
{

  b.fill(dominantColors[0]);


          var zeilen = b.random(3,5);
          var spalten = b.random(2,3);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius = b.random(15,25);




  Trust(2,zeilen, spalten, StartingX, StartingY, distanceX, radius, dominantColors);

} else if (trustPoints >= v3)
{

  b.fill(dominantColors[0]);


          var zeilen = b.random(4,5);
          var spalten = b.random(2,4);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius = b.random(10,20);



  Trust(3,zeilen, spalten, StartingX, StartingY, distanceX, radius, dominantColors);

} else if (trustPoints >= v4)
{

  b.fill(dominantColors[0]);


          var zeilen = b.random(4,5);
          var spalten = b.random(2,4);

          var StartingX = b.random(-80,40);
          var StartingY = b.random(-40, 20);
          var distanceX = b.random(50,70);

          var radius = b.random(5,15);


  Trust(4,zeilen, spalten, StartingX, StartingY, distanceX, radius, dominantColors);
}



//Disgust*********************************************************************************************************************************************************
//Colors Disgust: 0/light grey, 1/green, 2/brown, 3/yellow

 if(disgustPoints >= v1)
{

                var xCells = 100; // horizontal resolution per GraphicLine object (horizontal points of the line)
                var yCells = 50; // amount of GraphicLine objects on vertical axis (numbers of the lines)

                var yStep = b.height / 100; // step sizes (distance between the lines)
                var xStep = 20; // x-length of the line

                var distance = 120;
                var startingPosX = -20;
                var startingPosY = 50;

                var stroke = 10;
                var amount1 = 2;
                var amount2 = 3;
                var amount3 = 200;

                var sub1 = 50;
                var sub2 = 50;
                var multi = 15;



  b.stroke(dominantColors[2]);

  Disgust (1, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3, sub1, sub2, multi, dominantColors);


} else if (disgustPoints >= v2)
{
                  var xCells = 100; // horizontal resolution per GraphicLine object
                  var yCells = 100; // amount of GraphicLine objects on vertical axis (numbers of lines)

                  var yStep = b.height / 100; // step sizes (distance between lines)
                  var xStep = 10 / 100; //  x-length of the line

                  var distance = 100;
                  var startingPosX = 50;
                  var startingPosY = 20;

                var stroke = 8;
                var amount1 = 2;
                var amount2 = 2;
                var amount3 = 200;

                var sub1 = 50;
                var sub2 = 200;
                var multi = 5;

  b.stroke(dominantColors[1]);//

  Disgust(2,xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3, sub1, sub2, multi, dominantColors );


} else if (disgustPoints >= v3)
{
                var xCells = 100; // horizontal resolution per GraphicLine object
                var yCells = 50; // amount of GraphicLine objects on vertical axis

                var yStep = b.height / 100; // step sizes
                var xStep = 10 / 100;

                var distance = 100;
                var startingPosX = 50;
                var startingPosY = 20;

                var stroke = 6;
                var amount1 = 10;
                var amount2 = 3;
                var amount3 = 200;

                var sub1 = 50;
                var sub2 = 200;
                var multi = 5;

  b.stroke(dominantColors[1]);



  Disgust(3, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3, sub1, sub2, multi, dominantColors );


} else if (disgustPoints >= v4)
{
                var xCells = 100;
                var yCells = 50;

                var yStep = b.height / 100;
                var xStep = 10 / 100;
                var distance = 100;
                var startingPosX = 70;
                var startingPosY = 20;

                var stroke = 4;
                var amount1 = 10;
                var amount2 = 3;
                var amount3 = 150;

                var sub1 = 50;
                var sub2 = 200;
                var multi = 5;

  b.stroke(dominantColors[0]);

  Disgust(4, xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY, stroke, amount1, amount2, amount3, sub1, sub2, multi, dominantColors );


}

//Expectation*********************************************************************************************************************************************************
//colors Expectation: 0/grey, 1/green, 2/blue, 3/yellow

   if(expectationPoints >= v1)
  {
  var width = 40;
  var amount = b.random (15,20);
  var min = 60;
  var max = 120;
  b.strokeWeight(1);

  b.fill(dominantColors[3]);
  b.stroke(255)

    Expectation (1, width, amount, min, max, dominantColors); //(v, circleCount, minRadius, maxRadius, random1, random2, random3)

  } else if (expectationPoints >= v2)

  {
  var width = 30;
  var amount = b.random (20,30);
  var min = 60;
  var max = 120;

  b.strokeWeight(1);
  b.fill(dominantColors[1]);
  b.stroke(255);

    Expectation (2, width, amount, min, max, dominantColors);

  } else if (expectationPoints >= v3)
  {

  var width = 15;
  var amount = b.random (30,50);
  var min = 50;
  var max = 100;

  b.strokeWeight(1);
  b.fill(dominantColors[2]);
  b.stroke(255);


    Expectation (3, width, amount, min, max, dominantColors);

  } else if (expectationPoints >= v4)
  {

  var width = 8;
  var amount = b.random (30,40);
  var min = 30;
  var max = 70;

  b.strokeWeight(1);
  b.fill(dominantColors[0]);
  b.stroke(255);






     Expectation (4, width, amount, min, max, dominantColors);
  }

//END OF IF/ELSE-FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


b.resetMatrix();

///White Rect: right side
  b.fill(255);
  b.noStroke();
  b.rect(b.width-25.5, 0, 25.5, b.height);
  b.noFill();
  b.stroke(255);
  b.strokeWeight(7);
  b.rect(3.5, 3.5, b.width-7, b.height-7);


//////TYPO–SAYINGS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var distanceMargin = 12;
  var PointsizeAdvice = 28;

//TYPO PANIC

if (dominantEmotion == "panic") {
//Loading text
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
        var textLeadingtext = 30;
        //

        if(randomtextPanic == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextPanic == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextPanic == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }


        if (randomtextPanic == 8){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Panic9, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Panic9, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);

        }

  }
//TYPO ANGER

if (dominantEmotion == "anger") {
        //loading texts
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
        //random
        var randomtextAnger = b.round (b.random(0,textArrayAnger.length-1));
        //
        b.fill (0);
        var pointSizetext = PointsizeAdvice;
        var textLeadingtext = 30;



        if(randomtextAnger == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
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
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextAnger == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


       if (randomtextAnger == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


       if (randomtextAnger == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 8){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger9, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger9, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 9){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger10, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger10, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 10){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger11, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger11, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextAnger == 11){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Anger12, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Anger12, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
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
          //random
          var randomtextSorrow = b.round (b.random(0,textArraySorrow.length-1));
          //
          b.fill (0);
          var pointSizetext = PointsizeAdvice;
          var textLeadingtext = 30;

        if(randomtextSorrow == 0){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow1, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                  var textrahmenNew = b.text(Sorrow1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


        if(randomtextSorrow == 1){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow2, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                  var textrahmenNew = b.text(Sorrow2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


        if (randomtextSorrow == 2){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow3, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                  var textrahmenNew = b.text(Sorrow3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


          if (randomtextSorrow == 3){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow4, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                  var textrahmenNew = b.text(Sorrow4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmenNew, "pointSize", pointSizetext);
          }


          if (randomtextSorrow == 4){
                b.textLeading(textLeadingtext);
                var textrahmen = b.text(Sorrow5, distanceMargin, 0, 177, 10);
                  b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                  b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                  var textrahmenHeight = b.itemHeight(textrahmen);
                  b.println("First Textframe-Height: " + textrahmenHeight);
                  while (textrahmen. overflows == true) {
                    textrahmenHeight++;
                    b.itemHeight(textrahmen, textrahmenHeight);
                  }
                  b.println("New Textframe-Height: " + textrahmenHeight);
                  b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                  var textrahmenNew = b.text(Sorrow5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                  b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
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
                var textLeadingtext = 30;

        if(randomtextJoy == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextJoy == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextJoy == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);



        }
        if (randomtextJoy == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Joy8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Joy8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
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
                var textLeadingtext = 30;

        if(randomtextEcstasy == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextEcstasy == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextEcstasy == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Ecstasy8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Ecstasy8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
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
                var textLeadingtext = 30;

        if(randomtextTrust == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextTrust == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


       if (randomtextTrust == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 7){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust8, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust8, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextTrust == 8){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Trust9, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Trust9, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
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
        var textLeadingtext = 30;

        if(randomtextDisgust == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Disgust1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextDisgust == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Disgust2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Disgust3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Disgust4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Disgust5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 5){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust6, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Disgust6, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextDisgust == 6){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Disgust7, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Disgust7, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
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
                var textLeadingtext = 30;

        if(randomtextExpectation == 0){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation1, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Expectation1, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if(randomtextExpectation == 1){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation2, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Expectation2, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextExpectation == 2){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation3, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Expectation3, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextExpectation == 3){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation4, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Expectation4, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmenNew, "pointSize", pointSizetext);
        }


        if (randomtextExpectation == 4){
              b.textLeading(textLeadingtext);
              var textrahmen = b.text(Expectation5, distanceMargin, 0, 177, 10);
                b.typo (textrahmen, "appliedFont", "GT Cinetype\tBold");
                b.typo (textrahmen, "pointSize", pointSizetext);
        //define the height of the text frame
                var textrahmenHeight = b.itemHeight(textrahmen);
                b.println("First Textframe-Height: " + textrahmenHeight);
                while (textrahmen. overflows == true) {
                  textrahmenHeight++;
                  b.itemHeight(textrahmen, textrahmenHeight);
                }
                b.println("New Textframe-Height: " + textrahmenHeight);
                b.remove(textrahmen);
        //positioning the text frame on the bottom of the side margin
                var textrahmenNew = b.text(Expectation5, distanceMargin, b.height - distanceMargin - textrahmenHeight, 177, textrahmenHeight);
                b.typo (textrahmenNew, "appliedFont", "GT Cinetype\tBold");
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
              b.width-21, b.height-7, 250, 12);


              var  text2 =  b.text( "Das ist deine aktuelle Stimmung übersetzt",
              b.width-15, b.height-7, 250, 12);


              var  text3 =  b.text( "in ein grafisches Muster durch ein 'basil.js'-Script.",
              b.width-11, b.height-7, 250, 12);

              var  text4 =  b.text( "* Ein guter Rat des chinesischen Orakels 'I GING'." ,
              b.width-7, b.height- 7, 250, 12);


    b.typo (text1, "appliedFont", "GT Cinetype\tRegular");
    b.typo (text1, "pointSize", 14);
    b.typo (text1, "tracking", 40);


    b.typo (text2, "appliedFont", "GT Cinetype\tRegular");
    b.typo (text2, "pointSize", 9);
    b.typo (text2, "tracking", 20);

    b.typo (text3, "appliedFont", "GT Cinetype\tRegular");
    b.typo (text3, "pointSize", 9);
    b.typo (text3, "tracking", 20);

    b.typo (text4, "appliedFont", "GT Cinetype\tRegular");
    b.typo (text4, "pointSize", 9);
    b.typo (text4, "tracking", 20);


//EMOTION NOW - LOGO

              b.textAlign(Justification.RIGHT_ALIGN);
              var  text5 =  b.text( "EMOTION",
              b.width-22.25, 86, 80, 30);

              b.typo (text5, "appliedFont", "GT Cinetype\tBold");
              b.typo (text5, "pointSize", 31);
              b.typo (text5, "tracking", 40);


              var  text6 =  b.text( "NOW",
              b.width-12.75, 86, 80, 30);

              b.typo (text6, "appliedFont", "GT Cinetype\tBold");
              b.typo (text6, "pointSize", 31);
              b.typo (text6, "tracking", 80);


              b.textAlign(Justification.LEFT_ALIGN);

//SAVE-PDF SETUPS

      // export the file and reset the document
      b.savePDF("/export/Poster_" + newJsonCount + ".pdf", false);



       app.documents.item(0).print(false);
      // Druckdelay
      b.delay(30000);

      // new count becomes the new old count
      oldJsonCount = newJsonCount;

}// end of poster process




     // b.delay(1000);
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

function Panic ( v, BeginX, itemDistanceY,itemHeight, itemsX, itemsY, dominantColors) {
  b.resetMatrix();
  b.noStroke();

  var itemWidth = ((b.width - 24)/4)/4;
  var BeginY = ( ((b.width - 24)/4)/4)/2;
  var itemDistanceX = ( ((b.width - 24)/4)/4)/2;


  for (var i = 0; i < itemsX; i++) {

  for (var j = 0; j < itemsY; j++) {
    b.rect (BeginX + i * 4 * itemDistanceX, BeginY + j  * (itemHeight + itemDistanceY) , itemWidth, itemHeight );

  }
  }

b.resetMatrix();


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

b.noStroke();

}


//SORROW*********************************************************************************************************************************
function Sorrow (v, radius, distanceY, distanceX, startingX, startingY, step, multistep, zero, amount1, amount2, edit1,edit2, edit3, edit4, edit5, edit6, edit7, edit8, dominantColors) {



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



b.noStroke();
}




//JOY*********************************************************************************************************************************

function Joy (v, circleCount, minRadius, maxRadius, multi, sub, multi2, dominantColors)
{

  b.colorMode(b.RGB);
  b.units(b.MM);
  if (v == 1)
  {
    b.stroke(200);
    var randomAmountX = b.random (2,3);
    var randomAmountY = b.random (4,5);
    var radius = b.random(25,50);
    var StartingX1 = 0;
    var StartingY1 = 0;

    var StartingX2 = b.random(20,50);
    var StartingY2 = b.random(10,30);

    var DistanceX = 0;
    var DistanceY = 0;

    var random1 = 0;
    var random2 = b.width;
    var random3 = b.height;
    var random4 = b.height;

    for (var i = 0; i < randomAmountX; i++)
    {
      for (var j = 0; j < randomAmountY; j++) {

              var randomPosY = b.random (random1, random2);
              var randomPosX = b.random (random1,random3);


        b.ellipse( StartingX1  + i * DistanceX + randomPosX, StartingY1 + j * DistanceY+ randomPosY , radius, radius);
      }
    }
    for (var i = 0; i < randomAmountX; i++) {

      for (var j = 0; j < randomAmountY; j++) {

          var randomPosY = b.random (random1,random2);
          var randomPosX = b.random (random1,random4);

        b.ellipse( StartingX2  + i * DistanceX + randomPosX, StartingY2 + j * DistanceY + randomPosY , radius, radius);
      }
    }
  }
   if (v == 2)
  {

    b.stroke(200);
    var randomAmountX = b.random (5,8);
    var randomAmountY = b.random (5,10);
    var radius = b.random(15,30);
    var StartingX1 = radius - radius/2;
    var StartingY1 = radius - radius/2;

    var StartingX2 = StartingX1 * 2 ;
    var StartingY2 = StartingY1 * 2;

    var DistanceX = radius *1.5 ;
    var DistanceY = radius *1.5;

    var random1 = b.random(30,80);
    var random2 = b.random(40,90);
    var random3 = b.random(30,60);
    var random4 = b.random(20,60);

    for (var i = 0; i < randomAmountX; i++) {
      for (var j = 0; j < randomAmountY; j++) {

              var randomPosY = b.random (random1, random2);
              var randomPosX = b.random (random1,random3);


        b.ellipse( StartingX1  + i * DistanceX + randomPosX, StartingY1 + j * DistanceY+ randomPosY , radius, radius);
      }
    }
    for (var i = 0; i < randomAmountX; i++) {

      for (var j = 0; j < randomAmountY; j++) {

          var randomPosY = b.random (random1,random2);
          var randomPosX = b.random (random1,random4);

        b.ellipse( StartingX2  + i * DistanceX + randomPosX, StartingY2 + j * DistanceY + randomPosY , radius, radius);
      }
    }
  }
  else
  {

    b.noStroke();
    var prevCircles = [];

    for(var i = 0; i < circleCount; i++)
    {

        var x = b.random(maxRadius * multi ,b.width - sub);
        var y = b.random(50,b.height);
        var radius = minRadius;
        var collision = false;

      // checks if circles collide
      for(var j = 0; j < prevCircles.length; j++)
      {

        var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y);
        var radii = radius + prevCircles[j].radius;

        if(distance < radii)
        {
          collision = true;
          break;
        }
      }

      // find closest circle
      var closest = maxRadius;

      for(var j = 0; j < prevCircles.length; j++)
      {
        var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y) - prevCircles[j].radius;
        if(distance < closest) {
          closest = distance;
        }
      }

      radius = closest;

      // draws a new circle
      if(collision == false)
      {
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

      }
  }
b.noStroke();
b.resetMatrix();

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
  b.noFill();
  b.resetMatrix();
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
          var randomxStep = b.random(70,90) / xCells; // x-lenght of lines
      b.beginShape();

          for( var x = 0; x <= amount3; x++) {

            var rotationGrad = b.radians(b.random(0,50));
            var rotation = b.rotate(rotationGrad);

              b.vertex( startingPosX + y * distance + (x * randomxStep),
                        startingPosY + i * distance + (b.sin( b.PI * 5 / xCells * x ) * multi ));
          }

      b.endShape();
    }
  }
b.noStroke();

}

//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************

function Expectation (v, width, amount, min, max, dominantColors) {

        b.colorMode(b.RGB);
        b.units(b.MM);

b.rotate(b.radians(45));

for (var i = 0; i < amount; i++) {
  var x1 = b.random( 0, b.width-10);
  var y1 = b.random ( 20, b.height);

  var height = b.random (min,max);
  var rec = b.rect (x1, y1, width, height);
  rec.sendToBack();
  rec.bringForward();

}

b.noStroke();

}

