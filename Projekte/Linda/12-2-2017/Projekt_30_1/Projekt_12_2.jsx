// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// demonstrates how to load json files that might be exported from Processing

function draw() {

  b.clear(b.doc());
  b.noFill();
  b.colorMode(b.RGB);
  b.units(b.MM);
  b.noStroke();

  // get data folder where the JSON files will be saved
  var projectFolder = b.projectFolder();
  var dataFolder = Folder(projectFolder + "/data");


  // optional: delete all old .json files
  // if you want to keep them, just comment out the for loop
  var oldJsonFiles = dataFolder.getFiles("*.json");
  for (var i = 0; i < oldJsonFiles.length; i++) {
    oldJsonFiles[i].remove();
  }


  // count all JSON files that are in the folder
  var oldJsonCount = dataFolder.getFiles("*.json").length;


  // main loop; every second we check if the new json count is greater than the old one.
  // If so, a new JSON file was added and we can use it to create a poster
  // (for testing, loop will stop after 60 seconds)
  while(b.millis() < 60000) {

    var jsonFiles = dataFolder.getFiles("*.json");
    var newJsonCount = jsonFiles.length;

    // a new JSON file was added
    if (newJsonCount > oldJsonCount) {

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

      for (var i = 0; i < jsonData.length; i++) {

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

      for(var i = 0; i < superAbsoluteArray.length; i++) {

        if(superAbsoluteArray[i] > mostExtremeValue) {
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

    // neutral colors
      var neutralLight = b.color(219,212,206);
      var neutralMiddle = b.color (156,154,149);
      var neutralDark = b.color(124,123,119);
      var neutralHighlight = b.color(255,208,73);

    //Colors
      //1: Panic
        var PanicLightGrey = b.color(118,119,113);
        var PanicMiddleGrey = b.color(60,58,59);
        var PanicDarkGrey = b.color(26,25,18);
        var PanicOrange = b.color(26,25,18);
        //2: Anger
        var AngerRed = b.color(227,6,19);
        var AngerDarkGrey = b.color(46,49,50);
        var AngerMiddleGrey = b.color(71,69,65);
        var AngerLightGrey = b.color(116,105,102);
        //3: Sorrow
        var SorrowDarkGrey = b.color(56,55,51);
        var SorrowMiddleGrey = b.color(105,105,105);
        var SorrowLightGrey = b.color(225,238,239);
        var SorrowBlue = b.color(19,59,128);
        //4: Joy
        var JoyYellow = b.color(255,255,43);
        var JoyRose = b.color(250,118,175);
        var JoyPink = b.color(255,35,141);
        var JoyGreen = b.color(11,165,67);
        //5: Ecstasy
        var EcstasyPink = b.color(255,35,141);
        var EcstasyYellow = b.color(255,255,43);
        var EcstasyRed = b.color(227,6,19);
        var EcstasyBlue = b.color(19,191,213);
        //6: Trust
        var TrustDarkBlue = b.color(22,65,148);
        var TrustLightBlue = b.color(16,119,167);
        var TrustGrey = b.color(225,239,237);
        var TrustYellow = b.color(254,200,0);
        //7: Disgust
        var DisgustGrey = b.color(179,191,187);
        var DisgustYellow = b.color(215,179,5);
        var DisgustGreen = b.color(110,128,46);
        var DisgustBrown = b.color(106,84,60);
        //8: Expectation
        var ExpectationBlue = b.color(20,185,252);
        var ExpectationGreen = b.color(11,165,67);
        var ExpectationGrey = b.color(241,237,234);
        var ExpectationYellow = b.color(225,228,18);

//++++++++++++++++++++++++++++++Emotion functions+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Panic V1

        if (x1 > 0 && y1 > 25 &&
            x2 > 0 && y2 > 25 &&
            x3 < 0 && y3 < -25 &&
            x4 < -25 && y4 > -25 && y4 < 0 &&
            x5 < -25 && y5 > -25 && y5 < 0) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

        var lineNumberX = 12;
        var lineNumberY = 13;

        var lineDistance = 24.8/2;
        var StartingPositionX = b.width/3;
        var StartingPositionY = b.height/4;
        var lengthvertical = b.height - b.height/4

    var PanicBackground = b.image ("B_panic.eps", 0, 0, b.width, b.height);

        PanicV1 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
        }

//Panic V2

        else if (x1 > 0 && y1 > 0 && y1 < 25 &&
            x2 > 0 && y2 > 0 && y1 < 25 &&
            x3 < 0 && y3 > -25 && y3 < 0 &&
            x4 < -25 && y4 > 0 && y4 < 25 &&
            x5 < -25 && y4 > 0 && y4 < 25) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

        var lineNumberX = 6;
        var lineNumberY = 7;

        var lineDistance = 24.8;
        var StartingPositionX = b.width/3;
        var StartingPositionY = b.height/4;
        var lengthvertical = b.height - b.height/4

        var PanicBackground = b.image ("B_panic.eps", 0, 0, b.width, b.height);

        PanicV2 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
        }
// Panic V3: Only 4 fitting combinations
                               else if (x2 > 0 && y2 > 0 &&
                                    x3 < 0 && y3 < 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25 &&
                                    x5 < -25 && y5 > -25 && y5 < 25) {

                              var lineNumberX = 6;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                              PanicV3 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                               else if (x1 > 0 && y1 > 0 &&
                                    x3 < 0 && y3 < 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25 &&
                                    x5 < -25 && y5 > -25 && y5 < 25) {

                              var lineNumberX = 6;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                              PanicV3 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                              else if (x1 > 0 && y1 > 0 &&
                                    x2 > 0 && y2 > 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25 &&
                                    x5 < -25 && y5 > -25 && y5 < 25) {

                              var lineNumberX = 6;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                             PanicV3 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                               else if (x1 > 0 && y1 > 0 &&
                                    x2 > 0 && y2 > 0 &&
                                    x3 < 0 && y3 < 0 &&
                                    x5 < -25 && y5 > -25 && y5 < 25) {

                              var lineNumberX = 6;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                            PanicV3 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                             else if (x1 > 0 && y1 > 0 &&
                                    x2 > 0 && y2 > 0 &&
                                    x3 < 0 && y3 < 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25) {

                              var lineNumberX = 6;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                            PanicV3 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
//Only 3 fitting combinations
                             else if (x2 > 0 && y2 > 0 &&
                                    x3 < 0 && y3 < 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25) {

                              var lineNumberX = 6;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                             PanicV3 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
//Panic V4: Only 2 fitting combinations
                           else if (x1 > 0 && y1 > 0 &&
                                    x2 > 0 && y2 > 0   ) {

                              var lineNumberX = 7;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                           else if (x1 > 0 && y1 > 0 &&
                                    x3 < 0 && y3 < 0  ) {

                                var lineNumberX = 7;
                                var lineNumberY = 7;

                                var lineDistance = 24.8;
                                var StartingPositionX = b.width/3;
                                var StartingPositionY = b.height/4;
                                var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                           else if (x1 > 0 && y1 > 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25    ) {

                              var lineNumberX = 7;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                           else if (x1 > 0 && y1 > 0 &&
                                    x5 < -25 && y5 > -25 && y5 < 25   ) {

                              var lineNumberX = 7;
                              var lineNumberY = 7;

                              var lineDistance = 24.8;
                              var StartingPositionX = b.width/3;
                              var StartingPositionY = b.height/4;
                              var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                           else if (
                                    x2 > 0 && y2 > 0 &&
                                    x3 < 0 && y3 < 0  ) {

                                var lineNumberX = 7;
                                var lineNumberY = 7;

                                var lineDistance = 24.8;
                                var StartingPositionX = b.width/3;
                                var StartingPositionY = b.height/4;
                                var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                          else if (
                                    x2 > 0 && y2 > 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25   ) {

                                var lineNumberX = 7;
                                var lineNumberY = 7;

                                var lineDistance = 24.8;
                                var StartingPositionX = b.width/3;
                                var StartingPositionY = b.height/4;
                                var lengthvertical = b.height - b.height/4

                          PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                          else if (
                                    x2 > 0 && y2 > 0 &&
                                    x5 < -25 && y5 > -25 && y5 < 25   ) {

                                var lineNumberX = 7;
                                var lineNumberY = 7;

                                var lineDistance = 24.8;
                                var StartingPositionX = b.width/3;
                                var StartingPositionY = b.height/4;
                                var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                          else if (
                                    x3 < 0 && y3 < 0 &&
                                    x4 < -25 && y4 > -25 && y4 < 25  ) {

                                  var lineNumberX = 7;
                                  var lineNumberY = 7;

                                  var lineDistance = 24.8;
                                  var StartingPositionX = b.width/3;
                                  var StartingPositionY = b.height/4;
                                  var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                          else if ( x4 < -25 && y4 > -25 && y4 < 25 &&
                                    x5 < -25 && y5 > -25 && y5 < 25   ) {

                                var lineNumberX = 7;
                                var lineNumberY = 7;

                                var lineDistance = 24.8;
                                var StartingPositionX = b.width/3;
                                var StartingPositionY = b.height/4;
                                var lengthvertical = b.height - b.height/4

                           PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }

//ANGER*********************************************************************************************************************************************************
//Anger v1

        if  (x1 < 0 && y1 > 25 &&
            x2 < 0 && y2 > 25 &&
            x3 < 0 && y3 < -25 &&
            x4 > -100  && y4 < -25 &&
            x5 < 0 && y5 < -25 ){

              b.noStroke();
              b.colorMode(b.RGB);
              b.units(b.MM);

               var a = 40;
               b.strokeWeight(20);
               var startingX = -3;
               var startingY = 0;

              var AngerBackground = b.image ("B_anger.eps", 0, 0, b.width, b.height);

              AngerV1 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                  }

//Anger v2

       else if (x1 < 0 && y1 > 0 && y1 < 25 &&
            x2 < 0 && y2 > 0 && y2 < 25 &&
            x3 < 0 && y3 < 0 && y3 > -25 &&
            x4 > -100 && y4 < 0 && y4 > -25 &&
            x5 < 0 && y5 < 0 && y3 > -25 ) {

            b.noStroke();
            b.colorMode(b.RGB);
            b.units(b.MM);

             var a = 40;
             b.strokeWeight(10);
             var startingX = 1;
             var startingY = 0;

            var AngerBackground = b.image ("B_anger.eps", 0, 0, b.width, b.height);

            AngerV2 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                }

//Anger V3: Only 4 fitting combinations
                            else  if (
                                  x2 < 0 && y2 > 0 &&
                                  x3 < 0 && y3 < 0 &&
                                  x4 > -100 && y4 < 0 &&
                                  x5 < 0 && y5 < 0 ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

    AngerV3 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                            else  if (x1 < 0 && y1 > 0 &&
                                  x3 < 0 && y3 < 0 &&
                                  x4 > -100 && y4 < 0 &&
                                  x5 < 0 && y5 < 0 ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

    AngerV3 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                             else if (x1 < 0 && y1 > 0 &&
                                  x2 < 0 && y2 > 0 &&
                                  x4 > -100 && y4 < 0 &&
                                  x5 < 0 && y5 < 0 ) {
     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;
    AngerV3 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                             else if (x1 < 0 && y1 > 0 &&
                                  x2 < 0 && y2 > 0 &&
                                  x3 < 0 && y3 < 0 &&
                                  x5 < 0 && y5 < 0 ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

    AngerV3 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                            else  if (x1 < 0 && y1 > 0 &&
                                  x2 < 0 && y2 > 0 &&
                                  x3 < 0 && y3 < 0 &&
                                  x4 > -100 && y4 < 0 ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

    AngerV3 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }

//Only 3 fitting combinations
                             else if (x1 < 0 && y1 > 0 &&
                                  x3 < 0 && y3 < 0 &&
                                  x4 > -100 && y4 < 0 ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

      AngerV3 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                              }
// Anger V4: Only 2 fitting combinations
                             else if (x1 < 0 && y1 > 0 &&
                                  x2 < 0 && y2 > 0  ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                              }
                            else if (x1 < 0 && y1 > 0 &&
                                  x3 < 0 && y3 < 0 ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                         else if (x1 < 0 && y1 > 0 &&
                                  x4 > -100 && y4 < 0  ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;
        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                              }
                          else if (x1 < 0 && y1 > 0 &&
                                  x5 < 0 && y5 < 0  ) {
     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;
        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                          else if (
                                   x2 < 0 && y2 > 0 &&
                                  x3 < 0 && y3 < 0 ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;
        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                          else if (x2 < 0 && y2 > 0 &&
                                  x4 > -100 && y4 < 0  ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                              }
                          else if (x2 < 0 && y2 > 0 &&
                                  x5 < 0 && y5 < 0  ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }
                          else if (x3 < 0 && y3 < 0 &&
                                  x4 > -100 && y4 < 0  ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                              }
                          else if (
                                  x4 > -100 && y4 < 0 &&
                                  x5 < 0 && y5 < 0  ) {

     var a = 40;
     b.strokeWeight(2);
     var startingX = 1;
     var startingY = 0;

        AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                              }


//Sorrow*********************************************************************************************************************************************************

//Sorrow V1

        if (x1 > 0 && y1 > 25 &&
            x2 > 0 && y2 > 25 &&
            x3 > 0 && y3 < -25 &&
            x4 > 0 && y4 > 25) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

          b.clear(b.doc());
          b.stroke(255);

        var radius = 15;
        var distanceY = 25;
        var distanceX = 100;
        var startingX = 50;
        var startingY=  -10;
        var step = 80;

        var SorrowBackground = b.image ("B_sorrow.eps", 0, 0, b.width, b.height);

        SorrowV1 (radius, distanceY, distanceX, startingX, startingY, step, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

        }

//Sorrow V2

       else if (x1 > 0 && y1 > 0 && y1 < 25 &&
                x2 > 0 && y2 > 0 && y2 < 25 &&
                x3 > 0 && y3 < 0 && y3 > -25 &&
                x4 > 0 && y4 > 0 && y4 < 25) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

          b.stroke(255);
          b.strokeWeight(1);


          var radius = 2.5;
          var distanceY = 15/2;
          var distanceX = 25/2;
          var startingX = b.width/6-15;
          var startingY = b.height/60-30;
          var step = 40;
          var multistep = 1.6;

        var SorrowBackground = b.image ("B_sorrow.eps", 0, 0, b.width, b.height);

        SorrowV2 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

        }
//Sorrow V3: Only 3 fitting combinations
                             else if (x1 > 0 && y1 > 25 &&
                                    x2 > 0 && y2 > 25 &&
                                    x3 > 0 && y3 < -25) {

                              b.stroke(255);
                              b.strokeWeight(1);


                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;

                              SorrowV3 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
             //Only 3 more fitting combinations
                               else if (
                                    x2 > 0 && y2 > 25 &&
                                    x3 > 0 && y3 < -25 &&
                                    x4 > 0 && y4 > 0) {


                              b.stroke(255);
                              b.strokeWeight(1);

                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;

                              SorrowV3 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                               else if (x1 > 0 && y1 > 25 &&
                                    x3 > 0 && y3 < -25 &&
                                    x4 > 0 && y4 > 0) {

                              b.stroke(255);
                              b.strokeWeight(1);


                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;


                              SorrowV3 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                              else if (x1 > 0 && y1 > 25 &&
                                    x2 > 0 && y2 > 25 &&
                                    x4 > 0 && y4 > 0) {

                              b.stroke(255);
                              b.strokeWeight(1);

                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;

                              SorrowV3 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }

//Sorrow V4: Only 2 fitting combinations
                               else if (x1 > 0 && y1 > 25 &&
                                   x2 > 0 && y2 > 25 ) {

                                  b.stroke(255);
                                  b.strokeWeight(1);

                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;


                              SorrowV4 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                              else if (x1 > 0 && y1 > 25 &&
                                   x3 > 0 && y3 < -25) {

                                  b.stroke(255);
                                  b.strokeWeight(1);


                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;


                              SorrowV4 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                              else if (x1 > 0 && y1 > 25 &&
                                   x4 > 0 && y4 > 0) {

                                  b.stroke(255);
                                  b.strokeWeight(1);

                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;


                              SorrowV4 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                              else if (
                                   x2 > 0 && y2 > 25 &&
                                   x3 > 0 && y3 < -25 ) {

                                  b.stroke(255);
                                  b.strokeWeight(1);

                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;

                              SorrowV4 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                }
                               else if (
                                   x2 > 0 && y2 > 25 &&
                                   x4 > 0 && y4 > 0) {

                                   b.stroke(255);
                                  b.strokeWeight(1);


                              var radius = 2.5;
                              var distanceY = 15/2;
                              var distanceX = 25/2;
                              var startingX = b.width/6-15;
                              var startingY = b.height/60-30;
                              var step = 40;
                              var multistep = 1.6;


                              SorrowV4 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }


//Joy*********************************************************************************************************************************************************

//Joy V1

        if (x1 > -25 && x1 < 25  && y1 > 0 && y1 < -25 &&
            x2 < -25 && x2 < 25 && y2 >0 && y2 < -25 &&
            x3 > -25 && x3 < 25 && y3 > 0 && y3 < 25 &&
            x4 > -101 && y4 > 0 && y4 < 25 &&
            x5 > 0 && y5 > 0 && y5 < 25) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

          var circleCount = 80000;
          var minRadius = 85;
          var maxRadius = 85;


        var JoyBackground = b.image ("B_joy.eps", 0, 0, b.width, b.height);
        JoyV1 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

        }
//Joy V2

       else if (x1 > -25 && x1 < 25  && y1 < -25 &&
            x2 < -25 && x2 < 25 && y2  < -25 &&
            x3 > -25 && x3 < 25 && y3 > 25 &&
            x4 > -101 && y4 > 25 &&
            x5 > 0 && y5 > 25) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

          var circleCount = 1500;
          var minRadius = 50;
          var maxRadius = 50;

        var JoyBackground = b.image ("B_joy.eps", 0, 0, b.width, b.height);

        JoyV2 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

        }
//Joy V3: Only 4 fitting combinations
                                      if (
                                          x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x3 > -25 && x3 < 25 && y3 > 0 &&
                                          x4 > -101 && y4 > 0 &&
                                          x5 > 0 && y5 > 0  ) {

                                          var circleCount = 100;
                                          var minRadius = 30;
                                          var maxRadius = 30;

                                          JoyV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                      if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x3 > -25 && x3 < 25 && y3 > 0 &&
                                          x4 > -101 && y4 > 0 &&
                                          x5 > 0 && y5 > 0  ) {

                                          var circleCount = 100;
                                          var minRadius = 30;
                                          var maxRadius = 30;

                                          JoyV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                      if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x4 > -101 && y4 > 0 &&
                                          x5 > 0 && y5 > 0  ) {

                                          var circleCount = 100;
                                          var minRadius = 30;
                                          var maxRadius = 30;

                                          JoyV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                      if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x3 > -25 && x3 < 25 && y3 > 0 &&
                                          x5 > 0 && y5 > 0  ) {

                                          var circleCount = 100;
                                          var minRadius = 30;
                                          var maxRadius = 30;

                                          JoyV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                      if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x3 > -25 && x3 < 25 && y3 > 0 &&
                                          x4 > -101 && y4 > 0  ) {

                                          var circleCount = 100;
                                          var minRadius = 30;
                                          var maxRadius = 30;

                                          JoyV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }

                      //Only 3 fitting combinations
                                     else if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x4 > -101 && y4 > 0  ) {

                                          var circleCount = 100;
                                          var minRadius = 30;
                                          var maxRadius = 30;

                                          JoyV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
//Joy V4: Only 2 fitting combinations
                                 else if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x2 < -25 && x2 < 25 && y2  < 0) {

                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x3 > -25 && x3 < 25 && y3 > 0  ) {

                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x4 > -101 && y4 > 0  ) {

                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x1 > -25 && x1 < 25  && y1 < 0 &&
                                          x5 > 0 && y5 > 0  ) {

                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x3 > -25 && x3 < 25 && y3 > 0   ) {

                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x4 > -101 && y4 > 0  ) {

                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;
                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x2 < -25 && x2 < 25 && y2  < 0 &&
                                          x5 > 0 && y5 > 0  ) {

                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x3 > -25 && x3 < 25 && y3 > 0 &&
                                          x4 > -101 && y4 > 0   ) {


                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                  else if (x4 > -101 && y4 > 0 &&
                                           x5 > 0 && y5 > 0  ) {


                                          var circleCount = 60;
                                          var minRadius = 10;
                                          var maxRadius = 10;

                                          JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }



//Ecstasy*********************************************************************************************************************************************************

//Ecstasy V1

        if (x1 < -25 && y1 < -25  &&
            x2 < 0   && y2 < -25 &&
            x3 < 0   && y3 > 25 &&
            x4 < 0   && y4 > 25 &&
            x5 < 0   && y5 > 25) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

          var zeilen = 9;
          var spalten = 7;
          var stepX = 70/2;
          var stepY = 70/2;
          var strichlaenge = 50;
          var strichstaerke = 15;

        var EcstasyBackground = b.image ("B_ecstasy.eps", 0, 0, b.width, b.height);

        EcstasyV1 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

        }
//Ecstasy V2

       else if (x1 < -25 && y1 < 0 && y1 > -25 &&
            x2 < 0   && y2 < 0 && y2 > -25 &&
            x3 < 0   && y3 > 0 && y3 < 25 &&
            x4 < 0   && x4 > 0 && y4 < 25 &&
            x5 < 0   && x5 > 0 && y4 < 25) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

        var zeilen = 7;
        var spalten = 6;
        var stepX = 50;
        var stepY = 50;
        var strichlaenge = 45;
        var strichstaerke = 15;

        var EcstasyBackground = b.image ("B_ecstasy.eps", 0, 0, b.width, b.height);

        EcstasyV2 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

        }
//Ecstasy V3: Only 4 fitting combinations
                                   else if (
                                        x2 < 0 && y2 < 0 &&
                                        x3 > 0 && y3 > 0 &&
                                        x4 > 0 && y3 > 0 &&
                                        x5 < 0 && y5 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;

                                        EcstasyV3 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                   else if (x1 < -25 && y1 < 0  &&
                                        x3 > 0 && y3 > 0 &&
                                        x4 > 0 && y3 > 0 &&
                                        x5 < 0 && y5 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;

                                        EcstasyV3 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                  else if (x1 < -25 && y1 < 0  &&
                                        x2 < 0 && y2 < 0 &&
                                        x4 > 0 && y3 > 0 &&
                                        x5 < 0 && y5 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;

                                        EcstasyV3 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                    else if (x1 < -25 && y1 < 0  &&
                                        x2 < 0 && y2 < 0 &&
                                        x3 > 0 && y3 > 0 &&
                                        x5 < 0 && y5 > 0) {


                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;

                                    EcstasyV3 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                    else if (x1 < -25 && y1 < 0  &&
                                        x2 < 0 && y2 < 0 &&
                                        x3 > 0 && y3 > 0 &&
                                        x4 > 0 && y3 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;

                                        EcstasyV3 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }

                //Only 3 fitting combinations
                                   else if (x1 < -25 && y1 < 0  &&
                                        x2 < 0 && y2 < 0 &&
                                        x5 < 0 && y5 > 0) {
                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 30;
                                        var strichstaerke = 15;

                                        EcstasyV3 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
//Ecstasy V4: Only 2 fitting combinations
                               else if (x1 < -25 && y1 < 0  &&
                                        x5 < 0 && y5 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                               else if (x1 < -25 && y1 < 0  &&
                                        x2 < 0 && y2 < 0 ) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;
                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                               else if (x1 < -25 && y1 < 0  &&
                                        x3 > 0 && y3 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                               else if (x1 < -25 && y1 < 0  &&
                                        x4 > 0 && y3 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                else if (x1 < -25 && y1 < 0  &&
                                         x5 < 0 && y5 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                else if (x2 < 0 && y2 < 0 &&
                                         x3 > 0 && y3 > 0 ) {
                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;
                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                else if (x2 < 0 && y2 < 0 &&
                                         x4 > 0 && y3 > 0 ) {
                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                else if (x2 < 0 && y2 < 0 &&
                                         x5 < 0 && y5 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                else if (x3 > 0 && y3 > 0 &&
                                         x4 > 0 && y3 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }
                                else if (
                                        x4 > 0 && y3 > 0 &&
                                        x5 < 0 && y5 > 0) {

                                        var zeilen = 7;
                                        var spalten = 6;
                                        var stepX = 50;
                                        var stepY = 50;
                                        var strichlaenge = 20;
                                        var strichstaerke = 15;

                                        EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                  }



//Trust*********************************************************************************************************************************************************

//Trust V1

        if (x1 > 0 && y1 < -25 &&
            x2 > 0 && y2 < -25 &&
            x3 > 0 && y3 > 25 &&
            x4 > 0 && y4 > 25 &&
            x5 > 0 && y4 > 25 ) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

        var strokeAmount = 15;
        var parallelx = b.random(0,b.width-b.width/3);
        var startingY1 = b.random(0,b.height/3);
        var endingY2 = b.random (b.height/1.5, b.height-b.height/4);
        var whiteline = b.height/2.5;
        var distance = 15;


        var TrustBackground = b.image ("B_trust.eps", 0, 0, b.width, b.height);

        TrustV1 (strokeAmount, parallelx, startingY1, endingY2, whiteline, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);


        }
//Trust V2

      else if (x1 > 0 && y1 < 0 && y1 > -25 &&
            x2 > 0 && y2 < 0 && y2 > -25 &&
            x3 > 0 && y3 > 0 && y2 < 25 &&
            x4 > 0 && y4 > 0 && y2 < 25 &&
            x5 > 0 && y4 > 0 && y2 < 25 ) {

        b.noStroke();
        b.colorMode(b.RGB);
        b.units(b.MM);

    var strokeAmount = 6;
    var parallelx = b.width- b.random(100,400);
    var distance = 15;


        var TrustBackground = b.image ("B_trust.eps", 0, 0, b.width, b.height);

        TrustV2 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
        }
//Trust V3: Only 4 fitting combinations
                                      else if (
                                          x2 > 0 && y2 < 0 &&
                                          x3 > 0 && y3 > 0 &&
                                          x4 > 0 && y4 > 0 &&
                                          x5 > 0 && y5 > 0 ) {
    var strokeAmount = 3;
    var parallelx = b.width- b.random(50,150);
    var distance = 15;

        TrustV3 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                      }
                                      else if (x1 > 0 && y1 < 0 &&
                                          x3 > 0 && y3 > 0 &&
                                          x4 > 0 && y4 > 0 &&
                                          x5 > 0 && y5 > 0 ) {

    var strokeAmount = 3;
    var parallelx = b.width- b.random(50,150);
    var distance = 15;

        TrustV3 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                      }
                                      else if (x1 > 0 && y1 < 0 &&
                                          x2 > 0 && y2 < 0 &&
                                          x4 > 0 && y4 > 0 &&
                                          x5 > 0 && y5 > 0 ) {
    var strokeAmount = 3;
    var parallelx = b.width- b.random(50,150);
    var distance = 15;

        TrustV3 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                      else if (x1 > 0 && y1 < 0 &&
                                          x2 > 0 && y2 < 0 &&
                                          x3 > 0 && y3 > 0 &&
                                          x5 > 0 && y5 > 0 ) {

    var strokeAmount = 3;
    var parallelx = b.width- b.random(50,150);
    var distance = 15;

        TrustV3 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                                      }
                                      else if (x1 > 0 && y1 < 0 &&
                                          x2 > 0 && y2 < 0 &&
                                          x3 > 0 && y3 > 0 &&
                                          x4 > 0 && y4 > 0 ) {

    var strokeAmount = 3;
    var parallelx = b.width- b.random(50,150);
    var distance = 15;

        TrustV3 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }

                //Only 3 fitting combinations
                                    else if (x2 > 25 && y2 < 0 &&
                                          x3 > 0 && y3 > 0 &&
                                          x4 > 0 && y4 > 0 ) {
    var strokeAmount = 3;
    var parallelx = b.width- b.random(50,150);
    var distance = 15;

        TrustV3 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
//Trust V4: Only 2 fitting combinations
                                 else if (x1 > 0 && y1 < 0 &&
                                          x2 > 0 && y2 < 0  ) {
    var strokeAmount = 2;
    var parallelx = b.width - b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x1 > 0 && y1 < 0 &&
                                          x3 > 0 && y3 > 0  ) {
    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 10;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x1 > 0 && y1 < 0 &&
                                          x4 > 0 && y4 > 0 ) {
    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x1 > 0 && y1 < 0 &&
                                          x5 > 0 && y5 > 0 ) {
    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (
                                          x2 > 0 && y2 < 0 &&
                                          x3 > 0 && y3 > 0  ) {
    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                      else if (
                                          x2 > 0 && y2 < 0 &&
                                          x4 > 0 && y4 > 0  ) {
    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x2 > 0 && y2 < 0 &&
                                          x5 > 0 && y5 > 0 ) {
    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x3 > 0 && y3 > 0 &&
                                          x4 > 0 && y4 > 0 ) {
    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }
                                 else if (x4 > 0 && y4 > 0 &&
                                          x5 > 0 && y5 > 0 ) {

    var strokeAmount = 2;
    var parallelx = b.width- b.random(50,200);
    var distance = 15;

        TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                      }



//Disgust*********************************************************************************************************************************************************

//Disgust V1

                if (x1 > 0 && y1 > 0 && y1 < 25 &&
                    x2 < 0 && y2 > 0 && y2 < 25 &&
                    x3 < 0 && y3 > -25 && y3 < 0 &&
                    x4 < 0 && y4 > 0 && y4 < 25 &&
                    x5 < 0 && y4 > -25 && y3 < 0 ) {

                b.noStroke();
                b.colorMode(b.RGB);
                b.units(b.MM);

                var DisgustBackground = b.image ("B_disgust2_green.eps", 0, 0, b.width, b.height);

                var xCells = 50; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 300; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells; // step sizes (Abstand zwischen den Linien)
                var xStep = 80; // Länge der Linie in der Breite

                var distance = 120;
                var startingPosX = 20;
                var startingPosY = 80

                DisgustV1 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                }
//Disgust V2

                else if (x1 > 0 && y1 > 25 &&
                      x2 < 0 && y2 > 25 &&
                      x3 < 0 && y3 < -25 &&
                      x4 < 0 && y4 < 0 &&
                      x5 < 0 && x5 < -25) {

                  b.noStroke();
                  b.colorMode(b.RGB);
                  b.units(b.MM);

                  var DisgustBackground = b.image ("B_disgust2_green.eps", 0, 0, b.width, b.height);

                  var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                  var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                  var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                  var xStep = 10 / xCells; // Länge der Linie in der Breite

                  var distance = 100;
                  var startingPosX = 100;
                  var startingPosY = 100;

                  DisgustV2 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                  }
//Disgust V3: Only 4 fitting combinations
                                                    else if (
                                                        x2 < 0 && y2 > 0 &&
                                                        x3 < 0 && y3 < 0 &&
                                                        x4 < 0 && y4 < 25 && y4 > -25 &&
                                                        x5 < 0 && y5 < 0 ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite

                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                    DisgustV3 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                    }
                                                   else if (x1 > 0 && y1 > 0 &&
                                                        x3 < 0 && y3 < 0 &&
                                                        x4 < 0 && y4 < 25 && y4 > -25 &&
                                                        x5 < 0 && y5 < 0 ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite

                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                    DisgustV3 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                    }
                                                    else if (x1 > 0 && y1 > 0 &&
                                                        x2 < 0 && y2 > 0 &&
                                                        x4 < 0 && y4 < 25 && y4 > -25 &&
                                                        x5 < 0 && y5 < 0 ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite

                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                    DisgustV3 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                    }
                                                   else if (x1 > 0 && y1 > 0 &&
                                                        x2 < 0 && y2 > 0 &&
                                                        x3 < 0 && y3 < 0 &&
                                                        x5 < 0 && y5 < 0 ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite

                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                    DisgustV3 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                    }
                                                   else if (x1 > 0 && y1 > 0 &&
                                                        x2 < 0 && y2 > 0 &&
                                                        x3 < 0 && y3 < 0 &&
                                                        x4 < 0 && y4 < 25 && y4 > -25  ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite

                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;
                    DisgustV3 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                    }

                            //Only 3 fitting combinations
                                                   else if (x3 < 0 && y3 < 0 &&
                                                        x4 < 0 && y4 < 25 && y4 > -25 &&
                                                        x5 < 0 && y5 < 0 ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite

                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;
                    DisgustV3 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                        }
//Disgust V4: Only 2 fitting combinations

                                                      else if (x1 > 0 && y1 > 0 &&
                                                          x2 < 0 && y2 > 0   ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                     else if (x1 > 0 && y1 > 0 &&
                                                          x3 < 0 && y3 < 0   ) {

                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                      else if (x1 > 0 && y1 > 0 &&
                                                          x4 < 0 && y4 < 25 && y4 > -25  ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                     else if (x1 > 0 && y1 > 0 &&
                                                          x5 < 0 && y5 < 0  ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                     else if ( x2 < 0 && y2 > 0 &&
                                                          x3 < 0 && y3 < 0   ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                      else if (x2 < 0 && y2 > 0 &&
                                                          x4 < 0 && y4 < 25 && y4 > -25   ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                      else if (x2 < 0 && y2 > 0 &&
                                                          x5 < 0 && y5 < 0  ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                     else if (x3 < 0 && y3 < 0 &&
                                                          x4 < 0 && y4 < 25 && y4 > -25  ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }
                                                      else if (
                                                          x4 < 0 && y4 < 25 && y4 > -25 &&
                                                          x5 < 0 && y5 < 0  ) {
                var xCells = 100; // horizontal resolution per GraphicLine object (horizontale Punkte der Linie)
                var yCells = 100; // amount of GraphicLine objects on vertical axis (Anzahl der Linien)

                var yStep = b.height / yCells * 1; // step sizes (Abstand zwischen den Linien)
                var xStep = 10 / xCells; // Länge der Linie in der Breite
                var distance = 100;
                var startingPosX = 100;
                var startingPosY = 100;

                      DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                                      }

//Expectation*********************************************************************************************************************************************************

//Expectation V1

                    if (x1 > -25 && y1 < -25 &&
                        x2 > 0 && y2 < -25 &&
                        x3 < 0 && y3 >  25 &&
                        x4 < 0 && y4 >  25 &&
                        x5 < 0 && y5 >  25) {

                b.noStroke();
                b.colorMode(b.RGB);
                b.units(b.MM);

                  var circleCount = 200;
                  var minRadius = 90;
                  var maxRadius = 200;


                var ExpectationBackground = b.image ("B_expectation.eps", 0, 0, b.width, b.height);

                ExpectationV1 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

                }
//Expectation V2

            else if (x1 > -25 && y1 < 0 && y1 > -25 &&
                      x2 > 0 && y2 < 0 && y2 > -25 &&
                      x3 < 0 && y3 > 0 && y3 < 25 &&
                      x4 < 0 && y4 > 0 && y4 < 25 &&
                      x5 < 0 && y5 > 0 && y5 < 25) {

              b.noStroke();
              b.colorMode(b.RGB);
              b.units(b.MM);

                var circleCount = 20;
                var minRadius = 20;
                var maxRadius = 80;

              var ExpectationBackground = b.image ("B_expectation.eps", 0, 0, b.width, b.height);

              ExpectationV2 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);

              }

//Expectation V3: Only 4 fitting combinations
                               else if (
                                    x2 > 0 && y2 < 0 &&
                                    x3 < 0 && y3 > 0 &&
                                    x4 < 0 && y4 > 0 &&
                                    x5 < 0 && y5 >  0) {

                  var circleCount = 10;
                  var minRadius = 20;
                  var maxRadius = 60;

                  ExpectationV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                               else if (x1 > -25 && y1 < 0 &&
                                    x3 < 0 && y3 > 0 &&
                                    x4 < 0 && y4 > 0 &&
                                    x5 < 0 && y5 >  0) {

                  var circleCount = 10;
                  var minRadius = 20;
                  var maxRadius = 60;

                  ExpectationV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }

                               else if (x1 > -25 && y1 < 0 &&
                                    x2 > 0 && y2 < 0 &&
                                    x4 < 0 && y4 > 0 &&
                                    x5 < 0 && y5 >  0) {

                  var circleCount = 10;
                  var minRadius = 20;
                  var maxRadius = 60;

                  ExpectationV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                               else if (x1 > -25 && y1 < 0 &&
                                    x2 > 0 && y2 < 0 &&
                                    x3 < 0 && y3 > 0 &&
                                    x5 < 0 && y5 >  0) {

                  var circleCount = 10;
                  var minRadius = 20;
                  var maxRadius = 60;

                  ExpectationV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x1 > -25 && y1 < 0 &&
                                    x2 > 0 && y2 < 0 &&
                                    x3 < 0 && y3 > 0 &&
                                    x4 < 0 && y4 > 0 ) {
                  var circleCount = 10;
                  var minRadius = 20;
                  var maxRadius = 60;
                  ExpectationV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }

                //Only 3 fitting combinations
                                else if (x1 > -25 && y1 < 0 &&
                                    x2 > 0 && y2 < 0 &&
                                    x5 < 0 && y5 >  0) {

                  var circleCount = 10;
                  var minRadius = 20;
                  var maxRadius = 60;

                  ExpectationV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }

//Expectation V4: Only 2 fitting combinations
                                else if (x1 > -25 && y1 < 0 &&
                                         x2 > 0 && y2 < 0 ) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;

                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x1 > -25 && y1 < 0 &&
                                         x3 < 0 && y3 > 0
                                         ) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x1 > -25 && y1 < 0 &&
                                         x4 < 0 && y4 > 0 ) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x1 > -25 && y1 < 0 &&
                                         x5 < 0 && y5 >  0) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x2 > 0 && y2 < 0 &&
                                         x3 < 0 && y3 > 0 ) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x2 > 0 && y2 < 0 &&
                                         x4 < 0 && y4 > 0 ) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x2 > 0 && y2 < 0 &&
                                         x5 < 0 && y5 >  0) {
                    var circleCount = 6;
                    var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x3 < 0 && y3 > 0 &&
                                         x4 < 0 && y4 > 0 ) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }
                                else if (x4 < 0 && y4 > 0 &&
                                         x5 < 0 && y5 >  0) {
                    var circleCount = 6;
                  var minRadius = 20;
                  var maxRadius = 40;
                  ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight);
                                }


                  else { b.ellipse(10,10,10,10);
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

function PanicV1 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight)
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
          b.strokeWeight(8);

          b.line(StartingPositionX + k * lineDistance, StartingPositionY, StartingPositionX + k * lineDistance, lengthvertical );

      //Thin Lines
          for( var l = 0; l < lineNumberY; l++) {
              b.stroke(PanicOrange);
              b.strokeWeight(2);

          b.line(StartingPositionX -3.4, StartingPositionY + l * lineDistance, b.width, StartingPositionY + l * lineDistance );
          }

        }
      b.resetMatrix();

}
//PANICV2************************************************************************************************************************************

function PanicV2 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

                  var PanicLightGrey = b.color(118,119,113);
                  var PanicMiddleGrey = b.color(60,58,59);
                  var PanicDarkGrey = b.color(26,25,18);
                  var PanicOrange = b.color(233,78,36);

                  var neutralLight = PanicLightGrey;
                  var neutralMiddle = PanicMiddleGrey ;
                  var neutralDark = PanicDarkGrey;
                  var neutralHighlight = PanicOrange;

   b.units(b.MM);



  // Big Lines
    for ( var k = 0; k < lineNumberX; k++) {
      b.stroke(PanicDarkGrey);
      b.strokeWeight(8);

      b.line(StartingPositionX + k * lineDistance, StartingPositionY, StartingPositionX + k * lineDistance, lengthvertical );

  // Thin Lines

      for( var l = 0; l < lineNumberY; l++) {
          b.stroke(PanicOrange);
          b.strokeWeight(2);

      b.line(StartingPositionX -3.4, StartingPositionY + l * lineDistance, b.width, StartingPositionY + l * lineDistance );
      }

    }
b.resetMatrix();

}
//PANICV3************************************************************************************************************************************

function PanicV3 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight){
          b.units(b.MM);
          b.colorMode(b.RGB);



// Grundraster


  // Big Lines
  for ( var k = 0; k < lineNumberX; k++) {
    b.stroke(neutralMiddle);
    b.strokeWeight(5);

    b.line(StartingPositionX + k * lineDistance, StartingPositionY, StartingPositionX + k * lineDistance, lengthvertical );

  // Thin Lines

    for( var l = 0; l < lineNumberY; l++) {
        b.stroke(neutralHighlight);
        b.strokeWeight(2);

    b.line(StartingPositionX -3.4, StartingPositionY + l * lineDistance, b.width, StartingPositionY + l * lineDistance );
    }

  }
b.resetMatrix();

}

//PANICV2************************************************************************************************************************************

function PanicV4 (lineNumberX, lineNumberY, lineDistance, StartingPositionX, StartingPositionY,lengthvertical, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

              b.units(b.MM);
              b.colorMode(b.RGB);




    // Big Lines
      for ( var k = 0; k < lineNumberX; k++) {
        b.stroke(neutralMiddle);
        b.strokeWeight(2);

        b.line(StartingPositionX + k * lineDistance, StartingPositionY, StartingPositionX + k * lineDistance, lengthvertical );

    // Thin Lines

        for( var l = 0; l < lineNumberY; l++) {
            b.stroke(neutralHighlight);
            b.strokeWeight(2);

        b.line(StartingPositionX -1, StartingPositionY + l * lineDistance, b.width, StartingPositionY + l * lineDistance );
        }

      }
b.resetMatrix();

}
//ANGER*********************************************************************************************************************************
//ANGER*********************************************************************************************************************************
//ANGER*********************************************************************************************************************************

function AngerV1 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

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
        b.stroke(neutralHighlight);

    b.beginShape();
         // b.vertex(startingX,a);
          b.vertex(-a,0);
          b.vertex(0,a);
          b.vertex(a,0);
          b.vertex(2*a,a);
          b.vertex(3*a,0);
          b.vertex(4*a,a);
          b.vertex(5*a,0);
          b.vertex(6*a,a);
  b.endShape();

  b.beginShape();
          b.vertex(-a,a);
          b.vertex(0,2*a);
          b.vertex(a,a);
          b.vertex(2*a,2*a);
          b.vertex(3*a,a);
          b.vertex(4*a,2*a);
          b.vertex(5*a,a);
          b.vertex(6*a,2*a);
  b.endShape();

  b.beginShape();
          b.vertex(-a,2*a);
          b.vertex(0,3*a);
          b.vertex(a,2*a);
          b.vertex(2*a,3*a);
          b.vertex(3*a,2*a);
          b.vertex(4*a,3*a);
          b.vertex(5*a,2*a);
          b.vertex(6*a,3*a);
  b.endShape();

  b.beginShape();
          b.vertex(-a,3*a);
          b.vertex(0,4*a);
          b.vertex(a,3*a);
          b.vertex(2*a,4*a);
          b.vertex(3*a,3*a);
          b.vertex(4*a,4*a);
          b.vertex(5*a,3*a);
          b.vertex(6*a,4*a);
  b.endShape();

    b.beginShape();
          b.vertex(-a,4*a);
          b.vertex(0,5*a);
          b.vertex(a,4*a);
          b.vertex(2*a,5*a);
          b.vertex(3*a,4*a);
          b.vertex(4*a,5*a);
          b.vertex(5*a,4*a);
          b.vertex(6*a,5*a);
  b.endShape();
b.resetMatrix();

}
//ANGER*********************************************************************************************************************************

function AngerV2 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

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
    b.stroke(neutralHighlight);

    b.beginShape();
         // b.vertex(startingX,a);
          b.vertex(a,startingY);
          b.vertex(2*a,a);
          b.vertex(3*a,startingY);
          b.vertex(4*a,a);
          b.vertex(5*a,startingY);
          b.vertex(6*a,a);
  b.endShape();


  b.beginShape();
          b.vertex(a,a);
          b.vertex(2*a,2*a);
          b.vertex(3*a,a);
          b.vertex(4*a,2*a);
          b.vertex(5*a,a);
          b.vertex(6*a,2*a);
  b.endShape();

  b.beginShape();
          b.vertex(a,2*a);
          b.vertex(2*a,3*a);
          b.vertex(3*a,2*a);
          b.vertex(4*a,3*a);
          b.vertex(5*a,2*a);
          b.vertex(6*a,3*a);
  b.endShape();

  b.beginShape();
          b.vertex(a,3*a);
          b.vertex(2*a,4*a);
          b.vertex(3*a,3*a);
          b.vertex(4*a,4*a);
          b.vertex(5*a,3*a);
          b.vertex(6*a,4*a);
  b.endShape();

    b.beginShape();
          b.vertex(a,4*a);
          b.vertex(2*a,5*a);
          b.vertex(3*a,4*a);
          b.vertex(4*a,5*a);
          b.vertex(5*a,4*a);
          b.vertex(6*a,5*a);
  b.endShape();

b.resetMatrix();

}
function AngerV3 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

      b.colorMode(b.RGB);
      b.units(b.MM);

      b.stroke(neutralDark);

       b.noFill();

    b.beginShape();
         // b.vertex(startingX,a);
          b.vertex(a,startingY);
          b.vertex(2*a,a);
          b.vertex(3*a,startingY);
          b.vertex(4*a,a);
          b.vertex(5*a,startingY);
          b.vertex(6*a,a);
  b.endShape();

  b.beginShape();
          b.vertex(a,a);
          b.vertex(2*a,2*a);
          b.vertex(3*a,a);
          b.vertex(4*a,2*a);
          b.vertex(5*a,a);
          b.vertex(6*a,2*a);
  b.endShape();

  b.beginShape();
          b.vertex(a,2*a);
          b.vertex(2*a,3*a);
          b.vertex(3*a,2*a);
          b.vertex(4*a,3*a);
          b.vertex(5*a,2*a);
          b.vertex(6*a,3*a);
  b.endShape();

  b.beginShape();
          b.vertex(a,3*a);
          b.vertex(2*a,4*a);
          b.vertex(3*a,3*a);
          b.vertex(4*a,4*a);
          b.vertex(5*a,3*a);
          b.vertex(6*a,4*a);
  b.endShape();

  b.beginShape();
          b.vertex(a,4*a);
          b.vertex(2*a,5*a);
          b.vertex(3*a,4*a);
          b.vertex(4*a,5*a);
          b.vertex(5*a,4*a);
          b.vertex(6*a,5*a);
  b.endShape();
b.resetMatrix();
}
//ANGER*********************************************************************************************************************************

function AngerV4 (a, startingX, startingY, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);
        b.noFill();

        b.stroke(neutralMiddle);


   b.beginShape();
          b.vertex(a,2*a);
          b.vertex(2*a,3*a);
          b.vertex(3*a,2*a);
          b.vertex(4*a,3*a);
          b.vertex(5*a,2*a);
          b.vertex(6*a,3*a);
  b.endShape();

  b.beginShape();
          b.vertex(a,3*a);
          b.vertex(2*a,4*a);
          b.vertex(3*a,3*a);
          b.vertex(4*a,4*a);
          b.vertex(5*a,3*a);
          b.vertex(6*a,4*a);
  b.endShape();

  b.beginShape();
          b.vertex(a,4*a);
          b.vertex(2*a,5*a);
          b.vertex(3*a,4*a);
          b.vertex(4*a,5*a);
          b.vertex(5*a,4*a);
          b.vertex(6*a,5*a);
  b.endShape();
b.resetMatrix();

}

//SORROW*********************************************************************************************************************************
//SORROW*********************************************************************************************************************************
//SORROW*********************************************************************************************************************************

function SorrowV1 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

       b.colorMode(b.RGB);
        b.units(b.MM);
                var SorrowDarkGrey = b.color(56,55,51);
                var SorrowMiddleGrey = b.color(105,105,105);
                var SorrowLightGrey = b.color(225,238,239);
                var SorrowBlue = b.color(19,59,128);

                var neutralLight = SorrowLightGrey;
                var neutralMiddle = SorrowMiddleGrey;
                var neutralDark = SorrowDarkGrey;
                var neutralHighlight = SorrowBlue;


  b.fill(neutralHighlight);


  for (var j = 0; j < 2; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + i* distanceY;

      b.ellipse( x, y, radius * i , radius * i );
    }
  }

  for (var j = 0; j < 1; j++) {

     for(var i = 0; i < 5; i++) {
      var x = 2* startingX + j * distanceX;
      var y = startingY + step + i*distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
  for (var j = 0; j < 2; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY+ 2*step + i*distanceY;

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
b.resetMatrix();

}
//SORROW*********************************************************************************************************************************

function SorrowV2 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


b.resetMatrix();

        b.colorMode(b.RGB);
        b.units(b.MM);

                var SorrowDarkGrey = b.color(56,55,51);
                var SorrowMiddleGrey = b.color(105,105,105);
                var SorrowLightGrey = b.color(225,238,239);
                var SorrowBlue = b.color(19,59,128);

                var neutralLight = SorrowLightGrey;
                var neutralMiddle = SorrowMiddleGrey;
                var neutralDark = SorrowDarkGrey;
                var neutralHighlight = SorrowBlue;

  b.fill(neutralHighlight);



  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep/2) * step + i * distanceY;

      b.ellipse( x, y, radius * i , radius * i );
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + multistep * step + i*distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY+ (multistep * 1.5) *step + i*distanceY;

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 2) *step + i*distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 2.5) *step  + i * distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 3) *step  + i * distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 3.5) *step  + i * distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 4) *step  + i * distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
b.resetMatrix();

}
//SORROW*********************************************************************************************************************************

function SorrowV3 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

    b.colorMode(b.RGB);
        b.units(b.MM);

  b.fill(neutralDark);


  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep/2) * step + i * distanceY;

      b.ellipse( x, y, radius * i , radius * i );
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + multistep * step + i*distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY+ (multistep * 1.5) *step + i*distanceY;

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 2) *step + i*distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 2.5) *step  + i * distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 3) *step  + i * distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
b.resetMatrix();


}
//SORROW*********************************************************************************************************************************

function SorrowV4 (radius, distanceY, distanceX, startingX, startingY, step, multistep, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

    b.fill(neutralLight);


  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep/2) * step + i * distanceY;

      b.ellipse( x, y, radius * i , radius * i );
    }
  }

  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + multistep * step + i*distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY+ (multistep * 1.5) *step + i*distanceY;

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
  for (var j = 0; j < 17; j++) {

     for(var i = 0; i < 5; i++) {
      var x = startingX + j * distanceX;
      var y = startingY + (multistep * 2) *step + i*distanceY; // +160

      b.ellipse( x, y, radius * i, radius * i);
    }
  }
b.resetMatrix();


}

//JOY*********************************************************************************************************************************
//JOY*********************************************************************************************************************************
//JOY*********************************************************************************************************************************

function JoyV1 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


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

    var x = b.random(maxRadius,b.width - 20);
    var y = b.random(0,b.height - maxRadius*2);
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
//JOY*********************************************************************************************************************************

function JoyV2 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


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

    var x = b.random(maxRadius*2,b.width);
    var y = b.random(0,b.height - maxRadius*3);
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
//JOY*********************************************************************************************************************************

function JoyV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.fill(neutralDark);

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
    var x = b.random(maxRadius*2,b.width);
    var y = b.random(0,b.height - maxRadius*3);
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


//JOY*********************************************************************************************************************************

function JoyV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


        b.colorMode(b.RGB);
        b.units(b.MM);

  b.fill(neutralMiddle);

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
    var x = b.random(maxRadius*2,b.width);
    var y = b.random(0,b.height - maxRadius*3);
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

function EcstasyV1 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


        b.colorMode(b.RGB);
        b.units(b.MM);

                var EcstasyPink = b.color(255,35,141);
                var EcstasyYellow = b.color(255,255,43);
                var EcstasyRed = b.color(227,6,19);
                var EcstasyBlue = b.color(19,191,213);

                var neutralLight = EcstasyBlue;
                var neutralMiddle = EcstasyPink;
                var neutralDark = EcstasyYellow;
                var neutralHighlight = EcstasyRed;

  b.stroke(neutralMiddle);


  for (var y = 1; y < zeilen; y++) {

      for (var x = 1; x < spalten; x++) {

        var posX = 20+x*stepX;
        var posY = 20+y*stepY;

        var rotationGrad = b.radians(25);
        var rotation = b.rotate(rotationGrad);
        b.strokeWeight(strichstaerke);
        var lines = b.line(posX, posY, posX, posY-strichlaenge);

      }
  }
  b.resetMatrix();

}
//Ecstasy*********************************************************************************************************************************

function EcstasyV2 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


        b.colorMode(b.RGB);
        b.units(b.MM);

                var EcstasyPink = b.color(255,35,141);
                var EcstasyYellow = b.color(255,255,43);
                var EcstasyRed = b.color(227,6,19);
                var EcstasyBlue = b.color(19,191,213);

                var neutralLight = EcstasyBlue;
                var neutralMiddle = EcstasyPink;
                var neutralDark = EcstasyYellow;
                var neutralHighlight = EcstasyRed;

  b.stroke(neutralMiddle);


  for (var y = 1; y < zeilen; y++) {
        var rotationGrad = b.radians(b.random(0,90));

      for (var x = 1; x < spalten; x++) {

        var rotationGrad = b.radians(b.random(0,50));
        var rotationGrad = b.radians(b.random(45,80));


        var posX = -20+x*stepX;
        var posY = -30+y*stepY;

        var rotation = b.rotate(rotationGrad);
        b.strokeWeight(strichstaerke);
        var lines = b.line(posX, posY, posX, posY-strichlaenge);

      }
  }
  b.resetMatrix();

}
//Ecstasy*********************************************************************************************************************************

function EcstasyV3 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.stroke(neutralMiddle);



  for (var y = 1; y < zeilen; y++) {
      var rotationGrad = b.radians(b.random(0,90));

      for (var x = 1; x < spalten; x++) {

        var rotationGrad = b.radians(b.random(0,50));
        var rotationGrad = b.radians(b.random(45,80));


        var posX = -20+x*stepX;
        var posY = -10+y*stepY;

        var rotation = b.rotate(rotationGrad);
        b.strokeWeight(strichstaerke);
        var lines = b.line(posX, posY, posX, posY-strichlaenge);

      }
  }
  b.resetMatrix();

}
//Ecstasy*********************************************************************************************************************************

function EcstasyV4 (zeilen, spalten, stepX, stepY, strichlaenge, strichstaerke, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.stroke(neutralMiddle);


  for (var y = 1; y < zeilen; y++) {
       var rotationGrad = b.radians(b.random(0,90));

      for (var x = 1; x < spalten; x++) {

        var rotationGrad = b.radians(b.random(0,50));
        var rotationGrad = b.radians(b.random(45,80));

        var posX = -20+x*stepX;
        var posY = -10+y*stepY;

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

function TrustV1 (strokeAmount, parallelx, startingY1, endingY2, whiteline, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.stroke(neutralDark);

                var TrustDarkBlue = b.color(22,65,148);
                var TrustLightBlue = b.color(16,119,167);
                var TrustGrey = b.color(225,239,237);
                var TrustYellow = b.color(254,200,0);

                var neutralLight = TrustGrey;
                var neutralMiddle = TrustLightBlue;
                var neutralDark = TrustDarkBlue;
                var neutralHighlight = TrustYellow;

    var strokeAmount = 15;
    var parallelx = b.random(0,b.width-b.width/3);
    var startingY1 = b.random(0,b.height/3);
    var endingY2 = b.random (b.height/1.5, b.height-b.height/4);
    var whiteline = b.height/2.5;

      b.stroke(0);//Edit Color
      b.strokeWeight(7);


    //  1. Point:
      var x1 = parallelx; //Verschiebung von links nach rechts
      var y1 = startingY1; //Länge der Linie
    // 2. Point:
      var x2 = parallelx;
      var y2 = endingY2; //Länge der Linie

  //Big lines
  for( var j = 0; j < strokeAmount; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(7);

    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = startingY1; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = endingY2; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

// Thin lines
  for( var j = 0; j < strokeAmount-1; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(2);

    //  1. Point:
      var Px1 = parallelx + distance/2; //Verschiebung von links nach rechts
      var Py1 = whiteline; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx+ distance/2;
      var Py2 = endingY2; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

//Thin negative Lines
    for( var j = 0; j < strokeAmount; j++) {

    b.stroke(255);//Edit Color
    b.strokeWeight(2);

    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = whiteline; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = whiteline+ 80; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }
b.resetMatrix();

}
//Trust*********************************************************************************************************************************

function TrustV2 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


        b.colorMode(b.RGB);
        b.units(b.MM);

  b.stroke(neutralDark);

                var TrustDarkBlue = b.color(22,65,148);
                var TrustLightBlue = b.color(16,119,167);
                var TrustGrey = b.color(225,239,237);
                var TrustYellow = b.color(254,200,0);

                var neutralLight = TrustGrey;
                var neutralMiddle = TrustLightBlue;
                var neutralDark = TrustDarkBlue;
                var neutralHighlight = TrustYellow;


    var strokeAmount = 6;
    var parallelx = b.width- b.random(100,400);

  //Big lines
  for( var j = 0; j < strokeAmount; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(7);


      //  1. Point:
        var Px1 = parallelx; //Verschiebung von links nach rechts
        var Py1 = 0; //Länge der Linie
      // 2. Point:
        var Px2 = parallelx;
        var Py2 = b.height; //Länge der Linie

      b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

// Thin lines
  for( var j = 0; j < strokeAmount-1; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(2.5);


    //  1. Point:
      var Px1 = parallelx + distance/2; //Verschiebung von links nach rechts
      var Py1 = b.height/2.5; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx+ distance/2;
      var Py2 = b.height-b.height/2.5; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

  //Thin negative Lines
  for( var j = 0; j < strokeAmount; j++) {

    b.stroke(255);//Edit Color
    b.strokeWeight(2.5);

    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = b.height/2.5; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = b.height-b.height/2.5; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }
  b.resetMatrix();

}

//Trust*********************************************************************************************************************************

function TrustV3 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.stroke(neutralLight);

    var startingY1 = b.random(0,b.height/3);
    var endingY2 = b.random (b.height/1.5, b.height-b.height/4);
    var whiteline = b.height/2.5;

      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = startingY1; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = endingY2; //Länge der Linie


  //Big lines
  for( var j = 0; j < strokeAmount; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(7);


    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = 0; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = b.height; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

// Thin lines
  for( var j = 0; j < strokeAmount-1; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(2.5);


    //  1. Point:
      var Px1 = parallelx + distance/2; //Verschiebung von links nach rechts
      var Py1 = b.height/2.5; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx+ distance/2;
      var Py2 = b.height-b.height/2.5; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

  //Thin negative Lines
  for( var j = 0; j < strokeAmount; j++) {

    b.stroke(255);//Edit Color
    b.strokeWeight(2.5);

    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = b.height/2.5; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = b.height-b.height/2.5; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }
  b.resetMatrix();

}
//Trust*********************************************************************************************************************************

function TrustV4 (strokeAmount, parallelx, distance, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.stroke(neutralLight);


    var startingY1 = b.random(0,b.height/3);
    var endingY2 = b.random (b.height/1.5, b.height-b.height/4);
    var whiteline = b.height/2.5;

      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = startingY1; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = endingY2; //Länge der Linie

  //Big lines
  for( var j = 0; j < strokeAmount; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(7);

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

// Thin lines
  for( var j = 0; j < strokeAmount-1; j++) {

      b.stroke(0);//Edit Color
      b.strokeWeight(2.5);


    //  1. Point:
      var Px1 = parallelx + distance/2; //Verschiebung von links nach rechts
      var Py1 = b.height/4; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx+ distance/2;
      var Py2 = b.height-b.height/2.5; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

  //Thin negative Lines
    for( var j = 0; j < strokeAmount; j++) {

    b.stroke(255);//Edit Color
    b.strokeWeight(2.5);

    //  1. Point:
      var Px1 = parallelx; //Verschiebung von links nach rechts
      var Py1 = b.height/4; //Länge der Linie
    // 2. Point:
      var Px2 = parallelx;
      var Py2 = b.height-b.height/2.5; //Länge der Linie

    b.line(Px1 + j * distance, Py1, Px2 + j * distance, Py2);
  }

  b.resetMatrix();

}
//Disgust*********************************************************************************************************************************
//Disgust*********************************************************************************************************************************
//Disgust*********************************************************************************************************************************


function DisgustV1 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight) {



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

                b.stroke(neutralMiddle);


  b.noFill(); // do not fill
  b.strokeWeight(10); // thin strokes
  b.stroke(0);

  var allSnakes = [];


  for( var y = 0; y <= 10; y++) {  // for each row

        var randomX = b.random(0, b.width-50);
        var randomY = b.random(0, b.height-50);


    for( var i = 0; i < 3; i++) {
        var randomxStep = b.random(70,90) / xCells; // Länge der Linie in der Breite

      b.beginShape();

          for( var x = 0; x <= 500; x++) {

            var rotationGrad = b.radians(b.random(0,50));
            var rotation = b.rotate(rotationGrad);

              b.vertex( startingPosX + y * distance + (x * randomxStep),
                        startingPosY + i * distance + (b.sin( b.PI * 5 / xCells * x ) * 15 ));
          }

      b.endShape(); // close the shape, adds it to the layers
    }
  }
  b.resetMatrix();

}
//Disgust*********************************************************************************************************************************

function DisgustV2 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


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

                b.stroke(neutralMiddle);



    b.noFill(); // do not fill
    b.strokeWeight(8); // thin strokes
    b.stroke(0);


    var allSnakes = [];




  for( var y = 0; y <= 10; y++) {  // for each row

        var randomX = b.random(0, b.width-50);
        var randomY = b.random(0, b.height-200);


    for( var i = 0; i < 3; i++) {
        var randomxStep = b.random(70,90) / xCells; // Länge der Linie in der Breite

      b.beginShape();

        for( var x = 0; x <= 400; x++) {

          var rotationGrad = b.radians(b.random(0,50));
          var rotation = b.rotate(rotationGrad);

            b.vertex( startingPosX + y * distance + (x * randomxStep),
                      startingPosY + i * distance + (b.sin( b.PI * 5 / xCells * x ) * 5 ));
        }

      b.endShape(); // close the shape, adds it to the layers
    }
  }
  b.resetMatrix();

}
//Disgust*********************************************************************************************************************************

function DisgustV3 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

        b.colorMode(b.RGB);
        b.units(b.MM);

   b.stroke(neutralDark);


    b.noFill(); // do not fill
    b.strokeWeight(8); // thin strokes
    b.stroke(0);

    var allSnakes = [];




  for( var y = 0; y <= 10; y++) {  // for each row

        var randomX = b.random(0, b.width-50);
        var randomY = b.random(0, b.height-200);


    for( var i = 0; i < 3; i++) {
        var randomxStep = b.random(70,90) / xCells; // Länge der Linie in der Breite

      b.beginShape();

        for( var x = 0; x <= 200; x++) {

          var rotationGrad = b.radians(b.random(0,50));
          var rotation = b.rotate(rotationGrad);

            b.vertex( startingPosX + y * distance + (x * randomxStep),
                      startingPosY + i * distance + (b.sin( b.PI * 5 / xCells * x ) * 5 ));

        }

      b.endShape(); // close the shape, adds it to the layers
    }
  }
  b.resetMatrix();

}
//Disgust*********************************************************************************************************************************

function DisgustV4 (xCells, yCells, yStep, xStep, distance, startingPosX, startingPosY,  neutralLight, neutralMiddle, neutralDark, neutralHighlight)
 {

        b.colorMode(b.RGB);
        b.units(b.MM);

  b.stroke(neutralLight);


  b.noFill(); // do not fill
  b.strokeWeight(4); // thin strokes
  b.stroke(0);

  var allSnakes = [];

  for( var y = 0; y <= 10; y++) {  // for each row

      var randomX = b.random(0, b.width-50);
      var randomY = b.random(0, b.height-200);


    for( var i = 0; i < 3; i++) {
        var randomxStep = b.random(70,90) / xCells; // Länge der Linie in der Breite

      b.beginShape();

        for( var x = 0; x <= 150; x++) {

          var rotationGrad = b.radians(b.random(0,50));
          var rotation = b.rotate(rotationGrad);

            b.vertex( startingPosX + y * distance + (x * randomxStep),
                      startingPosY + i * distance + (b.sin( b.PI * 5 / xCells * x ) *5 ));

        }

      b.endShape(); // close the shape, adds it to the layers
    }
  }
  b.resetMatrix();


}
//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************
//Expectation********************************************************************************************************************************

function ExpectationV1 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {



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

  b.fill(neutralLight);

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
    var x = b.random(b.width);
    var y = b.random(b.height);
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
//Expectation********************************************************************************************************************************

function ExpectationV2 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {

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

                b.fill(neutralLight);

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
      var x = b.random(maxRadius, b.width);
      var y = b.random(maxRadius/2,b.height - maxRadius*2);
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
//Expectation********************************************************************************************************************************

function ExpectationV3 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight) {


        b.colorMode(b.RGB);
        b.units(b.MM);

  b.fill(neutralDark);

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
    var x = b.random(maxRadius, b.width);
    var y = b.random(maxRadius/2,b.height - maxRadius*2);
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
//Expectation********************************************************************************************************************************

function ExpectationV4 (circleCount, minRadius, maxRadius, neutralLight, neutralMiddle, neutralDark, neutralHighlight)
 {
      b.colorMode(b.RGB);
        b.units(b.MM);

    b.fill(neutralHighlight);


  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
    var x = b.random(maxRadius, b.width);
    var y = b.random(maxRadius/2,b.height - maxRadius*2);
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


