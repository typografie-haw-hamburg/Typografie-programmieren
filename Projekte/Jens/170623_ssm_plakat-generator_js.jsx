//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/bundle/basil.js";

function draw() {
  //b.clear(b.doc()); // Clear the current document!

  ///////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////

  // Global Settings
    b.units(b.MM);
    var myWidth = 500;
    var myHeight = 700;
    b.colorMode(b.CMYK);
    var doc = b.doc();
    doc.documentPreferences.properties = {
      facingPages: false,
      pageWidth: myWidth,
      pageHeight: myHeight
    };
  // First Page Settings
    b.bleeds(3);
    b.margins(0);
  // Modes Settings
    b.rectMode(b.CORNER);
    b.ellipseMode(b.CENTER);
  // Text Settings
    b.textFont("Suisse Int'l", "Bold");
    b.textTracking(0);
    b.textSize(12);
    b.textLeading(14);
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
  // General Variables
    var halfX = b.width/2;
    var halfY = b.height/2;
    var myCounter = 10;
    var myScale = 10;
    var margin = 10;
    var color1 = b.color(40,50,0,100);
    // color 2 is a special random color
      /*
      var cyanValue = 0;
      var magentaValue = 0;
      var yellowValue = 0;

      var primaryColorNo = b.floor( b.random( 0, 4 ) );
      var primaryColorValue = 100;

      var secondaryColorNo = primaryColorNo;
      var secondaryColorValue = b.floor( b.random( 0, 100 ) );
      while ( primaryColorNo == secondaryColorNo ) {
        var secondaryColorNo = b.floor( b.random( 0, 4 ) );
      }

      if ( primaryColorNo == 1 ) { cyanValue = primaryColorValue; }
      if ( primaryColorNo == 2 ) { magentaValue = primaryColorValue; }
      if ( primaryColorNo == 3 ) { yellowValue = primaryColorValue; }

      if ( secondaryColorNo == 1 ) { cyanValue = secondaryColorValue; }
      if ( secondaryColorNo == 2 ) { magentaValue = secondaryColorValue; }
      if ( secondaryColorNo == 3 ) { yellowValue = secondaryColorValue; }

      var color2 = b.color( cyanValue, magentaValue, yellowValue, 0 );
      */
    var color2 = b.color(0,90,80,0);
    var color3 = b.color(0,0,0,0);
    var patternColor = color2;
    var backgroundColor = color3;

  ///////////////////////////////////////////////////////////////////////////////////

  // Initial Layer Setup
    // remove certain layers if existing
      removeArtworkLayers();
      b.println("CHECK: Initial Layer Setup");

  ///////////////////////////////////////////////////////////////////////////////////

  // Initial Script Setup
    var iterations = 1;     // How many pages do you want?
    var columnCount = 35;   // Set number of columns in underlying grid!
    var lineCount = 51;     // Set number of lines in underlying grid!

  for( var i = 1; i <= iterations; i++ ) {

    // remove certain layers if existing
      removeArtworkLayers();
      b.println("CHECK: removeArtworkLayers");

    // Choose randomly which letter is transformed and aligned in which manner!
      var disLetterNo = b.floor( b.random( 1, 4 ) ); // Choose which of the three letters is going to be distorted! (1:S1, 2:S2, 3:M)!
      b.println("disLetterNo: " + disLetterNo);
      var disWayNo = b.floor( b.random( 1, 3 ) );    // Choose between the two ways of distortion (1:horizontal or 2:vertical)!
      b.println("disWayNo: " + disWayNo);
      var disAlignNo = b.floor( b.random( 1, 3 ) );  // Choose between the two ways of alignment of the distorted letter (1:left/up or 2:right/down)!
      b.println("disAlignNo: " + disAlignNo);

    // Set regular initial letter positions (like if no distortion or translation would be happening)!
      var s1StartX = 1;
      var s1StartY = 1;
      var s2StartX = 18;
      var s2StartY = 1;
      var mStartX = 18;
      var mStartY = 26;

    // Adjust letter positions according to the choosen transformation and alignment parameters!
      if ( disLetterNo == 1 && disWayNo == 1 && disAlignNo == 1 )
        { s1StartX = 1; s1StartY = 1; s2StartX = 1; s2StartY = 26; }
      if ( disLetterNo == 1 && disWayNo == 1 && disAlignNo == 2 )
        { s1StartX = 9; s1StartY = 1; s2StartX = 1; s2StartY = 26; }
      if ( disLetterNo == 1 && disWayNo == 2 && disAlignNo == 1 )
        { s1StartX = 1; s1StartY = 1; s2StartX = 18; s2StartY = 1; }
      if ( disLetterNo == 1 && disWayNo == 2 && disAlignNo == 2 )
        { s1StartX = 1; s1StartY = 14; s2StartX = 18; s2StartY = 1; }

      if ( disLetterNo == 2 && disWayNo == 1 && disAlignNo == 1 )
        { s2StartX = 1; s2StartY = 26; mStartX = 18; mStartY = 1; }
      if ( disLetterNo == 2 && disWayNo == 1 && disAlignNo == 2 )
        { s2StartX = 9; s2StartY = 26; mStartX = 18; mStartY = 1; }
      if ( disLetterNo == 2 && disWayNo == 2 && disAlignNo == 1 )
        { s2StartX = 18; s2StartY = 1; mStartX = 1; mStartY = 26; }
      if ( disLetterNo == 2 && disWayNo == 2 && disAlignNo == 2 )
        { s2StartX = 18; s2StartY = 14; mStartX = 1; mStartY = 26; }

      if ( disLetterNo == 3 && disWayNo == 1 && disAlignNo == 1 )
        { s2StartX = 18; s2StartY = 1; mStartX = 1; mStartY = 26; }
      if ( disLetterNo == 3 && disWayNo == 1 && disAlignNo == 2 )
        { s2StartX = 18; s2StartY = 1; mStartX = 9; mStartY = 26; }
      if ( disLetterNo == 3 && disWayNo == 2 && disAlignNo == 1 )
        { s2StartX = 1; s2StartY = 26; mStartX = 18; mStartY = 1; }
      if ( disLetterNo == 3 && disWayNo == 2 && disAlignNo == 2 )
        { s2StartX = 1; s2StartY = 26; mStartX = 18; mStartY = 14; }

      b.println("CHECK: Transformation stuff");

    // Draw page grid!
      drawPageGrid( columnCount, lineCount, color2, color3 );
      b.println("CHECK: drawPageGrid");
      b.delay(100);

    // Draw first S!
      if ( disLetterNo == 1 ) {
        drawS( columnCount, lineCount, s1StartX, s1StartY, disWayNo );
      } else {
        drawS( columnCount, lineCount, s1StartX, s1StartY, 0 );
      }
      b.delay(100);

    // Draw second S!
      if ( disLetterNo == 2 ) {
        drawS( columnCount, lineCount, s2StartX, s2StartY, disWayNo );
      } else {
        drawS( columnCount, lineCount, s2StartX, s2StartY, 0 );
      }
      b.delay(100);

    // Draw M!
      if ( disLetterNo == 3 ) {
        drawM( columnCount, lineCount, mStartX, mStartY, disWayNo );
      } else {
        drawM( columnCount, lineCount, mStartX, mStartY, 0 );
      }
      b.delay(100);

      /*
      var myLayer = app.documents.item(0).layers.item("M");
      var myLayerItems = myLayer.allPageItems;
      myLayerItems[0].properties = {
        strokeAlignment:StrokeAlignment.OUTSIDE_ALIGNMENT,
        textWrapPreferences:{
          textWrapMode:TextWrapModes.BOUNDING_BOX_TEXT_WRAP,
          textWrapOffset:[ 10, 0, 10, 0 ]
        }
      };
      */

    // Move pre-existing "Information" layer from bottom to top!
      var informationLayer = b.layer("Information");
      informationLayer.move( LocationOptions.AT_BEGINNING );

    // Move pre-existing "Information" layer to random position!
      var informationLayer = b.layer("Information");
      var layerCount = b.doc().layers.length;
      b.println("layerCount: " + layerCount);
      var randomLayerNo = b.floor( b.random( 0, 6 ) );
      var randomLayer = b.doc().layers.item( randomLayerNo );
      informationLayer.move( LocationOptions.BEFORE, randomLayer );
      b.delay(100);

    // Add page if necessary
      /*
      var currentPageNumber = b.pageNumber();              // What is the current page number?
      b.println("currentPageNumber: " + currentPageNumber);

      if (i < iterations) {                                // If we are not in the last iteration of the loop:
        if ( currentPageNumber < b.pageCount() ) {         // If the current page number is lower than the total page count:
          b.page( currentPageNumber + 1 );                 // Go to the next page!
        } else {                                           // Otherwise:
          b.addPage();                                     // Add a page!
          b.bleeds(3);
          b.margins(0);
        }
      }
      */

    // Delay!
      b.delay(100);

    // Draw neutral rect
      var neutralRect = b.rect( -10, -10, 1, 1 );
      neutralRect.appliedObjectStyle = b.doc().objectStyles.item("[Ohne]");

    // Delay!
      b.delay(100);

    // Export PDF!
      var fileName = "SSM-Plakat_" + b.timestamp();
      b.savePDF(fileName, false);

    // Delay!
      b.delay(100);

  }

  ///////////////////////////////////////////////////////////////////////////////////

  function removeArtworkLayers() {
    // remove certain layers if existing
    var layerNames = ["PAGE-GRID-1", "BACKGROUND", "PATTERN", "S-GRID", "S-LETTER", "M-GRID", "M-LETTER"];
    for (var i = 0; i < layerNames.length; i++) {
      var myLayer = b.layer(layerNames[i]);
      b.remove(myLayer);
    }
  }


  ///////////////////////////////////////////////////////////////////////////////////

  function drawPageGrid( columnCount, lineCount, patternColor, backgroundColor ) {

    // Compute initial variables!
      var columnWidth = myWidth / columnCount;
      var lineHeight = myHeight / lineCount;

    // Choose colors for background, grid and pattern randomly!
      var chooseColor = b.floor( b.random( 1, 6 ) );
      if ( chooseColor < 2 ) {
        var tempColor1 = patternColor;
        var tempColor2 = backgroundColor;
        patternColor = tempColor2;
        backgroundColor = tempColor1;
      }
      b.println("CHECK: choose pattern color");

    // Draw grid!
      b.stroke(color2);
      b.strokeWeight(0.5);
      for (var i = 1; i <= columnCount ; i++) {
        b.layer("PAGE-GRID-1");
        b.line( i * columnWidth, 0, i * columnWidth, myHeight );
        b.delay(50);
        //b.layer("PAGE-GRID-LABEL");
        //b.text( i, (i - 1) * columnWidth, 0, columnWidth, lineHeight);
      }
      for (var i = 1; i <= lineCount ; i++) {
        b.layer("PAGE-GRID-1");
        b.line( 0, i * lineHeight, myWidth, i * lineHeight );
        b.delay(50);
        //b.layer("PAGE-GRID-LABEL");
        //b.text( i, 0, (i - 1) * lineHeight, columnWidth, lineHeight);
      }
      b.println("CHECK: draw grid");

    // Color background!
      b.layer("BACKGROUND");
      b.fill(backgroundColor);
      b.noStroke();
      b.rect( -3, -3, myWidth+6, myHeight+6);
      b.delay(100);

    // Draw pattern!
      b.layer("PATTERN");
      b.noStroke();
      b.noFill();
      var myCounter = 1;
      b.fill(patternColor);
      b.println("CHECK: pattern setup");

      for (var i = 0; i < 2; i++) { // X1
        var x1 = columnWidth * (i+1) + ( columnWidth * 16 * i );
        for (var j = 0; j < 2; j++) { // Y1
          var y1 = lineHeight * (j+1) + ( lineHeight * 24 * j );
          var dice = b.floor( b.random( 1, 9 + i + j ) );
          b.println("GRID-2-DICE-1: " + dice);
          if ( dice > 7 ) {
            var patternRect = b.rect( x1, y1, columnWidth * 16, lineHeight * 24 ); // Draw Rect
            patternRect.appliedObjectStyle = b.doc().objectStyles.item("Pattern-Form");
            b.delay(150);
          } else {
            for (var k = 0; k < 2; k++) { // X2
              var x2 = columnWidth * (i+1) + ( columnWidth * 16 * i ) + ( columnWidth * 8 * k );
              for (var l = 0; l < 2; l++) { // Y2
                var y2 = lineHeight * (j+1) + ( lineHeight * 24 * j ) + ( lineHeight * 12 * l );
                var dice = b.floor( b.random( 1, 8 + i + j ) );
                b.println("GRID-2-DICE-2: " + dice);
                if ( dice > 5 && myCounter %2 != 0 ) {
                  var patternRect = b.rect( x2, y2, columnWidth * 8, lineHeight * 12 ); // Draw Rect
                  patternRect.appliedObjectStyle = b.doc().objectStyles.item("Pattern-Form");
                  b.delay(150);
                } else {
                  for (var m = 0; m < 2; m++) { // X3
                    var x3 = columnWidth * (i+1) + ( columnWidth * 16 * i ) + ( columnWidth * 8 * k ) + ( columnWidth * 4 * m );
                    for (var n = 0; n < 2; n++) { // Y3
                      var y3 = lineHeight * (j+1) + ( lineHeight * 24 * j ) + ( lineHeight * 12 * l ) + ( lineHeight * 6 * n );
                      var dice = b.floor( b.random( 1, 7 ) );
                      b.println("GRID-2-DICE-3: " + dice);
                      if ( dice > 2 && myCounter %2 == 0 ) {
                        var patternRect = b.rect( x3, y3, columnWidth * 4, lineHeight * 6 ); // Draw Rect
                        patternRect.appliedObjectStyle = b.doc().objectStyles.item("Pattern-Form");
                        b.delay(150);
                      } else {
                        var bgRect = b.rect( x3, y3, columnWidth * 4, lineHeight * 6 );
                        bgRect.appliedObjectStyle = b.doc().objectStyles.item("Pattern-Form-Whitespace");
                      }
                    }
                    myCounter++;
                  }
                myCounter++;
                }
                myCounter++;
              }
            myCounter++;
            }
          }
        }
      }

      var neutralRect = b.rect( -10, -10, 1, 1 );
      neutralRect.appliedObjectStyle = b.doc().objectStyles.item("[Ohne]");
  }

  ///////////////////////////////////////////////////////////////////////////////////

  function drawS( columnCount, lineCount, startX, startY, variant ) {

    ///*** GRID ***///

      b.layer("S-GRID");

      var columnWidth = myWidth / columnCount;
      var lineHeight = myHeight / lineCount;

      var translateX = columnWidth * startX;
      var translateY = lineHeight * startY;

    ///*** LETTER ***///

      b.layer("S-LETTER");
      var selectOutlineElement = b.floor( b.random( 1, 4 ) );
      b.println("selectOutlineElement: " + selectOutlineElement);

      if ( variant == 0) {
        var letterHeight = 24 * lineHeight;
        var letterWidth = 16 * columnWidth;
      }
      if ( variant == 1) {
        var letterHeight = 24 * lineHeight;
        var letterWidth = 25 * columnWidth;
      }
      if ( variant == 2) {
        var letterHeight = 36 * lineHeight;
        var letterWidth = 16 * columnWidth;
      }

      var arcHeight = 8 * lineHeight;

    ///*** Upper Arc ***///

      if (selectOutlineElement == 1) {
        b.stroke(color1);
        b.strokeWeight(10);
        b.noFill();
      } else {
        b.fill(color1);
        b.noStroke();
      }

      var arc1StrokeWeightUnits = b.floor( b.random( 1, 8 ) );
      b.println("arc1StrokeWeightUnits: " + arc1StrokeWeightUnits);
      var arc1StrokeWeight = arc1StrokeWeightUnits * columnWidth;
      b.println("arc1StrokeWeight: " + arc1StrokeWeight);

      if ( arc1StrokeWeightUnits > 6 && letterWidth > 20 * columnWidth ) {
        var arc1HorizontalStrokeWeight = arc1StrokeWeight * 0.75;
      } else {
        var arc1HorizontalStrokeWeight = arc1StrokeWeight;
      }

      b.beginShape( b.CLOSE );
        // 1 Vertex - Bottom Left Outside
          var x = translateX;
          var y = translateY + arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y;
          var xAnchorRight = x;
          var yAnchorRight = y - arcHeight * 0.55;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 2 Vertex - Top Center Outside
          var x = translateX + letterWidth * 0.5;
          var y = translateY;
          var xAnchorLeft = x - letterWidth * 0.275;
          var yAnchorLeft = y;
          var xAnchorRight = x + letterWidth * 0.275;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 3 Vertex - Bottom Right Outside
          var x = translateX + letterWidth;
          var y = translateY + arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y - arcHeight * 0.55;
          var xAnchorRight = x;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 4 Vertex - Bottom Right Inside
          var x = translateX + letterWidth - arc1StrokeWeight;
          var y = translateY + arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y;
          var xAnchorRight = x;
          var yAnchorRight = y - (arcHeight - arc1HorizontalStrokeWeight) * 0.55;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 5 Vertex - Top Center Inside
          var x = translateX + letterWidth * 0.5;
          var y = translateY + arc1HorizontalStrokeWeight;
          var xAnchorLeft = x + (letterWidth - arc1StrokeWeight * 2) * 0.275;
          var yAnchorLeft = y;
          var xAnchorRight = x - (letterWidth - arc1StrokeWeight * 2) * 0.275;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 6 Vertex - Bottom Left Inside
          var x = translateX + arc1StrokeWeight;
          var y = translateY + arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y - (arcHeight - arc1HorizontalStrokeWeight) * 0.55;
          var xAnchorRight = x;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
      var newForm = b.endShape();

      newForm.properties = {
        strokeAlignment:StrokeAlignment.INSIDE_ALIGNMENT,
        /*
        textWrapPreferences:{
          textWrapMode:TextWrapModes.BOUNDING_BOX_TEXT_WRAP,
          textWrapOffset:[ 10, 0, 10, 0 ]
        }
        */
      };

    b.delay(300);

    ///*** Lower Arc ***///

      if (selectOutlineElement == 2) {
        b.stroke(color1);
        b.strokeWeight(10);
        b.noFill();
      } else {
        b.fill(color1);
        b.noStroke();
      }

      var arc2StrokeWeightUnits = b.floor( b.random( 1, 8 ) );
      b.println("arc2StrokeWeightUnits: " + arc2StrokeWeightUnits);
      var arc2StrokeWeight = arc2StrokeWeightUnits * columnWidth;
      b.println("arc2StrokeWeight: " + arc2StrokeWeight);

      if ( arc2StrokeWeightUnits > 6 && letterWidth > 20 * columnWidth ) {
        var arc2HorizontalStrokeWeight = arc2StrokeWeight * 0.75;
      } else {
        var arc2HorizontalStrokeWeight = arc2StrokeWeight;
      }

      b.beginShape( b.CLOSE );
        // 1 Vertex - Top Left Outside
          var x = translateX;
          var y = translateY + letterHeight - arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y + arcHeight * 0.55;
          var xAnchorRight = x;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 2 Vertex - Top Left Inside
          var x = translateX + arc2StrokeWeight;
          var y = translateY + letterHeight - arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y;
          var xAnchorRight = x;
          var yAnchorRight = y + (arcHeight - arc2HorizontalStrokeWeight) * 0.55;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 3 Vertex - Bottom Center Inside
          var x = translateX + letterWidth * 0.5;
          var y = translateY + letterHeight - arc2HorizontalStrokeWeight;
          var xAnchorLeft = x - (letterWidth - arc2StrokeWeight * 2) * 0.275;
          var yAnchorLeft = y;
          var xAnchorRight = x + (letterWidth - arc2StrokeWeight * 2) * 0.275;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 4 Vertex - Top Right Inside
          var x = translateX + letterWidth - arc2StrokeWeight;
          var y = translateY + letterHeight - arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y + (arcHeight - arc2HorizontalStrokeWeight) * 0.55;
          var xAnchorRight = x;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 5 Vertex - Top Right Outside
          var x = translateX + letterWidth;
          var y = translateY + letterHeight - arcHeight;
          var xAnchorLeft = x;
          var yAnchorLeft = y;
          var xAnchorRight = x;
          var yAnchorRight = y + arcHeight * 0.55;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);
        // 6 Vertex - Bottom Center Outside
          var x = translateX + letterWidth * 0.5;
          var y = translateY + letterHeight;
          var xAnchorLeft = x + letterWidth * 0.275;;
          var yAnchorLeft = y;
          var xAnchorRight = x - letterWidth * 0.275;;
          var yAnchorRight = y;
          b.vertex(x, y, xAnchorLeft, yAnchorLeft, xAnchorRight, yAnchorRight);

      var newForm = b.endShape();

      newForm.properties = {
        strokeAlignment:StrokeAlignment.INSIDE_ALIGNMENT,
        /*
        textWrapPreferences:{
          textWrapMode:TextWrapModes.BOUNDING_BOX_TEXT_WRAP,
          textWrapOffset:[ 10, 0, 10, 0 ]
        }
        */
      };

    b.delay(300);

    ///*** Middle Connection ***///

      if (selectOutlineElement == 3) {
        b.stroke(color1);
        b.strokeWeight(10);
        b.noFill();
      } else {
        b.fill(color1);
        b.noStroke();
      }

      b.beginShape( b.CLOSE );
        // 1 Vertex
          var x = translateX;
          var y = translateY + arcHeight + lineHeight * 2;
          b.vertex(x, y);
        // 2 Vertex
          var x = translateX;
          var y = translateY + arcHeight;
          b.vertex(x, y);
        // 3 Vertex
          var x = translateX + arc1StrokeWeight;
          var y = translateY + arcHeight;
          b.vertex(x, y);
        // 4 Vertex
          var x = translateX + arc1StrokeWeight;
          var y = translateY + arcHeight + lineHeight * 1;
          b.vertex(x, y);
        // 5 Vertex
          var x = translateX + letterWidth;
          var y = translateY + letterHeight - arcHeight - lineHeight * 2;
          b.vertex(x, y);
        // 6 Vertex
          var x = translateX + letterWidth;
          var y = translateY + letterHeight - arcHeight;
          b.vertex(x, y);
        // 7 Vertex
          var x = translateX + letterWidth - arc2StrokeWeight;
          var y = translateY + letterHeight - arcHeight;
          b.vertex(x, y);
        // 8 Vertex
          var x = translateX + letterWidth - arc2StrokeWeight;
          var y = translateY + letterHeight - arcHeight - lineHeight * 1;
          b.vertex(x, y);

      var newForm = b.endShape();

      newForm.properties = {
        strokeAlignment:StrokeAlignment.INSIDE_ALIGNMENT,
        /*
        textWrapPreferences:{
          textWrapMode:TextWrapModes.BOUNDING_BOX_TEXT_WRAP,
          textWrapOffset:[ 10, 0, 10, 0 ]
        }
        */
      };

    b.delay(300);

  }

  ///////////////////////////////////////////////////////////////////////////////////

  function drawM( columnCount, lineCount, startX, startY, variant ) {

    ///*** GRID ***///

      b.layer("M-GRID");

      var columnWidth = myWidth / columnCount;
      var lineHeight = myHeight / lineCount;

      var translateX = columnWidth * startX;
      var translateY = lineHeight * startY;

    ///*** LETTER ***///

      b.layer("M-LETTER");
      var selectOutlineElement = b.floor( b.random( 1, 4 ) );
      b.println("selectOutlineElement: " + selectOutlineElement);

      if ( variant == 0) {
        var letterHeight = 24 * lineHeight;
        var letterWidth = 16 * columnWidth;
      }
      if ( variant == 1) {
        var letterHeight = 24 * lineHeight;
        var letterWidth = 25 * columnWidth;
      }
      if ( variant == 2) {
        var letterHeight = 36 * lineHeight;
        var letterWidth = 16 * columnWidth;
      }

    ///*** Left Stem ***///

      if (selectOutlineElement == 1) {
        b.stroke(color1);
        b.strokeWeight(10);
        b.noFill();
      } else {
        b.fill(color1);
        b.noStroke();
      }

      var stem1StrokeWeightUnits = b.floor( b.random( 1, 8 ) );
      b.println("stem1StrokeWeightUnits: " + stem1StrokeWeightUnits);
      var stem1StrokeWeight = stem1StrokeWeightUnits * columnWidth;
      b.println("stem1StrokeWeight: " + stem1StrokeWeight);

      b.beginShape( b.CLOSE );
        // 1 Vertex
          var x = translateX;
          var y = translateY;
          b.vertex(x, y);
        // 2 Vertex
          var x = translateX + stem1StrokeWeight;
          var y = translateY;
          b.vertex(x, y);
        // 3 Vertex
          var x = translateX + stem1StrokeWeight;
          var y = translateY + letterHeight;
          b.vertex(x, y);
        // 4 Vertex
          var x = translateX;
          var y = translateY + letterHeight;
          b.vertex(x, y);
      var newForm = b.endShape();

      newForm.properties = {
        strokeAlignment:StrokeAlignment.INSIDE_ALIGNMENT,
        /*
        textWrapPreferences:{
          textWrapMode:TextWrapModes.BOUNDING_BOX_TEXT_WRAP,
          textWrapOffset:[ 10, 0, 10, 0 ]
        }
        */
      };

    b.delay(300);

    ///*** Right Stem ***///

      if (selectOutlineElement == 2) {
        b.stroke(color1);
        b.strokeWeight(10);
        b.noFill();
      } else {
        b.fill(color1);
        b.noStroke();
      }

      var stem2StrokeWeightUnits = b.floor( b.random( 1, 8 ) );
      b.println("stem2StrokeWeightUnits: " + stem2StrokeWeightUnits);
      var stem2StrokeWeight = stem2StrokeWeightUnits * columnWidth;
      b.println("stem2StrokeWeight: " + stem2StrokeWeight);

      b.beginShape( b.CLOSE );
        // 1 Vertex
          var x = translateX + letterWidth - stem2StrokeWeight;
          var y = translateY;
          b.vertex(x, y);
        // 2 Vertex
          var x = translateX + letterWidth;
          var y = translateY;
          b.vertex(x, y);
        // 3 Vertex
          var x = translateX + letterWidth;
          var y = translateY + letterHeight;
          b.vertex(x, y);
        // 4 Vertex
          var x = translateX + letterWidth - stem2StrokeWeight;
          var y = translateY + letterHeight;
          b.vertex(x, y);
      var newForm = b.endShape();

      newForm.properties = {
        strokeAlignment:StrokeAlignment.INSIDE_ALIGNMENT,
        /*
        textWrapPreferences:{
          textWrapMode:TextWrapModes.BOUNDING_BOX_TEXT_WRAP,
          textWrapOffset:[ 10, 0, 10, 0 ]
        }
        */
      };

    b.delay(300);

    ///*** Middle Connection ***///

      if (selectOutlineElement == 3) {
        b.stroke(color1);
        b.strokeWeight(10);
        b.noFill();
      } else {
        b.fill(color1);
        b.noStroke();
      }

      var connectionStrokeWeightUnits = b.floor( b.random( 2, 8 ) );
      b.println("connectionStrokeWeightUnits: " + connectionStrokeWeightUnits);
      var connectionStrokeWeight = connectionStrokeWeightUnits * lineHeight;
      b.println("connectionStrokeWeight: " + connectionStrokeWeight);

      b.beginShape( b.CLOSE );
        // 1 Vertex - Top Left 1
          var x = translateX + stem1StrokeWeight;
          var y = translateY;
          b.vertex(x, y);
        // 2 Vertex - Top Left 2
          var x = translateX + columnWidth * 0.5 + stem1StrokeWeight;
          var y = translateY;
          b.vertex(x, y);
        // 3 Vertex - Top Center 1
          var x = translateX + stem1StrokeWeight + ( letterWidth - stem1StrokeWeight - stem2StrokeWeight ) / 2 - columnWidth * 0.25 ;
          //var x = translateX + columnWidth * ( ( 16 - stem1StrokeWeightUnits - stem2StrokeWeightUnits ) / 2 + stem1StrokeWeightUnits - 0.25 );
          var y = translateY + lineHeight * 2 + connectionStrokeWeight;
          b.vertex(x, y);
        // 4 Vertex - Top Center 2
          var x = translateX + stem1StrokeWeight + ( letterWidth - stem1StrokeWeight - stem2StrokeWeight ) / 2 + columnWidth * 0.25 ;
          //var x = translateX + columnWidth * ( ( 16 - stem1StrokeWeightUnits - stem2StrokeWeightUnits ) / 2 + stem1StrokeWeightUnits + 0.25 );
          var y = translateY + lineHeight * 2 + connectionStrokeWeight;
          b.vertex(x, y);
        // 5 Vertex - Top Right 1
          var x = translateX + letterWidth - columnWidth * 0.5 - stem2StrokeWeight;
          var y = translateY;
          b.vertex(x, y);
        // 6 Vertex - Top Right 2
          var x = translateX + letterWidth - stem2StrokeWeight;
          var y = translateY;
          b.vertex(x, y);
        // 7 Vertex - Bottom Right 1
          var x = translateX + letterWidth - stem2StrokeWeight;
          var y = translateY + connectionStrokeWeight;
          b.vertex(x, y);
        // 8 Vertex - Bottom Right 2
          var x = translateX + letterWidth - columnWidth * 0.25 - stem2StrokeWeight;
          var y = translateY + connectionStrokeWeight;
          b.vertex(x, y);
        // 9 Vertex - Bottom Center 1
          var x = translateX + stem1StrokeWeight + ( letterWidth - stem1StrokeWeight - stem2StrokeWeight ) / 2 + columnWidth * 0.5 ;
          //var x = translateX + columnWidth * ( ( 16 - stem1StrokeWeightUnits - stem2StrokeWeightUnits ) / 2 + stem1StrokeWeightUnits + 0.5 );
          var y = translateY + lineHeight * 2 + (connectionStrokeWeight * 2);
          b.vertex(x, y);
        // 10 Vertex - Bottom Center 2
          var x = translateX + stem1StrokeWeight + ( letterWidth - stem1StrokeWeight - stem2StrokeWeight ) / 2 - columnWidth * 0.5 ;
          //var x = translateX + columnWidth * ( ( 16 - stem1StrokeWeightUnits - stem2StrokeWeightUnits ) / 2 + stem1StrokeWeightUnits - 0.5 );
          var y = translateY + lineHeight * 2 + (connectionStrokeWeight * 2);
          b.vertex(x, y);
        // 11 Vertex
          var x = translateX + columnWidth * 0.25 + stem1StrokeWeight;
          var y = translateY + lineHeight * 0 + connectionStrokeWeight;
          b.vertex(x, y);
        // 12 Vertex
          var x = translateX + stem1StrokeWeight;
          var y = translateY + lineHeight * 0 + connectionStrokeWeight;
          b.vertex(x, y);
      var newForm = b.endShape();


      //newForm.strokeAlignment = StrokeAlignment.INSIDE_ALIGNMENT;

      newForm.properties = {
        strokeAlignment:StrokeAlignment.INSIDE_ALIGNMENT,
        /*
        textWrapPreferences:{
          textWrapMode:TextWrapModes.BOUNDING_BOX_TEXT_WRAP,
          textWrapOffset:[ 10, 0, 10, 0 ]
        }
        */
      };

    b.delay(300);

    // That's the script.

  }

};

b.go(); //!
