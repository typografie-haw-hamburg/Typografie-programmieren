// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

// BASICS

  // Close current document
      b.close(false);

  // Create Document
      var myDocument = app.documents.add();

  // Set to Single Pages
      myDocument.documentPreferences.facingPages = false;

  // Adjust Baseline Grid
      var myGridPreferences = myDocument.gridPreferences;
      b.units(b.PT);
      myGridPreferences.baselineDivision = 15;
      b.units(b.MM);
      myGridPreferences.baselineStart = 12;
      myGridPreferences.baselineGridShown = true;

  //Get a reference to the first master spread
      var myMasterSpread = myDocument.masterSpreads.item(0);

  //Get a reference to the margin preferences of the first page in the master spread
      var myMarginPreferences = myMasterSpread.pages.item(0).marginPreferences;

  //Set up page margins and columns
      myMarginPreferences.left = 12;
      myMarginPreferences.top = 12;
      myMarginPreferences.right = 12;
      myMarginPreferences.bottom = 12;
      myMarginPreferences.columnCount = 12;
      myMarginPreferences.columnGutter = 0;

  // Document Variables
      // b.colorMode(b.CMYK);
      var w = b.width; // Seitenbreite
      var h = b.height; // Seitenhöhe
      var w2 = b.width/2; // Seitenbreite/2
      var h2 = b.height/2; // Seitenhöhe/2
      var x = b.round(b.random(b.width)); // Zufalls X
      var y = b.round(b.random(b.height)); // Zufalls Y

  // Your Textframe Size
      var myW = 186; // Textframe Width (mm)
      var myH = 271.6; // Textframe (mm)
      var myT = 12; // Top Margin (mm)
      var myL = 12; // Left Margin (mm)

  // Save default document font family & size in variable
      var myFont = app.fonts.itemByName("M+ 1m\tthin");
      var my2ndFont = app.fonts.itemByName("M+ 1m\tregular");
      var myFontSize = 12; // Font Size Choice (pt)
      var myFontLeading = 15;

  // Set the font, font size and leading for the entire document
      b.textFont(myFont);
      b.textSize(myFontSize);
      b.textLeading(myFontLeading);

  // Add one page
      b.addPage();

  // Jump to Page 2
      b.page(2);

  // Import "Index" file
      var myIndex = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/0__indexOf_Semesterprojekt.txt");

  // Create "Index" textframe
      var myIndexTf = b.text(myIndex, myT, myL, myW, myH);

  // Add two pages
      b.addPage();
      b.addPage();

  // Import various files
      var myMaster = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/_MASTER.txt");

      var myKurs = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__1_a_TEXT_Beschreibung_VLV.txt");

      var myPlakat = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_a_TEXT_Konzept_Plakataufgabe.txt");

      var myKonzeptGrob = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_b_TEXT_Konzept_Grob_Semesterprojekt.txt");

      var myExpose = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_c_TEXT_Expose_Systembegriff.txt");

      var myKonzeptFein = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__2_d_TEXT_Konzept_Fein_Semesterprojekt.txt");

      var myQuotes = b.loadString("http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/1__3_*_QUOTES_CageFullerTypespaces.txt");

  // Create main textframes
      // Master.txt for testing purposes
      var myOldTf = b.text(myMaster, myT, myL, myW, myH);

      // Entire content below
      //var myOldTf = b.text(myKurs + myPlakat + myKonzeptGrob + myExpose + myKonzeptFein + myQuotes, myT, myL, myW, myH);
      var myStory = myOldTf.parentStory;

  // Create prop variables for paragraph styles
      var myDefaultProps = {
        fillColor: b.color(0, 0, 0),
        appliedFont: myFont,
        pointSize: myFontSize
      };
      var mySymbolProps = {
        fillColor: b.color(0, 0, 0),
        appliedFont: my2ndFont,
        pointSize: myFontSize
      };
      var myH1Props = {
        fillColor: b.color(0, 255, 0),
        appliedFont: myFont,
        pointSize: myFontSize
      };
      var myH2Props = {
      fillColor: b.color(0, 255, 255),
      appliedFont: myFont,
      pointSize: myFontSize
      };
      var myH3Props = {
      fillColor: b.color(0, 0, 255),
      appliedFont: myFont,
      pointSize: myFontSize
      };

  // Connect the prop variables to a paragraph style and save it in a variable
      var myDefaultStyle = b.paragraphStyle("¶ Default Text", myDefaultProps);
      var mySymbolStyle = b.characterStyle("*#- Symbols", mySymbolProps);
      var myH1Style = b.paragraphStyle("# h1", myH1Props);
      var myH2Style = b.paragraphStyle("## h2", myH2Props);
      var myH3Style = b.paragraphStyle("### h3", myH3Props);

      b.applyParagraphStyle(myStory, "¶ Default Text");

  // "Add more pages as long as the content frame is overflowing"
      while (myOldTf.overflows == true) {
        b.addPage();
        var myNewTf = b.text("", myT, myL, myW, myH);
        b.linkTextFrames(myOldTf, myNewTf);
        myOldTf = myNewTf;
      }

  // Jump to Page 4
      b.page(4);

  // Save paragraphs into variable
      var myParas = b.paragraphs(myStory);

  // Save characters into variable
      var myCharas = b.characters(myStory);

  // Create paragraph style group
      var myNewPSG = b.doc().paragraphStyleGroups.add();
      myNewPSG.name = "Bla";

  // Move paragraph styles in group
      myDefaultStyle.move(LocationOptions.AT_BEGINNING, myNewPSG);
      myH1Style.move(LocationOptions.AT_BEGINNING, myNewPSG);

  // "If the paragraph starts with X, apply paragraph style Y"
      for (var i = 0; i < myParas.length; i++) {
        if (b.startsWith(myParas[i].contents, "###") == true) {
        b.applyParagraphStyle(myParas[i], "### h3");
        continue;
        }
        if (b.startsWith(myParas[i].contents, "##") == true) {
          b.applyParagraphStyle(myParas[i], "## h2");
          continue;
        }
        if (b.startsWith(myParas[i].contents, "#") == true) {
          b.applyParagraphStyle(myParas[i], "# h1");
        }
      }


  // Apply character styles for symbols
      for (var i = 0; i < myCharas.length; i++) {
        if (myCharas[i].contents == "#") {
          b.applyCharacterStyle(myCharas[i], "*#- Symbols");
        }
      }

  // Remove empty line breaks
      app.findGrepPreferences=app.changeGrepPreferences=null;
      app.findGrepPreferences.findWhat="(?<=\r)\r+";
      app.changeGrepPreferences.changeTo="";
      app.activeDocument.changeGrep();

}
b.go();
